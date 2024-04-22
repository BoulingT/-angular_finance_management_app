import {FixedExpense} from "./FixedExpense";

export class MonthlyExpenses {

  constructor(userId: number, rent: FixedExpense, billList: FixedExpense[], subscriptionList: FixedExpense[], creditList: FixedExpense[], consommationBudget: FixedExpense) {
    this.userId = userId;
    this.rent = rent;
    this.billList = billList;
    this.subscriptionList = subscriptionList;
    this.creditList = creditList;
    this.consommationBudget = consommationBudget;
  }

  private userId: number;

  private rent: FixedExpense;

  private billList: FixedExpense[];

  private subscriptionList: FixedExpense[];

  private creditList: FixedExpense[];

  private consommationBudget: FixedExpense;

}
