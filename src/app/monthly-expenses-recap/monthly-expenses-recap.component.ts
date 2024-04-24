import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {MonthlyExpenseList} from "../model/MonthlyExpenseList";
import {ExpenseService} from "../service/expense.service";
import {FixedExpense} from "../model/FixedExpense";

@Component({
  selector: 'app-monthly-expenses-recap',
  templateUrl: './monthly-expenses-recap.component.html',
  styleUrls: ['./monthly-expenses-recap.component.scss']
})
export class MonthlyExpensesRecapComponent {
  @Input() monthlyExpenseList: MonthlyExpenseList | undefined;

  get consommationBudget(): number {
    if (!this.monthlyExpenseList) return 0;
    return this.monthlyExpenseList.consommationBudget.amount;
  }

  get billList(): FixedExpense[] {
    return this.monthlyExpenseList?.billList ?? [];
  }

  get subscriptionList(): FixedExpense[] {
    return this.monthlyExpenseList?.subscriptionList ?? [];
  }

  get creditList(): FixedExpense[] {
    return this.monthlyExpenseList?.creditList ?? [];
  }

  get creditListIsEmpty(): boolean {
    return this.monthlyExpenseList?.creditList.length !== 0;
  }

  get totalMonthlyFixedExpenses(): number {
    if (!this.monthlyExpenseList) return 0;
    let total: number = 0;
    total = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList?.billList, total);
    total = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList?.subscriptionList, total);
    total = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList?.creditList, total);
    return total;
  }

  constructor(private expenseService: ExpenseService) {
  }

  private getTotalAmountFixedExpenseList(fixedExpenseList: FixedExpense[], totalAmount: number): number {
    return fixedExpenseList.reduce(
      (total: number, monthlyExpense: FixedExpense) => total + monthlyExpense.amount, totalAmount
    );
  }
}
