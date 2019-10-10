import { QuestionTypesIdEnum } from "./../../../../../../core/models/survey/QuestionType";
import { JumpLogic } from "./../../../../../../core/models/survey/JumpLogic";
import { QuestionManager } from "../services/QuestionManager";

export class JumpLogicHelper {
  private static INSTANCE: JumpLogicHelper = null;
  private constructor(private questionManager: QuestionManager) {}
  public static getInstance(questionManager) {
    if (!JumpLogicHelper.INSTANCE) {
      JumpLogicHelper.INSTANCE = new JumpLogicHelper(questionManager);
    }
    return JumpLogicHelper.INSTANCE;
  }

  getJumpLogics() {
    return this.questionManager.__surveyPreviewService.surveyFile.logic_jumps;
  }

  getJumpLogicByFrontId(front_id) {
    return (
      this.getJumpLogics().filter(logic => logic.ref == front_id)[0] || null
    );
  }

  getNextQuestion(jumpLogic: JumpLogic, valueFn) {
    for (let i = 0; i < jumpLogic.conditions.length; i++) {
      let cond = jumpLogic.conditions[i];
      if (this.IsTrueValue(cond.vars)) {
        let next_front_id = cond.detail.ref;
        let dc = this.questionManager.getQuestionByFrontId(next_front_id, true);
        return dc;
      }
    }
    console.log(jumpLogic.default.ref);

    return this.questionManager.getQuestionByFrontId(
      jumpLogic.default.ref,
      true
    );
  }

  getFirstQuestionBasedOnHiddenFields() {
    let hidden_logic = this.getJumpLogicByFrontId("hidden_fields");
    if (hidden_logic && hidden_logic.conditions.length) {
      return this.getNextQuestion(hidden_logic, key => {
        return this.questionManager.__surveyPreviewService.surveyFile.queryParams.get(
          key
        );
      });
    }
    return null;
  }

  get_questions(): any[] {
    let final_questions = [];
    let questions = this.questionManager.makeQuestionsFlat();
    let index = 0;
    let question =
      this.getFirstQuestionBasedOnHiddenFields() || questions[index];
    while (question) {
      final_questions.push(question);
      let logic = this.getJumpLogicByFrontId(question.front_id);
      if (logic) {
        question = this.getNextQuestion(logic, key => {});
      } else {
        question = this.questionManager.getNextQuestionFromArray(
          questions,
          question.front_id
        );
      }
    }
    final_questions = this.modifyQuestionIndexes(final_questions);
    return final_questions;
  }

  getValue(key) {
    let value: any = "";
    value = this.questionManager.__surveyPreviewService.surveyFile.queryParams.get(
      key
    );
    if (!value) {
      value =
        this.questionManager.__surveyPreviewService.surveyAnswerForm.value[
          key
        ] &&
        this.questionManager.__surveyPreviewService.surveyAnswerForm.value[key][
          "0"
        ];
    }
    if (value && typeof value == "object" && value.length) {
      value = value
        .map(opt => (opt.front_id ? opt.front_id : opt.id))
        .join(",");
    }
    return value;
  }

  modifyQuestionIndexes(questions) {
    let current_parent = "";
    let seq = 0;
    let child_index = 0;
    let new_questions = questions.filter(
      q => q.question_type_id == QuestionTypesIdEnum.WELCOME_SCREEN
    );
    return new_questions.concat(
      questions
        .filter(q => q.question_type_id != QuestionTypesIdEnum.WELCOME_SCREEN)
        .map((q, i) => {
          if (!q.isNested) {
            q["seq"] = seq++ + 1;
          } else {
            q.first = false;
            if (q.parent != current_parent) {
              console.log("parent", q.title);
              q.first = true;
              child_index = 0;
              current_parent = q.parent;
              this.questionManager.__surveyPreviewService.group_questions.get(
                current_parent
              ).seq = seq + 1;
              seq++;
            }
            q["seq"] =
              this.questionManager.__surveyPreviewService.group_questions.get(
                current_parent
              ).seq +
              "." +
              (child_index + 1);
            child_index++;
          }
          return q;
        })
    );
  }

  static isUUID(s = "") {
    return s.match(
      "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
    );
  }

  IsTrueValue(vars: any): boolean {
    let result = false;
    let arr = [];
    if (vars && vars.length) {
      let evalString = "";
      vars.forEach((_var: any) => {
        let value = this.getValue(_var.field);
        if (_var.operator == "==") {
          evalString = `"${value}"${_var.operator}"${_var.value}"`;
        } else {
          evalString = `${value}${_var.operator}${_var.value}`;
        }
        arr.push({
          value: eval(evalString),
          rel: _var.rel
        });
      });
      result = arr.reduce((a, b) => {
        return { value: eval(`${a.value} ${a.rel} ${b.value}`), rel: b.rel };
      }).value;
    }
    return result;
  }
}
