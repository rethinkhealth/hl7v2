import { describe, expect, it } from "vitest";

import { createStore } from "../../../src/bin/tui/store.js";

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

  it("nulls entries beyond the in-memory cap so old events can be garbage-collected", () => {
    const store = createStore();
    // Dispatch enough events to blow past the 2000-entry memory cap.
    for (let i = 0; i < 2500; i += 1) {
      store.dispatch({ t: "warning", message: `m${i}`, ts: "x" });
    }
    const log = store.getState().log;
    // Length keeps growing — Static needs monotonic indices.
    expect(log.length).toBe(2500);
    // The first 500 slots are nulled; their entries can be GC'd.
    expect(log[0]).toBeNull();
    expect(log[499]).toBeNull();
    // The tail 2000 slots still hold live entries.
    expect(log[500]).not.toBeNull();
    expect(log[2499]).not.toBeNull();
    const last = log[2499];
    if (last && last.event.t === "warning") {
      expect(last.event.message).toBe("m2499");
    }
  });

  it("assigns monotonically-increasing ids to log entries", () => {
    const store = createStore();
    store.dispatch({ t: "warning", message: "a", ts: "x" });
    store.dispatch({ t: "warning", message: "b", ts: "x" });
    store.dispatch({ t: "warning", message: "c", ts: "x" });
    const ids = store.getState().log.map((e) => e.id);
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
