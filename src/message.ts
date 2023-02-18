import jsonata from "jsonata";

import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { MessageHeader } from "./header";
import { siuSchema } from "./schema";
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

  private _header: MessageHeader;
  public get header() {
    return this._header;
  }

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
    this._original = {} as any;
    this._header = {} as any;
    this._delimiters = DefaultDelimiters;

    // Setup
    this.setupMessageHeader();
    this.setupDelimiters();
    this.setupSegments();
    this.setupOriginal();
  }

  public toJson() {
    return this.original;
  }

  // TODO: This is a hack, need to find a better way to do this
  public validate(safe = true): any {
    switch (this.header.toJson()["9"]["1"]) {
      case "SIU":
        if (!safe) return siuSchema.parse(this.toJson());
        else return siuSchema.safeParse(this.toJson()).success;
      default:
        return false;
    }
  }

  private setupMessageHeader() {
    this._header = new MessageHeader(
      this.raw.split(this.delimiters.terminator)[0]
    );
    this.segments.push(this.header);
  }

  private setupDelimiters() {
    this._delimiters = this.header.delimiters;
  }

  private setupSegments() {
    const splits = this.raw
      .split(this.delimiters.terminator)
      // Remove the header since it is already parsed
      .slice(1)
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
      // check if the response includes already a similar segment
      if (response[segment.name]) {
        // if it does, check if it is an array
        if (Array.isArray(response[segment.name])) {
          // if it is, push the new segment to the array
          response[segment.name].push(segment.toJson());
        } else {
          // if it is not, create an array with the old and the new segment
          response[segment.name] = [response[segment.name], segment.toJson()];
        }
      } else {
        // if it does not, add the segment to the response
        response[segment.name] = segment.toJson();
      }
    });
    this._original = response;
  }
}
