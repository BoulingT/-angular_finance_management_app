import {Component} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {MonthlyExpenseList} from "../../model/expense/MonthlyExpenseList";
import {InvestmentRecap} from "../../model/investment/InvestmentRecap";
import {InvestmentService} from "../../service/investment.service";
import {InvestmentAccountShort} from "../../model/investment/investment-account-short";
import {Observable} from "rxjs";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  monthlyExpenseList$!: Observable<MonthlyExpenseList>;
  private investmentRecap: InvestmentRecap | undefined;

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
    this.monthlyExpenseList$ = this.expenseService.getMonthlyExpenseList$();
  }

  ngOnInit(): void {
    this.investmentService.getInvestmentRecap$().subscribe({
      next: (response: InvestmentRecap | undefined) => this.investmentRecap = response,
      error: (err) => console.error('Erreur lors de la récupération des données :', err),
    })
  }

}
