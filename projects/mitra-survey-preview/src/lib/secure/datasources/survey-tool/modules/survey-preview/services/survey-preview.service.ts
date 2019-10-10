import { SurveyFileStandard } from "../../../../../../core/models/survey/SurveyFile";
import { Wording } from "../../../../../../core/models/survey/Wording";
import { FormGroup } from "@angular/forms";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SurveyPreviewService {
  public isBuildPreview: boolean;
  public acceptAgreement = true;
  public surveyStarted = false;
  public surveyFile: SurveyFileStandard;
  public changeActiveQuestion: EventEmitter<any> = new EventEmitter();
  public onSubmit: EventEmitter<any> = new EventEmitter();

  public calculateProgress: EventEmitter<Boolean> = new EventEmitter();
  public start_survey: EventEmitter<Boolean> = new EventEmitter();
  public run_timer: EventEmitter<Boolean> = new EventEmitter();

  public changeFocusedQuestion: EventEmitter<any> = new EventEmitter();
  public changeActiveQuestionInBuilder: EventEmitter<
    number
  > = new EventEmitter();
  public onChanges: EventEmitter<any> = new EventEmitter();

  getCurrentWording(wordings: Wording[]): Wording {
    if (!wordings || !wordings.find) {
      return { text: "", lang_code: null };
    }
    const word = wordings.find(
      word =>
        word.lang_code === this.surveyFile.survey_settings.selectedLanguage.code
    );
    if (!word) {
      let newWording = {
        lang_code: this.surveyFile.survey_settings.selectedLanguage.code,
        text: "",
        id: null,
        front_id: null
      };
      wordings.push(newWording);
      return newWording;
    }
    return word;
  }

  getLetterByIndex(index) {
    return String.fromCharCode(65 + index);
  }

  public next: EventEmitter<any> = new EventEmitter();
  public surveyAnswerForm: FormGroup;
  public group_questions: Map<any, any> = new Map();
  public current_index = 0;
}
