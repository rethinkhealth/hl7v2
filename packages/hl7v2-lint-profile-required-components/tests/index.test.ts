import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintRequiredComponents from "../src";

/**
 * Helper to create a tree with a specific version set in messageInfo.
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

describe("hl7v2LintRequiredComponents", () => {
  describe("valid messages", () => {
    it("reports no warnings when all required components are present (MSH-9 with 3 components)", async () => {
      // MSH-9 (Message Type) is a MSG datatype with 3 required components in v2.7.1:
      // 1: Message Code, 2: Trigger Event, 3: Message Structure
      const tree = treeWithVersion(
        "2.7.1",
        s(
          "MSH",
          f("|"), // MSH-1: field separator
          f("^~\\&"), // MSH-2: encoding characters
          f(""), // MSH-3
          f(""), // MSH-4
          f(""), // MSH-5
          f(""), // MSH-6
          f(""), // MSH-7
          f(""), // MSH-8
          f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9: all 3 components
          f(""), // MSH-10
          f(""), // MSH-11
          f("2.7.1") // MSH-12
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredComponents).run(tree, file);

      const requiredComponentWarnings = file.messages.filter(
        (msg) => msg.ruleId === "required-components"
      );
      expect(requiredComponentWarnings).toHaveLength(0);
    });
  });

  describe("missing required components", () => {
    it("reports when MSH-9 has only 2 components (missing Message Structure)", async () => {
      const tree = treeWithVersion(
        "2.7.1",
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01")), // MSH-9: only 2 components, missing component 3
          f(""),
          f(""),
          f("2.7.1")
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredComponents).run(tree, file);

      const requiredComponentWarnings = file.messages.filter(
        (msg) => msg.ruleId === "required-components"
      );
      expect(requiredComponentWarnings.length).toBeGreaterThanOrEqual(1);
      const msh9Warning = requiredComponentWarnings.find((msg) =>
        msg.message.includes("MSH-9")
      );
      expect(msh9Warning).toBeDefined();
    });
  });

  describe("simple datatype fields", () => {
    it("skips simple datatype fields (PID-1, datatype SI)", async () => {
      const tree = treeWithVersion(
        "2.7.1",
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01"), c("ADT_A01")),
          f(""),
          f(""),
          f("2.7.1")
        ),
        s(
          "PID",
          f("1") // PID-1: Set ID (SI — simple datatype)
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredComponents).run(tree, file);

      // No warnings related to PID-1
      const pid1Warnings = file.messages.filter(
        (msg) =>
          msg.ruleId === "required-components" && msg.message.includes("PID-1")
      );
      expect(pid1Warnings).toHaveLength(0);
    });
  });

  describe("empty fields", () => {
    it("skips empty fields (MSH-9 empty)", async () => {
      const tree = treeWithVersion(
        "2.7.1",
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""), // MSH-9: empty
          f(""),
          f(""),
          f("2.7.1")
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredComponents).run(tree, file);

      const requiredComponentWarnings = file.messages.filter(
        (msg) => msg.ruleId === "required-components"
      );
      expect(requiredComponentWarnings).toHaveLength(0);
    });
  });

  describe("multiple repetitions", () => {
    it("reports when second repetition is missing a required component", async () => {
      const tree = treeWithVersion(
        "2.7.1",
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(
            r(c("ADT"), c("A01"), c("ADT_A01")), // rep 1: all components
            r(c("ADT"), c("A01")) // rep 2: missing component 3
          ),
          f(""),
          f(""),
          f("2.7.1")
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredComponents).run(tree, file);

      const requiredComponentWarnings = file.messages.filter(
        (msg) =>
          msg.ruleId === "required-components" && msg.message.includes("MSH-9")
      );
      expect(requiredComponentWarnings.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Z-segments", () => {
    it("skips Z-segments by default", async () => {
      const tree = treeWithVersion(
        "2.7.1",
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01"), c("ADT_A01")),
          f(""),
          f(""),
          f("2.7.1")
        ),
        s("ZZZ", f("some value"))
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredComponents).run(tree, file);

      const zSegmentWarnings = file.messages.filter(
        (msg) =>
          msg.ruleId === "required-components" && msg.message.includes("ZZZ")
      );
      expect(zSegmentWarnings).toHaveLength(0);
    });
  });

  describe("missing version", () => {
    it("reports when version cannot be resolved", async () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01"), c("ADT_A01"))
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintRequiredComponents).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("MSH-12");
      expect(file.messages[0]?.ruleId).toBe("required-components");
      expect(file.messages[0]?.source).toBe("hl7v2-lint");
    });
  });
});
