import { describe, expect, it } from "vitest";

import { createEmitter } from "../../../src/bin/child/emitter.js";
import type { Event } from "../../../src/bin/events.js";

describe("createEmitter", () => {
  it("writes encoded JSON lines to the provided stream", () => {
    const chunks: string[] = [];
    const stream = {
      write: (chunk: string) => {
        chunks.push(chunk);
        return true;
      },
    };
    const emit = createEmitter(stream, {
      nowIso: () => "2026-04-04T12:00:00.000Z",
    });
    emit({ t: "ready", port: 2575, tls: false, pid: 1 } as Omit<
      Extract<Event, { t: "ready" }>,
      "ts"
    >);
    expect(chunks).toHaveLength(1);
    const line = chunks[0].trim();
    expect(JSON.parse(line)).toEqual({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "2026-04-04T12:00:00.000Z",
    });
  });

  it("buffers up to maxBuffered events when the stream backpressures, then emits a dropped event", () => {
    let writable = false;
    const chunks: string[] = [];
    const stream = {
      write: (chunk: string) => {
        chunks.push(chunk);
        return writable;
      },
    };
    const emit = createEmitter(stream, {
      nowIso: () => "2026-04-04T12:00:00.000Z",
      maxBuffered: 2,
    });
    // 3 events fill the ring buffer past capacity.
    for (let i = 0; i < 3; i++) {
      emit({ t: "conn.open", id: i, remote: `1.1.1.${i}:100` });
    }
    // Every event has been written (fire-and-forget), but backpressure
    // triggered the ring buffer. On the next emission, a 'dropped'
    // event should be queued because we overflowed.
    writable = true;
    emit({ t: "conn.close", id: 99 });

    const parsed = chunks.map((c) => JSON.parse(c.trim()));
    const droppedEvent = parsed.find((e) => e.t === "dropped");
    expect(droppedEvent).toBeTruthy();
    expect(droppedEvent.count).toBeGreaterThan(0);
  });
});
