import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { SurveyPreviewService } from "../../services/survey-preview.service";

@Component({
    selector: "mitra-survey-progress",
    templateUrl: "./survey-progress.component.html",
    styleUrls: ["./survey-progress.component.scss"]
})
export class SurveyProgressComponent implements OnInit, OnDestroy {
    answer_questions: any[];
    total_questions: number = 0;
    total_anwser_questions: number = 0;
    complete: number = 0;
    constructor(public __surveyPreviewService: SurveyPreviewService) {}

    ngOnInit() {
        this.calculate();
        this.__surveyPreviewService.calculateProgress.subscribe(_ => {
            this.calculate();
        });
    }

    calculate() {
        let value = Object.values(
            this.__surveyPreviewService.surveyAnswerForm.value
        );
        this.total_questions = value.length;
        this.answer_questions = value.filter(q => {
            return (
                (typeof q["0"] == "number" && q["0"]) ||
                (typeof q["0"] !== "number" && q["0"] && q["0"].length)
            );
        });
        this.total_anwser_questions = this.answer_questions.length;

        this.complete = Math.ceil(
            (+this.total_anwser_questions / +this.total_questions) * 100
        );
    }
    ngOnDestroy(): void {}
}
