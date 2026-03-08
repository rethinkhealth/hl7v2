import type { Delimiters } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { Timestamp } from "@rethinkhealth/hl7v2-util-timestamp";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import { describe, expect, it } from "vitest";

import { acknowledge } from "../src";

function inboundMessage() {
  return m(
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f("SEND_APP"),
      f("SEND_FAC"),
      f("RECV_APP"),
      f("RECV_FAC"),
      f("20260307120000"),
      f(""),
      f(c("ADT"), c("A01"), c("ADT_A01")),
      f("CTRL001"),
      f("P"),
      f("2.5")
    ),
    s("PID", f("1"), f(""), f("12345"))
  );
}

describe(acknowledge, () => {
  it("defaults to AA ack code", () => {
    const ack = acknowledge(inboundMessage());
    expect(value(ack, "MSA-1")?.value).toBe("AA");
    expect(value(ack, "MSA-2")?.value).toBe("CTRL001");
  });

  it("sets MSH-9 to ACK with inbound trigger event", () => {
    const ack = acknowledge(inboundMessage());
    expect(value(ack, "MSH-9.1")?.value).toBe("ACK");
    expect(value(ack, "MSH-9.2")?.value).toBe("A01");
  });

  it("swaps sender and receiver fields from inbound MSH", () => {
    const ack = acknowledge(inboundMessage());
    // Inbound MSH-5 (RECV_APP) -> ACK MSH-3
    expect(value(ack, "MSH-3")?.value).toBe("RECV_APP");
    // Inbound MSH-6 (RECV_FAC) -> ACK MSH-4
    expect(value(ack, "MSH-4")?.value).toBe("RECV_FAC");
    // Inbound MSH-3 (SEND_APP) -> ACK MSH-5
    expect(value(ack, "MSH-5")?.value).toBe("SEND_APP");
    // Inbound MSH-4 (SEND_FAC) -> ACK MSH-6
    expect(value(ack, "MSH-6")?.value).toBe("SEND_FAC");
  });

  it("preserves version ID from inbound MSH-12", () => {
    const ack = acknowledge(inboundMessage());
    expect(value(ack, "MSH-12")?.value).toBe("2.5");
  });

  it("preserves processing ID from inbound MSH-11", () => {
    const ack = acknowledge(inboundMessage());
    expect(value(ack, "MSH-11")?.value).toBe("P");
  });

  it("generates a unique control ID different from the inbound", () => {
    const ack = acknowledge(inboundMessage());
    const ackControlId = value(ack, "MSH-10")?.value;
    expect(ackControlId).toBeTruthy();
    expect(ackControlId).not.toBe("CTRL001");
  });

  it("only includes MSH and MSA segments for AA", () => {
    const ack = acknowledge(inboundMessage());
    const segments = ack.children;
    expect(segments).toHaveLength(2);
    expect(segments[0]?.type).toBe("segment");
    expect((segments[0] as { name: string }).name).toBe("MSH");
    expect(segments[1]?.type).toBe("segment");
    expect((segments[1] as { name: string }).name).toBe("MSA");
  });

  describe("AE acknowledgment with error", () => {
    it("sets MSA-1 to AE", () => {
      const ack = acknowledge(inboundMessage(), { code: "AE" });
      expect(value(ack, "MSA-1")?.value).toBe("AE");
    });

    it("includes MSA-3 text when provided", () => {
      const ack = acknowledge(inboundMessage(), {
        code: "AE",
        text: "Something went wrong",
      });
      expect(value(ack, "MSA-3")?.value).toBe("Something went wrong");
    });

    it("includes ERR segment when error details provided", () => {
      const ack = acknowledge(inboundMessage(), {
        code: "AE",
        error: {
          code: "207",
          location: "PID-3",
          message: "Application internal error",
          severity: "E",
        },
        text: "Error occurred",
      });

      const segmentNames = ack.children.map(
        (child) => (child as { name: string }).name
      );
      expect(segmentNames).toEqual(["MSH", "MSA", "ERR"]);

      expect(value(ack, "ERR-3.1")?.value).toBe("207");
      expect(value(ack, "ERR-4")?.value).toBe("E");
      expect(value(ack, "ERR-8")?.value).toBe("Application internal error");
      expect(value(ack, "ERR-2")?.value).toBe("PID-3");
    });
  });

  describe("AR acknowledgment", () => {
    it("sets MSA-1 to AR", () => {
      const ack = acknowledge(inboundMessage(), { code: "AR" });
      expect(value(ack, "MSA-1")?.value).toBe("AR");
    });
  });

  describe("custom overrides", () => {
    it("uses custom id", () => {
      const ack = acknowledge(inboundMessage(), {
        id: "CUSTOM_ID",
      });
      expect(value(ack, "MSH-10")?.value).toBe("CUSTOM_ID");
    });

    it("uses custom timestamp string", () => {
      const ack = acknowledge(inboundMessage(), {
        timestamp: "20260101000000",
      });
      expect(value(ack, "MSH-7")?.value).toBe("20260101000000");
    });

    it("uses custom timestamp Date object", () => {
      const ack = acknowledge(inboundMessage(), {
        timestamp: new Date(2026, 0, 15, 10, 30, 0),
      });
      expect(value(ack, "MSH-7")?.value).toBe("20260115103000");
    });

    it("uses Timestamp instance with precision and offset", () => {
      const ts = Timestamp.parse("20260307143000-0500");
      const ack = acknowledge(inboundMessage(), { timestamp: ts });
      expect(value(ack, "MSH-7")?.value).toBe("20260307143000-0500");
    });

    it("uses Timestamp instance with day precision", () => {
      const ts = Timestamp.from(new Date(2026, 2, 7), { precision: "day" });
      const ack = acknowledge(inboundMessage(), { timestamp: ts });
      expect(value(ack, "MSH-7")?.value).toBe("20260307");
    });
  });

  describe("delimiter handling", () => {
    it("copies MSH-1 and MSH-2 from inbound", () => {
      const ack = acknowledge(inboundMessage());
      expect(value(ack, "MSH-1")?.value).toBe("|");
      expect(value(ack, "MSH-2")?.value).toBe("^~\\&");
    });

    it("passes through inbound data.delimiters to ACK root", () => {
      const custom: Delimiters = {
        ...DEFAULT_DELIMITERS,
        component: "#",
      };
      const inbound = inboundMessage();
      inbound.data = { delimiters: custom };
      const ack = acknowledge(inbound);
      expect(ack.data?.delimiters).toEqual(custom);
    });

    it("leaves data.delimiters undefined when inbound has none", () => {
      const ack = acknowledge(inboundMessage());
      expect(ack.data?.delimiters).toBeUndefined();
    });
  });

  describe("edge cases", () => {
    it("handles minimal inbound message", () => {
      const minimal = m(s("MSH", f("|"), f("^~\\&")));
      const ack = acknowledge(minimal);
      expect(value(ack, "MSA-1")?.value).toBe("AA");
      expect(value(ack, "MSH-9.1")?.value).toBe("ACK");
    });

    it("handles inbound message without trigger event", () => {
      const noTrigger = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f("SEND_APP"),
          f("SEND_FAC"),
          f("RECV_APP"),
          f("RECV_FAC"),
          f("20260307120000"),
          f(""),
          f(c("ADT")),
          f("CTRL002"),
          f("P"),
          f("2.5")
        )
      );
      const ack = acknowledge(noTrigger);
      expect(value(ack, "MSH-9.1")?.value).toBe("ACK");
      expect(value(ack, "MSA-2")?.value).toBe("CTRL002");
    });
  });
});
