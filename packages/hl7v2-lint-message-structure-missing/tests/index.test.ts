/** biome-ignore-all lint/style/noNonNullAssertion: unit tests */
import { readFile } from "node:fs/promises";
// biome-ignore lint/performance/noNamespaceImport: fine
import * as path from "node:path";

import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";

import hl7v2LintMessageStructure from "../src";

const messageToJson = (message: VFile["messages"][0]) =>
  // oxlint-disable-next-line unicorn/prefer-structured-clone
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
    expect(messageToJson(file.messages[0])).toStrictEqual({
      ancestors: [notRoot],
      fatal: false,
      file: "",
      message: "Root node type must be 'root' — received 'segment' instead",
      name: "1:1",
      reason: "Root node type must be 'root' — received 'segment' instead",
      ruleId: "message-structure",
      source: "hl7v2-lint",
      url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-structure-missing#readme",
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
    expect(messageToJson(file.messages[0])).toStrictEqual({
      ancestors: expect.any(Array),
      fatal: false,
      file: "",
      message: "MSH-9.3 (message structure) field is missing or empty",
      name: "1:1",
      reason: "MSH-9.3 (message structure) field is missing or empty",
      ruleId: "message-structure",
      source: "hl7v2-lint",
      url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-structure-missing#readme",
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
    expect(messageToJson(file.messages[0])).toStrictEqual({
      ancestors: expect.any(Array),
      fatal: false,
      file: "",
      message: "MSH-9.3 (message structure) field is missing or empty",
      name: "1:1",
      reason: "MSH-9.3 (message structure) field is missing or empty",
      ruleId: "message-structure",
      source: "hl7v2-lint",
      url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-structure-missing#readme",
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
    expect(messageToJson(file.messages[0])).toStrictEqual({
      ancestors: expect.any(Array),
      fatal: false,
      file: "",
      message: "MSH-9.3 (message structure) field is missing or empty",
      name: "1:1",
      reason: "MSH-9.3 (message structure) field is missing or empty",
      ruleId: "message-structure",
      source: "hl7v2-lint",
      url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-structure-missing#readme",
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

  it("errors with correct position of segment MSH-9 when MSH-9.3 is missing", async () => {
    const ast = await readFile(
      path.join(__dirname, "fixtures", "oru-ast.json"),
      "utf8"
    );

    const file = new VFile();
    await unified().use([hl7v2LintMessageStructure]).run(JSON.parse(ast), file);

    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toStrictEqual({
      ancestors: expect.any(Array),
      column: 207,
      fatal: false,
      file: "",
      line: 1,
      message: "MSH-9.3 (message structure) field is missing or empty",
      name: "1:207-1:222",
      place: {
        end: {
          column: 222,
          line: 1,
          offset: 221,
        },
        start: {
          column: 207,
          line: 1,
          offset: 206,
        },
      },
      reason: "MSH-9.3 (message structure) field is missing or empty",
      ruleId: "message-structure",
      source: "hl7v2-lint",
      url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-structure-missing#readme",
    });
  });
});
