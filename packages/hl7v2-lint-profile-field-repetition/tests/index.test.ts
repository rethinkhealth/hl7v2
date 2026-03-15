import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintFieldRepetition from "../src";

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

describe("hl7v2LintFieldRepetition", () => {
  it("reports no errors when fields have single repetitions", async () => {
    const tree = m(msh("2.5"));
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    const repErrors = file.messages.filter((msg) =>
      msg.message.includes("not repeatable")
    );
    expect(repErrors).toHaveLength(0);
  });

  it("reports when non-repeatable field has multiple repetitions", async () => {
    // MSH-10 (Message Control ID) is not repeatable
    const tree = m(
      s(
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
        f(r("MSG001"), r("MSG002")), // MSH-10 with 2 repetitions
        f("P"),
        f("2.5")
      )
    );
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    const repErrors = file.messages.filter((msg) =>
      msg.message.includes("MSH-10")
    );
    expect(repErrors).toHaveLength(1);
    expect(repErrors[0]?.message).toContain("not repeatable");
    expect(repErrors[0]?.message).toContain("2 repetitions");
  });

  it("attaches correct rule metadata", async () => {
    const tree = m(
      s(
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
        f(r("MSG001"), r("MSG002")),
        f("P"),
        f("2.5")
      )
    );
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    const repErrors = file.messages.filter((msg) =>
      msg.message.includes("not repeatable")
    );
    expect(repErrors.length).toBeGreaterThan(0);
    expect(repErrors[0]).toMatchObject({
      ruleId: "field-repetition",
      source: "hl7v2-lint",
    });
  });

  it("skips validation when version is missing", async () => {
    const tree = m(s("MSH", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("skips unknown segments with onMissingDefinition skip", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f(r("a"), r("b"))));
    const file = new VFile();

    await unified()
      .use(hl7v2LintFieldRepetition, { onMissingDefinition: "skip" })
      .run(tree, file);

    const zzzErrors = file.messages.filter((msg) =>
      msg.message.includes("ZZZ")
    );
    expect(zzzErrors).toHaveLength(0);
  });
});
