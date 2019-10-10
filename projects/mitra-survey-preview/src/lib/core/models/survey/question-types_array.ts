import { DatePreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/date-preview/date-preview.component";
import {
  QuestionTypesIdEnum,
  QuestionType
} from "../../../core/models/survey/QuestionType";
import { MultipleChoicePreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/multiple-choice/multiple-choice.component";
import { NpsPreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/nps/nps.component";
import { LikertGroupPreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/question-group/question-group.component";
import { MediaPreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/media/media.component";
import { ContactPreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/contact/contact.component";
import { ScalePreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/scale/scale.component";
import { OpenNumberPreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/open-number/open-number.component";
import { OpenTextPreviewComponent } from "../../../secure/datasources/survey-tool/modules/survey-preview/components/questions-types/open-text/open-text.component";

export const QUESTION_TYPES_ARRAY: Array<QuestionType> = [
  {
    title: "Single Choice",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-tasklist-96.png",
    description: "Questionee can only select one option",
    id: QuestionTypesIdEnum.SINGLE_CHOICE,
    component: {
      preview: MultipleChoicePreviewComponent
    },
    settingsType: "SINGLE_CHOICE_SETTINGS",
    color: "#B3DFEF"
  },
  {
    title: "Multiple Choice",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-to-do-96.png",
    description: "Questionee can select multiple options",
    id: QuestionTypesIdEnum.MULT_CHOICE,
    component: {
      preview: MultipleChoicePreviewComponent
    },
    settingsType: "MULTIPLE_CHOICE_SETTINGS",
    color: "#F7CCAC"
  },
  {
    title: "Open Text",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/open%20text.png",
    description: "Questionee can answer with a text",
    id: QuestionTypesIdEnum.OPEN_TEXT,
    component: {
      preview: OpenTextPreviewComponent
    },
    settingsType: "OPEN_TEXT_SETTINGS",
    color: "#C3D9FC"
  },
  {
    title: "Open Number",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/open%20number.png",
    description: "Questionee can only answer with a number",
    id: QuestionTypesIdEnum.OPEN_NUMBER,
    component: {
      preview: OpenNumberPreviewComponent
    },
    settingsType: "OPEN_NUMBER_SETTINGS",
    color: "#CDF2B2"
  },
  {
    title: "Date",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/date.svg",
    description: "Questionee can answer choosing date & time",
    id: QuestionTypesIdEnum.DATE,
    component: {
      preview: DatePreviewComponent
    },
    settingsType: "DATE_SETTINGS",
    color: "#F2CBC2"
  },
  {
    title: "NPS",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-happy-96.png",
    description:
      "Questionee can answer a NPS question with a number on a scale from 0 - 10",
    id: QuestionTypesIdEnum.NPS,
    component: { preview: NpsPreviewComponent },
    settingsType: "BASE_SETTINGS",
    color: "#FFD9D9"
  },
  {
    title: "Likert Scale",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/likert%20scale.png",
    description: "Questionee can select one number on a scale from 1 to 7",
    id: QuestionTypesIdEnum.LIKERT_SCALE,
    component: {
      preview: ScalePreviewComponent
    },

    settingsType: "LIKERT_SETTINGS",
    color: "#FFD9D9"
  },
  {
    title: "Scale",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/scale.svg",
    description: "Questionee can select one number on a scale",
    id: QuestionTypesIdEnum.SCALE,
    component: {
      preview: ScalePreviewComponent
    },

    settingsType: "SCALE_SETTINGS",
    color: "#FFD9D9"
  },
  {
    title: "Scale Matrix",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/matrix%20scale.svg",
    description: "Easily group scales together",
    id: QuestionTypesIdEnum.SCALE_MATRIX,
    component: {
      preview: LikertGroupPreviewComponent
    },

    settingsType: "QUESTION_GROUP_SETTINGS",
    color: "#F2CEDF"
  },
  {
    title: "Question Group",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/question%20group.png",
    description: "Easily group questions together",
    id: QuestionTypesIdEnum.QUESTION_GROUP,
    component: {
      preview: LikertGroupPreviewComponent
    },

    settingsType: "QUESTION_GROUP_SETTINGS",
    color: "#DBDBDB"
  },
  {
    title: "Contact",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-contacts-96.png",
    description: "Questionee has to answer with their contact information",
    id: QuestionTypesIdEnum.CONTACT,
    component: {
      preview: ContactPreviewComponent
    },

    settingsType: "CONTACT_SETTINGS",
    color: "#D1DEC0"
  },
  {
    title: "Info",
    logo:
      "https://storage.googleapis.com/mitra-images/landingpage/icons8/info.svg",
    description:
      "You can add additional information like text, pictures, links etc. to your survey",
    id: QuestionTypesIdEnum.MEDIA,
    component: { preview: MediaPreviewComponent },

    settingsType: "MEDIA_SETTINGS",
    color: "#EADBCC"
  }
];
