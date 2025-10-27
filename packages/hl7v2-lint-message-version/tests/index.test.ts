/** biome-ignore-all lint/style/noNonNullAssertion: unit tests */
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { VFile } from "vfile";
import { reporter } from "vfile-reporter";
import { describe, expect, it } from "vitest";
import hl7v2LintMessageVersion from "../src";

describe("hl7v2-lint:message-version", () => {
  it("should have no issues for a supported version within range", () => {
    const hl7v2 = m(
      s(
        "MSH",
        // 1..11 arbitrary fields
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f("ADT^A01"),
        f("MSG00001"),
        f("P"),
        // 12: version in supported range
        f("2.5")
      )
    );
    const file = new VFile();

    hl7v2LintMessageVersion()!(hl7v2, file, () => {
      const report = reporter(file);
      expect(report).toEqual("no issues found");
      expect(file.messages).toHaveLength(0);
    });
  });

  it("errors when node is not a root message", () => {
    const notRoot = s("MSH", f("|"), f("^~\\&"));
    const file = new VFile();

    hl7v2LintMessageVersion()!(notRoot as unknown as any, file, () => {
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toBe(
        "The root node is expected to be a message. Received segment instead."
      );
    });
  });

  it("errors when MSH-12 is missing", () => {
    const hl7v2 = m(
      s(
        "MSH",
        // only 11 fields, so MSH-12 is missing
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f("ADT^A01"),
        f("MSG00001"),
        f("P")
      )
    );
    const file = new VFile();

    hl7v2LintMessageVersion()!(hl7v2, file, () => {
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toBe(
        "Message version (MSH.12) is not present."
      );
    });
  });

  it("errors when MSH-12 is present but empty", () => {
    const hl7v2 = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f("ADT^A01"),
        f("MSG00001"),
        f("P"),
        // 12: empty value
        f()
      )
    );
    const file = new VFile();

    hl7v2LintMessageVersion()!(hl7v2, file, () => {
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toBe(
        "Unexpected value `undefined` for `MSH-12`, expected `string`"
      );
    });
  });

  it("errors when MSH-12 is not a valid version", () => {
    const hl7v2 = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f("ADT^A01"),
        f("MSG00001"),
        f("P"),
        // invalid semver
        f("foo")
      )
    );
    const file = new VFile();

    hl7v2LintMessageVersion()!(hl7v2, file, () => {
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toBe("Invalid version: foo");
    });
  });

  it("errors when version is outside supported range", () => {
    const hl7v2 = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f("ADT^A01"),
        f("MSG00001"),
        f("P"),
        // below minimum supported 2.3
        f("2.2")
      )
    );
    const file = new VFile();

    hl7v2LintMessageVersion()!(hl7v2, file, () => {
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toBe(
        "Message version is not supported."
      );
    });
  });
});
