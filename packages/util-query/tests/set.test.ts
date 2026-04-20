import type { Component, Field, FieldRepetition, Segment } from "@glion/ast";
import { c, f, g, m, r, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { set } from "../src/set";
import { value } from "../src/value";

/** Cast root child to Segment for typed property access in tests. */
const seg = (tree: ReturnType<typeof m>, index: number): Segment =>
  tree.children[index] as Segment;

/** Get a Field from a Segment by index. */
const fld = (segment: Segment, index: number): Field =>
  // biome-ignore lint: test helper — index is always valid
  segment.children[index]!;

/** Get a FieldRepetition from a Field by index. */
const rep = (field: Field, index: number): FieldRepetition =>
  // biome-ignore lint: test helper — index is always valid
  field.children[index]!;

/** Get a Component from a FieldRepetition by index. */
const comp = (fieldRep: FieldRepetition, index: number): Component =>
  // biome-ignore lint: test helper — index is always valid
  fieldRep.children[index]!;

describe("set", () => {
  // ── Update existing values ───────────────────────────────────────

  describe("update existing values", () => {
    it("sets an existing simple field value", () => {
      const tree = m(s("PID", f("original")));
      set(tree, "PID-1", "updated");
      expect(value(tree, "PID-1")?.value).toBe("updated");
      expect(tree).toMatchSnapshot();
    });

    it("sets an existing component value", () => {
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
          f(c("ADT"), c("A01"), c("ADT_A01")),
          f(""),
          f(""),
          f("2.5")
        )
      );
      set(tree, "MSH-9.3", "ADT_A04");
      expect(value(tree, "MSH-9.3")?.value).toBe("ADT_A04");
      expect(value(tree, "MSH-9.1")?.value).toBe("ADT");
      expect(value(tree, "MSH-9.2")?.value).toBe("A01");
    });

    it("sets MSH-12 version", () => {
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
          f(c("ADT"), c("A01")),
          f(""),
          f(""),
          f("2.5")
        )
      );
      set(tree, "MSH-12", "2.7.1");
      expect(value(tree, "MSH-12")?.value).toBe("2.7.1");
    });

    it("updates value in a specific repetition", () => {
      const tree = m(s("PID", f(""), f(""), f(r("id1"), r("id2"))));
      set(tree, "PID-3[2]", "updated-id2");
      expect(value(tree, "PID-3[1]")?.value).toBe("id1");
      expect(value(tree, "PID-3[2]")?.value).toBe("updated-id2");
    });

    it("updates a subcomponent value", () => {
      const tree = m(s("PID", f(""), f(""), f(""), f(""), f(c("DOE"))));
      // PID-5.1 subcomponent 1 already has "DOE"
      set(tree, "PID-5.1", "SMITH");
      expect(value(tree, "PID-5.1")?.value).toBe("SMITH");
    });
  });

  // ── Fill empty values ────────────────────────────────────────────

  describe("fill empty values", () => {
    it("fills an empty component in place (no extra nodes created)", () => {
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
          f(c("ADT"), c("A04"), c("")),
          f(""),
          f(""),
          f("2.5")
        )
      );
      set(tree, "MSH-9.3", "ADT_A01");
      expect(value(tree, "MSH-9.3")?.value).toBe("ADT_A01");
      const msh9Rep = rep(fld(seg(tree, 0), 8), 0);
      expect(msh9Rep.children).toHaveLength(3);
    });

    it("fills an empty field (field exists but has empty value)", () => {
      const tree = m(s("PID", f("")));
      set(tree, "PID-1", "1");
      expect(value(tree, "PID-1")?.value).toBe("1");
    });

    it("fills empty first repetition", () => {
      const tree = m(s("PID", f("")));
      set(tree, "PID-1[1]", "val");
      expect(value(tree, "PID-1")?.value).toBe("val");
    });
  });

  // ── Create missing components ────────────────────────────────────

  describe("create missing components", () => {
    it("creates MSH-9.3 when only MSH-9.1 and MSH-9.2 exist", () => {
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
          f(c("ADT"), c("A01")),
          f(""),
          f(""),
          f("2.5")
        )
      );
      set(tree, "MSH-9.3", "ADT_A01");
      expect(value(tree, "MSH-9.3")?.value).toBe("ADT_A01");
      const msh9Rep = rep(fld(seg(tree, 0), 8), 0);
      expect(msh9Rep.children).toHaveLength(3);
    });

    it("creates intermediate empty components when gap exists", () => {
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
          f(c("ADT")),
          f(""),
          f(""),
          f("2.5")
        )
      );
      set(tree, "MSH-9.3", "ADT_A01");
      expect(value(tree, "MSH-9.3")?.value).toBe("ADT_A01");
      expect(value(tree, "MSH-9.1")?.value).toBe("ADT");
      const msh9Rep = rep(fld(seg(tree, 0), 8), 0);
      expect(msh9Rep.children).toHaveLength(3);
    });

    it("creates component 5 on a field with only 2 components", () => {
      const tree = m(s("PID", f(""), f(""), f(c("id"), c("check"))));
      set(tree, "PID-3.5", "MR");
      expect(value(tree, "PID-3.5")?.value).toBe("MR");
      expect(value(tree, "PID-3.1")?.value).toBe("id");
      expect(value(tree, "PID-3.2")?.value).toBe("check");
      const pid3Rep = rep(fld(seg(tree, 0), 2), 0);
      expect(pid3Rep.children).toHaveLength(5);
    });
  });

  // ── Create missing fields ───────────────────────────────────────

  describe("create missing fields", () => {
    it("pads segment with empty fields up to target", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-5", "DOE");
      expect(value(tree, "PID-5")?.value).toBe("DOE");
      expect(value(tree, "PID-1")?.value).toBe("1");
      expect(seg(tree, 0).children).toHaveLength(5);
    });

    it("creates many fields at once", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-20", "val");
      expect(value(tree, "PID-20")?.value).toBe("val");
      expect(seg(tree, 0).children).toHaveLength(20);
    });

    it("creates field with component in a single operation", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-5.2", "JOHN");
      expect(value(tree, "PID-5.2")?.value).toBe("JOHN");
      expect(seg(tree, 0).children).toHaveLength(5);
    });
  });

  // ── Create missing repetitions ──────────────────────────────────

  describe("create missing repetitions", () => {
    it("creates second repetition", () => {
      const tree = m(s("PID", f(""), f(""), f("first-id")));
      set(tree, "PID-3[2]", "second-id");
      const pid3 = fld(seg(tree, 0), 2);
      expect(pid3.children).toHaveLength(2);
      expect(value(tree, "PID-3[2]")?.value).toBe("second-id");
    });

    it("pads with empty repetitions when gap exists", () => {
      const tree = m(s("PID", f(""), f(""), f("first-id")));
      set(tree, "PID-3[3]", "third-id");
      const pid3 = fld(seg(tree, 0), 2);
      expect(pid3.children).toHaveLength(3);
      expect(value(tree, "PID-3[3]")?.value).toBe("third-id");
    });

    it("creates repetition with specific component", () => {
      const tree = m(s("PID", f(""), f(""), f("first-id")));
      set(tree, "PID-3[2].3", "HOSP");
      expect(value(tree, "PID-3[2].3")?.value).toBe("HOSP");
      const pid3 = fld(seg(tree, 0), 2);
      expect(pid3.children).toHaveLength(2);
    });

    it("creates repetition 5 with gaps", () => {
      const tree = m(s("PID", f(""), f(""), f("id1")));
      set(tree, "PID-3[5]", "id5");
      const pid3 = fld(seg(tree, 0), 2);
      expect(pid3.children).toHaveLength(5);
      expect(value(tree, "PID-3[5]")?.value).toBe("id5");
      expect(value(tree, "PID-3[1]")?.value).toBe("id1");
    });
  });

  // ── Create missing subcomponents ────────────────────────────────

  describe("create missing subcomponents", () => {
    it("creates second subcomponent", () => {
      const tree = m(s("PID", f(""), f(""), f(""), f(""), f(c("DOE"))));
      set(tree, "PID-5.1.2", "suffix");
      const pid5Comp = comp(rep(fld(seg(tree, 0), 4), 0), 0);
      expect(pid5Comp.children).toHaveLength(2);
      expect(pid5Comp.children[0]!.value).toBe("DOE");
      expect(pid5Comp.children[1]!.value).toBe("suffix");
    });

    it("creates subcomponent with gap", () => {
      const tree = m(s("PID", f(""), f(""), f(""), f(""), f(c("DOE"))));
      set(tree, "PID-5.1.3", "third-sub");
      const pid5Comp = comp(rep(fld(seg(tree, 0), 4), 0), 0);
      expect(pid5Comp.children).toHaveLength(3);
      expect(pid5Comp.children[0]!.value).toBe("DOE");
      expect(pid5Comp.children[2]!.value).toBe("third-sub");
    });
  });

  // ── Deep creation (multiple levels at once) ─────────────────────

  describe("deep creation (field + rep + component + subcomponent)", () => {
    it("creates field, repetition, component, and subcomponent in one call", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-10[2].3.2", "deep-value");
      expect(value(tree, "PID-10[2].3.2")?.value).toBe("deep-value");
      // PID should now have 10 fields
      expect(seg(tree, 0).children).toHaveLength(10);
    });

    it("creates everything from a minimal tree", () => {
      const tree = m(s("MSH", f("|")));
      set(tree, "MSH-9.3", "ADT_A01");
      expect(value(tree, "MSH-9.3")?.value).toBe("ADT_A01");
      // MSH should now have 9 fields
      expect(seg(tree, 0).children).toHaveLength(9);
    });

    it("creates field with repetition from scratch", () => {
      const tree = m(s("PID"));
      set(tree, "PID-3[1].1", "12345");
      expect(value(tree, "PID-3.1")?.value).toBe("12345");
    });
  });

  // ── Empty tree / minimal tree cases ─────────────────────────────

  describe("minimal tree cases", () => {
    it("works on segment with no fields", () => {
      const tree = m(s("PID"));
      set(tree, "PID-1", "1");
      expect(value(tree, "PID-1")?.value).toBe("1");
    });

    it("creates field on empty segment then sets component", () => {
      const tree = m(s("PID"));
      set(tree, "PID-5.2", "JOHN");
      expect(value(tree, "PID-5.2")?.value).toBe("JOHN");
      expect(seg(tree, 0).children).toHaveLength(5);
    });
  });

  // ── Preserves existing data ─────────────────────────────────────

  describe("preserves existing data", () => {
    it("does not modify other fields", () => {
      const tree = m(
        s("PID", f("1"), f("EXT-ID"), f("12345"), f("ALT"), f("DOE^JOHN"))
      );
      set(tree, "PID-3", "99999");
      expect(value(tree, "PID-1")?.value).toBe("1");
      expect(value(tree, "PID-2")?.value).toBe("EXT-ID");
      expect(value(tree, "PID-3")?.value).toBe("99999");
      expect(value(tree, "PID-4")?.value).toBe("ALT");
    });

    it("does not modify other repetitions", () => {
      const tree = m(s("PID", f(""), f(""), f(r("id1"), r("id2"))));
      set(tree, "PID-3[1]", "updated-id1");
      expect(value(tree, "PID-3[1]")?.value).toBe("updated-id1");
      expect(value(tree, "PID-3[2]")?.value).toBe("id2");
    });

    it("does not modify other components", () => {
      const tree = m(
        s("PID", f(""), f(""), f(""), f(""), f(c("DOE"), c("JOHN"), c("M")))
      );
      set(tree, "PID-5.2", "JANE");
      expect(value(tree, "PID-5.1")?.value).toBe("DOE");
      expect(value(tree, "PID-5.2")?.value).toBe("JANE");
      expect(value(tree, "PID-5.3")?.value).toBe("M");
    });

    it("does not modify other segments", () => {
      const tree = m(
        s("MSH", f("|"), f("^~\\&"), f("SENDER")),
        s("PID", f("1"))
      );
      set(tree, "PID-1", "2");
      expect(value(tree, "MSH-3")?.value).toBe("SENDER");
      expect(value(tree, "PID-1")?.value).toBe("2");
    });
  });

  // ── Multiple sequential sets ────────────────────────────────────

  describe("multiple sequential sets", () => {
    it("builds up a complete MSH-9 with sequential sets", () => {
      const tree = m(s("MSH", f("|"), f("^~\\&")));

      set(tree, "MSH-9.1", "ADT");
      set(tree, "MSH-9.2", "A01");
      set(tree, "MSH-9.3", "ADT_A01");
      set(tree, "MSH-12", "2.5");

      expect(value(tree, "MSH-9.1")?.value).toBe("ADT");
      expect(value(tree, "MSH-9.2")?.value).toBe("A01");
      expect(value(tree, "MSH-9.3")?.value).toBe("ADT_A01");
      expect(value(tree, "MSH-12")?.value).toBe("2.5");
    });

    it("builds up multiple repetitions sequentially", () => {
      const tree = m(s("PID"));

      set(tree, "PID-3[1]", "id1");
      set(tree, "PID-3[2]", "id2");
      set(tree, "PID-3[3]", "id3");

      expect(value(tree, "PID-3[1]")?.value).toBe("id1");
      expect(value(tree, "PID-3[2]")?.value).toBe("id2");
      expect(value(tree, "PID-3[3]")?.value).toBe("id3");
    });
  });

  // ── Group paths ──────────────────────────────────────────────────

  describe("group paths", () => {
    it("sets a value on a segment inside a group", () => {
      const tree = m(
        s("MSH", f("|"), f("^~\\&")),
        g("ORDER", s("ORC", f("NW")), s("OBR", f("1")))
      );
      set(tree, "ORDER-ORC-1", "SC");
      expect(value(tree, "ORDER-ORC-1")?.value).toBe("SC");
    });
  });

  // ── Multiple same-name segments ─────────────────────────────────

  describe("multiple same-name segments", () => {
    it("sets on the first matching segment by default", () => {
      const tree = m(s("OBX", f("1"), f("NM")), s("OBX", f("2"), f("ST")));
      set(tree, "OBX-1", "99");
      expect(value(tree, "OBX-1")?.value).toBe("99");
      // Second OBX untouched
      const obx2 = seg(tree, 1);
      expect(comp(rep(fld(obx2, 0), 0), 0).children[0]!.value).toBe("2");
    });
  });

  // ── Setting empty string (clearing a value) ─────────────────────

  describe("setting empty string", () => {
    it("sets a value to empty string", () => {
      const tree = m(s("PID", f("1"), f("EXT-ID")));
      set(tree, "PID-2", "");
      expect(value(tree, "PID-2")?.value).toBe("");
    });

    it("clears a component value", () => {
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
          f(c("ADT"), c("A01"), c("ADT_A01")),
          f(""),
          f(""),
          f("2.5")
        )
      );
      set(tree, "MSH-9.3", "");
      expect(value(tree, "MSH-9.3")?.value).toBe("");
    });
  });

  // ── Padding creates structurally absent nodes ───────────────────

  describe("padding creates structurally absent nodes", () => {
    it("padded fields have no children (distinguishable from empty values)", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-5", "DOE");
      // PID-2, PID-3, PID-4 are padding stubs with no children
      const pid = seg(tree, 0);
      expect(fld(pid, 1).children).toHaveLength(0);
      expect(fld(pid, 2).children).toHaveLength(0);
      expect(fld(pid, 3).children).toHaveLength(0);
      // PID-5 has the value
      expect(value(tree, "PID-5")?.value).toBe("DOE");
      // value() on padding returns null value (empty children)
      expect(value(tree, "PID-2")?.value).toBeNull();
    });

    it("padded repetitions have no children", () => {
      const tree = m(s("PID", f(""), f(""), f("id1")));
      set(tree, "PID-3[3]", "id3");
      // Rep 2 is padding with no children
      const rep2 = rep(fld(seg(tree, 0), 2), 1);
      expect(rep2.children).toHaveLength(0);
    });

    it("padded components have no children", () => {
      const tree = m(s("PID", f(""), f(""), f(c("id"))));
      set(tree, "PID-3.4", "type");
      // Components 2 and 3 are padding with no children
      const pid3Rep = rep(fld(seg(tree, 0), 2), 0);
      expect(comp(pid3Rep, 1).children).toHaveLength(0);
      expect(comp(pid3Rep, 2).children).toHaveLength(0);
      expect(value(tree, "PID-3.4")?.value).toBe("type");
    });
  });

  // ── Error cases ─────────────────────────────────────────────────

  describe("error cases", () => {
    it("throws for segment-only paths", () => {
      const tree = m(s("PID", f("1")));
      expect(() => set(tree, "PID", "value")).toThrow("segment-only");
    });

    it("throws when segment does not exist", () => {
      const tree = m(s("MSH", f("|")));
      expect(() => set(tree, "ZZZ-1", "value")).toThrow("not found");
    });

    it("throws for empty path", () => {
      const tree = m(s("PID", f("1")));
      expect(() => set(tree, "", "value")).toThrow();
    });
  });
});
