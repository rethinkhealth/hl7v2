import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintTableValues from "../src";

/**
 * Helper to build a minimal MSH segment with version.
 */
function msh(version: string) {
  return s(
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
    f(version)
  );
}

describe("hl7v2LintTableValues", () => {
  it("reports no errors for valid table values", async () => {
    // EVN-1 uses table HL70003 (type "hl7"), "A01" is a valid code
    const tree = m(msh("2.5"), s("EVN", f("A01")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const tableErrors = file.messages.filter((msg) =>
      msg.message.includes("not in table")
    );
    expect(tableErrors).toHaveLength(0);
  });

  it("reports invalid table values for hl7-type tables", async () => {
    // EVN-1 uses table HL70003 (type "hl7"), "INVALID" is not a valid code
    const tree = m(msh("2.5"), s("EVN", f("INVALID")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const tableErrors = file.messages.filter((msg) =>
      msg.message.includes("not in table")
    );
    expect(tableErrors).toHaveLength(1);
    expect(tableErrors[0]?.message).toContain("EVN-1");
    expect(tableErrors[0]?.message).toContain("INVALID");
    expect(tableErrors[0]?.message).toContain("0003");
  });

  it("skips user-type tables", async () => {
    // PID-8 uses table HL70001 (type "user") — should not validate
    const tree = m(
      msh("2.5"),
      s(
        "PID",
        f(""), // PID-1
        f(""), // PID-2
        f(""), // PID-3
        f(""), // PID-4
        f(""), // PID-5
        f(""), // PID-6
        f(""), // PID-7
        f("INVALID_SEX") // PID-8 — user table, should be skipped
      )
    );
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const pidErrors = file.messages.filter(
      (msg) =>
        msg.message.includes("PID-8") && msg.message.includes("not in table")
    );
    expect(pidErrors).toHaveLength(0);
  });

  it("skips empty field values", async () => {
    const tree = m(msh("2.5"), s("EVN", f("")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const tableErrors = file.messages.filter((msg) =>
      msg.message.includes("not in table")
    );
    expect(tableErrors).toHaveLength(0);
  });

  it("attaches correct rule metadata", async () => {
    const tree = m(msh("2.5"), s("EVN", f("INVALID")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const tableErrors = file.messages.filter((msg) =>
      msg.message.includes("not in table")
    );
    expect(tableErrors.length).toBeGreaterThan(0);
    expect(tableErrors[0]).toMatchObject({
      ruleId: "table-values",
      source: "hl7v2-lint",
    });
  });

  it("skips validation when version is missing", async () => {
    const tree = m(s("MSH"), s("EVN", f("A01")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("skips unknown segments with onMissingDefinition skip", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("custom")));
    const file = new VFile();

    await unified()
      .use(hl7v2LintTableValues, { onMissingDefinition: "skip" })
      .run(tree, file);

    const zzzErrors = file.messages.filter((msg) =>
      msg.message.includes("ZZZ")
    );
    expect(zzzErrors).toHaveLength(0);
  });
});
