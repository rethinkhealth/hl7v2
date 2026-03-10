export interface AckErrorOptions extends ErrorOptions {
  text?: string;
  errorCode?: string;
  severity?: string;
  location?: string;
  userMessage?: string;
}

type AckCode = "AE" | "AR";

export abstract class AckException extends Error {
  abstract readonly code: AckCode;
  readonly text: string | undefined;
  readonly errorCode: string | undefined;
  readonly severity: string | undefined;
  readonly location: string | undefined;
  readonly userMessage: string | undefined;

  constructor(message: string, options?: AckErrorOptions) {
    super(message, { cause: options?.cause });
    this.text = options?.text;
    this.errorCode = options?.errorCode;
    this.severity = options?.severity;
    this.location = options?.location;
    this.userMessage = options?.userMessage;
  }
}

export class AckError extends AckException {
  readonly code = "AE" as const;

  constructor(message: string, options?: AckErrorOptions) {
    super(message, options);
    this.name = "AckError";
  }
}

export class AckReject extends AckException {
  readonly code = "AR" as const;

  constructor(message: string, options?: AckErrorOptions) {
    super(message, options);
    this.name = "AckReject";
  }
}
