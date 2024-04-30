import {FixedIncome} from "./FixedIncome";

export class MonthlyIncomeList {

  private _id: number;

  private _salary: FixedIncome;

  private _freelance: FixedIncome;

  private _aids: FixedIncome[];

  private _totalIncomeAmount: number;

  get id(): number {
    return this._id;
  }

  get salary(): FixedIncome {
    return this._salary;
  }

  get freelance(): FixedIncome {
    return this._freelance;
  }

  get aids(): FixedIncome[] {
    return this._aids;
  }

  get totalIncomeAmount(): number {
    return this._totalIncomeAmount;
  }

  constructor(id: number, salary: FixedIncome, freelance: FixedIncome, aids: FixedIncome[], totalIncomeAmount: number) {
    this._id = id;
    this._salary = salary;
    this._freelance = freelance;
    this._aids = aids;
    this._totalIncomeAmount = totalIncomeAmount;
  }

}
