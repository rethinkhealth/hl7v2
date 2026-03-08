import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
import { c, f, s } from "@rethinkhealth/hl7v2-builder";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { Timestamp } from "@rethinkhealth/hl7v2-util-timestamp";
import { nanoid } from "nanoid";

import type { AckCode, AckError } from "./types";

export function resolveTimestamp(
  ts: Timestamp | Date | string | undefined
): string {
  if (ts instanceof Timestamp) {
    return ts.toString();
  }
  if (ts instanceof Date) {
    return Timestamp.from(ts).toString();
  }
  return ts ?? Timestamp.now().toString();
}

/**
 * Generate a unique message control ID for an ACK message (MSH-10).
 *
 * Uses nanoid to produce a 20-character, cryptographically random string.
 * The 20-character length fits the MSH-10 limit for all HL7v2 versions
 * (≤ 2.5 allows 20 chars, v2.6+ allows 199 chars).
 *
 * The default nanoid alphabet (`A-Za-z0-9_-`) is safe for HL7v2 — it
 * contains none of the reserved delimiter characters (`|`, `^`, `~`, `\`, `&`).
 *
 * nanoid uses the Web Crypto API internally, making it compatible with
 * Node.js, Bun, Deno, Cloudflare Workers, and browsers.
 *
 * To provide a custom ID, use the `id` option on
 * {@link Options} instead.
 */
export function generateControlId(): string {
  return nanoid(20);
}

/**
 * Extract a string value from the AST at the given HL7 path.
 * Returns an empty string if the path is not found or the value is null.
 */
function extractValue(root: Root, path: string): string {
  const result = value(root, path);
  return result?.value ?? "";
}

/**
 * Build the MSH segment for the ACK message.
 *
 * Swaps sender/receiver from the inbound message (MSH-3 ↔ MSH-5, MSH-4 ↔ MSH-6),
 * preserves processing ID (MSH-11) and version (MSH-12), and sets the message type
 * to `ACK^{trigger event}`.
 */
export function buildMsh(
  inbound: Root,
  timestamp: string,
  controlId: string
): Segment {
  const sendApp = extractValue(inbound, "MSH-5");
  const sendFac = extractValue(inbound, "MSH-6");
  const recvApp = extractValue(inbound, "MSH-3");
  const recvFac = extractValue(inbound, "MSH-4");
  const triggerEvent = extractValue(inbound, "MSH-9.2");
  const processingId = extractValue(inbound, "MSH-11");
  const versionId = extractValue(inbound, "MSH-12");

  return s(
    "MSH",
    f("|"),
    f("^~\\&"),
    f(sendApp),
    f(sendFac),
    f(recvApp),
    f(recvFac),
    f(timestamp),
    f(""),
    f(c("ACK"), c(triggerEvent)),
    f(controlId),
    f(processingId),
    f(versionId)
  );
}

/**
 * Build the MSA (Message Acknowledgment) segment.
 *
 * Sets MSA-1 to the acknowledgment code, MSA-2 to the inbound message's
 * control ID (MSH-10), and optionally MSA-3 to a human-readable text message.
 */
export function buildMsa(inbound: Root, code: AckCode, text?: string): Segment {
  const inboundControlId = extractValue(inbound, "MSH-10");
  const fields = [f(code), f(inboundControlId)];

  if (text) {
    fields.push(f(text));
  }

  return s("MSA", ...fields);
}

/**
 * Build the ERR segment from structured error details.
 *
 * Populates ERR-2 (location), ERR-3 (error code), ERR-4 (severity),
 * and ERR-8 (user message). Severity defaults to `"E"` if not specified.
 */
export function buildErr(error: AckError): Segment {
  return s(
    "ERR",
    f(""),
    f(error.location ?? ""),
    f(c(error.code ?? "")),
    f(error.severity ?? "E"),
    f(""),
    f(""),
    f(""),
    f(error.message ?? "")
  );
}
