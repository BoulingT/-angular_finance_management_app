import {Component} from '@angular/core';
import {ExpenseService} from "../service/expense.service";
import {MonthlyExpenseList} from "../model/MonthlyExpenseList";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  private monthlyExpenseList: MonthlyExpenseList | undefined;

  get getMonthlyExpenseList(): MonthlyExpenseList | undefined {
    return this.monthlyExpenseList;
  }

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit(): void {
    this.expenseService.getMonthlyExpenseList().subscribe({
      next: (response: MonthlyExpenseList | undefined) => this.monthlyExpenseList = response,
      error: (err) => console.error('Erreur lors de la récupération des données :', err),
    });
  }

}
