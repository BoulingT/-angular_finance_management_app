import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import {MonthlyExpenses} from "../model/MonthlyExpenses";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiURL: string = "http://localhost:8080/api/expenses/get-monthly-expense-list";

  constructor(private httpClient: HttpClient) { }

  getMonthlyExpenseList(): Observable<MonthlyExpenses> {
    return this.httpClient.get<MonthlyExpenses>(this.apiURL);
  }
}
