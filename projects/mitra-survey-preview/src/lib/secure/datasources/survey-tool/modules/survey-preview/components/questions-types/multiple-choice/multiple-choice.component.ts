import { otherOptionTemplate } from "./../../../../../../../../core/models/survey/option-other";
import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { BaseQuestionComponent } from "../base-question/base-question.component";
import * as _ from "lodash";
import { MultipleChoiceProperty } from "../../../../../../../../core/models/survey/properties/questionTypesProperties/MultipleChoiceProperty";
import {
  MatSelectionList,
  MatSelectionListChange,
  MatSelect,
  MatSelectChange
} from "@angular/material";
import { SingleChoiceProperty } from "../../../../../../../../core/models/survey/properties/questionTypesProperties/SingeChoiceProperty";
import { QuestionTypesIdEnum } from "../../../../../../../../core/models/survey/QuestionType";
import * as uuid from "uuid";
import { ArrayHelper } from "../../../helpers/arrayShuffle.helper";

@Component({
  selector: "mitra-multiple-choice-preview",
  templateUrl: "./multiple-choice.component.html",
  styleUrls: ["./multiple-choice.component.scss"]
})
export class MultipleChoicePreviewComponent extends BaseQuestionComponent
  implements OnInit, OnDestroy {
  @ViewChild("choices", { static: true }) choices: MatSelectionList;
  @ViewChild("dropdownchoices", { static: true }) dropdownchoices: MatSelect;
  properties: MultipleChoiceProperty | SingleChoiceProperty;
  randomPrevState: boolean = false;
  numberSelectedOptions: number;

  constructor() {
    super();
  }

  _ = _.get;

  ngOnInit() {
    super.ngOnInit();
    this.randomizedOptionHandler();
    this.__surveyPreviewService.onChanges.subscribe(() => {
      this.randomizedOptionHandler();
    });
  }

  ngOnDestroy(): void {}

  getFrontId(arr) {
    return arr.map(i => i.front_id);
  }

  onSelectionChange(evt: MatSelectionListChange) {
    if (this.question.question_type_id === QuestionTypesIdEnum.SINGLE_CHOICE) {
      this.choices.deselectAll();
      this.choices.options
        .find(opt => opt.value.front_id === evt.option.value.front_id)
        .toggle();
    }
  }

  onDropDownChange(evt: MatSelectChange) {
    console.log(this.dropdownchoices);
    if (this.question.question_type_id === QuestionTypesIdEnum.SINGLE_CHOICE) {
      this.dropdownchoices.options
        .find(opt => opt.value.front_id === evt.value.front_id)
        .select();
    }
    if (this.question.question_type_id === QuestionTypesIdEnum.MULT_CHOICE) {
      this.numberSelectedOptions = evt.value.length;
      if (
        this.properties["max_selection"] &&
        this.numberSelectedOptions >= this.properties["max_selection"]
      ) {
        var unSelectedOptions = this.dropdownchoices.options.filter(
          opt => opt.selected === false
        );
        for (let i = 0; i < unSelectedOptions.length; i++) {
          unSelectedOptions[i].disabled = true;
        }
      } else {
        var unSelectedOptions = this.dropdownchoices.options.filter(
          opt => opt.selected === false
        );
        for (let i = 0; i < unSelectedOptions.length; i++) {
          unSelectedOptions[i].disabled = false;
        }
      }
    }
  }

  isSelected(choice): boolean {
    return !!this.choices.selectedOptions.selected.find(
      opt => opt.value.front_id === choice.front_id
    );
  }

  isOtherSelected(): boolean {
    if (this.dropdownchoices && this.dropdownchoices.value) {
      if (this.question.question_type_id === 2) {
        return (
          !!this.dropdownchoices &&
          !!this.dropdownchoices.value.find(opt => opt.isOther === true)
        );
      } else {
        return !!this.dropdownchoices && !!this.dropdownchoices.value.isOther;
      }
    }
    if (this.choices) {
      return (
        !!this.choices &&
        !!this.choices.selectedOptions.selected.find(
          opt => opt.value.isOther === true
        )
      );
    }
  }

  private randomizedOptionHandler() {
    if (
      this.properties.randomized_option_order &&
      this.properties.randomized_option_order != this.randomPrevState
    ) {
      this.properties.options = this.properties.options.filter(
        opt => opt.isOther !== true
      );
      ArrayHelper.shuffle(this.properties.options);
      if (this.properties.additional_info) {
        this.properties.options = this.properties.options.concat({
          ...otherOptionTemplate,
          front_id: uuid.v4()
        });
      }
    }
    this.randomPrevState = this.properties.randomized_option_order;
  }

  @HostListener("document:keydown", ["$event"])
  keyboardHandler(event: KeyboardEvent) {
    if (this.isFocused && !this.__surveyPreviewService.isBuildPreview) {
      let ascii = "a".charCodeAt(0);
      const choiceArray =
        this.choices && this.choices.options && this.choices.options.toArray();
      console.log(choiceArray);
      for (let opt of choiceArray || []) {
        if (String.fromCharCode(ascii++) === event.key) {
          if (
            this.question.question_type_id === QuestionTypesIdEnum.SINGLE_CHOICE
          ) {
            this.choices.deselectAll();
          }
          opt.toggle();
        }
      }
    }
  }
}
