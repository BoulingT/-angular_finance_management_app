import {Injectable} from '@angular/core';
import {Observable, of, tap, catchError} from 'rxjs';
import {MonthlyExpenseList} from "../model/expense/MonthlyExpenseList";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiURL: string = "http://localhost:8080/api/expense/monthly-expense-list";

  constructor(private httpClient: HttpClient) {
  }

  getMonthlyExpenseList(): Observable<MonthlyExpenseList | undefined> {
    return this.httpClient.get<MonthlyExpenseList>(this.apiURL).pipe(
      tap((data) => this.log(data)),
      catchError((error) => {
        return of(undefined);
      })
    );
  }

  private handleError(error: Error, errorValue: any): void {
    console.log(error);
    return errorValue;
  }

  private log(response: MonthlyExpenseList | undefined): void {
    console.table(response);
  }
}
