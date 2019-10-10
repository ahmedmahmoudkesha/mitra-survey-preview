import { QuestionTypesIdEnum } from "./../../../../../../core/models/survey/QuestionType";
import { Question } from "./../../../../../../core/models/survey/Question";
import { Pipe, PipeTransform } from "@angular/core";
import { SurveyPreviewService } from "../services/survey-preview.service";

@Pipe({
  name: "questions",
  pure: true
})
export class QuestionsPipe implements PipeTransform {
  constructor(public __surveyPreviewService: SurveyPreviewService) {}
  transform(questions: Array<Question>, type?: string): Array<any> {
    /*Array.from(this.__surveyPreviewService.group_questions.keys()).forEach(
            key => {
                this.__surveyPreviewService.group_questions.get(key).index = 0;
            }
        );*/
    let arr = [];
    if (questions) {
      switch (type) {
        case "welcome":
          arr = questions.filter(
            q => q.question_type_id == QuestionTypesIdEnum.WELCOME_SCREEN
          );
          break;
        case "end":
          arr = questions.filter(
            q => q.question_type_id == QuestionTypesIdEnum.END_SCREEN
          );
          break;
        default:
          arr = questions.filter(
            q => q.question_type_id != 12 && q.question_type_id != 13
          );
      }
    }
    return arr;
  }
}
