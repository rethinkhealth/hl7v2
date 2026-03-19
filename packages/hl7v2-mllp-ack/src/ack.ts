import {
  AckApplicationError,
  AckException,
  acknowledge,
} from "@rethinkhealth/hl7v2-ack";
import type { AcknowledgeOptions, SendingInfo } from "@rethinkhealth/hl7v2-ack";
import type { Middleware } from "@rethinkhealth/hl7v2-mllp";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";

export interface AckMiddlewareOptions {
  /** MSH-3/MSH-4 of the ACK. Defaults to the original message's MSH-5/MSH-6. */
  sending?: SendingInfo;
  /** Custom ID generator for MSH-10. Called per ACK. Uses `uid()` when omitted. */
  generateId?: () => string;
  /** MSA-1 code when no error is present. Defaults to `"AA"`. Set to `"CA"` for commit-level accept. */
  successCode?: AcknowledgeOptions["successCode"];
}

/**
 * Middleware that automatically generates HL7v2 ACK/NAK responses.
 *
 * Handles errors thrown by downstream handlers:
 * - No error → AA (or CA when `successCode` is `"CA"`)
 * - `AckApplicationError` → AE (application error) with ERR segment
 * - `AckApplicationReject` → AR (application reject) with ERR segment
 * - `AckCommitError` → CE (commit error) with ERR segment
 * - `AckCommitReject` → CR (commit reject) with ERR segment
 * - Unknown `Error` → AE with error code 207 (internal error)
 *
 * **Interaction with `onError`**: This middleware catches errors from
 * handlers and converts them into ACK responses. If ACK construction
 * itself fails (e.g., malformed AST, serialization error), the error
 * is **not** caught here — it propagates to `Mllp`'s `onError` handler,
 * which serves as the infrastructure-level safety net.
 */
export function ackMiddleware(options: AckMiddlewareOptions = {}): Middleware {
  const { sending, generateId, successCode } = options;

  return async (ctx, next) => {
    let handlerError: AckException | undefined;

    try {
      await next();
    } catch (error: unknown) {
      handlerError = toAckException(error);
    }

    // If handler already set a response, pass through
    if (ctx.res && !handlerError) {
      return;
    }

    // Build ACK — if this throws, the error escapes to onError
    const ackTree = acknowledge(ctx.tree, {
      error: handlerError,
      id: generateId?.(),
      sending,
      successCode,
    });
    ctx.res = { raw: toHl7v2(ackTree) };
  };
}

const INTERNAL_ERROR = { errorCode: "207", severity: "E" } as const;

function toAckException(thrown: unknown): AckException {
  if (thrown instanceof AckException) {
    return thrown;
  }

  if (thrown instanceof Error) {
    return new AckApplicationError(thrown.message, {
      ...INTERNAL_ERROR,
      cause: thrown,
    });
  }

  return new AckApplicationError(String(thrown), INTERNAL_ERROR);
}
