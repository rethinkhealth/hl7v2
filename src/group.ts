import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { IMessage } from "./message";

export interface IGroup {
  delimiters: IDelimiters;
}

export class Group implements IGroup {
  public readonly raw: string;
  public readonly messages: IMessage[];

  private _delimiters: IDelimiters;
  public get delimiters() {
    return this._delimiters;
  }

  constructor(message: string) {
    this.raw = message;
    this._delimiters = DefaultDelimiters;
    this.messages = [];
  }

  public toJson() {
    throw new Error("Method not implemented.");
  }
}
