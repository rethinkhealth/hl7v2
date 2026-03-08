import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
import { m } from "@rethinkhealth/hl7v2-builder";

import type { Options } from "./types";
import {
  buildErr,
  buildMsa,
  buildMsh,
  generateId,
  resolveTimestamp,
} from "./utils";

/**
 * Generate an ACK message AST from an inbound HL7v2 message AST.
 *
 * Builds a compliant acknowledgment by copying and swapping MSH fields
 * from the inbound message, constructing the MSA segment, and optionally
 * appending an ERR segment.
 *
 * @param inbound - The parsed inbound message AST (must contain an MSH segment)
 * @param options - Acknowledgment options (code, text, error details, overrides)
 * @returns A new `Root` AST node representing the ACK message
 *
 * @example
 * ```typescript
 * // Positive acknowledgment
 * const ack = acknowledge(inbound, { code: "AA" });
 *
 * // Negative acknowledgment with error details
 * const nak = acknowledge(inbound, {
 *   code: "AE",
 *   text: "Patient not found",
 *   error: { code: "204", severity: "E", message: "Unknown key identifier" },
 * });
 *
 * // Serialize to HL7v2 string
 * const ackString = toHl7v2(ack);
 * ```
 */
export function acknowledge(inbound: Root, options?: Options): Root {
  const opts: Options = options ?? {};
  const code = opts.code ?? "AA";
  const timestamp = resolveTimestamp(opts.timestamp);
  const controlId = opts.id ?? generateId();

  const segments: Segment[] = [
    buildMsh(inbound, timestamp, controlId),
    buildMsa(inbound, code, opts.text),
  ];

  if (opts.error) {
    segments.push(buildErr(opts.error));
  }

  return m(...segments);
}
