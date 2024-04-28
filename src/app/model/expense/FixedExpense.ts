import {FixedResource} from "../FixedRessource";

export class FixedExpense extends FixedResource {
  private _expenseType: number;

  constructor(id: number, label: string, amount: number, expenseType: number) {
    super(id, label, amount);
    this._expenseType = expenseType;
  }

  get expenseType(): number {
    return this._expenseType;
  }
}
