import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { c, f, g, m, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintRequiredFields from "../src";

/** Build a complete MSH segment with all required fields populated */
function msh(version: string) {
  return s(
    "MSH",
    f("|"), // MSH-1 (required)
    f("^~\\&"), // MSH-2 (required)
    f("SENDER"), // MSH-3
    f("FAC"), // MSH-4
    f("RECV"), // MSH-5
    f("RFAC"), // MSH-6
    f("20241201"), // MSH-7 (required)
    f(""), // MSH-8
    f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9 (required)
    f("MSG001"), // MSH-10 (required)
    f("P"), // MSH-11 (required)
    f(version) // MSH-12 (required)
  );
}

describe("hl7v2LintRequiredFields", () => {
  it("produces no warnings when all required fields are present", async () => {
    // PID-3 and PID-5 are required in v2.5
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe^John"))
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-fields"
    );
    expect(errors).toHaveLength(0);
  });

  it("reports when a required field is empty", async () => {
    // PID-3 is required but empty
    const tree = m(msh("2.5"), s("PID", f("1"), f(""), f(""), f(""), f("Doe")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-fields"
    );
    expect(errors.map((msg) => msg.message)).toEqual([
      "Field `PID-3` (Patient Identifier List) is empty; it is required.",
    ]);
    expect(errors[0]?.source).toBe("hl7v2-lint");
  });

  it("reports a missing required field in a segment nested in a group", async () => {
    const tree = m(
      msh("2.5"),
      g("PATIENT", s("PID", f("1"), f(""), f(""), f(""), f("Doe")))
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-fields"
    );
    expect(errors.map((msg) => msg.message)).toEqual([
      "Field `PID-3` (Patient Identifier List) is empty; it is required.",
    ]);
  });

  it("reports when segment is too short for required fields", async () => {
    // PID with only 2 fields — PID-3 and PID-5 are missing
    const tree = m(msh("2.5"), s("PID", f("1"), f("")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-fields"
    );
    expect(errors.map((msg) => msg.message)).toEqual([
      "Field `PID-3` (Patient Identifier List) is not present; it is required.",
      "Field `PID-5` (Patient Name) is not present; it is required.",
    ]);
    expect(errors[0]?.actual).toBeUndefined();
  });

  it("skips Z-segments silently", async () => {
    const tree = m(msh("2.5"), s("ZPD", f("custom")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("silently skips when version is missing", async () => {
    const tree = m(s("MSH"), s("PID", f("1")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  // https://github.com/rethinkhealth/hl7v2/issues/489
  it("validates correctly when MSH-12 is composite VID — #489", async () => {
    // MSH with composite VID in MSH-12: version^country^internationalVersion
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

    // PID-3 is required but empty — the rule should catch this if VID version is extracted
    const tree = m(
      mshVid("2.5"),
      s("PID", f("1"), f(""), f(""), f(""), f("Doe^John"))
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    // The rule must actually run and find the missing PID-3 violation
    const errors = file.messages.filter(
      (msg) => msg.ruleId === "required-fields"
    );
    expect(errors.map((msg) => msg.message)).toEqual([
      "Field `PID-3` (Patient Identifier List) is empty; it is required.",
    ]);
  });

  it("points a finding on an empty required field at the field", async () => {
    const pid3 = f("");
    pid3.position = {
      end: { column: 7, line: 2, offset: 70 },
      start: { column: 7, line: 2, offset: 70 },
    };
    const pid = s("PID", f("1"), f(""), pid3, f(""), f("Doe"));
    const tree = m(msh("2.5"), pid);
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    const error = file.messages.find((msg) => msg.ruleId === "required-fields");
    expect(error?.place).toStrictEqual({
      end: { column: 7, line: 2, offset: 70 },
      start: { column: 7, line: 2, offset: 70 },
    });
    expect(error?.ancestors).toStrictEqual([tree, pid, pid3]);
  });

  it("points a finding on an empty required field in a group at the field, through the group", async () => {
    const pid3 = f("");
    const pid = s("PID", f("1"), f(""), pid3, f(""), f("Doe"));
    const group = g("PATIENT", pid);
    const tree = m(msh("2.5"), group);
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    const error = file.messages.find((msg) => msg.ruleId === "required-fields");
    expect(error?.ancestors).toStrictEqual([tree, group, pid, pid3]);
  });

  it("points a finding on an absent required field at the segment", async () => {
    const pid = s("PID", f("1"), f(""));
    pid.position = {
      end: { column: 7, line: 2, offset: 70 },
      start: { column: 1, line: 2, offset: 64 },
    };
    const tree = m(msh("2.5"), pid);
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintRequiredFields)
      .run(tree, file);

    const error = file.messages.find((msg) => msg.ruleId === "required-fields");
    expect(error?.place).toStrictEqual({
      end: { column: 7, line: 2, offset: 70 },
      start: { column: 1, line: 2, offset: 64 },
    });
    expect(error?.ancestors).toStrictEqual([tree, pid]);
  });
});
