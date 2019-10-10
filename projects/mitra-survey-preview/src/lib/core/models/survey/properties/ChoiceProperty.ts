import { QuestionOption } from "../QuestionOption";
import { BaseProperty } from "./BaseProperty";

export class ChoiceProperty extends BaseProperty {
    options: QuestionOption[];
    dropdown = false;
    vertical_align = true;
    randomized_option_order = false;
    additional_info = false;
    additional_info_open_box = false;
    picture_options = false;
    additional_info_picture_url: string;
}
