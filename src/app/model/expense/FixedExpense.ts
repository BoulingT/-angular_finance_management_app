export class FixedExpense {


  constructor(id: number, amount: number, label: string, expenseType: number) {
    this._id = id;
    // this.userId = userId;
    this._amount = amount;
    this._label = label;
    this._expenseType = expenseType;
  }

  private _id: number;

  // private userId: number;

  private _amount: number;

  private _label: string;

  private _expenseType: number;


  get id(): number {
    return this._id;
  }

  get amount(): number {
    return this._amount;
  }

  get label(): string {
    return this._label;
  }

  get expenseType(): number {
    return this._expenseType;
  }
}
