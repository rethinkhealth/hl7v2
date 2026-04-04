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

  it("accumulates per-pattern stats with bounded latency window", () => {
    const store = createStore({ latencyWindow: 3 });
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });
    for (let i = 0; i < 5; i++) {
      store.dispatch({
        t: "msg",
        conn: 1,
        trigger: "ADT^A01",
        control: `C${i}`,
        pattern: "ADT^A01",
        ack: "AA",
        ms: i * 2,
        ts: "x",
      });
    }
    const stats = store.getState().stats.perPattern.get("ADT^A01");
    expect(stats?.count).toBe(5);
    expect(stats?.latencies.length).toBe(3); // bounded window
    expect(stats?.latencies).toEqual([4, 6, 8]); // last 3
  });

  it("counts errors and dropped events", () => {
    const store = createStore();
    store.dispatch({ t: "error", message: "oops", ts: "x" });
    store.dispatch({ t: "dropped", count: 5, ts: "x" });
    expect(store.getState().stats.errors).toBe(1);
    expect(store.getState().stats.dropped).toBe(5);
  });

  it("bounds the recent-messages ring buffer", () => {
    const store = createStore({ logCapacity: 3 });
    for (let i = 0; i < 5; i++) {
      store.dispatch({ t: "warning", message: `m${i}`, ts: "x" });
    }
    expect(store.getState().log.length).toBe(3);
    expect((store.getState().log[0] as { message: string }).message).toBe("m2");
  });

  it("resets transient state on reload but preserves log history", () => {
    const store = createStore();
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });
    store.dispatch({
      t: "msg",
      conn: 1,
      trigger: "ADT^A01",
      control: "C1",
      pattern: null,
      ack: "AA",
      ms: 1,
      ts: "x",
    });
    store.dispatch({ t: "reload", reason: "file-change", ts: "x" });
    expect(store.getState().status).toBe("reloading");
    expect(store.getState().stats.totalMsgs).toBe(0); // reset
    expect(store.getState().log.length).toBeGreaterThan(0); // preserved
  });
});
