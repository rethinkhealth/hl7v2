import { describe, expect, it } from "vitest";

import type { Event } from "../src/events.js";
import { encode, parseLine } from "../src/events.js";

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
