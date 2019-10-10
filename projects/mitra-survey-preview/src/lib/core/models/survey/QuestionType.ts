import { QuestionSetting } from './QuestionSetting';

export interface QuestionType {
    id: QuestionTypesIdEnum;
    logo: string;
    description: string;
    component?: any;
    settingsType?: string;
    settings?: QuestionSetting[];
    created_at?: any;
    updated_at?: any;
    title?: string;
    color?: string;
}

export enum QuestionTypesIdEnum {
    SINGLE_CHOICE = 1,
    MULT_CHOICE = 2,
    OPEN_TEXT = 3,
    OPEN_NUMBER = 4,
    LIKERT_SCALE = 5,
    CONTACT = 8,
    MEDIA = 9,
    SCALE_MATRIX = 10,
    NPS = 11,
    WELCOME_SCREEN = 12,
    END_SCREEN = 13,
    SCALE = 14,
    QUESTION_GROUP = 15,
    DATE = 16
}
