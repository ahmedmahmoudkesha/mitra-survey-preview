import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { BaseQuestionComponent } from "../base-question/base-question.component";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: "mitra-media-preview",
    templateUrl: "./media.component.html",
    styleUrls: ["./media.component.scss"]
})
export class MediaPreviewComponent extends BaseQuestionComponent
    implements OnInit, OnDestroy {
    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy(): void {}
}
