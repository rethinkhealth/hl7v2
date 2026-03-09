import { AckError } from "../../server/error";
import type { Middleware } from "../../server/types";
import { generateAck, generateNak } from "./message";
import type { AckCode } from "./message";

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
 * Wraps the handler chain and translates outcomes into HL7v2 ACK/NAK responses
 * by setting `ctx.res`:
 *
 * | Handler outcome               | ACK code                       |
 * | ----------------------------- | ------------------------------ |
 * | Completes without error       | AA (original) / CA (enhanced)  |
 * | Throws `AckError`             | Error's code                   |
 * | Throws any other `Error`      | AR (original) / CR (enhanced)  |
 *
 * @example
 * ```typescript
 * const app = new Mllp();
 * app.use(ack());
 *
 * app.on("ADT^A01", async (ctx) => {
 *   await savePatient(ctx.tree);
 *   // void return → AA sent automatically via ctx.res
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

      // Success — generate accept ACK
      ctx.res = {
        raw: generateAck(ctx.req.raw, { code: acceptCode }),
      };
    } catch (error) {
      if (error instanceof AckError) {
        ctx.res = {
          raw: generateAck(ctx.req.raw, {
            code: error.code,
            errorCondition: error.errorCondition,
            textMessage: error.message,
          }),
        };
        return;
      }

      // Any other Error — treat as system rejection
      const message = error instanceof Error ? error.message : "Unknown error";
      ctx.res = {
        raw: generateNak(ctx.req.raw, message, rejectCode),
      };
    }
  };
};
