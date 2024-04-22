export class FixedExpense {


  constructor(id: number, userId: number, amount: number, label: string, expenseType: number) {
    this.id = id;
    this.userId = userId;
    this.amount = amount;
    this.label = label;
    this.expenseType = expenseType;
  }

  private id: number;

  private userId: number;

  private amount: number;

  private label: string;

  private expenseType: number;
}
