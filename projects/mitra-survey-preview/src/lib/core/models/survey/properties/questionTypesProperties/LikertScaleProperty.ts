import {ScaleProperty} from '../ScaleProperty';
import { Label } from '../../Label';

export class LikertScaleProperty extends ScaleProperty {
    labels: Label[];
    val_scale_min: 1;
    val_scale_max: 7;
    val_scale_step: 1;
}
