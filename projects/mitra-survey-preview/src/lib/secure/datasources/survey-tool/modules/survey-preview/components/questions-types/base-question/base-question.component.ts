import { Question } from "./../../../../../../../../core/models/survey/Question";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { SurveyPreviewService } from "../../../services/survey-preview.service";
import { FormBuilder, FormGroup, ValidatorFn } from "@angular/forms";
import { ValidationHelper } from "../../../helpers/validation.helper";
import { BaseProperty } from "../../../../../../../../core/models/survey/properties/BaseProperty";
import { ServiceLocator } from "../../../services/service-locator";

@Component({
  selector: "mitra-base-question",
  templateUrl: "./base-question.component.html",
  styleUrls: ["./base-question.component.scss"]
})
export class BaseQuestionComponent implements OnInit, OnDestroy {
  public question: Question;
  public isFocused: boolean;
  public form: FormGroup;
  public keys = Object.keys;
  public properties: BaseProperty;
  public lang_code;

  public index: number;
  public __surveyPreviewService: SurveyPreviewService = ServiceLocator.injector.get(
    SurveyPreviewService
  );
  public validators: ValidatorFn[];
  public __formBuilder: FormBuilder = ServiceLocator.injector.get(FormBuilder);
  public questionForm: FormGroup;

  constructor() {}

  ngOnInit() {
    // This Line .. Don't touch....
    this.properties = this.question.properties;
    this.setQuestionValidators();
    this.lang_code = this.__surveyPreviewService.surveyFile.survey_settings.selectedLanguage.code;
    this.__surveyPreviewService.onChanges.subscribe(() => {
      this.properties = this.question.properties;
      this.setQuestionValidators();
    });
  }

  ngOnDestroy(): void {}

  protected setQuestionValidators() {
    this.validators = ValidationHelper.getValidationFromProperties(
      this.question
    );
    if (this.form) {
      let controls = this.form.controls;

      for (let control in controls) {
        controls[control].setValidators(this.validators);
        controls[control].updateValueAndValidity();
        controls[control].markAsTouched();
      }
    }
  }
}
