import {
  AckException,
  ApplicationInternalError,
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
  /** MSA-1 code when no error is present. Defaults to `AckCode.ApplicationAccept`. */
  successCode?: AcknowledgeOptions["successCode"];
}

/**
 * Middleware that automatically generates HL7v2 ACK/NAK responses.
 *
 * On success, builds an accept ACK (AA or CA via `successCode`).
 * On error, converts the thrown exception into an error/reject ACK
 * with the appropriate code and ERR segment. Unknown errors are
 * wrapped as {@link ApplicationInternalError}.
 *
 * If the handler already set `ctx.res`, the middleware does not
 * override it. If ACK construction itself fails, the error
 * propagates to `Mllp`'s `onError` handler.
 */
export function ackMiddleware(options: AckMiddlewareOptions = {}): Middleware {
  const { sending, generateId, successCode } = options;

  return async (ctx, next) => {
    try {
      await next();

      // Handler already set a response — pass through
      if (ctx.res) {
        return;
      }

      // Success ACK
      const ackTree = acknowledge(ctx.tree, {
        id: generateId?.(),
        sending,
        successCode,
      });
      ctx.res = { raw: toHl7v2(ackTree) };
    } catch (error) {
      let exception: AckException;
      if (error instanceof AckException) {
        exception = error;
      } else if (error instanceof Error) {
        exception = new ApplicationInternalError(error.message, error);
      } else {
        exception = new ApplicationInternalError(String(error));
      }

      const ackTree = acknowledge(ctx.tree, {
        error: exception,
        id: generateId?.(),
        sending,
      });
      ctx.res = { raw: toHl7v2(ackTree) };
    }
  };
}
