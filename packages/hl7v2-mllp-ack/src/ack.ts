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

export function ackMiddleware(options: AckMiddlewareOptions = {}): Middleware {
  const { sending } = options;

  return async (ctx, next) => {
    try {
      await next();

      // If handler already set a response, pass through
      if (ctx.res) {
        return;
      }

      // No error, no response — success (AA)
      const ackTree = acknowledge(ctx.tree, { sending });
      ctx.res = { raw: toHl7v2(ackTree) };
    } catch (error: unknown) {
      const ackError = toAckError(error);
      const ackTree = acknowledge(ctx.tree, { error: ackError, sending });
      ctx.res = { raw: toHl7v2(ackTree) };
    }
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
