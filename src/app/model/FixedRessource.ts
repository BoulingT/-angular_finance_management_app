interface IFixedResource {
  id: number;
  label: string;
  amount: number;
}

export abstract class FixedResource implements IFixedResource {
  protected _id: number;
  protected _label: string;
  protected _amount: number;

  constructor(id: number, label: string, amount: number) {
    this._id = id;
    this._label = label;
    this._amount = amount;
  }

  get id(): number {
    return this._id;
  }

  get label(): string {
    return this._label;
  }

  get amount(): number {
    return this._amount;
  }
}
