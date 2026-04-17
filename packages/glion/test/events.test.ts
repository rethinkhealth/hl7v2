import { describe, expect, it } from "vitest";

import type { Event } from "../src/events.js";
import { encode, eventLevel, parseLine } from "../src/events.js";

describe("events codec", () => {
  it("round-trips a ready event", () => {
    const event: Event = {
      t: "ready",
      port: 2575,
      tls: false,
      pid: 1234,
      ts: "2026-04-04T12:00:00.000Z",
    };
    const line = encode(event);
    expect(line.endsWith("\n")).toBe(true);
    expect(parseLine(line.trim())).toEqual(event);
  });

  it("round-trips a msg event", () => {
    const event: Event = {
      t: "msg",
      conn: 1,
      remote: "127.0.0.1:54321",
      trigger: "ADT^A01",
      control: "MSG00001",
      pattern: "ADT^A01",
      ack: "AA",
      ms: 3.2,
      ts: "2026-04-04T12:00:00.000Z",
    };
    expect(parseLine(encode(event).trim())).toEqual(event);
  });

  it("round-trips a fatal event with nested context", () => {
    const event: Event = {
      t: "fatal",
      kind: "config-invalid",
      message: "bad port",
      context: { field: "port", issue: "expected number" },
      ts: "2026-04-04T12:00:00.000Z",
    };
    expect(parseLine(encode(event).trim())).toEqual(event);
  });

  it("parseLine returns null on malformed JSON", () => {
    expect(parseLine("{not json")).toBeNull();
    expect(parseLine("")).toBeNull();
  });

  it("parseLine returns null when the discriminator is missing or unknown", () => {
    expect(parseLine(JSON.stringify({ foo: "bar" }))).toBeNull();
    expect(parseLine(JSON.stringify({ t: "unknown-kind" }))).toBeNull();
  });
});

describe("eventLevel", () => {
  // Fixed-severity events: the level comes from the type table.
  it("maps each fixed-severity event type to its declared level", () => {
    const cases: [Event, string][] = [
      [{ t: "ready", port: 1, tls: false, pid: 1, ts: "t" }, "info"],
      [{ t: "conn.open", id: 1, remote: "r", ts: "t" }, "debug"],
      [{ t: "conn.close", id: 1, ts: "t" }, "debug"],
      [
        {
          t: "msg",
          conn: 1,
          remote: "r",
          trigger: "T",
          control: "c",
          pattern: null,
          ack: null,
          ms: 0,
          ts: "t",
        },
        "info",
      ],
      [{ t: "error", message: "e", ts: "t" }, "error"],
      [{ t: "reload", reason: "manual", ts: "t" }, "info"],
      [{ t: "closing", ts: "t" }, "info"],
      [{ t: "closed", ts: "t" }, "info"],
      [{ t: "fatal", kind: "child-crashed", message: "m", ts: "t" }, "fatal"],
      [{ t: "dropped", count: 1, ts: "t" }, "warn"],
      [{ t: "warning", message: "w", ts: "t" }, "warn"],
      [{ t: "exit", code: 0, ts: "t" }, "info"],
    ];
    for (const [event, expected] of cases) {
      expect(eventLevel(event)).toBe(expected);
    }
  });

  // `log` is the only variant whose level is an instance-level property.
  it("reads the instance-level level off log events", () => {
    expect(eventLevel({ t: "log", level: "warn", message: "m", ts: "t" })).toBe(
      "warn"
    );
    expect(
      eventLevel({ t: "log", level: "error", message: "m", ts: "t" })
    ).toBe("error");
  });
});
