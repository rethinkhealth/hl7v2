import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintBackwardCompatible from "../src";

/**
 * An MSH segment declaring `version` in MSH-12; the rule checks the message
 * against that version.
 */
const msh = (version: string) =>
  `MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|${version}`;

/**
 * The findings of the rule on a message whose segments are given as HL7v2
 * text, after the annotators it needs have put each element's optionality on
 * the tree.
 */
const lint = async (...segments: string[]) => {
  const file = new VFile();
  await unified()
    .use(hl7v2AnnotateProfileContext)
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2AnnotateProfileDatatypes)
    .use(hl7v2LintBackwardCompatible)
    .run(parseHL7v2(segments.join("\r")), file);
  return file.messages;
};

// HL7v2 marks an element `B` when it keeps it only so older systems can still
// send it; another element now carries its data. A value is still allowed,
// so the rule's finding is a warning in the preset. The explicit null `""` is
// not a value.
describe("hl7v2LintBackwardCompatible", () => {
  describe("backward-compatible fields", () => {
    // The full finding: its text, the value found (`actual`), the values HL7v2
    // prefers (`expected`: empty, or the explicit null), and which rule made it.
    it("reports a backward-compatible field that has a value", async () => {
      // v2.5.1 DG1-4 (Diagnosis Description) is backward compatible
      const [message, ...rest] = await lint(
        msh("2.5.1"),
        "DG1|1|I9|250.00|DIABETES"
      );

      expect(rest).toEqual([]);
      expect(message?.message).toBe(
        "`DG1-4` (Diagnosis Description) has a value; v2.5.1 keeps it only for backward compatibility."
      );
      expect(message?.actual).toBe("DIABETES");
      expect(message?.expected).toEqual(["", '""']);
      expect(message?.ruleId).toBe("backward-compatible");
      expect(message?.source).toBe("hl7v2-lint");
    });

    // `|` after DG1-3 leaves DG1-4 present but empty.
    it("accepts an empty backward-compatible field", async () => {
      expect(await lint(msh("2.5.1"), "DG1|1|I9|250.00|")).toEqual([]);
    });

    // `""` is HL7v2's explicit null: "delete this value", not a value.
    it("accepts the explicit null in a backward-compatible field", async () => {
      expect(await lint(msh("2.5.1"), 'DG1|1|I9|250.00|""')).toEqual([]);
    });

    // An element's status changes between versions; the rule reads the one of
    // the version in MSH-12.
    it("reports a field by its optionality in the message's version", async () => {
      // DG1-2 (Diagnosis Coding Method) is backward compatible in v2.3 and required in v2.5.1
      const inV23 = await lint(msh("2.3"), "DG1|1|I9|250.00");
      const inV251 = await lint(msh("2.5.1"), "DG1|1|I9|250.00");

      expect(inV23.map((message) => message.message)).toEqual([
        "`DG1-2` (Diagnosis Coding Method) has a value; v2.3 keeps it only for backward compatibility.",
      ]);
      expect(inV251).toEqual([]);
    });
  });

  // Components and subcomponents carry an optionality from their datatype's
  // component table, so the same rule covers them.
  describe("backward-compatible components and subcomponents", () => {
    // `MD` is the sixth component of PID-5 (XPN), XPN.6.
    it("reports a backward-compatible component that has a value", async () => {
      // v2.6 XPN.6 (Degree) is backward compatible
      const messages = await lint(msh("2.6"), "PID|1||12345||DOE^JOHN^^^^MD");

      expect(
        messages.map((message) => [message.message, message.actual])
      ).toEqual([
        [
          "`XPN.6` (Degree (e.g., MD)) has a value; v2.6 keeps it only for backward compatibility.",
          "MD",
        ],
      ]);
    });

    // PID-11 (XAD) has `20240101&D` in its 13th component, XAD.13, a TS. `D` is
    // its second subcomponent, TS.2. The report names it `TS.2`.
    it("reports a backward-compatible subcomponent that has a value", async () => {
      // v2.5.1 XAD.13 (Effective Date) is a TS, whose TS.2 (Degree of Precision) is backward compatible
      const messages = await lint(
        msh("2.5.1"),
        "PID|1||12345||DOE^JOHN||||||1 MAIN ST^^^^^^^^^^^^20240101&D"
      );

      expect(
        messages.map((message) => [message.message, message.actual])
      ).toEqual([
        [
          "`TS.2` (Degree of Precision) has a value; v2.5.1 keeps it only for backward compatibility.",
          "D",
        ],
      ]);
    });
  });

  // A finding points at the element that has the value, so an editor can
  // underline it.
  describe("location", () => {
    it("points a finding on a field at the field", async () => {
      // v2.5.1 DG1-4 (Diagnosis Description) is backward compatible
      const [message] = await lint(msh("2.5.1"), "DG1|1|I9|250.00|DIABETES");

      expect(message?.place).toStrictEqual({
        end: { column: 25, line: 2, offset: 95 },
        start: { column: 17, line: 2, offset: 87 },
      });
      expect(message?.ancestors?.map((node) => node.type)).toStrictEqual([
        "root",
        "segment",
        "field",
      ]);
    });

    it("points a finding on a component at the component", async () => {
      // v2.6 XPN.6 (Degree) is backward compatible
      const [message] = await lint(msh("2.6"), "PID|1||12345||DOE^JOHN^^^^MD");

      expect(message?.place).toStrictEqual({
        end: { column: 29, line: 2, offset: 97 },
        start: { column: 27, line: 2, offset: 95 },
      });
      expect(message?.ancestors?.map((node) => node.type)).toStrictEqual([
        "root",
        "segment",
        "field",
        "field-repetition",
        "component",
      ]);
    });

    it("points a finding on a subcomponent at the subcomponent", async () => {
      // v2.5.1 XAD.13 (Effective Date) is a TS, whose TS.2 (Degree of Precision) is backward compatible
      const [message] = await lint(
        msh("2.5.1"),
        "PID|1||12345||DOE^JOHN||||||1 MAIN ST^^^^^^^^^^^^20240101&D"
      );

      expect(message?.place).toStrictEqual({
        end: { column: 60, line: 2, offset: 130 },
        start: { column: 59, line: 2, offset: 129 },
      });
      expect(message?.ancestors?.map((node) => node.type)).toStrictEqual([
        "root",
        "segment",
        "field",
        "field-repetition",
        "component",
        "subcomponent",
      ]);
    });
  });

  // The finding names the version, so the rule reads it from the profile
  // context that `@glion/annotate-profile-context` puts on the file.
  it("reports nothing on a file without a profile version", async () => {
    const tree = parseHL7v2(
      [msh("2.5.1"), "DG1|1|I9|250.00|DIABETES"].join("\r")
    );
    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2AnnotateProfileDatatypes)
      .run(tree, new VFile());
    const file = new VFile();

    await unified().use(hl7v2LintBackwardCompatible).run(tree, file);

    expect(file.messages).toEqual([]);
  });

  // `W` is a different status, reported by `@glion/lint-profile-withdrawn`.
  it("does not report a withdrawn field", async () => {
    // v2.6 DG1-2 (Diagnosis Coding Method) is withdrawn
    expect(await lint(msh("2.6"), "DG1|1|I9|250.00")).toEqual([]);
  });

  // The standard does not define Z-segments, so they have no optionality.
  it("skips a segment without a profile", async () => {
    expect(await lint(msh("2.5.1"), "ZPD|1|X")).toEqual([]);
  });
});
