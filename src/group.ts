import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { ISegment } from "./segment";

export interface IGroup {
  delimiters: IDelimiters;
  segments: Record<string, ISegment[]>;
  toJson(): any;
}

export class Group implements IGroup {
  public readonly raw: string;

  private _delimiters: IDelimiters;
  public get delimiters() {
    return this._delimiters;
  }

  private _segments: Record<string, ISegment[]>;
  public get segments() {
    return this._segments;
  }

  constructor(message: string) {
    this.raw = message;
    this._delimiters = DefaultDelimiters;
    this._segments = {} as any;
  }

  public toJson() {
    throw new Error("Method not implemented.");
  }
}
