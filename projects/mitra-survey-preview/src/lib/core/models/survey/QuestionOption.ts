import {Wording} from './Wording';

export interface QuestionOption {
    id: number;
    front_id: number;
    wordings: Wording[];
    selected?: boolean;
    hidden: boolean;
    isOther?: boolean;
    imageUrl?: string;
    deleted_at?: number;
    reference_id?: string;
}
