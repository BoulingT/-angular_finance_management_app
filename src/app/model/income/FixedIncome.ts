import {InvestmentAccountShort} from "../investment/investment-account-short";

interface IFixedIncome {
  id: number,
  label: string,
  amount: number,
  incomeType: number,
}

export class FixedIncome implements IFixedIncome {

  private _id: number;

  private _label: string;

  private _amount: number;

  private _incomeType: number;

  get id(): number {
    return this._id;
  }

  get label(): string {
    return this._label;
  }

  get amount(): number {
    return this._amount;
  }

  get incomeType(): number {
    return this._incomeType;
  }


  constructor(id: number, label: string, amount: number, incomeType: number) {
    this._id = id;
    this._label = label;
    this._amount = amount;
    this._incomeType = incomeType;
  }
}
