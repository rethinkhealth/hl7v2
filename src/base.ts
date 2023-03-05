/* eslint-disable typescript-sort-keys/string-enum */
import { MessagingEmitter } from "./emitter";

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

export interface ConstructOptions {
  emitter?: MessagingEmitter<MessagingTypes>;
}

export abstract class Construct {
  // !Properties
  protected emitter: MessagingEmitter<MessagingTypes> | undefined;
  public readonly raw: string;

  constructor(raw: string, options: ConstructOptions = {}) {
    this.raw = raw;
    this.emitter = options.emitter;
  }

  protected abstract tree: string;

  protected error(message: string): boolean {
    return this.emitter?.emit("error", new Error(message)) ?? false;
  }

  protected warn(
    message: MessagingTypes,
    line: number,
    metadata: Record<string, any> | undefined = {}
  ): boolean {
    return (
      this.emitter?.emit(
        "warning",
        message,
        this.tree,
        line,
        this.raw,
        metadata
      ) ?? false
    );
  }

  protected log(
    message: MessagingTypes,
    line: number,
    metadata: Record<string, any> | undefined = {}
  ): boolean {
    return (
      this.emitter?.emit("log", message, this.tree, line, this.raw, metadata) ??
      false
    );
  }
}
