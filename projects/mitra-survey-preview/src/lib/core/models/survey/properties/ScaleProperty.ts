import {BaseProperty} from './BaseProperty';
import {Label} from '../Label';


export class ScaleProperty extends BaseProperty {
    labels: Label[];
    val_scale_min: number;
    val_scale_max: number;
    val_scale_step: number;
    radio_box: boolean;
}
