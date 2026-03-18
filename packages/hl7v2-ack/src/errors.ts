export interface AckExceptionOptions extends ErrorOptions {
  errorCode: string;
  severity?: string;
}

type AckCode = "AE" | "AR" | "CE" | "CR";

export abstract class AckException extends Error {
  abstract readonly code: AckCode;
  readonly errorCode: string;
  readonly severity: string | undefined;

  constructor(message: string, options: AckExceptionOptions) {
    super(message, { cause: options.cause });
    this.errorCode = options.errorCode;
    this.severity = options.severity;
  }
}

export class AckApplicationError extends AckException {
  readonly code = "AE" as const;

  constructor(message: string, options: AckExceptionOptions) {
    super(message, options);
    this.name = "AckApplicationError";
  }
}

export class AckApplicationReject extends AckException {
  readonly code = "AR" as const;

  constructor(message: string, options: AckExceptionOptions) {
    super(message, options);
    this.name = "AckApplicationReject";
  }
}

export class AckCommitError extends AckException {
  readonly code = "CE" as const;

  constructor(message: string, options: AckExceptionOptions) {
    super(message, options);
    this.name = "AckCommitError";
  }
}

export class AckCommitReject extends AckException {
  readonly code = "CR" as const;

  constructor(message: string, options: AckExceptionOptions) {
    super(message, options);
    this.name = "AckCommitReject";
  }
}
