import { f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintFieldRepetition from "../src";

/**
 * Build a minimal MSH segment with version in MSH-12.
 * MSH fields: MSH-1 (|), MSH-2 (^~\\&), MSH-3..MSH-11 (empty), MSH-12 (version).
 */
function mshWithVersion(version: string) {
  return s(
    "MSH",
    f("|"),
    f("^~\\&"),
    f(""),
    f(""),
    f(""),
    f(""),
    f(""),
    f(""),
    f(""),
    f(""),
    f(""),
    f(version)
  );
}

describe("hl7v2LintFieldRepetition", () => {
  describe("non-repeatable field with single value", () => {
    it("produces no warnings", async () => {
      // PID-1 (Set ID) is repeatable: false in v2.5
      const tree = m(
        mshWithVersion("2.5"),
        s("PID", f("1")) // PID-1 with single value
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldRepetition).run(tree, file);

      const repetitionErrors = file.messages.filter((msg) =>
        msg.message.includes("not repeatable")
      );
      expect(repetitionErrors).toHaveLength(0);
    });
  });

  describe("repeatable field with multiple repetitions", () => {
    it("produces no warnings for PID-3", async () => {
      // PID-3 (Patient Identifier List) is repeatable: true in v2.5
      const tree = m(
        mshWithVersion("2.5"),
        s(
          "PID",
          f("1"), // PID-1
          f(""), // PID-2
          f(r("ID1"), r("ID2"), r("ID3")) // PID-3 with 3 repetitions
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldRepetition).run(tree, file);

      const repetitionErrors = file.messages.filter((msg) =>
        msg.message.includes("not repeatable")
      );
      expect(repetitionErrors).toHaveLength(0);
    });
  });

  describe("non-repeatable field with multiple repetitions", () => {
    it("reports PID-1 with 2 repetitions", async () => {
      // PID-1 (Set ID) is repeatable: false in v2.5
      const tree = m(
        mshWithVersion("2.5"),
        s(
          "PID",
          f(r("1"), r("2")) // PID-1 with 2 repetitions
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldRepetition).run(tree, file);

      const repetitionErrors = file.messages.filter((msg) =>
        msg.message.includes("not repeatable")
      );
      expect(repetitionErrors).toHaveLength(1);
      expect(repetitionErrors[0]?.message).toContain("PID-1");
      expect(repetitionErrors[0]?.message).toContain("not repeatable");
      expect(repetitionErrors[0]?.message).toContain("2 repetitions");
      expect(repetitionErrors[0]).toMatchObject({
        ruleId: "field-repetition",
        source: "hl7v2-lint",
      });
    });
  });

  describe("Z-segments", () => {
    it("skips Z-segments by default", async () => {
      const tree = m(
        mshWithVersion("2.5"),
        s("ZZZ", f(r("1"), r("2"))) // Z-segment with repeated field
      );
      const file = new VFile();

      await unified().use(hl7v2LintFieldRepetition).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("warns about Z-segments when onMissingProfile is warn", async () => {
      const tree = m(mshWithVersion("2.5"), s("ZZZ", f(r("1"), r("2"))));
      const file = new VFile();

      await unified()
        .use(hl7v2LintFieldRepetition, { onMissingProfile: "warn" })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("ZZZ");
      expect(file.messages[0]?.message).toContain("ZZZ");
    });
  });

  describe("missing version", () => {
    it("reports missing version", async () => {
      const tree = m(s("MSH", f("|"), f("^~\\&")), s("PID", f("1")));
      const file = new VFile();

      await unified().use(hl7v2LintFieldRepetition).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("MSH-12");
      expect(file.messages[0]).toMatchObject({
        ruleId: "field-repetition",
        source: "hl7v2-lint",
      });
    });
  });
});
