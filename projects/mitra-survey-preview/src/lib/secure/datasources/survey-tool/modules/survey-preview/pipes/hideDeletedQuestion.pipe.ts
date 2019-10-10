import { Question } from "./../../../../../../core/models/survey/Question";
import { Pipe, PipeTransform } from "@angular/core";
import { QuestionOption } from "../../../../../../core/models/survey/QuestionOption";
import { Label } from "../../../../../../core/models/survey/Label";

@Pipe({
  name: "hideDeletedOption"
})
export class HideDeletedOptionPipe implements PipeTransform {
  transform(
    options: Array<QuestionOption> | Array<Label>
  ): Array<QuestionOption> {
    if (options) {
      return (options as QuestionOption[]).filter(item => !item.deleted_at);
    }
    return [];
  }
}

@Pipe({
  name: "hideDeletedQuestion"
})
export class HideDeletedQuestionPipe implements PipeTransform {
  transform(questions: Array<Question>): Array<Question> {
    if (questions) {
      return questions.filter(item => !item.deleted_at);
    }
    return [];
  }
}
