import { EndScreenProperty } from "./../../../../../../../../core/models/survey/properties/questionTypesProperties/EndScreenProperty";
import { Question } from "./../../../../../../../../core/models/survey/Question";
import { Component, OnInit, Input } from "@angular/core";
import { BaseQuestionComponent } from "../base-question/base-question.component";
import { Message } from "projects/mitra-survey-preview/src/lib/core/models/survey/message";

@Component({
  selector: "mitra-end-screen",
  templateUrl: "./end-screen.component.html",
  styleUrls: ["./end-screen.component.scss"]
})
export class EndScreenComponent extends BaseQuestionComponent
  implements OnInit {
  @Input() question: Question;
  @Input() width: number;
  properties: EndScreenProperty;
  timeToRedirect: number;
  messages = new Message();

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.__surveyPreviewService.acceptAgreement = false;
    if (this.properties.redirect_url) {
      if (this.properties.time_for_redirection) {
        this.timeToRedirect = this.properties.time_for_redirection;
        this.countDown();
      } else {
        this.timeToRedirect = 5;
        this.countDown();
      }
    }
    this.__surveyPreviewService.surveyFile.messages = this.messages;
  }

  start_survey() {
    this.__surveyPreviewService.start_survey.emit(true);
  }

  countDown() {
    this.timeToRedirect--;
    if (this.timeToRedirect > 0) {
      setTimeout(() => this.countDown(), 1000);
    } else {
      if (!this.__surveyPreviewService.isBuildPreview) {
        window.location = this.properties.redirect_url;
      }
    }
  }
}
