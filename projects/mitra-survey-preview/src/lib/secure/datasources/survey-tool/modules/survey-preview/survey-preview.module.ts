import { StickyHeaderComponent } from "./components/sticky-header/sticky-header.component";
import { NgModule, Injector, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuestionBlockComponent } from "./components/question-block/question-block.component";
import { QuestionDirective } from "./directives/question.directive";
import { BaseQuestionComponent } from "./components/questions-types/base-question/base-question.component";
import { MultipleChoicePreviewComponent } from "./components/questions-types/multiple-choice/multiple-choice.component";
import { ServiceLocator } from "./services/service-locator";
import { SurveyPreviewComponent } from "./survey-preview.component";
import { SurveyPreviewService } from "./services/survey-preview.service";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { OpenTextPreviewComponent } from "./components/questions-types/open-text/open-text.component";
import { OpenNumberPreviewComponent } from "./components/questions-types/open-number/open-number.component";
import { ScalePreviewComponent } from "./components/questions-types/scale/scale.component";
import { LikertGroupPreviewComponent } from "./components/questions-types/question-group/question-group.component";
import { MediaPreviewComponent } from "./components/questions-types/media/media.component";
import { ContactPreviewComponent } from "./components/questions-types/contact/contact.component";
import { NpsPreviewComponent } from "./components/questions-types/nps/nps.component";
import { WelcomeScreenComponent } from "./components/questions-types/welcome-screen/welcome-screen.component";
import { EndScreenComponent } from "./components/questions-types/end-screen/end-screen.component";
import { QuestionsPipe } from "./pipes/questions.pipe";
import { ReplaceQueryParamPipe } from "./pipes/replace-query-param.pipe";
import {
  HideDeletedOptionPipe,
  HideDeletedQuestionPipe
} from "./pipes/hideDeletedQuestion.pipe";
import { SurveyProgressComponent } from "./components/survey-progress/survey-progress.component";
import { SecondsToTimePipe } from "./pipes/seconde-to-time.pipe";
import { DatePreviewComponent } from "./components/questions-types/date-preview/date-preview.component";
import {
  MatMenuModule,
  MatListModule,
  MatProgressBarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatCheckboxModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { BypassSanitizerPipe } from "./pipes/bypass-sanitizer.pipe";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, ".json");
}
@NgModule({
  imports: [
    //BrowserAnimationsModule,
    CommonModule,
    //SharedModule,
    FontAwesomeModule,
    MatButtonToggleModule,
    MatInputModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressBarModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule,
    ScrollToModule.forRoot(),

    HttpClientModule
  ],
  declarations: [
    QuestionsPipe,
    BypassSanitizerPipe,
    QuestionDirective,
    QuestionBlockComponent,
    StickyHeaderComponent,
    BaseQuestionComponent,
    MultipleChoicePreviewComponent,
    SurveyPreviewComponent,
    OpenTextPreviewComponent,
    OpenNumberPreviewComponent,
    ScalePreviewComponent,
    LikertGroupPreviewComponent,
    MediaPreviewComponent,
    ContactPreviewComponent,
    NpsPreviewComponent,
    WelcomeScreenComponent,
    EndScreenComponent,
    ReplaceQueryParamPipe,
    HideDeletedQuestionPipe,
    HideDeletedOptionPipe,
    SurveyProgressComponent,
    SecondsToTimePipe,
    DatePreviewComponent
  ],
  bootstrap: [SurveyPreviewComponent],
  entryComponents: [
    BaseQuestionComponent,
    MultipleChoicePreviewComponent,
    OpenTextPreviewComponent,
    OpenNumberPreviewComponent,
    ScalePreviewComponent,
    LikertGroupPreviewComponent,
    MediaPreviewComponent,
    ContactPreviewComponent,
    NpsPreviewComponent,
    DatePreviewComponent
  ],
  exports: [SurveyPreviewComponent],
  providers: [SurveyPreviewService]
})
export class SurveyPreviewModule {
  constructor(private injector: Injector, library: FaIconLibrary) {
    ServiceLocator.injector = this.injector;
    library.addIconPacks(fal);
  }
}
