import { render } from "ink-testing-library";
import { describe, expect, it } from "vitest";

import { App } from "../../../src/bin/tui/app.js";
import { createStore } from "../../../src/bin/tui/store.js";

describe("App", () => {
  it("renders the brand, port, status, and shortcut hints", () => {
    const store = createStore();
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });

    const { lastFrame } = render(
      <App store={store} synthesized={false} startedAt={Date.now()} />
    );
    const out = lastFrame();
    expect(out).toContain("glion");
    expect(out).toContain("2575");
    expect(out).toContain("running");
    expect(out).toContain("reload");
    expect(out).toContain("quit");
  });

  it("renders recent log entries below the header", () => {
    const store = createStore();
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });
    store.dispatch({
      t: "msg",
      conn: 1,
      remote: "127.0.0.1:54321",
      trigger: "ADT^A01",
      control: "C1",
      pattern: "ADT^A01",
      ack: "AA",
      ms: 3,
      ts: "x",
    });

    const { lastFrame } = render(
      <App store={store} synthesized={false} startedAt={Date.now()} />
    );
    expect(lastFrame()).toContain("ADT^A01");
  });

  it("shows zero-config badge when synthesized", () => {
    const store = createStore();
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });
    const { lastFrame } = render(
      <App store={store} synthesized={true} startedAt={Date.now()} />
    );
    expect(lastFrame()).toContain("zero-config");
  });
});
