import { QuestionOption } from "./QuestionOption";

/*
 *   Wordings are needed for the replace question value pipe !
 *   the thing is: it's not possible to inject the translation pipe inside another pipe.
 *   here the @replaceQueryParam pipe.
 *   On another hand we could have chained the two pipe but it can lead to unexpected behavior for the user.
 */

export const otherOptionTemplate: QuestionOption = {
  id: null,
  front_id: null,
  hidden: false,
  isOther: true,
  wordings: [
    {
      id: null,
      front_id: null,
      lang_code: "en",
      text: "Other"
    },
    {
      id: null,
      front_id: null,
      lang_code: "de",
      text: "Andere"
    },
    {
      id: null,
      front_id: null,
      lang_code: "def",
      text: "Andere"
    },
    {
      id: null,
      front_id: null,
      lang_code: "fl",
      text: "Muu"
    },
    {
      id: null,
      front_id: null,
      lang_code: "nl",
      text: "Anders"
    }
  ]
};
