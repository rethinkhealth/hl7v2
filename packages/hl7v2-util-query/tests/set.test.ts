import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";

import { set } from "../src/set";
import { value } from "../src/value";

describe("set", () => {
  // ── Update existing values ───────────────────────────────────────

  describe("update existing values", () => {
    it("sets an existing simple field value", () => {
      const tree = m(s("PID", f("original")));
      set(tree, "PID-1", "updated");
      expect(value(tree, "PID-1")?.value).toBe("updated");
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
      const msh9Rep = tree.children[0].children[8].children[0];
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
      const msh9Rep = tree.children[0].children[8].children[0];
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
      const msh9Rep = tree.children[0].children[8].children[0];
      expect(msh9Rep.children).toHaveLength(3);
    });

    it("creates component 5 on a field with only 2 components", () => {
      const tree = m(s("PID", f(""), f(""), f(c("id"), c("check"))));
      set(tree, "PID-3.5", "MR");
      expect(value(tree, "PID-3.5")?.value).toBe("MR");
      expect(value(tree, "PID-3.1")?.value).toBe("id");
      expect(value(tree, "PID-3.2")?.value).toBe("check");
      const rep = tree.children[0].children[2].children[0];
      expect(rep.children).toHaveLength(5);
    });
  });

  // ── Create missing fields ───────────────────────────────────────

  describe("create missing fields", () => {
    it("pads segment with empty fields up to target", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-5", "DOE");
      expect(value(tree, "PID-5")?.value).toBe("DOE");
      expect(value(tree, "PID-1")?.value).toBe("1");
      expect(tree.children[0].children).toHaveLength(5);
    });

    it("creates many fields at once", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-20", "val");
      expect(value(tree, "PID-20")?.value).toBe("val");
      expect(tree.children[0].children).toHaveLength(20);
    });

    it("creates field with component in a single operation", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-5.2", "JOHN");
      expect(value(tree, "PID-5.2")?.value).toBe("JOHN");
      expect(tree.children[0].children).toHaveLength(5);
    });
  });

  // ── Create missing repetitions ──────────────────────────────────

  describe("create missing repetitions", () => {
    it("creates second repetition", () => {
      const tree = m(s("PID", f(""), f(""), f("first-id")));
      set(tree, "PID-3[2]", "second-id");
      const pid3 = tree.children[0].children[2];
      expect(pid3.children).toHaveLength(2);
      expect(value(tree, "PID-3[2]")?.value).toBe("second-id");
    });

    it("pads with empty repetitions when gap exists", () => {
      const tree = m(s("PID", f(""), f(""), f("first-id")));
      set(tree, "PID-3[3]", "third-id");
      const pid3 = tree.children[0].children[2];
      expect(pid3.children).toHaveLength(3);
      expect(value(tree, "PID-3[3]")?.value).toBe("third-id");
    });

    it("creates repetition with specific component", () => {
      const tree = m(s("PID", f(""), f(""), f("first-id")));
      set(tree, "PID-3[2].3", "HOSP");
      expect(value(tree, "PID-3[2].3")?.value).toBe("HOSP");
      const pid3 = tree.children[0].children[2];
      expect(pid3.children).toHaveLength(2);
    });

    it("creates repetition 5 with gaps", () => {
      const tree = m(s("PID", f(""), f(""), f("id1")));
      set(tree, "PID-3[5]", "id5");
      const pid3 = tree.children[0].children[2];
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
      const comp = tree.children[0].children[4].children[0].children[0];
      expect(comp.children).toHaveLength(2);
      expect(comp.children[0].value).toBe("DOE");
      expect(comp.children[1].value).toBe("suffix");
    });

    it("creates subcomponent with gap", () => {
      const tree = m(s("PID", f(""), f(""), f(""), f(""), f(c("DOE"))));
      set(tree, "PID-5.1.3", "third-sub");
      const comp = tree.children[0].children[4].children[0].children[0];
      expect(comp.children).toHaveLength(3);
      expect(comp.children[0].value).toBe("DOE");
      expect(comp.children[2].value).toBe("third-sub");
    });
  });

  // ── Deep creation (multiple levels at once) ─────────────────────

  describe("deep creation (field + rep + component + subcomponent)", () => {
    it("creates field, repetition, component, and subcomponent in one call", () => {
      const tree = m(s("PID", f("1")));
      set(tree, "PID-10[2].3.2", "deep-value");
      expect(value(tree, "PID-10[2].3.2")?.value).toBe("deep-value");
      // PID should now have 10 fields
      expect(tree.children[0].children).toHaveLength(10);
    });

    it("creates everything from a minimal tree", () => {
      const tree = m(s("MSH", f("|")));
      set(tree, "MSH-9.3", "ADT_A01");
      expect(value(tree, "MSH-9.3")?.value).toBe("ADT_A01");
      // MSH should now have 9 fields
      expect(tree.children[0].children).toHaveLength(9);
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
      expect(tree.children[0].children).toHaveLength(5);
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
