import {BaseProperty} from '../BaseProperty';

export class DateProperty extends BaseProperty {
    date_format = 'YYYY-MM-DD';
    val_min_date: string;
    val_max_date: string;
    date: boolean;
    time: boolean;
}
