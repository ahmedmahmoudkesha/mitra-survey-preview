import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { BaseQuestionComponent } from "../base-question/base-question.component";
import {NpsScaleProperty} from '../../../../../../../../core/models/survey/properties/questionTypesProperties/NpsScaleProperty';

@Component({
    selector: "mitra-nps-preview",
    templateUrl: "./nps.component.html",
    styleUrls: ["./nps.component.scss"]
})
export class NpsPreviewComponent extends BaseQuestionComponent
    implements OnInit, OnDestroy {
    properties: NpsScaleProperty;

    constructor() {
        super();
    }

    ngOnInit() {
        this.properties = this.question.properties as NpsScaleProperty;
    }

    npsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    ngOnDestroy(): void {}
}
