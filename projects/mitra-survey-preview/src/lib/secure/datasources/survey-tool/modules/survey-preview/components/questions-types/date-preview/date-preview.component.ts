import {DateProperty} from './../../../../../../../../core/models/survey/properties/questionTypesProperties/DateProperty';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {BaseQuestionComponent} from '../base-question/base-question.component';
import {ValidationHelper} from '../../../helpers/validation.helper';
import {DatePipe} from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'mitra-date-preview',
    templateUrl: './date-preview.component.html',
    styleUrls: ['./date-preview.component.scss'],
    providers: [DatePipe]
})
export class DatePreviewComponent extends BaseQuestionComponent
    implements OnInit, OnDestroy {
    dateTimeCase: number;
    dateChoosed: string;
    timeChoosed: string;
    properties: DateProperty;
    choosedDateTime: string;

    constructor(private datePipe: DatePipe) {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        this.form.addControl(
            'choosedDate',
            new FormControl('', this.validators)
        );
        this.form.addControl(
            'choosedTime',
            new FormControl('', this.validators)
        );
        this.form.addControl(
            'DateTimeChoosed',
            new FormControl('', this.validators)
        );
        this.checkProperties();
        this.__surveyPreviewService.onChanges.subscribe(() => {
            this.checkProperties();
            this.form.controls[0].setValue('');
            this.dateChoosed = '';
            this.timeChoosed = '';
            this.choosedDateTime = '';
            this.form.controls['choosedDate'].reset();
            this.form.controls['choosedTime'].reset();
            this.form.controls['DateTimeChoosed'].reset();
        });
    }

    getErrorMessage(formControlId: string): string {
        return ValidationHelper.getErrorMessage(this.form.get(formControlId), this.question);
    }

    checkProperties() {
        if(this.properties['timeformat'] ===  undefined){
            this.properties['timeformat'] = true;
        }
        if ((!this.properties.date) && (!this.properties.time)) {
            this.dateTimeCase = 0;
        }
        if ((this.properties.date) && (!this.properties.time)) {
            this.dateTimeCase = 1;
        }
        if ((!this.properties.date) && (this.properties.time)) {
            this.dateTimeCase = 2;
        }
        if ((this.properties.date) && (this.properties.time)) {
            this.dateTimeCase = 3;
        }
    }

    changedDate(event) {
        this.dateChoosed = this.datePipe.transform(event, 'dd.MM.yyyy');
        this.form.controls[0].setValue(this.dateChoosed);
    }

    changedTime(event) {
        if(this.properties['timeformat']){
            this.timeChoosed = this.datePipe.transform(event, 'hh:mm a');
        }else{
            this.timeChoosed = this.datePipe.transform(event, 'HH:mm');
        }
        
        this.form.controls[0].setValue(this.timeChoosed);
    }

    changedDateTime(event) {
        if(this.properties['timeformat']){
            this.choosedDateTime = this.datePipe.transform(event, 'dd.MM.yyyy hh:mm a');
        }else{
            this.choosedDateTime = this.datePipe.transform(event, 'dd.MM.yyyy HH:mm');
        }
        
        this.form.controls[0].setValue(this.choosedDateTime);
    }

}
