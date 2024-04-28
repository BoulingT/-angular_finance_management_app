import {Component, OnInit} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {MonthlyExpenseList} from "../../model/expense/MonthlyExpenseList";
import {FixedExpense} from "../../model/expense/FixedExpense";
import {MonthlyIncomeList} from "../../model/income/MonthlyIncomeList";
import {IncomeService} from "../../service/income.service";
import {FixedIncome} from "../../model/income/FixedIncome";
import {IRessourcesDisplayConfiguration} from "../../components/ressources-display/ressources-display.component";

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

  get ressourcesDisplayConfiguration(): IRessourcesDisplayConfiguration | undefined {
    if (!this.monthlyIncomeList || !this.monthlyExpenseList) return undefined;

    const incomeList: FixedIncome[] = [
      this.monthlyIncomeList.salary ?? [],
      this.monthlyIncomeList.freelance ?? [],
      ...(this.monthlyIncomeList.aids.flat() ?? [])
    ];

    return {
      incomeLabel: 'REVENUS',
      incomeTotalAmount: this.monthlyIncomeList?.totalIncomeAmount ?? -1,
      incomeList: incomeList.flat(),
      billLabel: 'FACTURES',
      billTotalAmount: this.monthlyExpenseList.billList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      }, 0),
      billList: this.monthlyExpenseList.billList.flat() ?? [],
      subscriptionLabel: 'ABONNEMENTS',
      subscriptionAmount: this.monthlyExpenseList.subscriptionList.reduce((accumulator: number, expense: FixedExpense) => {
        return accumulator + expense.amount;
      }, 0),
      subscriptionList: this.monthlyExpenseList.subscriptionList ?? [],
      debtLabel: 'DETTES',
      debtTotalAmount: this.monthlyExpenseList.creditList.reduce((accumulator: number, debt: FixedExpense) => {
        return accumulator + debt.amount;
      }, 0),
      debtList: this.monthlyExpenseList.creditList ?? [],
    };
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
