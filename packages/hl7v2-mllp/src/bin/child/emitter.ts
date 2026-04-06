import { encode } from "../events.js";
import type { Event, PartialEvent } from "../events.js";

/**
 * The subset of `process.stdout` the emitter depends on. All three
 * runtimes (Node, Bun, Deno) implement this on their stdout pipe —
 * it is the synchronous backpressure contract from Node Streams,
 * which Bun and Deno both provide for compatibility.
 *
 * We cannot use the WHATWG WritableStream here because its write path
 * is async-only (returns a Promise), and the emitter must be fire-and-
 * forget: handlers should never block on telemetry I/O.
 */
export interface Stdout {
  write(chunk: string): boolean;
  once(event: "drain", listener: () => void): void;
}

export interface EmitterOptions {
  /** Max events queued during backpressure before drop-oldest kicks in. Default 1000. */
  maxBuffered?: number;
  /** Injectable clock for deterministic tests. */
  nowIso?: () => string;
}

/**
 * Creates an emit function that writes events to the stream as JSON
 * lines. Handlers never block on telemetry I/O: when the stream applies
 * backpressure, events are queued in a bounded FIFO. Once the queue is
 * full, the oldest pending event is dropped and a `dropped` summary
 * event is injected before the next successful write so consumers can
 * observe the loss. Memory stays bounded at `maxBuffered` lines.
 */
export function createEmitter(
  stream: Stdout,
  options: EmitterOptions = {}
): (event: PartialEvent) => void {
  const maxBuffered = options.maxBuffered ?? 1000;
  const now = options.nowIso ?? (() => new Date().toISOString());

  const queue: string[] = [];
  let flushing = false;
  let dropped = 0;

  const flush = (): void => {
    flushing = true;
    while (queue.length > 0) {
      const line = queue.shift() as string;
      if (!stream.write(line)) {
        stream.once("drain", flush);
        return;
      }
    }
    flushing = false;
  };

  const enqueue = (line: string): void => {
    queue.push(line);
    if (queue.length > maxBuffered) {
      queue.shift();
      dropped += 1;
    }
  };

  return function emit(partial) {
    const event = { ts: now(), ...partial } as Event;
    if (dropped > 0 && queue.length === 0 && !flushing) {
      enqueue(encode({ t: "dropped", count: dropped, ts: now() }));
      dropped = 0;
    }
    enqueue(encode(event));
    if (!flushing) {
      flush();
    }
  };
}
