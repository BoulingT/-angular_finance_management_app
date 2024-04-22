import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {MonthlyExpenses} from "../model/MonthlyExpenses";
import {ExpenseService} from "../service/expense.service";
import {FixedExpense} from "../model/FixedExpense";

@Component({
  selector: 'app-monthly-expenses-recap',
  templateUrl: './monthly-expenses-recap.component.html',
  styleUrls: ['./monthly-expenses-recap.component.scss']
})
export class MonthlyExpensesRecapComponent implements OnInit {

  monthlyExpenseList: MonthlyExpenses | undefined;
  isLoading: boolean = true;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenseService.getMonthlyExpenseList().subscribe({
      next: (response) => {
        this.monthlyExpenseList = response;
        this.isLoading = false; // Fin du chargement
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
        this.isLoading = false; // Fin du chargement en cas d'erreur
      }
    });
  }

}
