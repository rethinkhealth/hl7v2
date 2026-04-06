import { describe, expect, it } from "vitest";

import { createEmitter } from "../../../src/bin/child/emitter.js";
import type { EventSink } from "../../../src/bin/child/emitter.js";

/**
 * A programmable EventSink for deterministic tests. Flip `writable`
 * to simulate backpressure; call `drain()` to emulate the sink's
 * stream catching up and firing a drain event.
 */
function makeSink(): EventSink & {
  chunks: string[];
  writable: boolean;
  drain(): void;
} {
  const drainHandlers: (() => void)[] = [];
  const sink = {
    chunks: [] as string[],
    writable: true,
    write(chunk: string): boolean {
      this.chunks.push(chunk);
      return this.writable;
    },
    once(event: "drain", listener: () => void): void {
      if (event === "drain") {
        drainHandlers.push(listener);
      }
    },
    drain(): void {
      this.writable = true;
      const handlers = drainHandlers.splice(0);
      for (const h of handlers) {
        h();
      }
    },
  };
  return sink;
}

describe("createEmitter", () => {
  it("writes encoded JSON lines to the sink", () => {
    const sink = makeSink();
    const emit = createEmitter(sink, {
      nowIso: () => "2026-04-04T12:00:00.000Z",
    });
    emit({ t: "ready", port: 2575, tls: false, pid: 1 });
    expect(sink.chunks).toHaveLength(1);
    expect(JSON.parse(sink.chunks[0]?.trim() ?? "")).toEqual({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "2026-04-04T12:00:00.000Z",
    });
  });

  it("preserves a caller-supplied ts", () => {
    const sink = makeSink();
    const emit = createEmitter(sink, {
      nowIso: () => "now",
    });
    emit({
      t: "conn.open",
      id: 1,
      remote: "1.1.1.1:100",
      ts: "caller-ts",
    });
    expect(JSON.parse(sink.chunks[0]?.trim() ?? "").ts).toBe("caller-ts");
  });

  it("queues events during backpressure and flushes on drain", () => {
    const sink = makeSink();
    sink.writable = false;
    const emit = createEmitter(sink, {
      nowIso: () => "t",
      maxBuffered: 10,
    });

    emit({ t: "conn.open", id: 1, remote: "1:1" });
    emit({ t: "conn.open", id: 2, remote: "1:2" });
    emit({ t: "conn.open", id: 3, remote: "1:3" });
    // All three are buffered; only the first actually hit the sink.
    expect(sink.chunks).toHaveLength(1);

    sink.drain();
    // On drain, the remaining two flush in order.
    expect(sink.chunks).toHaveLength(3);
    const ids = sink.chunks.map((c) => JSON.parse(c).id);
    expect(ids).toEqual([1, 2, 3]);
  });

  it("drops oldest events when backpressured beyond maxBuffered and reports the count", () => {
    const sink = makeSink();
    sink.writable = false;
    const emit = createEmitter(sink, {
      nowIso: () => "t",
      maxBuffered: 2,
    });

    // First write passes into the sink (returns false, goes to queue).
    emit({ t: "conn.open", id: 1, remote: "1:1" });
    // Next two fill the queue; the fourth must evict the oldest queued entry.
    emit({ t: "conn.open", id: 2, remote: "1:2" });
    emit({ t: "conn.open", id: 3, remote: "1:3" });
    emit({ t: "conn.open", id: 4, remote: "1:4" });
    emit({ t: "conn.open", id: 5, remote: "1:5" });

    sink.drain();

    // After drain, we should see the first write plus the two-deep tail
    // of the queue, preceded by no dropped event yet (dropped is only
    // injected on a subsequent emit after the queue catches up).
    const ids = sink.chunks.map((c) => JSON.parse(c).id).filter(Boolean);
    expect(ids).toContain(1);
    expect(ids).not.toContain(2);
    expect(ids).not.toContain(3);
    expect(ids).toContain(4);
    expect(ids).toContain(5);

    // The next emit injects a dropped summary ahead of the new event.
    emit({ t: "conn.close", id: 99 });
    const parsed = sink.chunks.map((c) => JSON.parse(c.trim()));
    const dropped = parsed.find((e) => e.t === "dropped");
    expect(dropped).toBeTruthy();
    expect(dropped.count).toBeGreaterThan(0);
  });

  it("keeps memory bounded under sustained backpressure", () => {
    const sink = makeSink();
    sink.writable = false;
    const emit = createEmitter(sink, {
      nowIso: () => "t",
      maxBuffered: 100,
    });

    // 10_000 events against a max-100 queue must not grow without bound.
    for (let i = 0; i < 10_000; i += 1) {
      emit({ t: "conn.open", id: i, remote: `1:${i}` });
    }
    // The sink has seen only the very first write (which returned false);
    // nothing else reached it because we never drained.
    expect(sink.chunks).toHaveLength(1);

    sink.drain();
    // After drain, at most maxBuffered + 1 lines flush (the initial
    // write plus the bounded tail queue).
    expect(sink.chunks.length).toBeLessThanOrEqual(101);
  });
});
