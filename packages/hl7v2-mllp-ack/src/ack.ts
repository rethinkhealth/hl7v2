import {
  AckError,
  AckReject,
  AckInternalError,
  acknowledge,
} from "@rethinkhealth/hl7v2-ack";
import type { SendingInfo } from "@rethinkhealth/hl7v2-ack";
import type { Middleware } from "@rethinkhealth/hl7v2-mllp";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";

interface AckMiddlewareOptions {
  sending?: SendingInfo;
}

/**
 * Middleware that automatically generates HL7v2 ACK/NAK responses.
 *
 * Handles **application-level** errors thrown by downstream handlers:
 * - No error → AA (success)
 * - `AckError` → AE (application error) with optional ERR segment
 * - `AckReject` → AR (application reject) with optional ERR segment
 * - Unknown `Error` → AE with error code 207 (internal error)
 *
 * **Interaction with `onError`**: This middleware catches errors from
 * handlers and converts them into ACK responses. If ACK construction
 * itself fails (e.g., malformed AST, serialization error), the error
 * is **not** caught here — it propagates to `Mllp`'s `onError` handler,
 * which serves as the infrastructure-level safety net.
 */
export function ackMiddleware(options: AckMiddlewareOptions = {}): Middleware {
  const { sending } = options;

  return async (ctx, next) => {
    let handlerError: AckError | AckReject | undefined;

    try {
      await next();
    } catch (error: unknown) {
      handlerError = toAckError(error);
    }

    // If handler already set a response, pass through
    if (ctx.res) {
      return;
    }

    // Build ACK — if this throws, the error escapes to onError
    const ackTree = acknowledge(ctx.tree, {
      error: handlerError,
      sending,
    });
    ctx.res = { raw: toHl7v2(ackTree) };
  };
}

function toAckError(thrown: unknown): AckError | AckReject {
  if (thrown instanceof AckError || thrown instanceof AckReject) {
    return thrown;
  }

  if (thrown instanceof Error) {
    return new AckInternalError(thrown.message, { cause: thrown });
  }

  return new AckInternalError(String(thrown));
}
