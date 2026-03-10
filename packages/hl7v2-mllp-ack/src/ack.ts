import { AckError, AckException, acknowledge } from "@rethinkhealth/hl7v2-ack";
import type { SendingInfo } from "@rethinkhealth/hl7v2-ack";
import type { Middleware } from "@rethinkhealth/hl7v2-mllp";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";

export interface AckMiddlewareOptions {
  /** MSH-3/MSH-4 of the ACK. Defaults to the original message's MSH-5/MSH-6. */
  sending?: SendingInfo;
  /** Custom ID generator for MSH-10. Called per ACK. Uses `uid()` when omitted. */
  generateId?: () => string;
}

/**
 * Middleware that automatically generates HL7v2 ACK/NAK responses.
 *
 * Handles **application-level** errors thrown by downstream handlers:
 * - No error → AA (success)
 * - `AckError` → AE (application error) with ERR segment
 * - `AckReject` → AR (application reject) with ERR segment
 * - Unknown `Error` → AE with error code 207 (internal error)
 *
 * **Interaction with `onError`**: This middleware catches errors from
 * handlers and converts them into ACK responses. If ACK construction
 * itself fails (e.g., malformed AST, serialization error), the error
 * is **not** caught here — it propagates to `Mllp`'s `onError` handler,
 * which serves as the infrastructure-level safety net.
 */
export function ackMiddleware(options: AckMiddlewareOptions = {}): Middleware {
  const { sending, generateId } = options;

  return async (ctx, next) => {
    let handlerError: AckException | undefined;

    try {
      await next();
    } catch (error: unknown) {
      handlerError = toAckError(error);
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
    });
    ctx.res = { raw: toHl7v2(ackTree) };
  };
}

function toAckError(thrown: unknown): AckException {
  if (thrown instanceof AckException) {
    return thrown;
  }

  if (thrown instanceof Error) {
    return new AckError(thrown.message, {
      cause: thrown,
      errorCode: "207",
      severity: "E",
    });
  }

  return new AckError(String(thrown), {
    errorCode: "207",
    severity: "E",
  });
}
