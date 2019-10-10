import {BaseProperty} from '../BaseProperty';

export class OpenNumberProperty extends BaseProperty {
    only_positive = false;
    whole_number = false;
    prefix: string;
    suffix: string;
    val_min: number;
    val_max: number;
}
