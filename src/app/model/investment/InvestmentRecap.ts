import {InvestmentAccountShort} from "./investment-account-short";

interface IInvestmentRecap {
  id: number,
  investmentPeaAccountList: InvestmentAccountShort[],
  investmentPerAccount: InvestmentAccountShort,
  totalValue: number,
}

export class InvestmentRecap implements IInvestmentRecap {

  constructor(
    public id: number,
    public investmentPeaAccountList: InvestmentAccountShort[],
    public investmentPerAccount: InvestmentAccountShort,
    public totalValue: number
  ) {
  }
}
