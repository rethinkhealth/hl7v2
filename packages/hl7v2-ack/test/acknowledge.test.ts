import { m, s, f, c } from "@rethinkhealth/hl7v2-builder";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";
import { value } from "@rethinkhealth/hl7v2-util-query";

import { acknowledge } from "../src/acknowledge";
import { AckError, AckReject } from "../src/errors";
import {
  AckUnknownPatientError,
  AckUnsupportedMessageTypeError,
} from "../src/predefined";

/**
 * Helper: build a minimal ADT^A01 message AST.
 */
function buildSampleAdt() {
  return m(
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f("SendApp"),
      f("SendFac"),
      f("RecvApp"),
      f("RecvFac"),
      f("20240101120000"),
      f(""),
      f(c("ADT"), c("A01"), c("ADT_A01")),
      f("MSG001"),
      f("P"),
      f("2.5.1")
    ),
    s("PID", f("1"), f(""), f("12345"))
  );
}

describe("acknowledge", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-01-15T10:30:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("AA (success)", () => {
    it("builds an ACK with AA code when no error is provided", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge(tree, { id: "SNAPSHOT-ID-001" });
      const ack_hl7v2 = toHl7v2(ack);

      expect(ack.type).toBe("root");
      expect(ack_hl7v2).toEqual(
        "MSH|^~\\&|RecvApp|RecvFac|SendApp|SendFac|20240115023000||ACK^A01|SNAPSHOT-ID-001|P|2.5.1\r" +
          "MSA|AA|MSG001"
      );
    });

    it("echoes the original trigger event in the ACK MSH-9.2", () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f("App"),
          f("Fac"),
          f(""),
          f(""),
          f("20240101"),
          f(""),
          f(c("ORM"), c("O01")),
          f("CTL999"),
          f("P"),
          f("2.5.1")
        )
      );

      const ack = acknowledge(tree);
      const msh_9 = value(ack, "MSH-9.2")?.value;

      expect(msh_9).toEqual("O01");
    });

    it("handles missing trigger event gracefully", () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f("App"),
          f("Fac"),
          f(""),
          f(""),
          f("20240101"),
          f(""),
          f(c("ADT")), // missing ADT Event Type (A01)
          f("CTL100"),
          f("P"),
          f("2.3")
        )
      );

      const ack = acknowledge(tree);

      expect(value(ack, "MSH-9.1")?.value).toEqual("ACK");
      expect(value(ack, "MSH-9.2")).toBeNull();
    });

    it("only produces MSH and MSA segments for success", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge(tree);

      expect(ack.children[0]?.type === "segment" && ack.children[0].name).toBe(
        "MSH"
      );

      expect(ack.children[1]?.type === "segment" && ack.children[1].name).toBe(
        "MSA"
      );
    });
  });

  describe("AE (error)", () => {
    it("builds an ACK with AE code and ERR segment from AckError", () => {
      const tree = buildSampleAdt();
      const error = new AckError("Validation failed", {
        errorCode: "207",
        location: "PID^1^3",
        severity: "E",
        text: "Missing patient name",
        userMessage: "Patient name is required",
      });

      const ack = acknowledge(tree, {
        error,
        id: "ACK-ERR-001",
      });
      const ack_hl7v2 = toHl7v2(ack);
      const segments = ack_hl7v2.split("\r");

      expect(ack.children).toHaveLength(3);
      expect(value(ack, "MSA-1")?.value).toEqual("AE");
      expect(value(ack, "MSA-2")?.value).toEqual("MSG001");
      expect(value(ack, "MSA-3")?.value).toEqual("Missing patient name");

      expect(segments).toHaveLength(3);
      expect(segments).toEqual([
        "MSH|^~\\&|RecvApp|RecvFac|SendApp|SendFac|20240115023000||ACK^A01|ACK-ERR-001|P|2.5.1",
        "MSA|AE|MSG001|Missing patient name",
        "ERR||PID^1^3|207|E||||Patient name is required",
      ]);
    });

    it("builds AE without ERR when no errorCode provided", () => {
      const tree = buildSampleAdt();
      const error = new AckError("Something failed", {
        text: "Generic error",
      });

      const ack = acknowledge(tree, {
        error,
        id: "ACK-ERR-002",
        sending: { application: "S", facility: "F" },
      });
      const segments = toHl7v2(ack).split("\r");

      expect(segments).toHaveLength(2);
      expect(segments[1]).toEqual("MSA|AE|MSG001|Generic error");
    });
  });

  describe("AR (reject)", () => {
    it("builds an ACK with AR code and ERR segment from AckReject", () => {
      const tree = buildSampleAdt();
      const error = new AckReject("Unsupported", {
        errorCode: "200",
        severity: "E",
        text: "Not supported",
        userMessage: "This message type is not supported",
      });

      const ack = acknowledge(tree, {
        error,
        id: "ACK-REJ-001",
        sending: { application: "S", facility: "F" },
      });
      const ack_hl7v2 = toHl7v2(ack);
      const segments = ack_hl7v2.split("\r");

      expect(segments).toHaveLength(3);
      expect(value(ack, "MSA-1")?.value).toEqual("AR");
      expect(value(ack, "MSA-2")?.value).toEqual("MSG001");
      expect(value(ack, "MSA-3")?.value).toEqual("Not supported");
      expect(segments[2]).toEqual(
        "ERR|||200|E||||This message type is not supported"
      );
    });
  });

  describe("optional sending", () => {
    it("uses original receiving app/facility when sending is omitted", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge(tree, { id: "ACK-SEND-001" });
      const ack_hl7v2 = toHl7v2(ack);

      expect(value(ack, "MSH-3")?.value).toEqual("RecvApp");
      expect(value(ack, "MSH-4")?.value).toEqual("RecvFac");
      expect(value(ack, "MSH-5")?.value).toEqual("SendApp");
      expect(value(ack, "MSH-6")?.value).toEqual("SendFac");
      expect(ack_hl7v2).toEqual(
        "MSH|^~\\&|RecvApp|RecvFac|SendApp|SendFac|20240115023000||ACK^A01|ACK-SEND-001|P|2.5.1\r" +
          "MSA|AA|MSG001"
      );
    });

    it("uses explicit sending when provided", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge(tree, {
        id: "ACK-SEND-002",
        sending: { application: "Custom", facility: "Fac" },
      });

      expect(value(ack, "MSH-3")?.value).toEqual("Custom");
      expect(value(ack, "MSH-4")?.value).toEqual("Fac");
    });
  });

  describe("processingId", () => {
    it("defaults to original message MSH-11 value", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge(tree);

      expect(value(ack, "MSH-11")?.value).toEqual("P");
    });

    it("uses explicit processingId when provided", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge(tree, { processingId: "T" });

      expect(value(ack, "MSH-11")?.value).toEqual("T");
    });
  });

  describe("id (MSH-10 control ID)", () => {
    it("auto-generates a unique MSH-10 when id is omitted", () => {
      const tree = buildSampleAdt();
      const ack1 = acknowledge(tree);
      const ack2 = acknowledge(tree);

      const msh10a = value(ack1, "MSH-10")?.value;
      const msh10b = value(ack2, "MSH-10")?.value;

      expect(msh10a).toHaveLength(20);
      expect(msh10b).toHaveLength(20);
      expect(msh10a).not.toBe(msh10b);
    });

    it("uses explicit id as MSH-10 when provided", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge(tree, { id: "MY-CUSTOM-ID" });

      expect(value(ack, "MSH-10")?.value).toEqual("MY-CUSTOM-ID");
    });
  });

  describe("predefined errors", () => {
    it("works with AckUnknownPatientError", () => {
      const tree = buildSampleAdt();
      const error = new AckUnknownPatientError("Patient not found");

      const ack = acknowledge(tree, {
        error,
        id: "ACK-PRE-001",
        sending: { application: "S", facility: "F" },
      });
      const segments = toHl7v2(ack).split("\r");

      expect(segments).toHaveLength(3);
      expect(value(ack, "MSA-1")?.value).toEqual("AE");
      expect(value(ack, "MSA-2")?.value).toEqual("MSG001");
      expect(segments[2]).toContain("|204|E|");
    });

    it("works with AckUnsupportedMessageTypeError", () => {
      const tree = buildSampleAdt();
      const error = new AckUnsupportedMessageTypeError("Not supported");

      const ack = acknowledge(tree, {
        error,
        id: "ACK-PRE-002",
        sending: { application: "S", facility: "F" },
      });
      const ack_hl7v2 = toHl7v2(ack);

      expect(value(ack, "MSA-1")?.value).toEqual("AR");
      expect(value(ack, "MSA-2")?.value).toEqual("MSG001");
      expect(ack_hl7v2).toContain("|200|E|");
    });
  });
});
