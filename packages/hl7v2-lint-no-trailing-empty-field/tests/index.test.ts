import type { Field, Segment } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2LintNoTrailingEmptyField from "../src";

describe("hl7v2-lint:no-trailing-empty-field", () => {
  describe("PASSING CASES", () => {
    it("does not warn for a segment with no fields", async () => {
      const tree = m(s("MSH"));
      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("does not warn for a segment with no trailing empty fields", async () => {
      const tree = m(s("MSH", f("|"), f("^~\\&"), f("2.5")));
      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("does not warn for a segment with an end field with components", async () => {
      const tree = m(
        s(
          "OBR",
          f("1"),
          f("845439^GHH OE"),
          f("1045813^GHH LAB"),
          f("1554-5^GLUCOSE^LN"),
          f(c("", "", "", "", "", "R"))
        )
      );
      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("does not warn for a segment with an end field with empty components", async () => {
      const tree = m(
        s(
          "OBR",
          f("1"),
          f(""),
          f("200202150930"),
          f(""),
          f(""),
          f(c("", "", "", "", ""))
        )
      );
      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("does not warn for a segment with end field with multiple components", async () => {
      const tree = m(s("OBR", f(""), f(""), f(c("", "", "", "", ""))));
      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("does not warn for a segment with end field with multiple repetitions", async () => {
      const tree = m(s("OBR", f(""), f(""), f(r(""), r(c("", "")))));
      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });
  });

  describe("NON-PASSING CASES", () => {
    it("warns for a segment with trailing empty fields", async () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f("SENDER"),
          f("FAC"),
          f("RCVR"),
          f("FAC"),
          f("20250101010101"),
          f(""),
          f("ADT^A01"),
          f("MSG00001"),
          f("P"),
          f("2.5"),
          f("") // trailing empty field
        )
      );
      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toContain(
        "Segment has 1 trailing empty field"
      );
    });

    it("warns for a segment with multiple trailing empty fields", async () => {
      const tree = m(
        s(
          "PID",
          f("1"),
          f("John"),
          f(""), // trailing empty field
          f(""), // trailing empty field
          f("") // trailing empty field
        )
      );
      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toContain(
        "Segment has 3 trailing empty fields"
      );
    });

    it("reports a range covering all trailing empty fields", async () => {
      const tree = m(
        s(
          "PID",
          f("1"),
          f("DOE"),
          f(""), // first trailing field
          f("") // second trailing field
        )
      );

      const seg = tree.children[0] as Segment;
      const fields = seg.children.slice(1) as Field[];

      const point = (offset: number) => ({
        offset,
        line: 1,
        column: offset + 1,
      });

      seg.position = {
        start: point(0),
        end: point(50), // intentionally beyond the final field to expose the bug
      };

      fields[0].position = { start: point(4), end: point(5) };
      fields[1].position = { start: point(6), end: point(9) };
      fields[2].position = { start: point(10), end: point(10) };
      fields[3].position = { start: point(11), end: point(11) };

      const file = new VFile();

      await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

      expect(file.messages).toHaveLength(1);

      // End position should be +1 to include the field separator (offset 11 + 1 = 12)
      expect(file.messages[0].place).toEqual({
        start: fields[2].position?.start,
        end: {
          offset: 12,
          line: 1,
          column: 13,
        },
      });
    });
  });
});
