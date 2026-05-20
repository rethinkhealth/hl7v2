/**
 * Outbound message preparation for the MLLP client.
 *
 * Symmetric to `./acknowledgment` — that module owns inbound parsing,
 * this one owns outbound preparation: turning whatever the caller hands
 * to `MllpClient.send()` into the two artifacts the transport needs:
 *
 * 1. The MLLP-framed bytes to write to the socket.
 * 2. The MSH-10 control ID used to correlate the receiver's ACK.
 *
 * Both inbound and outbound paths delegate field extraction to
 * `@glion/parser` + `@glion/util-query` and serialization to
 * `@glion/to-hl7v2`. Keeps delimiter, encoding-character, and escape
 * handling in one place rather than re-implementing it here.
 *
 * @module
 */

import type { Root } from "@glion/ast";
import { encode } from "@glion/mllp-transport";
import { parseHL7v2 } from "@glion/parser";
import { toHl7v2 } from "@glion/to-hl7v2";
import { value } from "@glion/util-query";

import { MllpClientError, MllpClientErrorCode } from "./errors";

/**
 * Anything `MllpClient.send()` will accept as a payload.
 *
 * - `string` — wire-format HL7v2 text.
 * - `Uint8Array` — pre-encoded UTF-8 bytes.
 * - `Root` — a parsed AST node from `@glion/ast`, typically built with
 *   `@glion/builder` or produced by a `unified` pipeline. Skips the send-path
 *   parse.
 */
export type OutboundMessage = string | Uint8Array | Root;

/** Result of preparing an outbound payload — what the transport consumes. */
interface Outbound {
  readonly controlId: string;
  readonly frame: Uint8Array;
}

const textDecoder = new TextDecoder();

/**
 * Resolve an {@link OutboundMessage} to its MLLP frame and MSH-10
 * control ID. All failure modes — unparseable text, unknown input
 * type, missing MSH-10, encoder error — surface as
 * `MllpClientError(INVALID_INPUT)`.
 */
export function prepareOutbound(message: OutboundMessage): Outbound {
  if (typeof message === "string" || message instanceof Uint8Array) {
    return fromText(message);
  }
  if (isRoot(message)) {
    return fromTree(message);
  }
  throw new MllpClientError(
    MllpClientErrorCode.INVALID_INPUT,
    "Message must be a string, Uint8Array, or HL7v2 Root AST node"
  );
}

function fromText(message: string | Uint8Array): Outbound {
  const text =
    typeof message === "string" ? message : textDecoder.decode(message);
  let tree: Root;
  try {
    tree = parseHL7v2(text);
  } catch (error) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      `Failed to parse message: ${formatCause(error)}`,
      { cause: error instanceof Error ? error : undefined }
    );
  }
  return { controlId: requireControlId(tree), frame: encodeOrThrow(message) };
}

function fromTree(tree: Root): Outbound {
  return {
    controlId: requireControlId(tree),
    frame: encodeOrThrow(toHl7v2(tree)),
  };
}

function isRoot(message: unknown): message is Root {
  return (
    typeof message === "object" &&
    message !== null &&
    (message as { type?: unknown }).type === "root"
  );
}

function requireControlId(tree: Root): string {
  const controlId = value(tree, "MSH-10")?.value;
  if (!controlId) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      "Message is missing MSH-10 (message control ID)"
    );
  }
  return controlId;
}

function encodeOrThrow(message: string | Uint8Array): Uint8Array {
  try {
    return encode(message);
  } catch (error) {
    throw new MllpClientError(
      MllpClientErrorCode.INVALID_INPUT,
      `Invalid message payload: ${formatCause(error)}`,
      { cause: error instanceof Error ? error : undefined }
    );
  }
}

function formatCause(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
