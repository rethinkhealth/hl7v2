import { render } from "ink-testing-library";
import { describe, expect, it } from "vitest";

import { Header } from "../../../src/bin/tui/header.js";
import type { StoreState } from "../../../src/bin/tui/store.js";

function baseState(overrides: Partial<StoreState> = {}): StoreState {
  return {
    status: "running",
    port: 2575,
    tls: false,
    connections: new Map(),
    stats: { totalMsgs: 0, errors: 0, dropped: 0, perPattern: new Map() },
    log: [],
    ...overrides,
  };
}

describe("Header", () => {
  it("shows port and running status", () => {
    const { lastFrame } = render(
      <Header state={baseState()} uptimeMs={123_000} synthesized={false} />
    );
    const out = lastFrame();
    expect(out).toContain("glion dev");
    expect(out).toContain("2575");
  });

  it("shows zero-config badge when synthesized", () => {
    const { lastFrame } = render(
      <Header state={baseState()} uptimeMs={0} synthesized={true} />
    );
    expect(lastFrame()).toContain("zero-config");
  });

  it("shows reloading status", () => {
    const { lastFrame } = render(
      <Header
        state={baseState({ status: "reloading" })}
        uptimeMs={0}
        synthesized={false}
      />
    );
    expect(lastFrame()).toContain("reloading");
  });
});
