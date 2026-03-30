import {
  AckException,
  ApplicationInternalError,
  acknowledge,
} from "@rethinkhealth/hl7v2-ack";
import type { AckSuccessCode, SendingInfo } from "@rethinkhealth/hl7v2-ack";
import { hl7v2EncodeEscapes } from "@rethinkhealth/hl7v2-encode-escapes";
import type { Middleware } from "@rethinkhealth/hl7v2-mllp";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";
import { unified } from "unified";

export interface AckMiddlewareOptions {
  /** MSH-3/MSH-4 of the ACK. Defaults to the original message's MSH-5/MSH-6. */
  sending?: SendingInfo;
  /** Custom ID generator for MSH-10. Called per ACK. Uses `uid()` when omitted. */
  generateId?: () => string;
  /** MSA-1 code when no error is present. Defaults to `AckCode.ApplicationAccept`. */
  successCode?: AckSuccessCode;
}

/**
 * Middleware that automatically generates HL7v2 ACK/NAK responses.
 *
 * On success, builds an accept ACK (AA or CA via `successCode`).
 * On error, converts the thrown exception into an error/reject ACK
 * with the appropriate code and ERR segment. Unknown errors are
 * wrapped as {@link ApplicationInternalError}.
 *
 * If the handler already set `ctx.res` and did not throw an error,
 * the middleware does not override it. If ACK construction itself fails,
 * the error propagates to `Mllp`'s `onError` handler.
 */
export function ackMiddleware(options: AckMiddlewareOptions = {}): Middleware {
  const { sending, generateId, successCode } = options;

  return async (ctx, next) => {
    // Catch handler errors — normalize to AckException
    let ackError: AckException | undefined;
    try {
      await next();
    } catch (error) {
      if (error instanceof AckException) {
        ackError = error;
      } else if (error instanceof Error) {
        ackError = new ApplicationInternalError(error.message, error);
      } else {
        ackError = new ApplicationInternalError(String(error));
      }
    }

    // Handler already set a response — pass through
    if (ctx.res && !ackError) {
      return;
    }

    // Build ACK from the raw parsed AST — no need for transforms.
    // acknowledge() only reads MSH fields which are present in the
    // pre-transform tree.
    const ackTree = ackError
      ? acknowledge(ctx.ast, { error: ackError, id: generateId?.(), sending })
      : acknowledge(ctx.ast, { id: generateId?.(), sending, successCode });

    const encoded = await unified().use(hl7v2EncodeEscapes).run(ackTree);
    ctx.res = { raw: toHl7v2(encoded) };
  };
}
