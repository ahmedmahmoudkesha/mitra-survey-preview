import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Question } from "../../../../../../../../core/models/survey/Question";
import { SurveyPreviewService } from "../../../services/survey-preview.service";
import { WelcomeScreenProperty } from "../../../../../../../../core/models/survey/properties/questionTypesProperties/WelcomeScreenProperty";
import { BaseQuestionComponent } from "../base-question/base-question.component";
import { Message } from "projects/mitra-survey-preview/src/lib/core/models/survey/message";

@Component({
  selector: "mitra-welcome-screen",
  templateUrl: "./welcome-screen.component.html",
  styleUrls: ["./welcome-screen.component.scss"]
})
export class WelcomeScreenComponent extends BaseQuestionComponent
  implements OnInit {
  @Input() question: Question;
  @Input() width: number;
  properties: WelcomeScreenProperty;
  messages = new Message();

  constructor(
    public __surveyPreviewService: SurveyPreviewService,
    public cdRef: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.properties.has_agreement) {
      this.__surveyPreviewService.acceptAgreement = false;
    }
    this.messages = this.__surveyPreviewService.surveyFile.messages;
  }

  focusOnButton(event) {
    if (event === true) {
      setTimeout(() => {
        const continueField = document.getElementById("continue-button");
        //continueField.focus();
        //this.cdRef.detectChanges();
      }, 100);
    }
  }

  start_survey() {
    this.__surveyPreviewService.surveyStarted = true;
    this.__surveyPreviewService.next.emit(this.question.front_id);
    this.__surveyPreviewService.run_timer.emit(true);
  }
}
