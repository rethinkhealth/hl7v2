import { AckError, AckReject } from "./errors";
import type { AckErrorOptions } from "./errors";

type PredefinedOptions = Omit<AckErrorOptions, "errorCode" | "severity">;

export class UnknownPatientError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "204", severity: "E" });
    this.name = "UnknownPatientError";
  }
}

export class DuplicateMessageError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "205", severity: "E" });
    this.name = "DuplicateMessageError";
  }
}

export class InternalError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "207", severity: "E" });
    this.name = "InternalError";
  }
}

export class UnsupportedMessageTypeError extends AckReject {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "200", severity: "E" });
    this.name = "UnsupportedMessageTypeError";
  }
}
