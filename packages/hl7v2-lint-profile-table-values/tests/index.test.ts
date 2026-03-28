import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintTableValues from "../src";

/** Complete MSH with all required fields */
function msh(version: string) {
  return s(
    "MSH",
    f("|"),
    f("^~\\&"),
    f("SENDER"),
    f("FAC"),
    f("RECV"),
    f("RFAC"),
    f("20241201"),
    f(""),
    f(c("ADT"), c("A01"), c("ADT_A01")),
    f("MSG001"),
    f("P"),
    f(version)
  );
}

describe("hl7v2LintTableValues", () => {
  it("no warnings for valid coded value in HL7 table", async () => {
    // EVN-1 (Event Type Code) references HL70003 (type: "hl7")
    // "A01" is a valid code
    const tree = m(msh("2.5"), s("EVN", f("A01")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const errors = file.messages.filter((msg) => msg.ruleId === "table-values");
    expect(errors).toHaveLength(0);
  });

  it("reports invalid coded value in HL7 table", async () => {
    // EVN-1 = "ZZZ" is not a valid code in table 0003
    const tree = m(msh("2.5"), s("EVN", f("ZZZ")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const errors = file.messages.filter((msg) => msg.ruleId === "table-values");
    expect(errors).toHaveLength(1);
    expect(errors[0]?.message).toContain("EVN-1");
    expect(errors[0]?.message).toContain("ZZZ");
    expect(errors[0]?.source).toBe("hl7v2-lint");
  });

  it("skips empty field values", async () => {
    const tree = m(msh("2.5"), s("EVN", f("")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const errors = file.messages.filter((msg) => msg.ruleId === "table-values");
    expect(errors).toHaveLength(0);
  });

  it("skips user-type tables", async () => {
    // PID-8 (Administrative Sex) references HL70001 which is type "user"
    const tree = m(
      msh("2.5"),
      s(
        "PID",
        f(""),
        f(""),
        f("12345"),
        f(""),
        f("Doe"),
        f(""),
        f(""),
        f("INVALID_BUT_USER_TABLE")
      )
    );
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "table-values" && msg.message.includes("PID-8")
    );
    expect(errors).toHaveLength(0);
  });

  it("skips Z-segments silently", async () => {
    const tree = m(msh("2.5"), s("ZPD", f("INVALID")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("reports when version is missing", async () => {
    const tree = m(s("MSH"), s("EVN", f("A01")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.message).toContain("MSH-12");
  });

  it("validates each repeated segment independently", async () => {
    // Two EVN segments: first valid, second invalid
    const tree = m(msh("2.5"), s("EVN", f("A01")), s("EVN", f("INVALID")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const errors = file.messages.filter((msg) => msg.ruleId === "table-values");
    expect(errors).toHaveLength(1);
    expect(errors[0]?.message).toContain("INVALID");
  });

  it("includes table description in error message", async () => {
    const tree = m(msh("2.5"), s("EVN", f("INVALID")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const error = file.messages.find((msg) => msg.ruleId === "table-values");
    expect(error?.message).toContain("Event type");
  });

  // https://github.com/rethinkhealth/hl7v2/issues/489
  it.fails("extracts version from composite VID in MSH-12 (2.5^USA^ISO)", async () => {
    function mshVid(version: string) {
      return s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RECV"),
        f("RFAC"),
        f("20241201"),
        f(""),
        f(c("ADT"), c("A01"), c("ADT_A01")),
        f("MSG001"),
        f("P"),
        f(c(version), c("USA"), c("ISO")) // VID composite
      );
    }

    const tree = m(mshVid("2.5"), s("EVN", f("A01")));
    const file = new VFile();

    await unified().use(hl7v2LintTableValues).run(tree, file);

    const versionErrors = file.messages.filter((msg) =>
      msg.message.includes("missing version (MSH-12)")
    );
    expect(versionErrors).toHaveLength(0);
  });
});
