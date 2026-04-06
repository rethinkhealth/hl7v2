import { Writable } from "node:stream";

import { describe, expect, it } from "vitest";

import { createEmitter } from "../../../src/bin/child/emitter.js";

/**
 * A programmable Writable for deterministic tests. Flip `backpressure`
 * to simulate a full buffer; call `drain()` to resume.
 */
function makeStream(): Writable & {
  chunks: string[];
  backpressure: boolean;
  drain(): void;
} {
  // oxlint-disable-next-line prefer-await-to-callbacks
  const stream = new Writable({
    // oxlint-disable-next-line prefer-await-to-callbacks
    write(chunk, _encoding, done) {
      (stream as unknown as { chunks: string[] }).chunks.push(chunk.toString());
      if ((stream as unknown as { backpressure: boolean }).backpressure) {
        return;
      }
      done();
    },
  });

  return Object.assign(stream, {
    chunks: [] as string[],
    backpressure: false,
    drain() {
      this.backpressure = false;
      stream.emit("drain");
    },
  });
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
    const emit = createEmitter(stream, {
      nowIso: () => "now",
    });
    emit({
      t: "conn.open",
      id: 1,
      remote: "1.1.1.1:100",
      ts: "caller-ts",
    });
    expect(JSON.parse(stream.chunks[0]?.trim() ?? "").ts).toBe("caller-ts");
  });

  it("keeps memory bounded under sustained backpressure", () => {
    const stream = makeStream();
    stream.backpressure = true;
    const emit = createEmitter(stream, {
      nowIso: () => "t",
      maxBuffered: 100,
    });

    for (let i = 0; i < 10_000; i += 1) {
      emit({ t: "conn.open", id: i, remote: `1:${i}` });
    }
    // Only the first write reached the stream; the rest queued internally.
    expect(stream.chunks).toHaveLength(1);

    stream.drain();
    // After drain, at most maxBuffered + 1 lines flush.
    expect(stream.chunks.length).toBeLessThanOrEqual(101);
  });
});
