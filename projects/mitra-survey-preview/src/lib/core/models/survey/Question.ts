import { Wording } from "./Wording";
import { BaseProperty } from "./properties/BaseProperty";
import { QuestionType, QuestionTypesIdEnum } from "./QuestionType";
import * as uuid from "uuid";
import { Language } from "mitra-packages";

export class Question {
    constructor(languages: Language[] = []) {
        // this.id = uuid.v4();
        this.id = this.front_id = uuid.v4();
        this.title = "";
        this.wordings = [];
        this.description = [];
        for (let lang of languages) {
            this.wordings.push({
                id: null,
                front_id: uuid.v4(),
                lang_code: lang.code,
                text: ""
            });
        }
        this.standard_type_id = 2;
        this.variable_id = 1;
        this.properties = new BaseProperty();
        this.old_id = 0;
    }

    front_id: number = 0;
    reference_id: number = 0;
    description: Wording[];
    title: string;
    question_type_id: QuestionTypesIdEnum = 1;
    question_type?: QuestionType = null;
    wordings: Wording[];
    properties: any;
    standard_type_id?: number;
    variable_id?: number;
    answer?: any = "";
    required = false;
    has_description = false;
    not_applicable = false;
    image_url: string = "";
    value?: any = "";
    deleted_at?: number;
    id?: number = 0;
    question_theme? = null;
    question_theme_id? = null;
    show_reference_id? = false;
    isNested? = false;
    first? = false;
    last? = false;
    old_id?: number;
    parent?: Question;
    
    static get_instance(question: Question, types) {
        let instance = new Question();
        for (let property in instance) {
            switch (property) {
                case "question_type":
                    instance.question_type = types.filter(
                        type => type.id == question.question_type_id
                    )[0];
                    break;
                default:
                    if (question[property])
                        instance[property] = question[property];
            }
        }
        instance.front_id = question.id;
        instance.id = question.id;
        if (instance.properties.hasOwnProperty("nestedQuestions")) {
            instance.properties["nestedQuestions"] = instance.properties[
                "nestedQuestions"
            ].map(q => Question.get_instance(q, types));
        }
        instance.variable_id = 1;
        return instance;
    }
}
