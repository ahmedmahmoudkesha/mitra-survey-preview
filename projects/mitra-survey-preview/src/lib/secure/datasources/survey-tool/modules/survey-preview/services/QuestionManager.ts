import { QuestionTypesIdEnum } from "./../../../../../../core/models/survey/QuestionType";
import {
  ScrollToService,
  ScrollToConfigOptions
} from "@nicky-lenaers/ngx-scroll-to";
import { ServiceLocator } from "./service-locator";
import { SurveyPreviewService } from "./survey-preview.service";
import { BreakpointObserver } from "@angular/cdk/layout";
import { JumpLogicHelper } from "../helpers/jump-logic.helper";
import { Question } from "../../../../../../core/models/survey/Question";
import { QuestionGroupProperty } from "../../../../../../core/models/survey/properties/questionTypesProperties/QuestionGroupProperty";
import { ArrayHelper } from "../helpers/arrayShuffle.helper";

export class QuestionManager {
  public questions;
  public focused_question: Question = null;
  private static INSTANCE: QuestionManager = null;
  public _scrollToService: ScrollToService = null;
  public __surveyPreviewService: SurveyPreviewService = null;
  public show_submit: boolean = false;
  private breakpointObserver: BreakpointObserver = null;
  public isSmallScreen: boolean;
  public jumpLogicHelper: JumpLogicHelper;

  private constructor() {
    //QuestionManager.getInstance().focused_question
    this._scrollToService = ServiceLocator.injector.get(ScrollToService);
    this.jumpLogicHelper = JumpLogicHelper.getInstance(this);
    this.breakpointObserver = ServiceLocator.injector.get(BreakpointObserver);
    this.__surveyPreviewService = ServiceLocator.injector.get(
      SurveyPreviewService
    );
    this.breakpointObserver
      .observe(["(min-width: 1px) and (max-width: 992px)"])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }
  public static getInstance() {
    if (!QuestionManager.INSTANCE) {
      QuestionManager.INSTANCE = new QuestionManager();
    }
    return QuestionManager.INSTANCE;
  }

  init(jump_logic_flag: Boolean = false) {
    this.focused_question = null;
    this.__surveyPreviewService.surveyAnswerForm.reset();
    if (jump_logic_flag) {
      this.questions = this.jumpLogicHelper.get_questions();
    } else {
      this.questions = this.makeQuestionsFlat();
    }
    this.focused_question = this.questions[0];
    this.goToQuestion(this.focused_question.front_id);
    setTimeout(() => {
      this.__surveyPreviewService.calculateProgress.emit(true);
    }, 0);
  }

  setTheme(_elementRef) {
    let fontFamily = this.__surveyPreviewService.surveyFile.survey_styles.font;
    let fontUri = `https://fonts.googleapis.com/css?family=${fontFamily.replace(
      " ",
      "+"
    )}`;
    let link = document.createElement("link");
    link.id = "MitraFontlink";
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", fontUri);
    document.head.appendChild(link);
    const theme = {
      "--survey-button-color": this.__surveyPreviewService.surveyFile
        .survey_styles.button_color,
      "--survey-answer-color": this.__surveyPreviewService.surveyFile
        .survey_styles.answer_text_color,
      "--preview-fonts": this.__surveyPreviewService.surveyFile.survey_styles
        .font
    };
    for (const key in theme) {
      if (theme.hasOwnProperty(key)) {
        _elementRef.nativeElement.style.setProperty(key, theme[key]);
      }
    }
  }

  // GO TO QUESTION ...
  goToQuestion(target, time = 450) {
    if (target != "submit") this.makeQuestionInputFocused(target, time);
    setTimeout(() => {
      const config: ScrollToConfigOptions = {
        //container: "survey-preview",
        target: `block-${target}`,
        duration: time,
        easing: "easeInCubic",
        offset: this.isSmallScreen ? -150 : -300
      };
      this._scrollToService.scrollTo(config).subscribe(value => {}, err => {});
    }, 0);
  }

