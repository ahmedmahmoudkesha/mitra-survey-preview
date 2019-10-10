import { Question } from "./../../../../../../../core/models/survey/Question";
import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges
} from "@angular/core";
import * as _ from "lodash";
import { SurveyPreviewService } from "../../services/survey-preview.service";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { QuestionTypesIdEnum } from "../../../../../../../core/models/survey/QuestionType";
import { Message } from "../../../../../../../core/models/survey/message";

@Component({
  selector: "mitra-question-block",
  templateUrl: "./question-block.component.html",
  styleUrls: ["./question-block.component.scss"]
})
export class QuestionBlockComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input("question") question: Question;
  @Input("focused_question") focused_question: Question;
  @Input("questions") questions: Question[];
  @Input("parentQuestion") parentQuestion: Question;
  @Input("form") form: FormGroup;
  @Input("isLast") isLast: Boolean;
  @Input() isNested = false;
  @Input() displayIndex: any;
  controlGroup: FormGroup;
  subscriber: Subscription = new Subscription();
  messages = new Message();
  types = QuestionTypesIdEnum;
  widthSticky: number;

  timeout;
  _ = _.get;

  nestedMeta: any = {};
  current_index: number;

  constructor(
    public __surveyPreviewService: SurveyPreviewService,
    public __formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.question["isNested"]) {
      this.nestedMeta = this.__surveyPreviewService.group_questions.get(
        this.question["parent"]
      );
    }
    this.controlGroup = this.__formBuilder.group({
      "0": new FormControl()
    });
    this.subscriber.add(
      this.controlGroup.valueChanges.subscribe(values => {
        if (this.controlGroup.valid && values["0"]) {
          this.__surveyPreviewService.calculateProgress.emit(true);
          /*this.debounce(() => {
                        const element = document.getElementById(
                            this.question.front_id + "-next"
                        );
                        if (element) {
                            element.focus();
                            // this.next();
                        }
                    }, 500)();*/
        }
      })
    );
    this.form &&
      this.form.addControl(this.question.front_id + "", this.controlGroup);
    this.messages = this.__surveyPreviewService.surveyFile.messages;
  }

  ngOnDestroy(): void {
    this.form.removeControl(this.question.front_id + "");
    this.subscriber.unsubscribe();
    document.activeElement["blur"]();
  }

  getQuestionWording(question) {
    return question.wordings.filter(
      word =>
        word.lang_code ===
        this._(
          this.__surveyPreviewService,
          "surveyFile.survey_settings.selectedLanguage.code"
        )
    )[0];
  }

  ngAfterViewInit() {
    if (this.types.QUESTION_GROUP === this.question.question_type_id) {
      this.getHeightOfQuestionGroupChildren();
      this.getWidthStickyBox();
    }
  }

  ngOnChanges() {
    if (this.question["isNested"]) {
      this.nestedMeta = this.__surveyPreviewService.group_questions.get(
        this.question["parent"]
      );
    }

    if (this.types.QUESTION_GROUP === this.question.question_type_id) {
      this.getHeightOfQuestionGroupChildren();
    }
  }

  next() {
    this.__surveyPreviewService.next.emit(this.question.front_id);
  }

  debounce(func, wait) {
    return () => {
      let context = this;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        this.timeout = null;
        func.apply(context);
      }, wait);
    };
  }

  checkAdditionalInfoPicture(question) {
    let result = false;
    if (
      question &&
      question.properties &&
      question.properties["additional_info_picture_url"]
    ) {
      result = true;
    }
    return result;
  }

  checkNestedAdditionalInfoPicture(nestedMeta) {
    let result = false;
    if (
      nestedMeta &&
      nestedMeta.question &&
      nestedMeta.question.properties["additional_info_picture_url"]
    ) {
      result = true;
    }
    return result;
  }

  getNestedCssClass() {
    let cssClass = "";
    if (this.question.question_type_id === QuestionTypesIdEnum.QUESTION_GROUP) {
      cssClass = "question-group";
    } else if (
      this.question.question_type_id === QuestionTypesIdEnum.SCALE_MATRIX
    ) {
      cssClass = "scale-matrix";
    }

    if (
      this.question.hasOwnProperty("parent") &&
      this.question.parent.question_type_id ===
        QuestionTypesIdEnum.QUESTION_GROUP
    ) {
      cssClass = "question-group-child";
    } else if (
      this.question.hasOwnProperty("parent") &&
      this.question.parent.question_type_id === QuestionTypesIdEnum.SCALE_MATRIX
    ) {
      cssClass = "scale-matrix-child";
    }

    if (this.question.last) {
      cssClass = cssClass + " last";
    }

    return cssClass;
  }

  getWidthStickyBox() {
    setTimeout(() => {
      this.widthSticky = document.getElementById(
        "block-" + this.question.front_id
      ).offsetWidth;
      console.log(this.widthSticky);
    }, 1000);
  }

  getHeightOfQuestionGroupChildren() {
    setTimeout(() => {
      let height = document.getElementById("block-" + this.question.front_id)
        .clientHeight;
      this.question.properties["nestedQuestions"].forEach(nq => {
        height += document.getElementById("block-" + nq.front_id).clientHeight;
      });
      document
        .getElementById("parent-" + this.question.front_id)
        .setAttribute("style", "height:" + height + "px");
    }, 1000);
  }
}
