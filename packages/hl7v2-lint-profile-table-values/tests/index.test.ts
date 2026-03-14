import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintTableValues from "../src";

/**
 * Helper: build a v2.5 tree with annotated version info.
 */
function v25Tree(...segments: ReturnType<typeof s>[]) {
  const tree = m(...segments);
  tree.data = {
    messageInfo: { version: "2.5" },
  };
  return tree;
}

describe("hl7v2LintTableValues", () => {
  describe("valid table values", () => {
    it("accepts a valid code in an HL7 table (EVN-1 = A01)", async () => {
      // EVN-1 (Event Type Code) references table HL70003 → "0003" (hl7 type).
      // "A01" is a valid code.
      const tree = v25Tree(s("MSH"), s("EVN", f("A01")));
      const file = new VFile();

      await unified().use(hl7v2LintTableValues).run(tree, file);

      const tableErrors = file.messages.filter((msg) =>
        msg.message.includes("is not in table")
      );
      expect(tableErrors).toHaveLength(0);
    });
  });

  describe("invalid table values", () => {
    it("reports an invalid code in an HL7 table (EVN-1 = ZZZ)", async () => {
      const tree = v25Tree(s("MSH"), s("EVN", f("ZZZ")));
      const file = new VFile();

      await unified().use(hl7v2LintTableValues).run(tree, file);

      const tableErrors = file.messages.filter((msg) =>
        msg.message.includes("is not in table")
      );
      expect(tableErrors).toHaveLength(1);
      expect(tableErrors[0]?.message).toContain("EVN-1");
      expect(tableErrors[0]?.message).toContain("ZZZ");
      expect(tableErrors[0]).toMatchObject({
        ruleId: "table-values",
        source: "hl7v2-lint",
      });
    });
  });

  describe("empty fields", () => {
    it("skips empty fields without reporting", async () => {
      const tree = v25Tree(s("MSH"), s("EVN", f("")));
      const file = new VFile();

      await unified().use(hl7v2LintTableValues).run(tree, file);

      const tableErrors = file.messages.filter((msg) =>
        msg.message.includes("is not in table")
      );
      expect(tableErrors).toHaveLength(0);
    });
  });

  describe("user-type tables", () => {
    it("skips user-type tables (PID-8 references table 0001 with type user)", async () => {
      // PID-8 (Administrative Sex) references table HL70001 → "0001" (user type).
      // Even an invalid value should not produce a warning.
      const tree = v25Tree(
        s("MSH"),
        s(
          "PID",
          f(""), // PID-1
          f(""), // PID-2
          f(""), // PID-3
          f(""), // PID-4
          f(""), // PID-5
          f(""), // PID-6
          f(""), // PID-7
          f("INVALID_SEX") // PID-8 — user-type table, should be skipped
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintTableValues).run(tree, file);

      const tableErrors = file.messages.filter((msg) =>
        msg.message.includes("is not in table")
      );
      expect(tableErrors).toHaveLength(0);
    });
  });

  describe("Z-segments", () => {
    it("skips Z-segments by default", async () => {
      const tree = v25Tree(s("MSH"), s("ZZZ", f("ANYTHING")));
      const file = new VFile();

      await unified().use(hl7v2LintTableValues).run(tree, file);

      const tableErrors = file.messages.filter((msg) =>
        msg.message.includes("is not in table")
      );
      expect(tableErrors).toHaveLength(0);
    });
  });

  describe("missing version", () => {
    it("reports when version is missing", async () => {
      const tree = m(s("MSH"), s("EVN", f("A01")));
      const file = new VFile();

      await unified().use(hl7v2LintTableValues).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("Missing version");
    });
  });
});
