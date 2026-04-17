import { describe, expect, it } from "vitest";

import { createStore } from "../../src/tui/store.js";

describe("createStore", () => {
  it("handles ready events", () => {
    const store = createStore();
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });
    expect(store.getState().status).toBe("running");
    expect(store.getState().port).toBe(2575);
  });

  it("tracks open and close connections", () => {
    const store = createStore();
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });
    store.dispatch({ t: "conn.open", id: 1, remote: "1.1.1.1:1", ts: "x" });
    store.dispatch({ t: "conn.open", id: 2, remote: "2.2.2.2:2", ts: "x" });
    expect(store.getState().connections.size).toBe(2);
    store.dispatch({ t: "conn.close", id: 1, ts: "x" });
    expect(store.getState().connections.size).toBe(1);
  });

  it("keeps every dispatched event in the append-only log", () => {
    const store = createStore();
    for (let i = 0; i < 5; i += 1) {
      store.dispatch({ t: "warning", message: `m${i}`, ts: "x" });
    }
    const log = store.getState().log;
    expect(log.length).toBe(5);
    const first = log[0]?.event;
    expect(first?.t).toBe("warning");
    if (first?.t === "warning") {
      expect(first.message).toBe("m0");
    }
  });

  it("keeps state.log bounded even under high event throughput", () => {
    const store = createStore();
    // Dispatch many times more events than the compaction threshold.
    // Without bounding, the array would grow to 50_000 slots — the P1
    // memory/CPU cliff the review flagged. Bounded, it stays near the
    // compaction threshold (≤ a few thousand) regardless of volume.
    for (let i = 0; i < 50_000; i += 1) {
      store.dispatch({ t: "warning", message: `m${i}`, ts: "x" });
    }
    const log = store.getState().log;
    // Exact upper bound is impl-dependent, but it MUST be sub-linear
    // in the event count. 10_000 is a generous ceiling that proves
    // bounded growth without locking us into specific constants.
    expect(log.length).toBeLessThan(10_000);
    // And the most recent event must still be in the log — bounded
    // growth is worthless if we drop recent entries too.
    const last = log.at(-1);
    expect(last?.event.t).toBe("warning");
    if (last && last.event.t === "warning") {
      expect(last.event.message).toBe("m49999");
    }
  });

  it("increments logEpoch when the log is compacted", () => {
    const store = createStore();
    expect(store.getState().logEpoch).toBe(0);
    // Not enough events to trigger compaction yet.
    for (let i = 0; i < 100; i += 1) {
      store.dispatch({ t: "warning", message: `m${i}`, ts: "x" });
    }
    expect(store.getState().logEpoch).toBe(0);
    // Blow well past the compaction threshold. Epoch must advance so
    // downstream consumers (LogPane's Static key) can remount and
    // resync their "already rendered" counter.
    for (let i = 100; i < 20_000; i += 1) {
      store.dispatch({ t: "warning", message: `m${i}`, ts: "x" });
    }
    expect(store.getState().logEpoch).toBeGreaterThan(0);
  });

  it("assigns monotonically-increasing ids to log entries", () => {
    const store = createStore();
    store.dispatch({ t: "warning", message: "a", ts: "x" });
    store.dispatch({ t: "warning", message: "b", ts: "x" });
    store.dispatch({ t: "warning", message: "c", ts: "x" });
    const ids = store.getState().log.map((e) => e?.id);
    expect(ids).toEqual([ids[0], (ids[0] ?? 0) + 1, (ids[0] ?? 0) + 2]);
  });

  it("flips status to reloading and clears connections on reload, preserves log history", () => {
    const store = createStore();
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });
    store.dispatch({ t: "conn.open", id: 1, remote: "1.1.1.1:1", ts: "x" });

    store.dispatch({ t: "reload", reason: "file-change", ts: "x" });
    expect(store.getState().status).toBe("reloading");
    expect(store.getState().connections.size).toBe(0);
    expect(store.getState().log.length).toBeGreaterThan(0);
  });

  it("flips status to crashed on fatal", () => {
    const store = createStore();
    store.dispatch({
      t: "fatal",
      kind: "child-crashed",
      message: "boom",
      ts: "x",
    });
    expect(store.getState().status).toBe("crashed");
  });
});
