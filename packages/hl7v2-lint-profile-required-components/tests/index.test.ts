import { hl7v2AnnotateProfileContext } from "@rethinkhealth/hl7v2-annotate-profile-context";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintRequiredComponents from "../src";

/** Complete MSH with all required fields — uses v2.7.1 (MSG has required components) */
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

describe("hl7v2LintRequiredComponents", () => {
  it("no warnings when all required components present", async () => {
    // MSH-9 is MSG with 3 required components in v2.7.1
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RECV"),
        f("RFAC"),
        f("20241201"),
        f(""),
        f(c("ADT"), c("A01"), c("ADT_A01")), // all 3 present
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-components"
    );
    expect(errors).toHaveLength(0);
  });

  it("reports missing required component", async () => {
    // MSH-9 = MSG in v2.7.1, only 2 of 3 required components
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RECV"),
        f("RFAC"),
        f("20241201"),
        f(""),
        f(c("ADT"), c("A01")), // missing component 3 (Message Structure)
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-components"
    );
    expect(errors.length).toBeGreaterThanOrEqual(1);
    const msh9Error = errors.find((msg) => msg.message.includes("MSH-9"));
    expect(msh9Error).toBeDefined();
    expect(msh9Error?.message).toContain("Message Structure");
    expect(msh9Error?.source).toBe("hl7v2-lint");
  });

  it("skips simple (non-composite) datatypes", async () => {
    // PID-1 is datatype SI (primitive) — no components to check
    const tree = m(msh("2.7.1"), s("PID", f("1")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-components"
    );
    expect(errors).toHaveLength(0);
  });

  it("skips empty fields", async () => {
    // MSH-9 empty — required-fields handles this, not required-components
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RECV"),
        f("RFAC"),
        f("20241201"),
        f(""),
        f(), // MSH-9 empty
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-components"
    );
    expect(errors).toHaveLength(0);
  });

  it("checks each repetition independently", async () => {
    // MSH-9 with two reps — first valid, second missing component 3
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RECV"),
        f("RFAC"),
        f("20241201"),
        f(""),
        f(
          r(c("ADT"), c("A01"), c("ADT_A01")),
          r(c("ADT"), c("A02")) // missing component 3
        ),
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-components"
    );
    expect(errors.length).toBeGreaterThanOrEqual(1);
  });

  it("skips Z-segments silently", async () => {
    const tree = m(msh("2.7.1"), s("ZPD", f(c("a"))));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredComponents)
      .run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("silently skips when version is missing", async () => {
    const tree = m(s("MSH", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredComponents)
      .run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  // https://github.com/rethinkhealth/hl7v2/issues/489
  it("validates correctly when MSH-12 is composite VID — #489", async () => {
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
        f(c("ADT"), c("A01")), // missing component 3 (Message Structure)
        f("MSG001"),
        f("P"),
        f(c(version), c("USA"), c("ISO")) // VID composite
      );
    }

    const tree = m(mshVid("2.7.1"));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredComponents)
      .run(tree, file);

    // The rule must actually run and find the missing MSH-9 component
    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-components"
    );
    expect(errors.length).toBeGreaterThanOrEqual(1);
    expect(errors.some((msg) => msg.message.includes("MSH-9"))).toBe(true);
  });
});
