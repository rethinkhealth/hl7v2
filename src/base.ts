/* eslint-disable typescript-sort-keys/string-enum */
import { DefaultDelimiters, IDelimiters } from "./delimiters";
import { MessagingEmitter } from "./emitter";
import { HL7v2Schema } from "./jsonschema";

export enum MessagingTypes {
  // Base
  INITIALIZATION_CONSTRUCT = "Initialization construct...",
  // Message
  MESSAGE_CREATED = "Message created",
  MESSAGE_NOT_FOUND = "Message not found",
  // Groups
  GROUP_CREATED = "Group created",
  GROUP_FOUND = "Group found",
  GROUP_RETRIEVED_ASSOCIATED_GROUPS = "Group retrieved associated groups",
  GROUP_RETRIEVED_ASSOCIATED_SEGMENTS = "Group retrieved associated segments",
  GROUP_SEGMENT_CREATED = "Group segment created",
  GROUP_SEARCH_INDICES_COMPLETED = "Group search indices completed",
}

export interface IConstruct {
  delimiters: IDelimiters;
  emitter: MessagingEmitter<MessagingTypes> | undefined;
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

  public get emitter(): MessagingEmitter<MessagingTypes> | undefined {
    return this.parent?.emitter;
  }

  protected error(message: string): boolean {
    return this.emitter?.emit("error", new Error(message)) ?? false;
  }

  protected warn(
    message: MessagingTypes,
    line: number,
    metadata: Record<string, any> | undefined = {}
  ): boolean {
    return (
      this.emitter?.emit("warning", message, line, this.raw, metadata) ?? false
    );
  }

  protected log(
    message: MessagingTypes,
    line: number,
    metadata: Record<string, any> | undefined = {}
  ): boolean {
    return (
      this.emitter?.emit("log", message, line, this.raw, metadata) ?? false
    );
  }
}