  getQuestionByFrontId(front_id, full = false) {
    return (
      (full ? this.makeQuestionsFlat() : this.questions).find(
        q => q.front_id == front_id
      ) || this.questions[0]
    );
  }

  getQuestionIndex(front_id) {
    return this.questions.findIndex(q => q.front_id == front_id);
  }

  goToNextQuestion(front_id, jump_logic: Boolean = false) {
    if (jump_logic) {
      this.questions = this.jumpLogicHelper.get_questions();
    }
    this.show_submit = false;
    let questionIndex = this.getQuestionIndex(front_id);
    let question = this.questions[questionIndex + 1];
    if (question) {
      if (question.question_type_id == QuestionTypesIdEnum.END_SCREEN)
        this.__surveyPreviewService.onSubmit.emit(true);
      this.goToQuestion(question.front_id);
    } else {
      this.show_submit = true;
      this.goToQuestion("submit");
    }
    this.__surveyPreviewService.calculateProgress.emit(true);
  }

  makeQuestionInputFocused(front_id, time = 450) {
    this.focused_question = this.getQuestionByFrontId(front_id);
    if (this.focused_question)
      setTimeout(
        () =>
          this.__surveyPreviewService.changeFocusedQuestion.emit({
            front_id: this.focused_question.front_id
          }),
        0
      );
    /*setTimeout(() => {
            let element = document.getElementById(`${front_id}-input`);
            if (element) element.focus();
        }, time);*/
  }

  getNextQuestionFromArray(arr: any[], front_id) {
    let index = arr.findIndex(q => q.front_id == front_id);
    if (index >= 0) {
      return arr[++index];
    }
    return null;
  }

  calculateProgress() {
    let output: any = {
      answer_questions: [],
      total_questions: 0,
      total_anwser_questions: 0,
      complete: 0
    };
    let value = Object.values(
      this.__surveyPreviewService.surveyAnswerForm.value
    );
    output.total_questions = value.length;
    output.answer_questions = value.filter(q => {
      return (
        (typeof q["0"] == "number" && q["0"]) ||
        (typeof q["0"] !== "number" && q["0"] && q["0"].length)
      );
    });
    output.total_anwser_questions = output.answer_questions.length;

    output.complete = Math.ceil(
      (+output.total_anwser_questions / +output.total_questions) * 100
    );
    return output;
  }

  makeQuestionsFlat() {
    let questions = this.__surveyPreviewService.surveyFile.targetQuestions.filter(
      q => q.question_type_id == QuestionTypesIdEnum.WELCOME_SCREEN
    );
    this.__surveyPreviewService.surveyFile.targetQuestions
      .filter(q => q.question_type_id != QuestionTypesIdEnum.WELCOME_SCREEN)
      .forEach((q, i) => {
        if (
          q.question_type_id == QuestionTypesIdEnum.QUESTION_GROUP ||
          q.question_type_id == QuestionTypesIdEnum.SCALE_MATRIX
        ) {
          let seq = i + 1;
          q["seq"] = seq;
          questions.push(q);
          this.__surveyPreviewService.group_questions.set(q.front_id, {
            question: q,
            seq
          });
          if (q.properties && q.properties["nestedQuestions"]) {
            const nestedQuestion = (q.properties as QuestionGroupProperty)
              .randomized_question_order
              ? ArrayHelper.shuffle(q.properties["nestedQuestions"])
              : q.properties["nestedQuestions"];
            nestedQuestion.forEach((element, c) => {
              if (c == 0) element.first = true;
              else element.first = false;
              if (c == q.properties["nestedQuestions"].length - 1) {
                element.last = true;
              } else {
                element.last = false;
              }
              element.isNested = true;
              element.parent = JSON.parse(JSON.stringify(q));
              element.seq = seq + "." + (c + 1);
              questions.push(element);
            });
          }
        } else if (q.question_type_id == QuestionTypesIdEnum.WELCOME_SCREEN) {
          questions.push(q);
        } else {
          q["seq"] = i + 1;
          questions.push(q);
        }
      });
    return questions;
  }
}
