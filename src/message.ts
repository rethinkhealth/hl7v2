import jsonata, { Expression } from "jsonata";

import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { SegmentType } from "./enum";
import { ISegment, Segment } from "./segment";

export interface IMessage {
  delimiters: IDelimiters;
  header: ISegment;
  original: Record<string, any>;
  raw: string;
  segments: ISegment[];
}

export class Message implements IMessage {
  public readonly raw: string;
  public readonly segments: ISegment[];

  private _delimiters: IDelimiters;
  public get delimiters() {
    return this._delimiters;
  }

  private _original: Record<string, any>;
  public get original() {
    return this._original;
  }

  public async transform(expression: string) {
    const jsonataExpression = jsonata(expression);
    return await jsonataExpression.evaluate(this.original);
  }

  constructor(message: string) {
    this.raw = message;
    this.segments = [];
    this._delimiters = {} as any;
    this._original = {} as any;

    // Setup
    this.setupDelimiters();
    this.setupSegments();
    this.setupOriginal();
  }

  public get header(): ISegment {
    const header = this.segments.find((a) => a.name === SegmentType.MSH);
    if (!header) throw new Error("Header does not exist.");
    return header;
  }

  public toJson() {
    return this.original;
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

  private setupOriginal() {
    const response = {} as any;
    this.segments.forEach((segment) => {
      response[segment.name] = segment.toJson();
    });
    this._original = response;
  }
}
