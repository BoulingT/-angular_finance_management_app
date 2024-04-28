import {FixedResource} from "../FixedRessource";

export class FixedIncome extends FixedResource {
  private _incomeType: number;

  constructor(id: number, label: string, amount: number, incomeType: number) {
    super(id, label, amount);
    this._incomeType = incomeType;
  }

  get incomeType(): number {
    return this._incomeType;
  }
}
