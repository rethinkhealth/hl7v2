import { generateAck, generateNak } from "../ack.js";
import type { AckCode } from "../ack.js";
import { MllpException } from "../server/exception.js";
import type { Middleware, Response } from "../server/types.js";

/**
 * Options for the ack middleware.
 */
export interface AckMiddlewareOptions {
  /**
   * Acknowledgment mode.
   * - `"original"` — uses AA/AE/AR codes (default)
   * - `"enhanced"` — uses CA/CE/CR codes
   */
  mode?: "original" | "enhanced";
}

/**
 * Auto-acknowledgment middleware.
 *
 * Wraps the handler chain and translates outcomes into HL7v2 ACK/NAK responses:
 *
 * | Handler outcome               | ACK code                       |
 * | ----------------------------- | ------------------------------ |
 * | Completes without error       | AA (original) / CA (enhanced)  |
 * | Throws `MllpException`        | Exception's code               |
 * | Throws any other `Error`      | AR (original) / CR (enhanced)  |
 * | Returns `Response` directly   | Bypass — response used as-is   |
 *
 * @example
 * ```typescript
 * const app = new Mllp();
 * app.use(ack());
 *
 * app.on("ADT^A01", async (ctx) => {
 *   await savePatient(ctx.tree);
 *   // void return → AA sent automatically
 * });
 * ```
 */
export const ack = (options?: AckMiddlewareOptions): Middleware => {
  const mode = options?.mode ?? "original";

  const acceptCode: AckCode = mode === "enhanced" ? "CA" : "AA";
  const rejectCode: AckCode = mode === "enhanced" ? "CR" : "AR";

  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      if (error instanceof MllpException) {
        return {
          raw: generateAck(ctx.req.raw, {
            code: error.code,
            errorCondition: error.errorCondition,
            textMessage: error.message,
          }),
        } satisfies Response;
      }

      const message = error instanceof Error ? error.message : "Unknown error";
      return {
        raw: generateNak(ctx.req.raw, message, rejectCode),
      } satisfies Response;
    }

    return {
      raw: generateAck(ctx.req.raw, { code: acceptCode }),
    } satisfies Response;
  };
};
