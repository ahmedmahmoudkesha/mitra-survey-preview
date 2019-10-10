import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { BaseQuestionComponent } from '../base-question/base-question.component';
import { LikertScaleProperty } from '../../../../../../../../core/models/survey/properties/questionTypesProperties/LikertScaleProperty';
import { QuestionTypesIdEnum } from '../../../../../../../../core/models/survey/QuestionType';
import { ScaleProperty } from '../../../../../../../../core/models/survey/properties/ScaleProperty';

@Component({
    selector: 'mitra-scale-preview',
    templateUrl: './scale.component.html',
    styleUrls: ['./scale.component.scss']
})
export class ScalePreviewComponent extends BaseQuestionComponent
    implements OnInit, OnDestroy {
    properties: LikertScaleProperty | ScaleProperty;
    step = 1;
    min = 1;
    max = 7;

    ngOnInit() {
        super.ngOnInit();
        if (this.question.question_type_id === QuestionTypesIdEnum.LIKERT_SCALE) {
            this.step = 1;
            this.min = 1;
            this.max = 7;
        } else {
            const props = this.properties as ScaleProperty;
            this.step = props.val_scale_step || 2;
            this.min = props.val_scale_min || 0;
            this.max = props.val_scale_max || 100;
            this.__surveyPreviewService.onChanges.subscribe(() => {
                const props = this.properties as ScaleProperty;
                this.step = props.val_scale_step;
                this.min = props.val_scale_min;
                this.max = props.val_scale_max;
            });
        }
    }

    ngAfterViewInit() {
    }

    ngOnDestroy(): void {
    }
}
