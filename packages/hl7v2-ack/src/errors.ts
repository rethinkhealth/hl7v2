export interface AckErrorOptions {
  text?: string;
  errorCode?: string;
  severity?: string;
  location?: string;
  userMessage?: string;
}

export class AckError extends Error {
  readonly code = "AE" as const;
  readonly text: string | undefined;
  readonly errorCode: string | undefined;
  readonly severity: string | undefined;
  readonly location: string | undefined;
  readonly userMessage: string | undefined;

  constructor(message: string, options?: AckErrorOptions) {
    super(message);
    this.name = "AckError";
    this.text = options?.text;
    this.errorCode = options?.errorCode;
    this.severity = options?.severity;
    this.location = options?.location;
    this.userMessage = options?.userMessage;
  }
}

export class AckReject extends Error {
  readonly code = "AR" as const;
  readonly text: string | undefined;
  readonly errorCode: string | undefined;
  readonly severity: string | undefined;
  readonly location: string | undefined;
  readonly userMessage: string | undefined;

  constructor(message: string, options?: AckErrorOptions) {
    super(message);
    this.name = "AckReject";
    this.text = options?.text;
    this.errorCode = options?.errorCode;
    this.severity = options?.severity;
    this.location = options?.location;
    this.userMessage = options?.userMessage;
  }
}
