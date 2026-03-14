import type { Root } from "@rethinkhealth/hl7v2-ast";
import { f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintFieldMaxLength from "../src";

/**
 * Create a tree with version metadata attached,
 * simulating what the annotator plugins would set.
 */
function treeWithVersion(version: string, ...args: Parameters<typeof m>): Root {
  const tree = m(...args);
  tree.data = {
    messageInfo: {
      version,
    },
  };
  return tree;
}

describe("hl7v2LintFieldMaxLength", () => {
  describe("fields within limits", () => {
    it("reports no warnings when all fields are within max length", async () => {
      // PID-1 (Set ID) has maxLength=4 in v2.5
      const tree = treeWithVersion(
        "2.5",
        s("MSH"),
        s("PID", f("1234")) // 4 chars, max 4
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

      const maxLengthErrors = file.messages.filter((msg) =>
        msg.message.includes("exceeds max length")
      );
      expect(maxLengthErrors).toHaveLength(0);
    });
  });

  describe("fields exceeding limits", () => {
    it("reports when PID-1 exceeds max length of 4", async () => {
      // PID-1 (Set ID) has maxLength=4 in v2.5
      const tree = treeWithVersion(
        "2.5",
        s("MSH"),
        s("PID", f("12345")) // 5 chars, max 4
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

      const maxLengthErrors = file.messages.filter((msg) =>
        msg.message.includes("exceeds max length")
      );
      expect(maxLengthErrors).toHaveLength(1);
      expect(maxLengthErrors[0]?.message).toContain("PID-1");
      expect(maxLengthErrors[0]?.message).toContain("4");
      expect(maxLengthErrors[0]?.message).toContain("5");
    });
  });

  describe("empty fields", () => {
    it("skips empty fields without warnings", async () => {
      const tree = treeWithVersion(
        "2.5",
        s("MSH"),
        s("PID", f()) // empty field
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

      const maxLengthErrors = file.messages.filter((msg) =>
        msg.message.includes("exceeds max length")
      );
      expect(maxLengthErrors).toHaveLength(0);
    });
  });

  describe("repetitions", () => {
    it("checks each repetition independently", async () => {
      // PID-1 maxLength=4 in v2.5
      const tree = treeWithVersion(
        "2.5",
        s("MSH"),
        s(
          "PID",
          f(r("12"), r("12345")) // first rep OK (2 chars), second rep exceeds (5 chars)
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

      const maxLengthErrors = file.messages.filter((msg) =>
        msg.message.includes("exceeds max length")
      );
      expect(maxLengthErrors).toHaveLength(1);
      expect(maxLengthErrors[0]?.message).toContain("PID-1");
    });
  });

  describe("Z-segments", () => {
    it("skips Z-segments by default", async () => {
      const tree = treeWithVersion(
        "2.5",
        s("MSH"),
        s("ZZZ", f("this is a very long value that would exceed any maxLength"))
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

      const maxLengthErrors = file.messages.filter((msg) =>
        msg.message.includes("exceeds max length")
      );
      expect(maxLengthErrors).toHaveLength(0);
    });
  });

  describe("missing version", () => {
    it("reports when version is missing", async () => {
      const tree = m(s("MSH"), s("PID", f("12345")));
      const file = new VFile();

      await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("MSH-12");
    });
  });

  describe("missing profile", () => {
    it("silently skips segments without profiles by default", async () => {
      // Use a non-existent segment that is not a Z-segment
      const tree = treeWithVersion("2.5", s("MSH"), s("QQQ", f("12345")));
      const file = new VFile();

      await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

      const missingProfileErrors = file.messages.filter((msg) =>
        msg.message.includes("QQQ")
      );
      expect(missingProfileErrors).toHaveLength(0);
    });

    it("warns about missing profiles when onMissingProfile is 'warn'", async () => {
      const tree = treeWithVersion("2.5", s("MSH"), s("QQQ", f("12345")));
      const file = new VFile();

      await unified()
        .use(hl7v2LintFieldMaxLength, { onMissingProfile: "warn" })
        .run(tree, file);

      const missingProfileErrors = file.messages.filter((msg) =>
        msg.message.includes("QQQ")
      );
      expect(missingProfileErrors).toHaveLength(1);
    });
  });

  describe("rule metadata", () => {
    it("uses correct ruleId and source", async () => {
      const tree = treeWithVersion(
        "2.5",
        s("MSH"),
        s("PID", f("12345")) // exceeds PID-1 maxLength of 4
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldMaxLength).run(tree, file);

      const maxLengthErrors = file.messages.filter((msg) =>
        msg.message.includes("exceeds max length")
      );
      expect(maxLengthErrors).toHaveLength(1);
      expect(maxLengthErrors[0]).toMatchObject({
        ruleId: "field-max-length",
        source: "hl7v2-lint",
      });
    });
  });
});
