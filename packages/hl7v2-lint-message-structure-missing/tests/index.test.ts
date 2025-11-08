/** biome-ignore-all lint/style/noNonNullAssertion: unit tests */
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2LintMessageStructure from "../src";

const messageToJson = (message: VFile["messages"][0]) =>
  JSON.parse(JSON.stringify(message));

describe("hl7v2-lint:message-structure", () => {
  it("should have no issues when MSH-9.3 is present", async () => {
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
        f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9 with structure
        f("MSG00001"),
        f("P"),
        f("2.5")
      )
    );

    const file = new VFile();
    await unified().use([hl7v2LintMessageStructure]).run(hl7v2, file);

    expect(file.messages).toHaveLength(0);
  });

  it("errors when node is not a root message", async () => {
    const notRoot = s("MSH", f("|"), f("^~\\&"));

    const file = new VFile();
    await unified().use([hl7v2LintMessageStructure]).run(notRoot, file);

    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message:
        "Root node type must be 'root' — received 'segment' instead",
      source: "hl7v2-lint",
      ruleId: "message-structure",
      fatal: false,
    });
  });

  it("errors when MSH-9.3 is missing", async () => {
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
        f(c("ADT"), c("A01")), // Only MSH-9.1 and MSH-9.2, no MSH-9.3
        f("MSG00001"),
        f("P"),
        f("2.5")
      )
    );

    const file = new VFile();
    await unified().use([hl7v2LintMessageStructure]).run(hl7v2, file);

    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message: "Required MSH-9.3 (message structure) field is missing or empty",
      source: "hl7v2-lint",
      ruleId: "message-structure",
      fatal: false,
    });
  });

  it("errors when MSH-9.3 is present but empty", async () => {
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
        f(c("ADT"), c("A01"), c("")), // Empty MSH-9.3
        f("MSG00001"),
        f("P"),
        f("2.5")
      )
    );

    const file = new VFile();
    await unified().use([hl7v2LintMessageStructure]).run(hl7v2, file);

    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message: "Required MSH-9.3 (message structure) field is missing or empty",
      source: "hl7v2-lint",
      ruleId: "message-structure",
      fatal: false,
    });
  });

  it("errors when entire MSH-9 field is missing", async () => {
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
        f(""), // Empty MSH-9
        f("MSG00001"),
        f("P"),
        f("2.5")
      )
    );

    const file = new VFile();
    await unified().use([hl7v2LintMessageStructure]).run(hl7v2, file);

    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toMatchObject({
      message: "Required MSH-9.3 (message structure) field is missing or empty",
      source: "hl7v2-lint",
      ruleId: "message-structure",
      fatal: false,
    });
  });

  it("validates various message structures correctly", async () => {
    const testCases = [
      "ADT_A01",
      "ORU_R01",
      "ORM_O01",
      "VXU_V04",
      "MDM_T02",
      "SIU_S12",
    ];

    for (const structure of testCases) {
      const hl7v2 = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c(""), c(""), c(structure)),
          f(""),
          f(""),
          f("2.5")
        )
      );

      const file = new VFile();
      await unified().use([hl7v2LintMessageStructure]).run(hl7v2, file);

      expect(file.messages).toHaveLength(0);
    }
  });

  describe("works independently without annotators", () => {
    it("validates without hl7v2AnnotateMessage", async () => {
      const hl7v2 = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01"), c("ADT_A01")),
          f(""),
          f(""),
          f("2.5")
        )
      );

      const file = new VFile();
      // Run linter without any annotators
      await unified().use([hl7v2LintMessageStructure]).run(hl7v2, file);

      expect(file.messages).toHaveLength(0);
    });

    it("errors without annotators when MSH-9.3 missing", async () => {
      const hl7v2 = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01")),
          f(""),
          f(""),
          f("2.5")
        )
      );

      const file = new VFile();
      // Run linter without any annotators
      await unified().use([hl7v2LintMessageStructure]).run(hl7v2, file);

      expect(file.messages).toHaveLength(1);
      expect(messageToJson(file.messages[0])).toMatchObject({
        message:
          "Required MSH-9.3 (message structure) field is missing or empty",
        source: "hl7v2-lint",
        ruleId: "message-structure",
        fatal: false,
      });
    });
  });
});
