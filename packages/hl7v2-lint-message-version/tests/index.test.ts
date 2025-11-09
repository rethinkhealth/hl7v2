/** biome-ignore-all lint/style/noNonNullAssertion: unit tests */
import { readFile } from "node:fs/promises";
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2LintMessageVersion from "../src";

import path = require("node:path");

import type { Root } from "@rethinkhealth/hl7v2-ast";

const messageToJson = (message: VFile["messages"][0]) =>
  JSON.parse(JSON.stringify(message));

describe("hl7v2-lint:message-version", () => {
  // it("should have no issues for a supported version within range", async () => {
  //   // GIVEN
  //   const hl7v2 = m(
  //     s(
  //       "MSH",
  //       // 1..11 arbitrary fields
  //       f("|"),
  //       f("^~\\&"),
  //       f("SENDER"),
  //       f("FAC"),
  //       f("RCVR"),
  //       f("FAC"),
  //       f("20250101010101"),
  //       f(""),
  //       f("ADT^A01"),
  //       f("MSG00001"),
  //       f("P"),
  //       // 12: version in supported range
  //       f("2.5")
  //     )
  //   );

  //   // WHEN
  //   const file = new VFile();
  //   await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

  //   // THEN
  //   expect(file.messages).toHaveLength(0);
  // });

  // it("errors when node is not a root message", async () => {
  //   const notRoot = s("MSH", f("|"), f("^~\\&"));

  //   // WHEN
  //   const file = new VFile();
  //   await unified().use([hl7v2LintMessageVersion]).run(notRoot, file);

  //   // THEN
  //   expect(file.messages).toHaveLength(1);
  //   expect(messageToJson(file.messages[0])).toEqual({
  //     file: "",
  //     name: "1:1",
  //     reason: "Root node type must be 'root' — received 'segment' instead",
  //     url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  //     message: "Root node type must be 'root' — received 'segment' instead",
  //     source: "hl7v2-lint",
  //     ruleId: "message-version",
  //     fatal: false,
  //     ancestors: [notRoot],
  //   });
  // });

  // it("errors when MSH-12 is missing", async () => {
  //   const hl7v2 = m(
  //     s(
  //       "MSH",
  //       // only 11 fields, so MSH-12 is missing
  //       f("|"),
  //       f("^~\\&"),
  //       f("SENDER"),
  //       f("FAC"),
  //       f("RCVR"),
  //       f("FAC"),
  //       f("20250101010101"),
  //       f(""),
  //       f("ADT^A01"),
  //       f("MSG00001"),
  //       f("P")
  //     )
  //   );
  //   // WHEN
  //   const file = new VFile();
  //   await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

  //   // THEN
  //   expect(file.messages).toHaveLength(1);
  //   expect(messageToJson(file.messages[0])).toEqual({
  //     message: "Required MSH-12 (version) field is missing or empty",
  //     source: "hl7v2-lint",
  //     ruleId: "message-version",
  //     fatal: false,
  //     file: "",
  //     name: "1:1",
  //     reason: "Required MSH-12 (version) field is missing or empty",
  //     url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  //     ancestors: [hl7v2],
  //   });
  // });

  // it("errors when MSH-12 is present but empty", async () => {
  //   const hl7v2 = m(
  //     s(
  //       "MSH",
  //       f("|"),
  //       f("^~\\&"),
  //       f("SENDER"),
  //       f("FAC"),
  //       f("RCVR"),
  //       f("FAC"),
  //       f("20250101010101"),
  //       f(""),
  //       f("ADT^A01"),
  //       f("MSG00001"),
  //       f("P"),
  //       // 12: empty value
  //       f()
  //     )
  //   );
  //   // WHEN
  //   const file = new VFile();
  //   await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

  //   // THEN
  //   expect(file.messages).toHaveLength(1);
  //   expect(messageToJson(file.messages[0])).toEqual({
  //     message: "Required MSH-12 (version) field is missing or empty",
  //     source: "hl7v2-lint",
  //     ruleId: "message-version",
  //     fatal: false,
  //     file: "",
  //     name: "1:1",
  //     reason: "Required MSH-12 (version) field is missing or empty",
  //     url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  //     ancestors: expect.any(Array),
  //   });
  // });

  // it("errors when MSH-12 is not a valid version", async () => {
  //   const hl7v2 = m(
  //     s(
  //       "MSH",
  //       f("|"),
  //       f("^~\\&"),
  //       f("SENDER"),
  //       f("FAC"),
  //       f("RCVR"),
  //       f("FAC"),
  //       f("20250101010101"),
  //       f(""),
  //       f("ADT^A01"),
  //       f("MSG00001"),
  //       f("P"),
  //       // invalid semver
  //       f("foo")
  //     )
  //   );
  //   // WHEN
  //   const file = new VFile();
  //   await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

  //   // THEN
  //   expect(file.messages).toHaveLength(1);
  //   expect(messageToJson(file.messages[0])).toEqual({
  //     message:
  //       "MSH-12 (version) field value 'foo' does not satisfy expression '<3.0.0 >=2.3'",
  //     source: "hl7v2-lint",
  //     ruleId: "message-version",
  //     fatal: false,
  //     file: "",
  //     name: "1:1",
  //     reason:
  //       "MSH-12 (version) field value 'foo' does not satisfy expression '<3.0.0 >=2.3'",
  //     url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  //     ancestors: expect.any(Array),
  //   });
  // });

  // it("errors when version is outside supported range", async () => {
  //   const hl7v2 = m(
  //     s(
  //       "MSH",
  //       f("|"),
  //       f("^~\\&"),
  //       f("SENDER"),
  //       f("FAC"),
  //       f("RCVR"),
  //       f("FAC"),
  //       f("20250101010101"),
  //       f(""),
  //       f("ADT^A01"),
  //       f("MSG00001"),
  //       f("P"),
  //       // below minimum supported 2.3
  //       f("2.2")
  //     )
  //   );
  //   // WHEN
  //   const file = new VFile();
  //   await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

  //   // THEN
  //   expect(file.messages).toHaveLength(1);
  //   expect(messageToJson(file.messages[0])).toEqual({
  //     message:
  //       "MSH-12 (version) field value '2.2' does not satisfy expression '<3.0.0 >=2.3'",
  //     source: "hl7v2-lint",
  //     ruleId: "message-version",
  //     fatal: false,
  //     file: "",
  //     name: "1:1",
  //     reason:
  //       "MSH-12 (version) field value '2.2' does not satisfy expression '<3.0.0 >=2.3'",
  //     url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  //     ancestors: expect.any(Array),
  //   });
  // });

  // it("respects a custom expression option", async () => {
  //   const hl7v2 = m(
  //     s(
  //       "MSH",
  //       f("|"),
  //       f("^\\&"),
  //       f("SENDER"),
  //       f("FAC"),
  //       f("RCVR"),
  //       f("FAC"),
  //       f("20250101010101"),
  //       f(""),
  //       f("ADT^A01"),
  //       f("MSG00001"),
  //       f("P"),
  //       // 12: version that is below the default minimum (2.3),
  //       // but allowed by a custom expression starting at 2.2
  //       f("2.2")
  //     )
  //   );
  //   // WHEN
  //   const file = new VFile();
  //   await unified().use([hl7v2LintMessageVersion]).run(hl7v2, file);

  //   // THEN
  //   expect(file.messages).toHaveLength(1);
  //   expect(messageToJson(file.messages[0])).toEqual({
  //     message:
  //       "MSH-12 (version) field value '2.2' does not satisfy expression '<3.0.0 >=2.3'",
  //     source: "hl7v2-lint",
  //     ruleId: "message-version",
  //     fatal: false,
  //     file: "",
  //     name: "1:1",
  //     reason:
  //       "MSH-12 (version) field value '2.2' does not satisfy expression '<3.0.0 >=2.3'",
  //     url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  //     ancestors: expect.any(Array),
  //   });
  // });

  // it("errors with correct position of segment MSH-12 when MSH-12 is empty", async () => {
  //   const ast = await readFile(
  //     path.join(__dirname, "fixtures", "oru-ast-empty.json"),
  //     "utf-8"
  //   );

  //   const file = new VFile();
  //   await unified().use([hl7v2LintMessageVersion]).run(JSON.parse(ast), file);

  //   expect(file.messages).toHaveLength(1);
  //   expect(messageToJson(file.messages[0])).toEqual({
  //     message: "Required MSH-12 (version) field is missing or empty",
  //     source: "hl7v2-lint",
  //     ruleId: "message-version",
  //     line: 1,
  //     column: 274,
  //     fatal: false,
  //     file: "",
  //     name: "1:274-1:274",
  //     reason: "Required MSH-12 (version) field is missing or empty",
  //     url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
  //     ancestors: expect.any(Array),
  //     place: {
  //       start: {
  //         offset: 273,
  //         line: 1,
  //         column: 274,
  //       },
  //       end: {
  //         offset: 273,
  //         line: 1,
  //         column: 274,
  //       },
  //     },
  //   });
  // });

  it("errors with correct position of segment MSH when MSH-12 is missing", async () => {
    const raw = await readFile(
      path.join(__dirname, "fixtures", "oru-ast-missing.json"),
      "utf-8"
    );
    const ast = JSON.parse(raw) as Root;

    const file = new VFile();
    await unified().use([hl7v2LintMessageVersion]).run(ast, file);

    expect(file.messages).toHaveLength(1);
    expect(messageToJson(file.messages[0])).toEqual({
      message: "Required MSH-12 (version) field is missing or empty",
      source: "hl7v2-lint",
      ruleId: "message-version",
      fatal: false,
      file: "",
      reason: "Required MSH-12 (version) field is missing or empty",
      url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-message-version#readme",
      ancestors: [ast],
      name: "1:1",
    });
  });
});
