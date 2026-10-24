/**
 * MLLP message telemetry middleware.
 *
 * Emits a structured "msg" event for every processed HL7v2 message,
 * capturing timing, trigger event, control ID, and ACK code, then an
 * "error" event when the message raised one. This is the primary
 * observability signal for message throughput and latency — the TUI and
 * JSON-line output both consume these events.
 *
 * ## Middleware positioning
 *
 * This middleware is PREPENDED via `app.use(mw, { prepend: true })` so it sits
 * at the outermost position in the middleware chain and `performance.now()`
 * measures the full middleware + handler time. After `await next()`,
 * `ctx.res` holds the reply, ACK or NAK, and `ctx.error` the error the
 * message raised.
 *
 * ## ACK code
 *
 * HL7v2 acknowledgments carry MSA-1, an HL7v2 Table 0008 code:
 * AA/AE/AR at the application level, CA/CE/CR at the commit level.
 * The code is read from the reply's MSA segment; it is `null` for a reply
 * with no MSA segment or no Table 0008 code there.
 */

import { performance } from "node:perf_hooks";

import { isAckCode } from "@glion/ack";
import type { AckCode } from "@glion/ack";
import type { Root } from "@glion/ast";
import type { Context, Middleware } from "@glion/mllp";
import type { NodeEnv } from "@glion/mllp/node";
import { value } from "@glion/util-query";

import type { PartialEvent } from "../events";

/**
 * Creates the telemetry middleware. The `emit` function is injected
 * so the middleware doesn't depend on the module-scoped emitter —
 * easier to test and decoupled from the child's stdout wiring.
 */
export function createMsgTelemetry(
  emit: (event: PartialEvent) => void
): Middleware {
  return async (ctx: Context, next: () => Promise<void>) => {
    const start = performance.now();
    await next();
    const ms = performance.now() - start;
    // The runner serves every app with serve(), which passes a NodeEnv.
    const { connection } = ctx.env as NodeEnv;
    emit({
      ack: ackCode(ctx.res),
      conn: connection.id,
      control: ctx.controlId ?? "?",
      ms: Math.round(ms * 1000) / 1000,
      pattern: null,
      remote: `${connection.remoteAddress}:${connection.remotePort}`,
      t: "msg",
      trigger: `${ctx.messageType ?? "?"}^${ctx.triggerEvent ?? "?"}`,
    });
    if (ctx.error) {
      emit({
        conn: connection.id,
        message: ctx.error.message,
        stack: ctx.error.stack,
        t: "error",
        trigger: `${ctx.messageType}^${ctx.triggerEvent}`,
      });
    }
  };
}

// ── ACK code ─────────────────────────────────────────────────────

/** MSA-1 of `reply`, or `null` when it holds no Table 0008 code. */
function ackCode(reply: Root | undefined): AckCode | null {
  const code = reply ? value(reply, "MSA.1")?.value : undefined;
  return typeof code === "string" && isAckCode(code) ? code : null;
}
