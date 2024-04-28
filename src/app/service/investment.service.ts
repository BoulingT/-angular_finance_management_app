import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InvestmentRecap} from "../model/investment/InvestmentRecap";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private apiUrl: string = "\"http://localhost:8080/account/investments";

  constructor(private httpClient: HttpClient) {
  }

  getInvestmentRecap() {
    return this.httpClient.get<InvestmentRecap>(this.apiUrl).pipe();
  }

}
