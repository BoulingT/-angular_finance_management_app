import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MonthlyIncomeList} from "../model/income/MonthlyIncomeList";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private apiUrl: string = "http://localhost:8080/income/monthly-income";

  constructor(private httpClient: HttpClient) {
  }

  getMonthlyIncomeList(): Observable<MonthlyIncomeList | undefined> {
    return this.httpClient.get<MonthlyIncomeList>(this.apiUrl).pipe(
      tap((data) => this.log(data)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  private log(response: MonthlyIncomeList | undefined): void {
    console.table(response);
  }
}
