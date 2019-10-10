import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { BaseQuestionComponent } from '../base-question/base-question.component';
import { FormControl } from '@angular/forms';
import { ValidationHelper } from '../../../helpers/validation.helper';
import { OpenTextProperty } from '../../../../../../../../core/models/survey/properties/questionTypesProperties/OpenTextProperty';

@Component({
    selector: 'mitra-open-text-preview',
    templateUrl: './open-text.component.html',
    styleUrls: ['./open-text.component.scss']
})
export class OpenTextPreviewComponent extends BaseQuestionComponent
    implements OnInit, OnDestroy {
    public properties: OpenTextProperty;
    nbTextBox = 0;

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        if (!this.properties) {
            this.properties = (this.question.properties as OpenTextProperty) = {
                has_agreement: false,
                amount_text_box: 1,
                val_max_length: null
            };
        }
        this.setMultipleTextarea();
        this.__surveyPreviewService.onChanges.subscribe(() => {
            this.setMultipleTextarea();
        });
    }

    setMultipleTextarea() {
        if (
            this.nbTextBox === 0 || (
                this.properties.amount_text_box
                && this.properties.amount_text_box !== this.nbTextBox
            )
        ) {
            this.nbTextBox = this.properties.amount_text_box > 0 ? this.properties.amount_text_box : 1;
            this.nbTextBox = this.nbTextBox <= 10 ? this.nbTextBox : 10;
            for (let i in this.form.controls) {
                this.form.removeControl(i);
            }
            for (let i = 0; i < this.nbTextBox; i++) {
                this.form.addControl(
                    i + '',
                    new FormControl('', this.validators)
                );
            }
        }
    }

    ngOnDestroy(): void {
    }

    getErrorMessage(formControlId: string): string {
        return ValidationHelper.getErrorMessage(this.form.get(formControlId), this.question);
    }
}
