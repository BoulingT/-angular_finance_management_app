import {Component, OnInit} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {MonthlyExpenseList} from "../../model/expense/MonthlyExpenseList";
import {FixedExpense} from "../../model/expense/FixedExpense";
import {MonthlyIncomeList} from "../../model/income/MonthlyIncomeList";
import {IncomeService} from "../../service/income.service";
import {FixedIncome} from "../../model/income/FixedIncome";
import {
  RessourceDisplayConfiguration
} from "../../components/ressources-display/ressources-display.component";

@Component({
  selector: 'app-manage-ressources',
  templateUrl: './manage-ressources.component.html',
  styleUrls: ['./manage-ressources.component.scss']
})
export class ManageRessourcesComponent implements OnInit {
  monthlyExpenseList: MonthlyExpenseList | undefined;
  monthlyIncomeList: MonthlyIncomeList | undefined;

  get ressourceDisplayConfigurationList(): RessourceDisplayConfiguration[] {
    return [
      this.revenuesRessourceDisplayConfiguration(),
      this.billsRessourceDisplayConfiguration(),
      this.subscriptionRessourceDisplayConfiguration(),
      this.debtRessourceDisplayConfiguration(),
    ];
  }

  get infoCardConfigurationList() {
    return [
      this.revenuesInfoCardConfiguration(),
      this.expensesInfoCardConfiguration(),
      this.savingsInfoCardConfiguration(),
      this.creditCardInfoConfiguration()
    ]
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

  private revenuesRessourceDisplayConfiguration(): RessourceDisplayConfiguration {
    if (!this.monthlyIncomeList) return {
      label: 'ERROR',
      totalAmount: -9999,
      list: [],
    };
    const incomeList: FixedIncome[] = [
      this.monthlyIncomeList.salary ?? [],
      this.monthlyIncomeList.freelance ?? [],
      ...(this.monthlyIncomeList.aids.flat() ?? [])
    ];
    return {
      label: 'REVENUS',
      totalAmount: this.monthlyIncomeList?.totalIncomeAmount ?? -1,
      list: incomeList.flat() ?? [],
    }
  }

  private billsRessourceDisplayConfiguration(): RessourceDisplayConfiguration {
    if (!this.monthlyExpenseList) return {
      label: 'ERROR',
      totalAmount: -9999,
      list: [],
    };
    return {
      label: 'FACTURES',
      totalAmount: this.monthlyExpenseList.billList.reduce((accumulator, bill) => {
        return accumulator + bill.amount;
      }, 0),
      list: this.monthlyExpenseList.billList,
    }
  }

  private subscriptionRessourceDisplayConfiguration(): RessourceDisplayConfiguration {
    if (!this.monthlyExpenseList) return {
      label: 'ERROR',
      totalAmount: -9999,
      list: [],
    };
    return {
      label: 'ABONNEMENTS',
      totalAmount: this.monthlyExpenseList.subscriptionList.reduce((accumulator, subscription) => {
        return accumulator + subscription.amount;
      }, 0),
      list: this.monthlyExpenseList.subscriptionList,
    }

  }

  private debtRessourceDisplayConfiguration(): RessourceDisplayConfiguration {
    if (!this.monthlyExpenseList) return {
      label: 'ERROR',
      totalAmount: -9999,
      list: [],
    };
    return {
      label: 'DETTES',
      totalAmount: this.monthlyExpenseList.creditList.reduce((accumulator, credit) => {
        return accumulator + credit.amount;
      }, 0),
      list: this.monthlyExpenseList.creditList,
    }
  }

  private revenuesInfoCardConfiguration() {
    return {
      label: 'REVENUS',
      amount: this.monthlyIncomeList?.totalIncomeAmount,
    }
  }

  private expensesInfoCardConfiguration() {
    if (!this.monthlyExpenseList) return undefined;
    let total: number = 0;
    total = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList?.billList, total);
    total = this.getTotalAmountFixedExpenseList(this.monthlyExpenseList?.subscriptionList, total);
    return {
      label: 'DEPENSES MENSUELLES',
      amount: total,
    };
  }

  private savingsInfoCardConfiguration() {
    return {
      label: 'EPARGNE MENSUELLE',
      amount: 600,
    };
  }

  private creditCardInfoConfiguration() {
    return {
      label: 'DETTES EN COURS',
      amount: this.monthlyExpenseList?.creditList.reduce((accumulator, credit) => {
        return accumulator + credit.amount;
      }, 0),
    }
  }

  private getTotalAmountFixedExpenseList(fixedExpenseList: FixedExpense[], totalAmount: number): number {
    if (fixedExpenseList.length === 0) return totalAmount;
    return fixedExpenseList.reduce(
      (total: number, monthlyExpense: FixedExpense) => total + monthlyExpense.amount, totalAmount
    );
  }
}
