import { Label } from "./../../Label";
import { BaseProperty } from "../BaseProperty";
import { Question } from "../../Question";

export class QuestionGroupProperty extends BaseProperty {
  nestedQuestions: Question[] = [];
  randomized_question_order = false;
  labels!: Label[];
}
