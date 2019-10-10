export class JumpLogicCondition {
  constructor() {
    this.vars = [];
    this.detail = new JumpLogicDetails();
  }
  op: string;
  vars: any;
  detail: JumpLogicDetails;
  ref: string;
}

export class JumpLogicDetails {
  ref: string;
}
