import { JumpLogicCondition, JumpLogicDetails } from './JumpLogicCondition';

export class JumpLogic {
  constructor() {
    this.default = new JumpLogicDetails();
    this.conditions = [];
  }
  ref: string;
  conditions: JumpLogicCondition[];
  default: JumpLogicDetails;
}
