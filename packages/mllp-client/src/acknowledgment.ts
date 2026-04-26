/**
 * Acknowledgment parsing for the MLLP client.
 *
 * This module owns three things:
 *
 * 1. The {@link Acknowledgment} interface — a structured view of an ACK message
 *    exposing the fields callers most often need (MSA-1/2/3, ERR-3/4) without
 *    forcing them to walk the AST themselves.
 * 2. {@link parseAck} — turns a raw wire-format ACK string into an
 *    {@link Acknowledgment}, or throws {@link MllpClientError} when the payload
 *    is not a recognisable ACK.
 * 3. {@link throwOnNak} — inspects an {@link Acknowledgment} and throws the
 *    matching `AckException` subclass when MSA-1 indicates a NAK.
 *
 * Both helpers are internal to the package — only the {@link Acknowledgment}
 * type is re-exported from `@glion/mllp-client`. Application code interacts
 * with parsed acknowledgments through the return value (and thrown errors)
 * of `MllpClient.send()`.
 *
 * The HL7v2 ACK structure used here (Section 2.9.2 of the HL7v2 standard):
 *
 * MSH | header (sender, receiver, timestamp, message control id) MSA |
 * acknowledgment code (MSA-1), original control id (MSA-2), text (MSA-3) ERR |
 * optional error segment with HL7 condition code (ERR-3) and severity (ERR-4)
 *
 * @module
 */

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
  AckExceptionOptions,
  Hl7ErrorCodeValue,
  SeverityValue,
} from "@glion/ack";
import type { Root } from "@glion/ast";
import { parseHL7v2 } from "@glion/parser";
import { value } from "@glion/util-query";

import { ClientErrorCode, MllpClientError } from "./errors";

// ---------------------------------------------------------------------------
// Public type
// ---------------------------------------------------------------------------

/**
 * An HL7v2 acknowledgment message returned by an MLLP receiver, with
 * structured access to the fields callers most often need.
 *
 * Returned by `MllpClient.send()` on AA/CA. On NAK (AE/AR/CE/CR) an
 * `AckException` is thrown instead — the same shape is available there
 * via `error.message` (MSA-3), `error.errorCode` (ERR-3), `error.severity`
 * (ERR-4), and `error.raw` (the wire ACK).
 */
export interface Acknowledgment {
  /** The raw HL7v2 ACK message as received from the wire. */
  readonly raw: string;
  /**
   * The full ACK message AST. Use for advanced inspection beyond the structured
   * fields below.
   */
  readonly tree: Root;
  /** MSA-1 acknowledgment code (`AA`, `AE`, `AR`, `CA`, `CE`, or `CR`). */
  readonly code: string;
  /** MSA-2 message control ID — references the original message's MSH-10. */
  readonly controlId: string;
  /** MSA-3 text message. Typically populated on NAK; optional on accept ACKs. */
  readonly textMessage: string | undefined;
  /**
   * ERR-3 HL7 error condition code (Table 0357). Present when an ERR segment is
   * included.
   */
  readonly errorCode: string | undefined;
  /** ERR-4 severity (Table 0516). Present when an ERR segment is included. */
  readonly severity: string | undefined;
}

// ---------------------------------------------------------------------------
// Internal constants
// ---------------------------------------------------------------------------

/**
 * MSA-1 codes that mean "the receiver accepted the message". Anything
 * outside this set is a NAK and produces a thrown `AckException`.
 *
 * See HL7v2 Table 0008 — Acknowledgment Codes.
 */
const SUCCESS_CODES: ReadonlySet<string> = new Set<string>([
  AckCode.ApplicationAccept,
  AckCode.CommitAccept,
]);

// ---------------------------------------------------------------------------
// parseAck
// ---------------------------------------------------------------------------

/**
 * Parse a raw ACK frame string into an {@link Acknowledgment}.
 *
 * Field extraction is delegated to `@glion/util-query`'s `value()` helper —
 * this is the same path used elsewhere in the Glion stack and avoids
 * hand-rolling AST traversal here.
 *
 * Throws `MllpClientError(MALFORMED_ACK)` when:
 *
 * - The parser fails to produce a tree (malformed HL7v2), or
 * - MSA-1 is missing (the message is not a valid acknowledgment).
 *
 * Other missing fields (MSA-3, ERR-3, ERR-4) are not fatal — they are
 * exposed as `undefined` because real-world ACKs frequently omit them.
 */
export function parseAck(raw: string): Acknowledgment {
  const tree = parseTreeOrThrow(raw);
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
 * Run the HL7v2 parser, wrapping any thrown error in
 * `MllpClientError(MALFORMED_ACK)` so callers see one error shape
 * regardless of which lower-level component failed.
 */
function parseTreeOrThrow(raw: string): Root {
  try {
    return parseHL7v2(raw);
  } catch (error) {
    throw new MllpClientError(
      ClientErrorCode.MALFORMED_ACK,
      `Failed to parse ACK response: ${formatCause(error)}`,
      { cause: error }
    );
  }
}

// ---------------------------------------------------------------------------
// throwOnNak
// ---------------------------------------------------------------------------

/**
 * Inspect an {@link Acknowledgment} and throw the matching `AckException`
 * subclass when MSA-1 indicates a NAK. Returns the acknowledgment unchanged
 * on AA/CA.
 *
 * The thrown exception mirrors the receiver-side exception types — a
 * caller that already handles `AckApplicationError` from a server's
 * middleware can reuse the same `catch` blocks here.
 */
export function throwOnNak(ack: Acknowledgment): Acknowledgment {
  if (SUCCESS_CODES.has(ack.code)) {
    return ack;
  }
  throw buildAckException(ack);
}

/**
 * Convert a NAK acknowledgment into an `AckException` subclass.
 *
 * The fallbacks below preserve a useful exception even when the receiver
 * sent a sparse NAK: a missing MSA-3 yields a synthesised message; a
 * missing ERR segment yields the catch-all `ApplicationInternalError`
 * code (`207`) and severity Error (`E`). This matches the receiver-side
 * conventions in `@glion/ack`.
 */
function buildAckException(ack: Acknowledgment): AckException {
  const message = ack.textMessage ?? `Acknowledgment ${ack.code} from receiver`;
  const options: AckExceptionOptions = {
    errorCode: (ack.errorCode ??
      Hl7ErrorCode.ApplicationInternalError) as Hl7ErrorCodeValue,
    raw: ack.raw,
    severity: (ack.severity ?? Severity.Error) as SeverityValue,
  };

  switch (ack.code as AckCodeValue) {
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
      // Unreachable in practice — `throwOnNak` filters AA/CA before
      // calling us, and any other value of MSA-1 maps to one of the four
      // cases above. Map unknown codes to ApplicationError so the caller
      // still gets a typed exception rather than a silent return.
      return new AckApplicationError(message, options);
    }
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Render an unknown thrown value as a human-readable string for error messages. */
function formatCause(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
