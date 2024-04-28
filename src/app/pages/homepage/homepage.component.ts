import {Component} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {MonthlyExpenseList} from "../../model/expense/MonthlyExpenseList";
import {InvestmentRecap} from "../../model/investment/InvestmentRecap";
import {InvestmentService} from "../../service/investment.service";
import {InvestmentAccountShort} from "../../model/investment/investment-account-short";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  private monthlyExpenseList: MonthlyExpenseList | undefined;
  private investmentRecap: InvestmentRecap | undefined;

  get getMonthlyExpenseList(): MonthlyExpenseList | undefined {
    return this.monthlyExpenseList;
  }

  get getTotalAmountInvested(): number {
    return 0;
  }

  get peaAccountShortList(): InvestmentAccountShort[] {
    return this.investmentRecap?.investmentPeaAccountList ?? [];
  }

  get perAccountShort(): InvestmentAccountShort | undefined {
    return this.investmentRecap?.investmentPerAccount ?? undefined;
  }

  constructor(private expenseService: ExpenseService, private investmentService: InvestmentService) {
  }

  ngOnInit(): void {
    this.expenseService.getMonthlyExpenseList().subscribe({
      next: (response: MonthlyExpenseList | undefined) => this.monthlyExpenseList = response,
      error: (err) => console.error('Erreur lors de la récupération des données :', err),
    });
    this.investmentService.getInvestmentRecap().subscribe({
      next: (response: InvestmentRecap | undefined) => this.investmentRecap = response,
      error: (err) => console.error('Erreur lors de la récupération des données :', err),
    })
  }

}
