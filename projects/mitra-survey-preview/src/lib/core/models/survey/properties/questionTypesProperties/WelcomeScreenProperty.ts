import {Wording} from '../../Wording';
import {BaseProperty} from '../BaseProperty';

export interface WelcomeScreenProperty extends BaseProperty {
    agreement: Wording[];
    button_text: Wording[];
    logo: string;
    has_agreement: boolean;
}
