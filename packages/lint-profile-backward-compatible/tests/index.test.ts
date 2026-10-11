import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { c, f, m, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintBackwardCompatible from "../src";

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

const lint = async (tree: ReturnType<typeof m>) => {
  const file = new VFile();
  await unified()
    .use(hl7v2AnnotateProfileContext)
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2AnnotateProfileDatatypes)
    .use(hl7v2LintBackwardCompatible)
    .run(tree, file);
  return file.messages.filter((msg) => msg.ruleId === "backward-compatible");
};

describe("hl7v2LintBackwardCompatible", () => {
  it("reports a value in a field HL7v2 keeps for backward compatibility", async () => {
    // v2.5.1 DG1-4 (Diagnosis Description) is backward compatible
    const messages = await lint(
      m(msh("2.5.1"), s("DG1", f("1"), f("I9"), f("250.00"), f("DIABETES")))
    );

    expect(messages).toHaveLength(1);
    expect(messages[0]?.message).toBe(
      "`DG1-4` (Diagnosis Description) has a value; v2.5.1 keeps it only for backward compatibility."
    );
    expect(messages[0]?.actual).toBe("DIABETES");
    expect(messages[0]?.source).toBe("hl7v2-lint");
  });

  it("accepts an empty backward-compatible field", async () => {
    const messages = await lint(
      m(msh("2.5.1"), s("DG1", f("1"), f("I9"), f("250.00"), f("")))
    );

    expect(messages).toEqual([]);
  });

  it("accepts the explicit null in a backward-compatible field", async () => {
    const messages = await lint(
      m(msh("2.5.1"), s("DG1", f("1"), f("I9"), f("250.00"), f('""')))
    );

    expect(messages).toEqual([]);
  });

  it("does not report a withdrawn field", async () => {
    // v2.6 DG1-2 is withdrawn, which withdrawn reports
    const messages = await lint(
      m(msh("2.6"), s("DG1", f("1"), f("I9"), f("250.00")))
    );

    expect(messages).toEqual([]);
  });

  it("skips a segment without a profile", async () => {
    const messages = await lint(m(msh("2.5.1"), s("ZPD", f("1"), f("X"))));

    expect(messages).toEqual([]);
  });
});
