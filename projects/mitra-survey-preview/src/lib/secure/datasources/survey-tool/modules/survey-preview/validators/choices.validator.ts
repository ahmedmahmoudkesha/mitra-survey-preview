import { AbstractControl } from "@angular/forms";

export function validateMaxChoice(choice_number) {
    return (control: AbstractControl) => {
        if (control.value && control.value.length > choice_number) {
            return { validateMaxChoice: true };
        }
        return null;
    };
}
