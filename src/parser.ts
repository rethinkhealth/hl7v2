import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { ISegment, Segment } from "./segment";

export interface IParser {
  delimiters: IDelimiters;
  raw: string;
  segments: ISegment[];
}

export class Parser implements IParser {
  public readonly raw: string;
  public readonly segments: ISegment[];

  private _delimiters: IDelimiters;
  public get delimiters(): IDelimiters {
    return this._delimiters;
  }

  constructor(message: string) {
    this.raw = message;
    this.segments = [];
    this._delimiters = {} as any;

    // Setup
    this.setupDelimiters();
    this.setupSegments();
  }

  public toJson() {
    const response = {} as any;
    this.segments.forEach((segment) => {
      response[segment.name] = segment.toJson();
    });
    return response;
  }

  private setupDelimiters() {
    // TODO: Retrieve delimiters from the message itself.
    this._delimiters = DefaultDelimiters;
  }

  private setupSegments() {
    const splits = this.raw
      .split(this.delimiters.terminator)
      .filter((a) => a != "");
    splits.forEach((split) => {
      const segment = new Segment(split, {
        delimiters: this.delimiters,
      });
      this.segments.push(segment);
    });
  }
}
