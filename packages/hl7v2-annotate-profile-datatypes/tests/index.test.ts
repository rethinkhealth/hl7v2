import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileDatatypes } from "../src";

/** Build a standard MSH segment for a given version. */
function msh(version: string) {
  return s(
    "MSH",
    f("|"), // MSH-1
    f("^~\\&"), // MSH-2
    f("SENDER"), // MSH-3
    f("FAC"), // MSH-4
    f("RECV"), // MSH-5
    f("RFAC"), // MSH-6
    f("20241201"), // MSH-7
    f(""), // MSH-8
    f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9
    f("MSG001"), // MSH-10
    f("P"), // MSH-11
    f(version) // MSH-12
  );
}

/** Create a processor with fields + datatypes annotators. */
function processor() {
  return unified()
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2AnnotateProfileDatatypes);
}

function getRep(
  tree: Root,
  segmentName: string,
  fieldIndex: number,
  repIndex = 0
) {
  for (const child of tree.children) {
    if (child.type === "segment" && child.name === segmentName) {
      return child.children[fieldIndex]?.children[repIndex];
    }
  }
}

function getComponent(
  tree: Root,
  segmentName: string,
  fieldIndex: number,
  compIndex: number,
  repIndex = 0
) {
  return getRep(tree, segmentName, fieldIndex, repIndex)?.children[compIndex];
}

function getSubcomponent(
  tree: Root,
  segmentName: string,
  fieldIndex: number,
  compIndex: number,
  subIndex: number,
  repIndex = 0
) {
  return getComponent(tree, segmentName, fieldIndex, compIndex, repIndex)
    ?.children[subIndex];
}

describe("hl7v2AnnotateProfileDatatypes", () => {
  describe("primitive field — stops at FieldRepetition", () => {
    it("annotates FieldRepetition with datatypeId, kind, title", async () => {
      const tree = m(msh("2.5"));
      await processor().run(tree);

      // MSH-10 (Message Control ID) is ST (primitive)
      const rep = getRep(tree, "MSH", 9);
      expect(rep?.data?.datatypeId).toBe("ST");
      expect(rep?.data?.kind).toBe("primitive");
      expect(rep?.data?.title).toBe("String Data");
    });

    it("does NOT annotate Component below a primitive field", async () => {
      const tree = m(msh("2.5"));
      await processor().run(tree);

      const comp = getComponent(tree, "MSH", 9, 0);
      expect(comp?.data?.datatypeId).toBeUndefined();
      expect(comp?.data?.kind).toBeUndefined();
    });

    it("does NOT annotate Subcomponent below a primitive field", async () => {
      const tree = m(msh("2.5"));
      await processor().run(tree);

      const sub = getSubcomponent(tree, "MSH", 9, 0, 0);
      expect(sub?.data?.datatypeId).toBeUndefined();
    });
  });

  describe("composite field — continues to Components", () => {
    it("annotates FieldRepetition as composite", async () => {
      const tree = m(msh("2.5"));
      await processor().run(tree);

      // MSH-9 (Message Type) is MSG (composite)
      const rep = getRep(tree, "MSH", 8);
      expect(rep?.data?.datatypeId).toBe("MSG");
      expect(rep?.data?.kind).toBe("composite");
    });

    it("annotates Components with full profile", async () => {
      const tree = m(msh("2.5"));
      await processor().run(tree);

      const comp0 = getComponent(tree, "MSH", 8, 0);
      expect(comp0?.data?.id).toBe("MSG.1");
      expect(comp0?.data?.name).toBeDefined();
      expect(comp0?.data?.required).toBeDefined();
      expect(comp0?.data?.datatypeId).toBeDefined();
      expect(comp0?.data?.kind).toBeDefined();
    });

    it("stops at primitive Component — no Subcomponent annotation", async () => {
      const tree = m(msh("2.5"));
      await processor().run(tree);

      // MSG.1 is ID (primitive) — subcomponent should have no annotation
      const comp0 = getComponent(tree, "MSH", 8, 0);
      expect(comp0?.data?.kind).toBe("primitive");

      const sub = getSubcomponent(tree, "MSH", 8, 0, 0);
      expect(sub?.data?.datatypeId).toBeUndefined();
    });
  });

  describe("nested composite — continues to Subcomponents", () => {
    it("annotates Subcomponents when Component is composite", async () => {
      // PID-5 (Patient Name) is XPN (composite)
      // XPN.1 (Family Name) is FN (composite) — has subcomponents
      const tree = m(
        msh("2.5"),
        s(
          "PID",
          f("1"),
          f(""),
          f("12345"),
          f(""),
          f(c("Doe"), c("John"), c("M")) // PID-5 (XPN)
        )
      );

      await processor().run(tree);

      // XPN.1 should be composite (FN)
      const familyComp = getComponent(tree, "PID", 4, 0);
      expect(familyComp?.data?.id).toBe("XPN.1");
      expect(familyComp?.data?.kind).toBe("composite");
      expect(familyComp?.data?.datatypeId).toBe("FN");

      // FN.1 (Surname) subcomponent should be annotated
      const surnameSub = getSubcomponent(tree, "PID", 4, 0, 0);
      expect(surnameSub?.data?.id).toBe("FN.1");
      expect(surnameSub?.data?.name).toBeDefined();
      expect(surnameSub?.data?.kind).toBe("primitive");
    });
  });

  describe("edge cases", () => {
    it("silently skips Z-segments", async () => {
      const tree = m(msh("2.5"), s("ZZZ", f("custom1"), f("custom2")));
      await processor().run(tree);

      const rep = getRep(tree, "ZZZ", 0);
      expect(rep?.data?.datatypeId).toBeUndefined();
    });

    it("returns tree unchanged when MSH-12 is missing", async () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f("SENDER"),
          f("FAC"),
          f("RECV"),
          f("RFAC"),
          f("20241201"),
          f(""),
          f(c("ADT"), c("A01")),
          f("MSG001"),
          f("P")
        )
      );

      await processor().run(tree);

      const rep = getRep(tree, "MSH", 8);
      expect(rep?.data?.datatypeId).toBeUndefined();
    });
  });
});
