import { Question } from '../../Question';
import { Label } from '../../Label';
import { BaseProperty } from '../BaseProperty';

export class ScaleMatrixProperty extends BaseProperty{
    nestedQuestions: Question[] = [];
    labels: Label[];
}
