// biome-ignore-all lint/performance/noBarrelFile: public package surface

// -------------
// Client
// -------------
export { MllpClient } from "./client";
export type { ClientTlsOptions, MllpClientOptions } from "./client";

// -------------
// Acknowledgment
// -------------
export type { Acknowledgment } from "./parse-ack";

// -------------
// Errors
// -------------
export { ClientErrorCode, MllpClientError } from "./errors";

// -------------
// Re-exports from @glion/ack so client consumers can catch the same
// exception types thrown by the receiver-side middleware.
// -------------
export {
  AckApplicationError,
  AckApplicationReject,
  AckCode,
  AckCommitError,
  AckCommitReject,
  AckException,
  ApplicationInternalError,
  CommitInternalError,
  Hl7ErrorCode,
  Severity,
  UnsupportedMessageTypeReject,
} from "@glion/ack";
export type {
  AckCodeValue,
  AckExceptionOptions,
  AckSuccessCode,
  Hl7ErrorCodeValue,
  SeverityValue,
} from "@glion/ack";
