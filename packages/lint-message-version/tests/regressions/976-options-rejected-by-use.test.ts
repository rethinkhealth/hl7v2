/**
 * Regression for https://github.com/rethinkhealth/glion/issues/976.
 *
 * Date: 2026-10-15
 * Symptom: `unified().use(hl7v2LintMessageVersion, { expression })` did not
 * type-check, so a caller could pass options only as `.use([[rule, options]])`.
 * Cause: the rule was typed `lintRule<Nodes, …>`. `Nodes` is a union, and
 * unified checks the plugin against each member, so a rule over every node
 * type matched none of the processor's transformer signatures.
 * Resolution: the rule takes an HL7v2 `Node` and checks at run time that it is
 * a whole message. `pnpm check-types` compiles this file.
 */

import { f, m, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintMessageVersion from "../../src";

describe("options passed to use()", () => {
  it("accept a custom expression as the second argument", async () => {
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
        f("2.2")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2LintMessageVersion, { expression: "<3.0.0 >=2.2" })
      .run(hl7v2, file);

    expect(file.messages).toEqual([]);
  });
});
