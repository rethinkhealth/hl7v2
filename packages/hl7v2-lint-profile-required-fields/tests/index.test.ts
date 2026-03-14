import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintRequiredFields from "../src";

/**
 * Create a tree with version metadata pre-set (as if the annotator ran).
 */
function treeWithVersion(
  version: string,
  ...segments: Parameters<typeof m>
): Root {
  const tree = m(...segments);
  tree.data = {
    messageInfo: {
      version,
    },
  };
  return tree;
}

/**
 * Build a valid MSH segment with all required fields populated.
 * In v2.5, MSH-1, MSH-2, MSH-7, MSH-9, MSH-10, MSH-11, MSH-12 are required.
 */
function validMshSegment() {
  return s(
    "MSH",
    f("|"), // MSH-1: Field Separator (required)
    f("^~\\&"), // MSH-2: Encoding Characters (required)
    f("SendApp"), // MSH-3: Sending Application
    f("SendFac"), // MSH-4: Sending Facility
    f("RecvApp"), // MSH-5: Receiving Application
    f("RecvFac"), // MSH-6: Receiving Facility
    f("20060101120000"), // MSH-7: Date/Time Of Message (required)
    f(), // MSH-8: Security
    f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9: Message Type (required)
    f("MSG00001"), // MSH-10: Message Control ID (required)
    f("P"), // MSH-11: Processing ID (required)
    f("2.5") // MSH-12: Version ID (required)
  );
}

/**
 * Build a PID segment with all required fields populated.
 * In v2.5, PID-3 (Patient Identifier List) and PID-5 (Patient Name) are required.
 */
function validPidSegment() {
  return s(
    "PID",
    f("1"), // PID-1: Set ID
    f(), // PID-2: Patient ID (optional)
    f("12345"), // PID-3: Patient Identifier List (required)
    f(), // PID-4: Alternate Patient ID (optional)
    f("DOE^JOHN") // PID-5: Patient Name (required)
  );
}

describe("hl7v2LintRequiredFields", () => {
  describe("valid messages", () => {
    it("reports no warnings when all required fields are present", async () => {
      const tree = treeWithVersion("2.5", validMshSegment(), validPidSegment());
      const file = new VFile();

      await unified().use(hl7v2LintRequiredFields).run(tree, file);

      const requiredFieldWarnings = file.messages.filter(
        (msg) => msg.ruleId === "required-fields"
      );
      expect(requiredFieldWarnings).toHaveLength(0);
    });
  });

  describe("empty required field", () => {
    it("reports warning when PID-3 is empty", async () => {
      const tree = treeWithVersion(
        "2.5",
        validMshSegment(),
        s(
          "PID",
          f("1"), // PID-1
          f(), // PID-2
          f(), // PID-3: empty (required)
          f(), // PID-4
          f("DOE^JOHN") // PID-5 (required, present)
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredFields).run(tree, file);

      const pid3Warnings = file.messages.filter(
        (msg) =>
          msg.ruleId === "required-fields" && msg.message.includes("PID-3")
      );
      expect(pid3Warnings).toHaveLength(1);
      expect(pid3Warnings[0]?.message).toContain("missing or empty");
    });
  });

  describe("missing required field (segment too short)", () => {
    it("reports warning when segment has fewer fields than required", async () => {
      const tree = treeWithVersion(
        "2.5",
        validMshSegment(),
        s(
          "PID",
          f("1") // PID-1 only — PID-3 and PID-5 are missing
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredFields).run(tree, file);

      const warnings = file.messages.filter(
        (msg) =>
          msg.ruleId === "required-fields" && msg.message.includes("PID-")
      );
      // Should report at least PID-3 and PID-5
      expect(warnings.length).toBeGreaterThanOrEqual(2);

      const pid3Warning = warnings.find((msg) => msg.message.includes("PID-3"));
      const pid5Warning = warnings.find((msg) => msg.message.includes("PID-5"));
      expect(pid3Warning).toBeDefined();
      expect(pid5Warning).toBeDefined();
    });
  });

  describe("Z-segments", () => {
    it("skips Z-segments by default (onMissingProfile: skip)", async () => {
      const tree = treeWithVersion(
        "2.5",
        validMshSegment(),
        validPidSegment(),
        s("ZZZ", f("custom data"))
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredFields).run(tree, file);

      const zWarnings = file.messages.filter(
        (msg) => msg.ruleId === "required-fields" && msg.message.includes("ZZZ")
      );
      expect(zWarnings).toHaveLength(0);
    });

    it("warns about Z-segments when onMissingProfile is 'warn'", async () => {
      const tree = treeWithVersion(
        "2.5",
        validMshSegment(),
        validPidSegment(),
        s("ZZZ", f("custom data"))
      );
      const file = new VFile();

      await unified()
        .use(hl7v2LintRequiredFields, { onMissingProfile: "warn" })
        .run(tree, file);

      const zWarnings = file.messages.filter(
        (msg) => msg.ruleId === "required-fields" && msg.message.includes("ZZZ")
      );
      expect(zWarnings).toHaveLength(1);
      expect(zWarnings[0]?.message).toContain("ZZZ");
    });
  });

  describe("missing version", () => {
    it("reports warning when version is missing", async () => {
      const tree = m(s("MSH"), s("PID"));
      const file = new VFile();

      await unified().use(hl7v2LintRequiredFields).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("MSH-12");
      expect(file.messages[0]).toMatchObject({
        ruleId: "required-fields",
        source: "hl7v2-lint",
      });
    });
  });
});
