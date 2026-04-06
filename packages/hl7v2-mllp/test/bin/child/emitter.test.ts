import { describe, expect, it } from "vitest";

import { createEmitter } from "../../../src/bin/child/emitter.js";

function makeStream() {
  const drainHandlers: (() => void)[] = [];
  return {
    chunks: [] as string[],
    backpressure: false,
    write(chunk: string): boolean {
      this.chunks.push(chunk);
      return !this.backpressure;
    },
    once(_event: "drain", listener: () => void): void {
      drainHandlers.push(listener);
    },
    drain(): void {
      this.backpressure = false;
      const handlers = drainHandlers.splice(0);
      for (const h of handlers) {
        h();
      }
    },
  };
}

describe("createEmitter", () => {
  it("writes encoded JSON lines to the stream", () => {
    const stream = makeStream();
    const emit = createEmitter(stream, {
      nowIso: () => "2026-04-04T12:00:00.000Z",
    });
    emit({ t: "ready", port: 2575, tls: false, pid: 1 });
    expect(stream.chunks).toHaveLength(1);
    expect(JSON.parse(stream.chunks[0]?.trim() ?? "")).toEqual({
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1,
      ts: "2026-04-04T12:00:00.000Z",
    });
  });

  it("preserves a caller-supplied ts", () => {
    const stream = makeStream();
    const emit = createEmitter(stream, { nowIso: () => "now" });
    emit({ t: "conn.open", id: 1, remote: "1.1.1.1:100", ts: "caller-ts" });
    expect(JSON.parse(stream.chunks[0]?.trim() ?? "").ts).toBe("caller-ts");
  });

  it("keeps memory bounded under sustained backpressure", () => {
    const stream = makeStream();
    stream.backpressure = true;
    const emit = createEmitter(stream, { nowIso: () => "t", maxBuffered: 100 });

    for (let i = 0; i < 10_000; i += 1) {
      emit({ t: "conn.open", id: i, remote: `1:${i}` });
    }
    expect(stream.chunks).toHaveLength(1);

    stream.drain();
    expect(stream.chunks.length).toBeLessThanOrEqual(101);
  });
});
