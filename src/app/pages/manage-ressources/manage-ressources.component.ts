import {Component, OnInit} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {MonthlyExpenseList} from "../../model/expense/MonthlyExpenseList";
import {FixedExpense} from "../../model/expense/FixedExpense";
import {MonthlyIncomeList} from "../../model/income/MonthlyIncomeList";
import {IncomeService} from "../../service/income.service";

@Component({
  selector: 'app-manage-ressources',
  templateUrl: './manage-ressources.component.html',
  styleUrls: ['./manage-ressources.component.scss']
})
export class ManageRessourcesComponent implements OnInit {
  monthlyExpenseList: MonthlyExpenseList | undefined;
  monthlyIncomeList: MonthlyIncomeList | undefined;

  get revenuesAmount(): number | undefined {
    if (!this.monthlyIncomeList) return undefined;
    return this.monthlyIncomeList.totalIncomeAmount;
  }

  get fixedExpensesTotalAmount(): number | undefined {
    if (!this.monthlyExpenseList) return undefined;
    let total: number = 0;
    total = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList?.billList, total);
    total = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList?.subscriptionList, total);
    return total;
  }

  get creditTotalAmount(): number | undefined {
    if (!this.monthlyExpenseList) return undefined;
    return this.getTotalAmountFixedExpenseList(this.monthlyExpenseList?.creditList, 0);
  }

  constructor(private expenseService: ExpenseService, private incomeService: IncomeService) {
  }

  ngOnInit() {
    this.expenseService.getMonthlyExpenseList().subscribe({
      next: (response: MonthlyExpenseList | undefined) => {
        this.monthlyExpenseList = response;
      },
      error: (err) => console.error('Erreur lors de la récupération des données :', err),
    });
    this.incomeService.getMonthlyIncomeList().subscribe({
      next: (response: MonthlyIncomeList | undefined) => {
        this.monthlyIncomeList = response;
      },
      error: (err) => console.error('Erreur lors de la récupération des données :', err),
    })
  }

  private getTotalAmountFixedExpenseList(fixedExpenseList: FixedExpense[], totalAmount: number): number {
    if (fixedExpenseList.length === 0) return totalAmount;
    return fixedExpenseList.reduce(
      (total: number, monthlyExpense: FixedExpense) => total + monthlyExpense.amount, totalAmount
    );
  }
}
