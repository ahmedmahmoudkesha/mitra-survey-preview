export interface QuestionSetting {
    title: string;
    name: string;
    type: QuestionSettingTypes;
    value: any;
    component: any;
    isBaseSetting: boolean;
    min_max?: number[];
}

export enum QuestionSettingTypes {
    SWITCH,
    VIDEO_URL,
    IMAGE_URL,
    TEXT_INPUT,
    NUMBER_INPUT
}
