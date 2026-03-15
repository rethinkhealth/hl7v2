import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintFieldMaxLength from "../src";

/**
 * Helper to build a minimal MSH segment with version.
 */
function msh(version: string, controlId = "MSG001") {
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
    f(controlId),
    f("P"),
    f(version)
  );
}

describe("hl7v2LintFieldMaxLength", () => {
  it("reports no errors when field values are within limits", async () => {
    const tree = m(msh("2.5", "MSG001")); // MSH-10 maxLength=20, value is 6 chars
    const file = new VFile();

    await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

    const lengthErrors = file.messages.filter((msg) =>
      msg.message.includes("exceeds maximum")
    );
    expect(lengthErrors).toHaveLength(0);
  });

  it("reports when field value exceeds max length", async () => {
    // MSH-10 (Message Control ID) has maxLength=20 in v2.5
    const longId = "A".repeat(25);
    const tree = m(msh("2.5", longId));
    const file = new VFile();

    await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

    const lengthErrors = file.messages.filter((msg) =>
      msg.message.includes("MSH-10")
    );
    expect(lengthErrors).toHaveLength(1);
    expect(lengthErrors[0]?.message).toContain("exceeds maximum");
    expect(lengthErrors[0]?.message).toContain("25");
    expect(lengthErrors[0]?.message).toContain("20");
  });

  it("reports correct rule metadata", async () => {
    const longId = "A".repeat(25);
    const tree = m(msh("2.5", longId));
    const file = new VFile();

    await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

    const lengthErrors = file.messages.filter((msg) =>
      msg.message.includes("exceeds maximum")
    );
    expect(lengthErrors.length).toBeGreaterThan(0);
    expect(lengthErrors[0]).toMatchObject({
      ruleId: "field-max-length",
      source: "hl7v2-lint",
    });
  });

  it("skips validation when version is missing", async () => {
    const tree = m(s("MSH", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("skips fields without maxLength in profile", async () => {
    // All fields should be fine at normal lengths
    const tree = m(msh("2.5"));
    const file = new VFile();

    await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("skips unknown segments with onMissingDefinition skip", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("A".repeat(1000))));
    const file = new VFile();

    await unified()
      .use(hl7v2LintFieldMaxLength, { onMissingDefinition: "skip" })
      .run(tree, file);

    const zzzErrors = file.messages.filter((msg) =>
      msg.message.includes("ZZZ")
    );
    expect(zzzErrors).toHaveLength(0);
  });
});
