import { render } from "ink-testing-library";
import { describe, expect, it } from "vitest";

import { App } from "../../../src/bin/tui/app.js";
import { createStore } from "../../../src/bin/tui/store.js";

describe("App", () => {
  it("renders header, log pane, and stats pane from store state", () => {
    const store = createStore();
    store.dispatch({ t: "ready", port: 2575, tls: false, pid: 1, ts: "x" });
    store.dispatch({
      t: "msg",
      conn: 1,
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
    const out = lastFrame();
    expect(out).toContain("glion dev");
    expect(out).toContain("2575");
    expect(out).toContain("ADT^A01");
    expect(out).toContain("STATS");
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
