import { SEQUENCE_STARTING_INDEX } from "./constants";
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { MessageHeader } from "./header";
import { JsonSchema } from "./schema";
import { ISegment, Segment } from "./segment";

export interface IMessage {
  delimiters: IDelimiters;
  header: ISegment;
  raw: string;
  schema: JsonSchema | undefined;
  segments: Record<string, ISegment | ISegment[]>;
}

export interface MessageOptions {
  useSchema?: boolean;
}

const defaultOptions: Partial<MessageOptions> = {
  useSchema: false,
};

export class Message implements IMessage {
  public readonly raw: string;
  public readonly segments: Record<string, ISegment | ISegment[]>;
  public readonly options: MessageOptions;

  private _header: MessageHeader;
  public get header() {
    return this._header;
  }

  private _delimiters: IDelimiters;
  public get delimiters() {
    return this._delimiters;
  }

  private _schema: JsonSchema | undefined;
  public get schema() {
    return this._schema;
  }

  constructor(message: string, options?: MessageOptions) {
    this.options = { ...defaultOptions, ...options };
    this.raw = message;
    this.segments = {} as any;
    this._header = {} as any;
    this._delimiters = DefaultDelimiters;
    this._schema = {} as any;

    // Setup
    this.setupMessageHeader();
    this.setupSchema();
    this.setupDelimiters();
    this.setupSegments();
  }

  public toJson<T = any>() {
    const groups = Object.keys(this.schema?.properties || {}).filter((key) =>
      this.schema?.properties?.[key].$ref?.includes("/schemas")
    );
    console.log(groups);
    // This code takes the segments from the JSON, and returns them as a Record
    // with any arrays of segment objects being returned as an array of JSON
    // objects.
    return Object.keys(this.segments).reduce((acc, key) => {
      const segment = this.segments[key];
      if (Array.isArray(segment)) {
        acc[key] = segment.map((s) => s.toJson());
      } else {
        acc[key] = segment.toJson();
      }
      return acc;
    }, {} as Record<string, any>) as T;
  }

  private setupMessageHeader() {
    this._header = new MessageHeader(
      this.raw.split(this.delimiters.terminator)[0]
    );
    this.segments[this.header.name] = this.header;
  }

  private setupSchema() {
    if (this.options.useSchema)
      this._schema = require(`./schema/${this.header.messageType}.schema.json`);
  }

  private setupDelimiters() {
    this._delimiters = this.header.delimiters;
  }

  private setupSegments() {
    const rootSegments = Object.keys(this.schema?.properties || {}).filter(
      (a) => !this.schema?.properties?.[a].$ref?.includes("/schemas")
    );
    this.raw
      .split(this.delimiters.terminator)
      // Remove the header since it is already parsed
      .slice(1)
      .filter((a) => a != "")
      .forEach((split, index) => {
        if (
          rootSegments.includes(split.split(this.delimiters.fieldSeparator)[0])
        ) {
          const segment = new Segment(split, {
            delimiters: this.delimiters,
            line: index + SEQUENCE_STARTING_INDEX + 1,
          });
          if (this.segments[segment.name]) {
            if (Array.isArray(this.segments[segment.name])) {
              (this.segments[segment.name] as ISegment[]).push(segment);
            } else {
              this.segments[segment.name] = [
                this.segments[segment.name] as ISegment,
                segment,
              ];
            }
          } else {
            this.segments[segment.name] = segment;
          }
        }
      });
  }
}
