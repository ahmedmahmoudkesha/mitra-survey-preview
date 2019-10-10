import { QUESTION_TYPES_ARRAY } from "./../../../../../../core/models/survey/question-types_array";
import { Question } from "./../../../../../../core/models/survey/Question";
import { FormGroup } from "@angular/forms";
import {
  ComponentFactoryResolver,
  OnInit,
  Input,
  Directive,
  ViewContainerRef
} from "@angular/core";
//import { SurveyBuildService } from "../../survey-build/services/survey-build.service";
import * as _ from "lodash";
import { SurveyFileStandard } from "../../../../../../core/models/survey/SurveyFile";

@Directive({
  selector: "[questionDirective]"
})
export class QuestionDirective implements OnInit {
  @Input() question: Question;
  @Input() index: number;
  @Input() form: FormGroup;
  @Input() surveyFile: SurveyFileStandard;
  @Input() isFocused = false;
  /*public __surveyBuildService: SurveyBuildService = ServiceLocator.injector.get(
    SurveyBuildService
  );*/

  component;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  questionInit(type = this.question.question_type_id) {
    const component = this.getComponentByType(type);
    if (component) {
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.container.clear();
      this.component = this.container.createComponent(factory);
      this.component.instance.question = this.question;
      this.component.instance.form = this.form;
      this.component.instance.index = this.index;
      this.component.instance.surveyFile = this.surveyFile;
      this.component.instance.isFocused = this.isFocused;
    }
  }

  ngOnInit() {
    this.questionInit();
    /*this.__surveyBuildService.onChangeQuestionType.subscribe(
      (typeId: QuestionTypesIdEnum) => {
        const selectedQuestionId = _.get(
          this,
          "__surveyBuildService.selected_settings_question.front_id"
        );
        const currentQuestionId = _.get(this, "question.front_id");
        if (selectedQuestionId == currentQuestionId) {
          this.questionInit(typeId);
          const newType = QUESTION_TYPES_ARRAY.find(qType => {
            return qType.id === typeId;
          });
          this.question.question_type = newType;
          this.question.question_type_id = typeId;
        }
      }
    );*/
  }

  getComponentByType(typeId) {
    const questionType = QUESTION_TYPES_ARRAY.filter(
      qType => qType.id == typeId
    ).shift();
    if (questionType) {
      return questionType.component["preview"];
    } else {
      return null;
    }
  }
}
