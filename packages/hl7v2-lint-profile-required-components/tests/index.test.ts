import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintRequiredComponents from "../src";

/**
 * Helper to build a minimal MSH segment with version.
 * Uses v2.7.1 where MSG datatype has required components (1, 2, 3).
 */
function msh(
  version: string,
  messageType = f(c("ADT"), c("A01"), c("ADT_A01"))
) {
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
    messageType,
    f("MSG001"),
    f("P"),
    f(version)
  );
}

describe("hl7v2LintRequiredComponents", () => {
  it("reports no errors when all required components are present", async () => {
    // MSH-9 (MSG) in v2.7.1 requires components 1, 2, 3
    const tree = m(msh("2.7.1"));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredComponents).run(tree, file);

    const compErrors = file.messages.filter(
      (msg) =>
        msg.message.includes("MSH-9.") &&
        (msg.message.includes("missing") || msg.message.includes("empty"))
    );
    expect(compErrors).toHaveLength(0);
  });

  it("reports missing required components", async () => {
    // MSH-9 with only 2 components — missing component 3 (Message Structure)
    const tree = m(msh("2.7.1", f(c("ADT"), c("A01"))));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredComponents).run(tree, file);

    const compErrors = file.messages.filter((msg) =>
      msg.message.includes("MSH-9.3")
    );
    expect(compErrors).toHaveLength(1);
    expect(compErrors[0]?.message).toContain("missing");
    expect(compErrors[0]?.message).toContain("Message Structure");
  });

  it("reports empty required components", async () => {
    // MSH-9 with 3 components but component 3 is empty
    const tree = m(msh("2.7.1", f(c("ADT"), c("A01"), c(""))));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredComponents).run(tree, file);

    const compErrors = file.messages.filter((msg) =>
      msg.message.includes("MSH-9.3")
    );
    expect(compErrors).toHaveLength(1);
    expect(compErrors[0]?.message).toContain("empty");
  });

  it("skips empty fields entirely", async () => {
    // EVN segment with an empty field that has a composite datatype
    const tree = m(msh("2.7.1"), s("EVN", f("")));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredComponents).run(tree, file);

    // No component errors for EVN fields since they're empty
    const evnCompErrors = file.messages.filter(
      (msg) => msg.message.includes("EVN-") && msg.message.includes("component")
    );
    expect(evnCompErrors).toHaveLength(0);
  });

  it("attaches correct rule metadata", async () => {
    const tree = m(msh("2.7.1", f(c("ADT"), c("A01"))));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredComponents).run(tree, file);

    const compErrors = file.messages.filter((msg) =>
      msg.message.includes("MSH-9.3")
    );
    expect(compErrors.length).toBeGreaterThan(0);
    expect(compErrors[0]).toMatchObject({
      ruleId: "required-components",
      source: "hl7v2-lint",
    });
  });

  it("skips validation when version is missing", async () => {
    const tree = m(s("MSH"));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredComponents).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("skips unknown segments with onMissingDefinition skip", async () => {
    const tree = m(msh("2.7.1"), s("ZZZ", f(c("a"), c("b"))));
    const file = new VFile();

    await unified()
      .use(hl7v2LintRequiredComponents, { onMissingDefinition: "skip" })
      .run(tree, file);

    const zzzErrors = file.messages.filter((msg) =>
      msg.message.includes("ZZZ")
    );
    expect(zzzErrors).toHaveLength(0);
  });

  it("does not report for primitive datatypes", async () => {
    // MSH-1 (Field Separator) is ST — primitive, no components
    const tree = m(msh("2.7.1"));
    const file = new VFile();

    await unified().use(hl7v2LintRequiredComponents).run(tree, file);

    const msh1Errors = file.messages.filter((msg) =>
      msg.message.includes("MSH-1.")
    );
    expect(msh1Errors).toHaveLength(0);
  });
});
