import { SurveyFileStandard } from "./../../../../../core/models/survey/SurveyFile";
import { AnswerManager } from "./services/AnswerManager";
import { JumpLogicHelper } from "./helpers/jump-logic.helper";
import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges,
  ElementRef,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";

import { FormGroup, FormBuilder } from "@angular/forms";
import { QuestionManager } from "./services/QuestionManager";
import { Language } from "../../../../../core/models/survey/SurveySetting";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "mitra-survey-preview",
  templateUrl: "./survey-preview.component.html",
  styleUrls: ["./survey-preview.component.scss"]
})
export class SurveyPreviewComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() surveyFile: SurveyFileStandard;
  @Input() buildPreview = false;
  @Input() width: number;
  @Input() queryParamMap: Map<string, string | string[]>;
  @Output("onSubmit") onSubmit: EventEmitter<any> = new EventEmitter();
  jump_logic_flag: Boolean = false;
  public surveyAnswerForm: FormGroup;
  questionManager: QuestionManager;
  counter = 0;
  intervalId: any = null;

  constructor(
    private _formBuilder: FormBuilder,
    private _elementRef: ElementRef,
    private translateService: TranslateService
  ) {
    this.questionManager = QuestionManager.getInstance();
  }

  ngOnInit() {
    if (this.surveyFile) {
      this.questionManager.__surveyPreviewService.isBuildPreview = this.buildPreview;
      this.questionManager.__surveyPreviewService.changeActiveQuestion.subscribe(
        ({ front_id, parentQuestion }) => {
          if (JumpLogicHelper.isUUID(String(front_id))) {
            if (parentQuestion) {
              let question = this.questionManager.questions.find(
                q =>
                  (q.parent == front_id && q.first) ||
                  q.front_id == parentQuestion
              );
              if (question) front_id = question.front_id;
            }
            console.log(front_id);
            this.questionManager.goToQuestion(front_id);
          } else {
            this.questionManager.__surveyPreviewService.changeFocusedQuestion.emit(
              { front_id }
            );
          }
        }
      );
      this.surveyAnswerForm = this._formBuilder.group({});
      this.questionManager.__surveyPreviewService.surveyAnswerForm = this.surveyAnswerForm;
      this.questionManager.__surveyPreviewService.next.subscribe(front_id => {
        this.questionManager.goToNextQuestion(front_id, this.jump_logic_flag);
      });
      this.questionManager.__surveyPreviewService.start_survey.subscribe(_ =>
        this.questionManager.init(this.jump_logic_flag)
      );
      this.questionManager.__surveyPreviewService.onSubmit.subscribe(_ =>
        this.submitForm()
      );
      this.questionManager.__surveyPreviewService.run_timer.subscribe(bool =>
        this.runTimer(bool)
      );
      this.questionManager.init();
    }
  }

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.surveyFile) {
      this.questionManager.__surveyPreviewService.surveyFile = this.surveyFile;
      this.questionManager.__surveyPreviewService.surveyFile.queryParams = this.queryParamMap;
      setTimeout(() => {
        this.questionManager.setTheme(this._elementRef);
      }, 0);
    }
  }

  ngAfterViewInit() {
    this.questionManager.__surveyPreviewService.onChanges.subscribe(
      ({ action }) => {
        this.questionManager.setTheme(this._elementRef);
        if (action) this.questionManager.init(this.jump_logic_flag);
      }
    );
    /*window.addEventListener("keyup", e => {
            if (e.keyCode == 13 && this.questionManager.focused_question) {
                this.questionManager.__surveyPreviewService.next.emit(
                    this.questionManager.focused_question.front_id
                );
            }
        });*/
  }

  submitForm() {
    this.onSubmit.emit(AnswerManager.getInstance().get_answers());
    this.questionManager.__surveyPreviewService.surveyFile.seconds_counter = this.counter;
    this.questionManager.__surveyPreviewService.calculateProgress.emit(true);
  }

  reset() {
    this.surveyAnswerForm.reset();
    this.questionManager.__surveyPreviewService.calculateProgress.emit(true);
  }
  jump_logic_toggel() {
    this.jump_logic_flag = !this.jump_logic_flag;
    this.questionManager.init(this.jump_logic_flag);
  }

  changeLanguage(language: Language) {
    this.questionManager.__surveyPreviewService.surveyFile.survey_settings.selectedLanguage = language;
    this.questionManager.__surveyPreviewService.onChanges.emit(true);
    this.translateService.use(language.code);
  }

  runTimer(bool: boolean) {
    if (bool && !this.intervalId) {
      this.counter = 0;
      this.intervalId = setInterval(() => {
        this.counter++;
      }, 1000);
    } else if (!bool && this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
