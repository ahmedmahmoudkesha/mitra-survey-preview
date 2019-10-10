import { SurveyPreviewModule } from "mitra-survey-preview";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SurveyPreviewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
