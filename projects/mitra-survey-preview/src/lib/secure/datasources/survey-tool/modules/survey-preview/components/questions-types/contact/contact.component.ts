import { ContactProperty } from "./../../../../../../../../core/models/survey/properties/questionTypesProperties/ContactProperty";
import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { BaseQuestionComponent } from "../base-question/base-question.component";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Message } from "./../../../../../../../../core/models/survey/message";

@Component({
  selector: "mitra-contact-preview",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactPreviewComponent extends BaseQuestionComponent
  implements OnInit, OnDestroy {
  properties: ContactProperty;
  messages = new Message();

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.init();
    this.__surveyPreviewService.surveyFile.messages = this.messages;
    this.__surveyPreviewService.onChanges.subscribe(() => {
      this.init();
    });
  }

  ngOnDestroy(): void {}

  init() {
    for (let i in this.form.controls) {
      this.form.removeControl(i);
    }
    for (let property in this.properties) {
      if (this.properties[property] && property != "required") {
        if (property === "email") {
          this.form.addControl(property, new FormControl("", Validators.email));
        } else if (property === "phone_number") {
          this.form.addControl(
            property,
            new FormControl("", Validators.pattern("^[0-9]*$"))
          );
        } else {
          this.form.addControl(property, new FormControl());
        }
      }
    }
  }
}
