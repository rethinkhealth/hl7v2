import { m, s, f, c } from "@rethinkhealth/hl7v2-builder";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";

import { acknowledge } from "../src/acknowledge";
import { AckError, AckReject } from "../src/errors";
import {
  UnknownPatientError,
  UnsupportedMessageTypeError,
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
  describe("AA (success)", () => {
    it("builds an ACK with AA code when no error is provided", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge({
        sending: { application: "AckApp", facility: "AckFac" },
        tree,
      });

      expect(ack.type).toBe("root");
      const raw = toHl7v2(ack);
      const segments = raw.split("\r");

      // MSH segment
      expect(segments[0]).toMatch(/^MSH\|/);
      // Sending app/facility in MSH-3/MSH-4
      expect(segments[0]).toContain("|AckApp|AckFac|");
      // Original sending app/facility become receiving in MSH-5/MSH-6
      expect(segments[0]).toContain("|SendApp|SendFac|");
      // Message type is ACK^A01
      expect(segments[0]).toMatch(/\|ACK\^A01\|/);
      // Version preserved
      expect(segments[0]).toMatch(/\|2\.5\.1$/);

      // MSA segment
      expect(segments[1]).toMatch(/^MSA\|AA\|MSG001$/);
    });

    it("echoes the original trigger event in the ACK MSH-9", () => {
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

      const ack = acknowledge({
        sending: { application: "Server", facility: "Fac" },
        tree,
      });
      const raw = toHl7v2(ack);
      expect(raw).toMatch(/\|ACK\^O01\|/);
      expect(raw).toMatch(/\|AA\|CTL999$/m);
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
          f(c("ADT")),
          f("CTL100"),
          f("P"),
          f("2.3")
        )
      );

      const ack = acknowledge({
        sending: { application: "S", facility: "F" },
        tree,
      });
      const raw = toHl7v2(ack);
      expect(raw).toMatch(/\|ACK\|/);
      expect(raw).toMatch(/\|2\.3$/m);
    });

    it("only produces MSH and MSA segments for success", () => {
      const tree = buildSampleAdt();
      const ack = acknowledge({
        sending: { application: "S", facility: "F" },
        tree,
      });
      const raw = toHl7v2(ack);
      const segments = raw.split("\r");
      expect(segments).toHaveLength(2);
      expect(segments[0]).toMatch(/^MSH\|/);
      expect(segments[1]).toMatch(/^MSA\|/);
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

      const ack = acknowledge({
        error,
        sending: { application: "S", facility: "F" },
        tree,
      });

      const raw = toHl7v2(ack);
      const segments = raw.split("\r");

      expect(segments).toHaveLength(3);
      expect(segments[1]).toMatch(/^MSA\|AE\|MSG001\|Missing patient name$/);
      expect(segments[2]).toMatch(/^ERR\|/);
      // ERR-2: location, ERR-3: error code, ERR-4: severity
      expect(segments[2]).toContain("|PID^1^3|207|E|");
      // ERR-8: user message
      expect(segments[2]).toContain("|Patient name is required");
    });

    it("builds AE without ERR when no errorCode provided", () => {
      const tree = buildSampleAdt();
      const error = new AckError("Something failed", {
        text: "Generic error",
      });

      const ack = acknowledge({
        error,
        sending: { application: "S", facility: "F" },
        tree,
      });

      const raw = toHl7v2(ack);
      const segments = raw.split("\r");

      expect(segments).toHaveLength(2);
      expect(segments[1]).toBe("MSA|AE|MSG001|Generic error");
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

      const ack = acknowledge({
        error,
        sending: { application: "S", facility: "F" },
        tree,
      });

      const raw = toHl7v2(ack);
      const segments = raw.split("\r");

      expect(segments).toHaveLength(3);
      expect(segments[1]).toMatch(/^MSA\|AR\|MSG001\|Not supported$/);
      expect(segments[2]).toMatch(/^ERR\|/);
    });
  });

  describe("predefined errors", () => {
    it("works with UnknownPatientError", () => {
      const tree = buildSampleAdt();
      const error = new UnknownPatientError("Patient not found");

      const ack = acknowledge({
        error,
        sending: { application: "S", facility: "F" },
        tree,
      });

      const raw = toHl7v2(ack);
      const segments = raw.split("\r");
      expect(segments).toHaveLength(3);
      expect(segments[1]).toMatch(/^MSA\|AE\|MSG001$/);
      expect(segments[2]).toContain("|204|E|");
    });

    it("works with UnsupportedMessageTypeError", () => {
      const tree = buildSampleAdt();
      const error = new UnsupportedMessageTypeError("Not supported");

      const ack = acknowledge({
        error,
        sending: { application: "S", facility: "F" },
        tree,
      });

      const raw = toHl7v2(ack);
      expect(raw).toContain("MSA|AR|MSG001");
      expect(raw).toContain("|200|E|");
    });
  });
});
