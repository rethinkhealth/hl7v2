import { MessagingEmitter } from "./emitter";

export enum MessagingTypes {
  // Base
  INITIALIZATION_CONSTRUCT = "Initialization construct...",
  // Message
  MESSAGE_CREATED = "Message created",
  MESSAGE_NOT_FOUND = "Message not found",
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
    this.log(MessagingTypes.INITIALIZATION_CONSTRUCT, 0);
  }

  protected error(message: string): boolean {
    return this.emitter?.emit("error", new Error(message)) ?? false;
  }

  protected warn(message: MessagingTypes, line: number): boolean {
    return this.emitter?.emit("warning", message, line, this.raw) ?? false;
  }

  protected log(message: MessagingTypes, line: number): boolean {
    return this.emitter?.emit("log", message, line, this.raw) ?? false;
  }
}
