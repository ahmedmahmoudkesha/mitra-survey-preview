import { Question } from "./Question";
import { SurveySetting } from "./SurveySetting";
import { SurveyStyle } from "./SurveyStyle";
import { JumpLogic } from "./JumpLogic";
import { Message } from "./message";
import { SurveyReport } from "./SurveyReport";
import { QUESTION_TYPES_ARRAY } from "./question-types_array";

export class SurveyFileStandard {
  messages: Message;

  constructor() {
    this.survey_settings = new SurveySetting();
    this.survey_styles = new SurveyStyle();
    this.targetQuestions = [];
    this.isDeletionAllowed = true;
    this.logic_jumps = [];
    this.queryParams = new Map<string, string | string[]>();
    this.queryKeys = [];
    this.messages = new Message();
    this.survey_report = new SurveyReport();
  }

  _id: number = 0;
  url: string = "";
  title: string = "";
  randomized_question_order_survey = false;
  targetQuestions: Question[];
  survey_settings: SurveySetting;
  survey_styles: SurveyStyle;
  logic_jumps?: JumpLogic[];
  survey_report: SurveyReport;
  questionsUsed: number[];
  queryKeys: string[] = [];
  queryParams: Map<string, string | string[]>;
  isDeletionAllowed: boolean = true;
  seconds_counter: number = null;
  old_id?: number;

  static get_instance(surveyFile: SurveyFileStandard) {
    let instance = new SurveyFileStandard();
    for (let property in instance) {
      switch (property) {
        case "targetQuestions":
          instance.targetQuestions = surveyFile.targetQuestions.map(
            question => {
              return Question.get_instance(question, QUESTION_TYPES_ARRAY);
            }
          );
          break;
        default:
          if (surveyFile[property]) instance[property] = surveyFile[property];
      }
    }
    return instance;
  }
}
