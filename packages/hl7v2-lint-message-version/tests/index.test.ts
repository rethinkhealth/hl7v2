/** biome-ignore-all lint/style/noNonNullAssertion: unit tests */
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2LintMessageVersion from "../src";

const messageToJson = (message: VFile["messages"][0]) =>
  JSON.parse(JSON.stringify(message));

describe("hl7v2-lint:message-version", () => {
  it("should have no issues for a supported version within range", async () => {
    // GIVEN
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

    // WHEN
    const file = new VFile();
    await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

    // THEN
    expect(file.messages).toHaveLength(0);
  });

  it("errors when node is not a root message", async () => {
    const notRoot = s("MSH", f("|"), f("^~\\&"));

    // WHEN
    const file = new VFile();
    await unified().use([hl7v2LintMessageVersion]).run(notRoot, file);

    // THEN
    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message: "Root node type must be 'root' — received 'segment' instead",
      source: "hl7v2-lint",
      ruleId: "message-version",
      fatal: false,
    });
  });

  it("errors when MSH-12 is missing", async () => {
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
    // WHEN
    const file = new VFile();
    await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

    // THEN
    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message: "Required MSH-12 (version) field is missing or empty",
      source: "hl7v2-lint",
      ruleId: "message-version",
      fatal: false,
    });
  });

  it("errors when MSH-12 is present but empty", async () => {
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
    // WHEN
    const file = new VFile();
    await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

    // THEN
    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message: "Required MSH-12 (version) field is missing or empty",
      source: "hl7v2-lint",
      ruleId: "message-version",
      fatal: false,
    });
  });

  it("errors when MSH-12 is not a valid version", async () => {
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
    // WHEN
    const file = new VFile();
    await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

    // THEN
    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message:
        "MSH-12 (version) field value 'foo' is not a valid semver format",
      source: "hl7v2-lint",
      ruleId: "message-version",
      fatal: false,
    });
  });

  it("errors when version is outside supported range", async () => {
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
    // WHEN
    const file = new VFile();
    await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

    // THEN
    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message:
        "MSH-12 (version) field value '2.2' does not satisfy expression '<3.0.0 >=2.3'",
      source: "hl7v2-lint",
      ruleId: "message-version",
      fatal: false,
    });
  });

  it("respects a custom expression option", async () => {
    const hl7v2 = m(
      s(
        "MSH",
        f("|"),
        f("^\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f("ADT^A01"),
        f("MSG00001"),
        f("P"),
        // 12: version that is below the default minimum (2.3),
        // but allowed by a custom expression starting at 2.2
        f("2.2")
      )
    );
    // WHEN
    const file = new VFile();
    await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

    // THEN
    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message:
        "MSH-12 (version) field value '2.2' does not satisfy expression '<3.0.0 >=2.3'",
      source: "hl7v2-lint",
      ruleId: "message-version",
      fatal: false,
    });
  });
});
