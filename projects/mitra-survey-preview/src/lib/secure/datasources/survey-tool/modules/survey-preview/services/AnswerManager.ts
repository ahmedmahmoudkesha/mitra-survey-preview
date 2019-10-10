import { QuestionTypesIdEnum } from "./../../../../../../core/models/survey/QuestionType";
import { QuestionManager } from "./QuestionManager";

export class AnswerManager {
  private static INSTANCE: AnswerManager = null;
  public questionManager: QuestionManager = null;
  private constructor() {
    this.questionManager = QuestionManager.getInstance();
  }
  public static getInstance() {
    if (!AnswerManager.INSTANCE) {
      AnswerManager.INSTANCE = new AnswerManager();
    }
    return AnswerManager.INSTANCE;
  }

  get_answers() {
    let values = this.questionManager.__surveyPreviewService.surveyAnswerForm
      .value;
    let output: any = {
      language: this.questionManager.__surveyPreviewService.surveyFile
        .survey_settings.selectedLanguage.code,
      targetQuestions: []
    };

    for (let id in values) {
      let question = this.questionManager.getQuestionByFrontId(id);
      let answerObject: any = {
        id,
        question_type_id: question.question_type_id
      };
      if (question.parent) answerObject.parent = question.parent;
      this.set_answer_value(question, values[id], answerObject);
      output.targetQuestions.push(answerObject);
    }
    let childAnswers = output.targetQuestions.filter(q => q.parent);
    output.targetQuestions = output.targetQuestions.filter(q => !q.parent);
    this.modifyGroupQuestion(output.targetQuestions, childAnswers);
    return output;
  }

  set_answer_value(question, value, answerObject) {
    switch (question.question_type_id) {
      case QuestionTypesIdEnum.MULT_CHOICE:
      case QuestionTypesIdEnum.SINGLE_CHOICE:
        answerObject.answer = value["0"] && value["0"].map(i => i.front_id);
        break;
      case QuestionTypesIdEnum.CONTACT:
        for (let prop in value) {
          if (value[prop]) answerObject[prop] = value[prop];
        }
      case QuestionTypesIdEnum.OPEN_TEXT:
        answerObject.answer = [];
        for (let prop in value) {
          answerObject.answer.push({
            answer: value[prop],
            sort_order: prop
          });
        }
      default:
        answerObject.answer = value["0"];
    }
  }

  modifyGroupQuestion(targetQuestions: any[], childAnswers: any[]) {
    if (!childAnswers.length) return;
    let parents: Map<string, any[]> = new Map();
    childAnswers.forEach(answer => {
      if (!parents.has(answer.parent)) {
        parents.set(answer.parent, []);
      }
      parents.get(answer.parent).push(answer);
    });
    for (let key of Array.from(parents.keys())) {
      targetQuestions.push({
        id: key,
        question_type_id: 10,
        nestedQuestions: parents.get(key)
      });
    }
  }
}
