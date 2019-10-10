import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseQuestionComponent } from '../base-question/base-question.component';
import { OpenNumberProperty } from '../../../../../../../../core/models/survey/properties/questionTypesProperties/OpenNumberProperty';
import { Wording } from '../../../../../../../../core/models/survey/Wording';
import { ValidationHelper } from '../../../helpers/validation.helper';

@Component({
    selector: 'mitra-open-number-preview',
    templateUrl: './open-number.component.html',
    styleUrls: ['./open-number.component.scss']
})
export class OpenNumberPreviewComponent extends BaseQuestionComponent
    implements OnInit, OnDestroy {
    properties: OpenNumberProperty;

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy(): void {
    }

    getErrorMessage(): string {
        return ValidationHelper.getErrorMessage(this.form.get('0'), this.question);
    }
}
