export interface AckErrorOptions extends ErrorOptions {
  errorCode: string;
  severity?: string;
}

type AckCode = "AE" | "AR";

export abstract class AckException extends Error {
  abstract readonly code: AckCode;
  readonly errorCode: string;
  readonly severity: string | undefined;

  constructor(message: string, options: AckErrorOptions) {
    super(message, { cause: options.cause });
    this.errorCode = options.errorCode;
    this.severity = options.severity;
  }
}

export class AckError extends AckException {
  readonly code = "AE" as const;

  constructor(message: string, options: AckErrorOptions) {
    super(message, options);
    this.name = "AckError";
  }
}

export class AckReject extends AckException {
  readonly code = "AR" as const;

  constructor(message: string, options: AckErrorOptions) {
    super(message, options);
    this.name = "AckReject";
  }
}
