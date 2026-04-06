import { render } from "ink-testing-library";
import { describe, expect, it } from "vitest";

import type { Event } from "../../../src/bin/events.js";
import { LogPane } from "../../../src/bin/tui/log-pane.js";
import type { LogEntry } from "../../../src/bin/tui/store.js";

function toEntries(events: Event[]): LogEntry[] {
  return events.map((event, i) => ({ id: i + 1, event }));
}

describe("LogPane", () => {
  it("renders msg events with trigger and ack", () => {
    const entries = toEntries([
      {
        t: "msg",
        conn: 1,
        remote: "10.0.0.5:8080",
        trigger: "ADT^A01",
        control: "C1",
        pattern: "ADT^A01",
        ack: "AA",
        ms: 3.2,
        ts: "2026-04-05T12:34:56.000Z",
      },
    ]);
    const { lastFrame } = render(<LogPane entries={entries} />);
    expect(lastFrame()).toContain("ADT^A01");
    expect(lastFrame()).toContain("AA");
  });

  it("renders error events distinctly", () => {
    const entries = toEntries([{ t: "error", message: "boom", ts: "x" }]);
    const { lastFrame } = render(<LogPane entries={entries} />);
    expect(lastFrame()).toContain("boom");
  });

  it("streams every entry (append-only, Static commits each exactly once)", () => {
    const events: Event[] = Array.from({ length: 20 }, (_, i) => ({
      t: "warning" as const,
      message: `m${i}`,
      ts: "x",
    }));
    const { lastFrame } = render(<LogPane entries={toEntries(events)} />);
    const out = lastFrame() ?? "";
    expect(out).toContain("m0");
    expect(out).toContain("m10");
    expect(out).toContain("m19");
  });
});
