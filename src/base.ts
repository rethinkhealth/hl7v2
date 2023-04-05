/* eslint-disable typescript-sort-keys/string-enum */
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { HL7v2Schema } from "./jsonschema";

export interface IConstruct {
  delimiters: IDelimiters;
  parent: Construct | undefined;
  raw: string;
  schema: HL7v2Schema | undefined;
}

export abstract class Construct implements IConstruct {
  // !Properties
  public readonly raw: string;
  public readonly parent: Construct | undefined;

  protected _delimiters: IDelimiters | undefined;
  protected _schema: HL7v2Schema | undefined;

  constructor(scope: Construct | undefined, raw: string) {
    this.parent = scope;
    this.raw = raw;
  }

  public get schema(): HL7v2Schema | undefined {
    return this._schema ?? this.parent?.schema;
  }

  public get delimiters(): IDelimiters {
    return this._delimiters ?? this.parent?.delimiters ?? DefaultDelimiters;
  }
}
