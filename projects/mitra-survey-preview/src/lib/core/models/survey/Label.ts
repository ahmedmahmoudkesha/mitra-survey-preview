import {Wording} from './Wording';

export enum LabelScaleEnum {
    Left = 1,
    Middle,
    Right
}

export interface Label {
    id: string;
    front_id: string,
    scale: LabelScaleEnum;
    wordings: Wording[];
}
