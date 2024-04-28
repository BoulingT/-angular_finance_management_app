import {Component, Input, OnInit} from '@angular/core';
import {FixedExpense} from "../../model/expense/FixedExpense";
import {FixedIncome} from "../../model/income/FixedIncome";
import {MonthlyIncomeList} from "../../model/income/MonthlyIncomeList";

export interface IRessourcesDisplayConfiguration {
  incomeLabel: string,
  incomeTotalAmount: number,
  incomeList: FixedIncome[];
  billLabel: string,
  billTotalAmount: number,
  billList: FixedExpense[];
  subscriptionLabel: string,
  subscriptionAmount: number,
  subscriptionList: FixedExpense[],
  debtLabel: string,
  debtTotalAmount: number,
  debtList: FixedExpense[],
}

@Component({
  selector: 'app-ressources-display',
  templateUrl: './ressources-display.component.html',
  styleUrls: ['./ressources-display.component.scss']
})
export class RessourcesDisplayComponent implements OnInit {
  @Input() incomeListConfiguration: IRessourcesDisplayConfiguration | undefined;

  ngOnInit() {
  }
}
