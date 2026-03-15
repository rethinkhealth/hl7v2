import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintRequiredFields from "../src";

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

describe("hl7v2LintRequiredFields", () => {
  it("reports no errors when all required fields are present", async () => {
    // MSH has required fields — if we provide all of them, no errors
    const tree = m(msh("2.5"));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredFields).run(tree, file);

    // MSH itself should pass since we provided all the key fields
    const mshErrors = file.messages.filter((msg) =>
      msg.message.includes("MSH-")
    );
    expect(mshErrors).toHaveLength(0);
  });

  it("reports empty required fields", async () => {
    // EVN-2 (Recorded Date/Time) is required in v2.5
    const tree = m(
      msh("2.5"),
      s("EVN", f("A01"), f("")) // EVN-2 is empty
    );
    const file = new VFile();

    await unified().use(hl7v2LintRequiredFields).run(tree, file);

    const evnErrors = file.messages.filter((msg) =>
      msg.message.includes("EVN-2")
    );
    expect(evnErrors.length).toBeGreaterThan(0);
    expect(evnErrors[0]?.message).toContain("empty");
  });

  it("passes when required fields have values", async () => {
    const tree = m(
      msh("2.5"),
      s("EVN", f("A01"), f("20240101120000")) // EVN-2 has a value
    );
    const file = new VFile();

    await unified().use(hl7v2LintRequiredFields).run(tree, file);

    const evnErrors = file.messages.filter((msg) =>
      msg.message.includes("EVN-2")
    );
    expect(evnErrors).toHaveLength(0);
  });

  it("reports missing required fields when segment has fewer fields", async () => {
    const tree = m(msh("2.5"), s("EVN")); // EVN with no fields at all
    const file = new VFile();

    await unified().use(hl7v2LintRequiredFields).run(tree, file);

    const evnErrors = file.messages.filter((msg) =>
      msg.message.includes("EVN-")
    );
    expect(evnErrors.length).toBeGreaterThan(0);
    expect(evnErrors[0]?.message).toContain("missing");
  });

  it("skips validation when version is missing", async () => {
    const tree = m(s("MSH"), s("PID"));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredFields).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("skips unknown segments with onMissingDefinition skip", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("custom")));
    const file = new VFile();

    await unified()
      .use(hl7v2LintRequiredFields, { onMissingDefinition: "skip" })
      .run(tree, file);

    const zzzErrors = file.messages.filter((msg) =>
      msg.message.includes("ZZZ")
    );
    expect(zzzErrors).toHaveLength(0);
  });

  it("warns for unknown segments with onMissingDefinition warn", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("custom")));
    const file = new VFile();

    await unified()
      .use(hl7v2LintRequiredFields, { onMissingDefinition: "warn" })
      .run(tree, file);

    const zzzErrors = file.messages.filter((msg) =>
      msg.message.includes("ZZZ")
    );
    expect(zzzErrors.length).toBeGreaterThan(0);
  });

  it("attaches correct rule metadata", async () => {
    const tree = m(msh("2.5"), s("EVN")); // EVN with no fields
    const file = new VFile();

    await unified().use(hl7v2LintRequiredFields).run(tree, file);

    const evnErrors = file.messages.filter((msg) =>
      msg.message.includes("EVN-")
    );
    expect(evnErrors.length).toBeGreaterThan(0);
    expect(evnErrors[0]).toMatchObject({
      ruleId: "required-fields",
      source: "hl7v2-lint",
    });
  });
});
