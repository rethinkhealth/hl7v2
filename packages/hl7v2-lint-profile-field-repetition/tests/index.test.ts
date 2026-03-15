import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintFieldRepetition from "../src";

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

describe("hl7v2LintFieldRepetition", () => {
  it("no warnings for non-repeating field with single value", async () => {
    // PID-1 is repeatable: false — single value is fine
    const tree = m(msh("2.5"), s("PID", f("1")));
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "field-repetition"
    );
    expect(errors).toHaveLength(0);
  });

  it("no warnings for repeatable field with multiple repetitions", async () => {
    // PID-3 is repeatable: true — multiple reps are fine
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f(r("id1"), r("id2"), r("id3")))
    );
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "field-repetition"
    );
    expect(errors).toHaveLength(0);
  });

  it("reports non-repeatable field with multiple repetitions", async () => {
    // PID-1 is repeatable: false — 2 reps should trigger
    const tree = m(msh("2.5"), s("PID", f(r("1"), r("2"))));
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "field-repetition"
    );
    expect(errors).toHaveLength(1);
    expect(errors[0]?.message).toContain("PID-1");
    expect(errors[0]?.message).toContain("not repeatable");
    expect(errors[0]?.message).toContain("2 repetitions");
    expect(errors[0]?.source).toBe("hl7v2-lint");
  });

  it("includes field name in error message", async () => {
    const tree = m(msh("2.5"), s("PID", f(r("1"), r("2"))));
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    const error = file.messages.find(
      (msg) => msg.ruleId === "field-repetition"
    );
    expect(error?.message).toContain("Set ID");
  });

  it("skips Z-segments silently", async () => {
    const tree = m(msh("2.5"), s("ZPD", f(r("a"), r("b"))));
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("reports when version is missing", async () => {
    const tree = m(s("MSH"), s("PID", f(r("1"), r("2"))));
    const file = new VFile();

    await unified().use(hl7v2LintFieldRepetition).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.message).toContain("MSH-12");
  });
});
