import {
  AckApplicationError,
  AckApplicationReject,
  AckCode,
  AckCommitError,
  AckCommitReject,
  Hl7ErrorCode,
  Severity,
} from "@glion/ack";
import type {
  AckCodeValue,
  AckException,
  Hl7ErrorCodeValue,
  SeverityValue,
} from "@glion/ack";
import type { Root } from "@glion/ast";
import { parseHL7v2 } from "@glion/parser";
import { value } from "@glion/util-query";

import { ClientErrorCode, MllpClientError } from "./errors";

/**
 * Successful ACK codes — the receiver accepted the message.
 */
const SUCCESS_CODES: ReadonlySet<string> = new Set([
  AckCode.ApplicationAccept,
  AckCode.CommitAccept,
]);

/**
 * Result of parsing an ACK response.
 */
export interface ParsedAck {
  /** The raw HL7v2 ACK message as received from the wire. */
  readonly raw: string;
  /** The full parsed ACK message tree. */
  readonly tree: Root;
  /** MSA-1 acknowledgment code (AA, AE, AR, CA, CE, CR). */
  readonly code: string;
  /** MSA-2 message control ID — references the original message's MSH-10. */
  readonly controlId: string;
  /** MSA-3 text message — present on NAK responses, optional on ACK. */
  readonly textMessage: string | undefined;
  /** ERR-3 HL7 error condition code (Table 0357), if an ERR segment is present. */
  readonly errorCode: string | undefined;
  /** ERR-4 severity (Table 0516), if an ERR segment is present. */
  readonly severity: string | undefined;
}

/**
 * Parse a raw ACK frame into structured fields.
 *
 * Throws `MllpClientError(MALFORMED_ACK)` when the response cannot be
 * parsed or is missing MSA-1.
 */
export function parseAck(raw: string): ParsedAck {
  let tree: Root;
  try {
    tree = parseHL7v2(raw);
  } catch (error) {
    throw new MllpClientError(
      ClientErrorCode.MALFORMED_ACK,
      `Failed to parse ACK response: ${error instanceof Error ? error.message : String(error)}`,
      { cause: error }
    );
  }

  const code = value(tree, "MSA-1")?.value;
  if (!code) {
    throw new MllpClientError(
      ClientErrorCode.MALFORMED_ACK,
      "ACK response is missing MSA-1 acknowledgment code"
    );
  }

  return {
    code,
    controlId: value(tree, "MSA-2")?.value ?? "",
    errorCode: value(tree, "ERR-3")?.value ?? undefined,
    raw,
    severity: value(tree, "ERR-4")?.value ?? undefined,
    textMessage: value(tree, "MSA-3")?.value ?? undefined,
    tree,
  };
}

/**
 * Map a NAK (`MSA-1` ∈ {AE, AR, CE, CR}) to the matching `AckException`
 * subclass so callers can catch the same error types whether they're
 * the sender or the receiver. The original raw ACK is propagated to the
 * exception's `raw` attribute.
 */
function buildAckException(parsed: ParsedAck): AckException {
  const message =
    parsed.textMessage ?? `Acknowledgment ${parsed.code} from receiver`;
  const errorCode = (parsed.errorCode ??
    Hl7ErrorCode.ApplicationInternalError) as Hl7ErrorCodeValue;
  const severity = (parsed.severity ?? Severity.Error) as SeverityValue;
  const options = { errorCode, raw: parsed.raw, severity };

  switch (parsed.code as AckCodeValue) {
    case AckCode.ApplicationError: {
      return new AckApplicationError(message, options);
    }
    case AckCode.ApplicationReject: {
      return new AckApplicationReject(message, options);
    }
    case AckCode.CommitError: {
      return new AckCommitError(message, options);
    }
    case AckCode.CommitReject: {
      return new AckCommitReject(message, options);
    }
    default: {
      // Should never reach here — caller checks for NAK before invoking.
      return new AckApplicationError(message, options);
    }
  }
}

/**
 * Inspect a parsed ACK and throw the matching `AckException` subclass
 * when MSA-1 indicates a NAK. Returns the parsed ACK on success.
 */
export function throwOnNak(parsed: ParsedAck): ParsedAck {
  if (SUCCESS_CODES.has(parsed.code)) {
    return parsed;
  }
  throw buildAckException(parsed);
}
