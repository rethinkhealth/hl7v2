import { render } from "ink-testing-library";
import { describe, expect, it } from "vitest";

import type { Event } from "../../../src/bin/events.js";
import { LogPane } from "../../../src/bin/tui/log-pane.js";

describe("LogPane", () => {
  it("renders recent msg events with trigger and ack", () => {
    const events: Event[] = [
      {
        t: "msg",
        conn: 1,
        trigger: "ADT^A01",
        control: "C1",
        pattern: "ADT^A01",
        ack: "AA",
        ms: 3.2,
        ts: "x",
      },
    ];
    const { lastFrame } = render(<LogPane events={events} maxLines={10} />);
    expect(lastFrame()).toContain("ADT^A01");
    expect(lastFrame()).toContain("AA");
  });

  it("renders error events distinctly", () => {
    const events: Event[] = [{ t: "error", message: "boom", ts: "x" }];
    const { lastFrame } = render(<LogPane events={events} maxLines={10} />);
    expect(lastFrame()).toContain("boom");
  });

  it("caps rendered lines at maxLines", () => {
    const events: Event[] = Array.from({ length: 20 }, (_, i) => ({
      t: "warning" as const,
      message: `m${i}`,
      ts: "x",
    }));
    const { lastFrame } = render(<LogPane events={events} maxLines={5} />);
    // Only the last 5 should appear
    expect(lastFrame()).toContain("m19");
    expect(lastFrame()).toContain("m15");
    expect(lastFrame()).not.toContain("m14");
  });
});
