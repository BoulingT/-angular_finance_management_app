interface IInvestmentAccountShort {
  id: number,
  brokerName: string,
  totalValue: number,
}

export class InvestmentAccountShort {

  constructor(public id: number, public brokerName: string, public totalValue: number) {
  }
}
