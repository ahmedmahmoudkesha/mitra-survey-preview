import { Pipe, PipeTransform } from "@angular/core";
import { SurveyPreviewService } from "../services/survey-preview.service";
import { QuestionManager } from "../services/QuestionManager";
import { QuestionTypesIdEnum } from "../../../../../../core/models/survey/QuestionType";

@Pipe({
    name: "replaceQueryParam",
    pure: false,
})
export class ReplaceQueryParamPipe implements PipeTransform {
    constructor(
        private __surveyPreviewService: SurveyPreviewService
    ) {
    }

    transform(origText: string): string {
        if (!origText) {
            return origText;
        }
        let replacedText = origText.slice();
        const queryParams = this.__surveyPreviewService.surveyFile.queryParams;
        const queryKeys = this.__surveyPreviewService.surveyFile.queryKeys;
        if (queryKeys && queryParams) {
            for (let key of queryKeys) {
                const value = queryParams.get(key);
                replacedText = replacedText.replace(
                    `#<\/span>${key}`,
                    `${value || "____"}<\/span>`
                );
            }
        }
        if (this.__surveyPreviewService.surveyFile) {
            let form_values = this.__surveyPreviewService.surveyAnswerForm
                .value;
            for (let front_id in form_values) {
                let q = QuestionManager.getInstance().getQuestionByFrontId(
                    front_id
                );
                let pure_value = form_values[front_id];
                let value = pure_value["0"];
                // if is single/ multiple choice
                if (value && value.length) {
                    if (value.map)
                        value = value.map(v => {
                            if (v.isOther) {
                                /*
                                * WARN in this case wordings are hardcoded,
                                * it's because we couldn't inject the translation pipe in a pipe.
                                */
                                return v.wordings && v.wordings[0] ?
                                    this.__surveyPreviewService.getCurrentWording(v.wordings).text :
                                    "Other";
                            } else {
                                return this.__surveyPreviewService.getCurrentWording(v.wordings).text;
                            }
                        }).join(", ");
                }
                // if is contact form
                if (pure_value && (pure_value["first_name"] || pure_value["last_name"])) {
                    value = Object.values(pure_value)
                        .filter(item => item)
                        .join(", ");
                }
                if (value) {
                    value = ("" + value).replace(/(<([^>]+)>)/gi, "");
                }

                if (q && q.question_type_id !== QuestionTypesIdEnum.SCALE_MATRIX &&
                    q.question_type_id !== QuestionTypesIdEnum.QUESTION_GROUP &&
                    q.question_type_id !== QuestionTypesIdEnum.WELCOME_SCREEN &&
                    q.question_type_id !== QuestionTypesIdEnum.END_SCREEN
                ) {
                    replacedText = replacedText.replace(
                        `@<\/span>${q.title}`,
                        `${value || "____"}<\/span>`
                    );
                }
            }
        }
        return replacedText;
    }
}
