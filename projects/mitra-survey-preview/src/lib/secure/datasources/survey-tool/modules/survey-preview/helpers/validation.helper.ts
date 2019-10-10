import { Validators, ValidatorFn, FormGroup, AbstractControl } from "@angular/forms";
import { validateMaxChoice } from "../validators/choices.validator";
import { Question } from "../../../../../../core/models/survey/Question";
import { OpenTextProperty } from "../../../../../../core/models/survey/properties/questionTypesProperties/OpenTextProperty";

export class ValidationHelper {
    static getValidationFromProperties(question: Question): ValidatorFn[] {
        let validators: ValidatorFn[] = [];
        if (question.required) {
            validators.push(Validators.required);
        }
        let properties = question.properties || {};
        for (let property in properties) {
            switch (property) {
                case "val_max_length":
                    if (properties[property]) {
                        // validators.push(Validators.maxLength(properties[property])); // <= This doesn't work with textarea
                        validators.push(Validators.pattern(`^.{0,${properties[property]}}$`));
                    }
                    break;
                case "val_min":
                    if (properties[property]) {
                        validators.push(Validators.min(properties[property]));
                    }
                    break;
                case "val_max":
                    validators.push(Validators.max(properties[property]));
                    break;
                case "max_answer":
                    if (properties[property]) {
                        validators.push(validateMaxChoice(properties[property]));
                    }
                    break;
                case "whole_number":
                    if (properties[property] === true) {
                        validators.push(Validators.pattern("^[0-9]*$"));
                    }
                    break;
                case "only_positive":
                    if (properties[property] === true) {
                        validators.push(Validators.min(0));
                    }
                    break;
                default:
                    break;
            }
        }
        return validators;
    }

    static getErrorMessage(form: AbstractControl, question: Question): string {
        let properties = question.properties || {};
        let errorMsg = "";
        if (form.hasError("required")) {
            errorMsg = "this_is_required";
        }
        if (form.hasError("pattern") &&
            form.errors["pattern"]["requiredPattern"] === `^.{0,${(properties as OpenTextProperty).val_max_length}}$`) {
            // errorMsg = `Maximum length is ${(properties as OpenTextProperty).val_max_length}`;
            errorMsg = 'maximum_length';
        }
        if (form.hasError("email")) {
            errorMsg = "not_a_valid_email";
        }
        if (form.hasError("min")) {
            // errorMsg = `Minimum value: ${(properties as OpenNumberProperty).val_min}`;
            errorMsg = 'minimum_value';
        }
        if (form.hasError("max")) {
            // errorMsg = `Maximum value: ${(properties as OpenNumberProperty).val_max}`;
            errorMsg = 'maximum_value';
        }
        if (form.hasError("pattern") &&
            form.errors["pattern"]["requiredPattern"] === "^[0-9]*$") {
            errorMsg = "only_integer";
        }
        return errorMsg;
    }
}
