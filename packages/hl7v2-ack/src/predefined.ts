import { AckError, AckReject } from "./errors";
import type { AckErrorOptions } from "./errors";

type PredefinedOptions = Omit<AckErrorOptions, "errorCode" | "severity">;

export class AckUnknownPatientError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "204", severity: "E" });
    this.name = "AckUnknownPatientError";
  }
}

export class AckDuplicateMessageError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "205", severity: "E" });
    this.name = "AckDuplicateMessageError";
  }
}

export class AckInternalError extends AckError {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "207", severity: "E" });
    this.name = "AckInternalError";
  }
}

export class AckUnsupportedMessageTypeError extends AckReject {
  constructor(message: string, options?: PredefinedOptions) {
    super(message, { ...options, errorCode: "200", severity: "E" });
    this.name = "AckUnsupportedMessageTypeError";
  }
}
