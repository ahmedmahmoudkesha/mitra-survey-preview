import { BaseProperty } from "../BaseProperty";

export class OpenTextProperty extends BaseProperty {
    constructor() {
        super();
        this.amount_text_box = 1;
    }
    amount_text_box = 1;
    val_max_length: number;
}
