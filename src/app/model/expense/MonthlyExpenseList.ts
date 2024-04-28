import {FixedExpense} from "./FixedExpense";

export class MonthlyExpenseList {

  constructor(id: number, billList: FixedExpense[], subscriptionList: FixedExpense[], creditList: FixedExpense[], consommationBudget: FixedExpense, isActive: boolean) {
    // this.userId = userId;
    this._id = id;
    this._billList = billList;
    this._subscriptionList = subscriptionList;
    this._creditList = creditList;
    this._consommationBudget = consommationBudget;
    this._isActive = isActive;
  }

  // private userId: number;

  private _id: number;

  private _billList: FixedExpense[];

  private _subscriptionList: FixedExpense[];

  private _creditList: FixedExpense[];

  private _consommationBudget: FixedExpense;

  private _isActive: boolean;


  get id(): number {
    return this._id;
  }

  get billList(): FixedExpense[] {
    return this._billList;
  }

  get subscriptionList(): FixedExpense[] {
    return this._subscriptionList;
  }

  get creditList(): FixedExpense[] {
    return this._creditList;
  }

  get consommationBudget(): FixedExpense {
    return this._consommationBudget;
  }

  get isActive(): boolean {
    return this._isActive;
  }
}
