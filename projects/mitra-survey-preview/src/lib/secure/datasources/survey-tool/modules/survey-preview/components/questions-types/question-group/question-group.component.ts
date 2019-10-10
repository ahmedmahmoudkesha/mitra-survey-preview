import { QuestionTypesIdEnum } from "./../../../../../../../../core/models/survey/QuestionType";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { BaseQuestionComponent } from "../base-question/base-question.component";
import { SurveyFileStandard } from "../../../../../../../../core/models/survey/SurveyFile";
import { ScaleMatrixProperty } from "../../../../../../../../core/models/survey/properties/questionTypesProperties/ScaleMatrixProperty";
import { QuestionGroupProperty } from "../../../../../../../../core/models/survey/properties/questionTypesProperties/QuestionGroupProperty";

import * as _ from "lodash";

@Component({
  selector: "mitra-likert-group-preview",
  templateUrl: "./question-group.component.html",
  styleUrls: ["./question-group.component.scss"]
})
export class LikertGroupPreviewComponent extends BaseQuestionComponent
  implements OnInit, OnDestroy {
  surveyFile: SurveyFileStandard;
  currentQuestionIndex = 0;

  isScaleMatrix = false;
  properties: QuestionGroupProperty | ScaleMatrixProperty;
  _ = _.get;
  constructor() {
    super();
  }

  ngOnInit() {
    this.isScaleMatrix =
      this.question.question_type_id === QuestionTypesIdEnum.SCALE_MATRIX;
    this.properties = this.question.properties as QuestionGroupProperty;
    this.surveyFile = this.__surveyPreviewService.surveyFile;
  }

  ngOnDestroy(): void {}
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
}
