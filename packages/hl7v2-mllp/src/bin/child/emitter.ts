import { encode } from "../events.js";
import type { Event } from "../events.js";

/**
 * A minimal writable interface that accepts string chunks and reports
 * backpressure via its return value. process.stdout satisfies this.
 */
export interface EventSink {
  write(chunk: string): boolean;
}

export interface EmitterOptions {
  /**
   * Ring buffer size for pending-drop accounting. When the sink
   * returns `false` (backpressure) more than `maxBuffered` times
   * without draining, an overflow counter is incremented and a
   * synthetic `dropped` event is queued for the next emission.
   */
  maxBuffered?: number;
  /** Injectable clock for deterministic tests. */
  nowIso?: () => string;
}

/**
 * Creates an emit function that serializes events as JSON lines to the
 * given sink. Fire-and-forget: the handler path is never blocked by
 * telemetry I/O. On backpressure, events overflow a bounded buffer and
 * the overflow count is surfaced via a `dropped` event.
 */
export function createEmitter(
  sink: EventSink,
  options: EmitterOptions = {}
): (partial: Omit<Event, "ts"> & { ts?: string }) => void {
  const maxBuffered = options.maxBuffered ?? 1000;
  const now = options.nowIso ?? (() => new Date().toISOString());

  let pendingOverflow = 0;
  let currentBacklog = 0;

  return function emit(partial) {
    const event = {
      ...partial,
      ts: partial.ts ?? now(),
    } as Event;

    // Flush any pending dropped-event counter first so ordering is
    // preserved from the consumer's perspective.
    if (pendingOverflow > 0) {
      const droppedLine = encode({
        t: "dropped",
        count: pendingOverflow,
        ts: now(),
      });
      pendingOverflow = 0;
      sink.write(droppedLine);
    }

    const writable = sink.write(encode(event));
    if (writable) {
      currentBacklog = 0;
    } else {
      currentBacklog++;
      if (currentBacklog > maxBuffered) {
        pendingOverflow += 1;
        currentBacklog = maxBuffered; // clamp
      }
    }
  };
}
