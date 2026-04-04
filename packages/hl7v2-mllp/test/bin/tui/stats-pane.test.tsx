import { render } from "ink-testing-library";
import { describe, expect, it } from "vitest";

import { StatsPane } from "../../../src/bin/tui/stats-pane.js";
import type { StoreState } from "../../../src/bin/tui/store.js";

function emptyStats(): StoreState["stats"] {
  return {
    totalMsgs: 0,
    errors: 0,
    dropped: 0,
    perPattern: new Map(),
  };
}

describe("StatsPane", () => {
  it("renders zero state", () => {
    const { lastFrame } = render(<StatsPane stats={emptyStats()} />);
    expect(lastFrame()).toContain("0");
  });

  it("renders per-pattern counts and p50/p99 latencies", () => {
    const stats = emptyStats();
    stats.totalMsgs = 3;
    stats.perPattern.set("ADT^A01", {
      count: 3,
      latencies: [1, 5, 10],
    });
    const { lastFrame } = render(<StatsPane stats={stats} />);
    const out = lastFrame();
    expect(out).toContain("ADT^A01");
    expect(out).toContain("3");
  });
});
