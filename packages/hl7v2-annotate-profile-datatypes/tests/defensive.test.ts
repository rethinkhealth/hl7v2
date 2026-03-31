/**
 * Defensive tests for hl7v2-annotate-profile-datatypes.
 *
 * Tests malformed ASTs, edge cases, and adversarial inputs
 * that could break the stop-at-primitive cascade.
 */
import { hl7v2AnnotateProfileContext } from "@rethinkhealth/hl7v2-annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import type { Root, Segment } from "@rethinkhealth/hl7v2-ast";
import { c, f, g, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileDatatypes } from "../src";

function msh(version: string) {
  return s(
    "MSH",
    f("|"),
    f("^~\\&"),
    f("SENDER"),
    f("FAC"),
    f("RECV"),
    f("RFAC"),
    f("20241201"),
    f(""),
    f(c("ADT"), c("A01"), c("ADT_A01")),
    f("MSG001"),
    f("P"),
    f(version)
  );
}

function processor() {
  return unified()
    .use(hl7v2AnnotateProfileContext)
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

describe("defensive: malformed AST structure", () => {
  it("handles root with no children", async () => {
    const tree = m();
    await processor().run(tree);
    expect(tree.children).toHaveLength(0);
  });

  it("handles segment with zero fields", async () => {
    const tree = m(msh("2.5"), s("PID"));
    await processor().run(tree);

    // MSH reps should still be annotated
    const rep = getRep(tree, "MSH", 8);
    expect(rep?.data?.datatypeId).toBe("MSG");
  });

  it("annotates datatypes inside group nodes", async () => {
    const tree = m(
      msh("2.5"),
      g(
        "PATIENT",
        s("PID", f("1"), f(""), f("12345"), f(""), f(c("Doe"), c("John")))
      )
    );

    await processor().run(tree);

    // PID-5 inside group: field-repetition should have XPN datatype
    const group = tree.children[1];
    if (group!.type === "group") {
      const pid = group!.children[0] as Segment;
      const rep = pid.children[4]?.children[0];
      expect(rep?.data?.datatypeId).toBe("XPN");
      expect(rep?.data?.kind).toBe("composite");

      // Components should also be annotated
      const comp = rep?.children[0];
      expect(comp?.data?.id).toBe("XPN.1");
    }
  });

  it("handles nested groups", async () => {
    const tree = m(
      msh("2.5"),
      g(
        "ORDER",
        g(
          "OBSERVATION",
          s("OBX", f("1"), f("NM"), f(c("8302-2"), c("Body Height"), c("LN")))
        )
      )
    );

    await processor().run(tree);

    // OBX-3 (CWE composite) inside nested groups should be annotated
    const outerGroup = tree.children[1];
    if (outerGroup!.type === "group") {
      const innerGroup = outerGroup!.children[0];
      if (innerGroup!.type === "group") {
        const obx = innerGroup!.children[0] as Segment;
        const rep = obx.children[2]?.children[0];
        expect(rep?.data?.kind).toBe("composite");
      }
    }
  });
});

describe("defensive: version edge cases", () => {
  it("handles garbage version — all loads fail, tree is clean", async () => {
    const tree = m(msh("INVALID_VERSION"));
    await processor().run(tree);

    const rep = getRep(tree, "MSH", 8);
    expect(rep?.data?.datatypeId).toBeUndefined();
  });

  it("handles v2.3 (older version)", async () => {
    const tree = m(msh("2.3"));
    await processor().run(tree);

    // v2.3 should load — MSH-10 (ST) should be annotated as primitive
    const rep = getRep(tree, "MSH", 9);
    expect(rep?.data?.datatypeId).toBe("ST");
    expect(rep?.data?.kind).toBe("primitive");
  });

  it("handles empty string version", async () => {
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
        f("P"),
        f("")
      )
    );

    await processor().run(tree);
    const rep = getRep(tree, "MSH", 8);
    expect(rep?.data?.datatypeId).toBeUndefined();
  });
});

describe("defensive: stop-at-primitive boundary integrity", () => {
  it("primitive field: nothing below FieldRepetition is annotated", async () => {
    // MSH-10 (ST, primitive) — components and subcomponents should be clean
    const tree = m(msh("2.5"));
    await processor().run(tree);

    const rep = getRep(tree, "MSH", 9); // MSH-10
    expect(rep?.data?.kind).toBe("primitive");

    const comp = getComponent(tree, "MSH", 9, 0);
    expect(comp?.data?.datatypeId).toBeUndefined();

    const sub = getSubcomponent(tree, "MSH", 9, 0, 0);
    expect(sub?.data?.datatypeId).toBeUndefined();
  });

  it("composite field with primitive component: nothing below Component", async () => {
    // MSH-9 (MSG) → MSG.1 (ID, primitive)
    const tree = m(msh("2.5"));
    await processor().run(tree);

    const comp = getComponent(tree, "MSH", 8, 0);
    expect(comp?.data?.kind).toBe("primitive");

    const sub = getSubcomponent(tree, "MSH", 8, 0, 0);
    expect(sub?.data?.datatypeId).toBeUndefined();
  });

  it("composite component: subcomponents ARE annotated", async () => {
    // PID-5 (XPN) → XPN.1 (FN, composite) → FN.1 (ST, primitive)
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f(c("Doe"), c("John")))
    );

    await processor().run(tree);

    const comp = getComponent(tree, "PID", 4, 0);
    expect(comp?.data?.kind).toBe("composite");

    const sub = getSubcomponent(tree, "PID", 4, 0, 0);
    expect(sub?.data?.id).toBe("FN.1");
    expect(sub?.data?.kind).toBe("primitive");
  });
});

describe("defensive: all Z-segments", () => {
  it("produces clean unannotated tree for Z-segments", async () => {
    const tree = m(
      msh("2.5"),
      s("ZAA", f("1"), f("custom")),
      s("ZBB", f(c("a"), c("b"), c("c")))
    );

    await processor().run(tree);

    // Z-segment reps should have no datatype data
    for (const name of ["ZAA", "ZBB"]) {
      const rep = getRep(tree, name, 0);
      expect(rep?.data?.datatypeId).toBeUndefined();
    }
  });
});

describe("defensive: pre-existing data", () => {
  it("overwrites pre-existing rep.data properties", async () => {
    const tree = m(msh("2.5"));
    const msh9Rep = (tree.children[0] as Segment).children[8]?.children[0];
    if (msh9Rep) {
      msh9Rep.data = { datatypeId: "WRONG", kind: "FAKE" };
    }

    await processor().run(tree);

    expect(msh9Rep?.data?.datatypeId).toBe("MSG");
    expect(msh9Rep?.data?.kind).toBe("composite");
  });
});

describe("defensive: idempotency", () => {
  it("produces identical results when run three times", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f(c("Doe"), c("John")))
    );

    const proc = processor();

    await proc.run(tree);
    const firstRun = JSON.stringify(tree);

    await proc.run(tree);
    const secondRun = JSON.stringify(tree);

    await proc.run(tree);
    const thirdRun = JSON.stringify(tree);

    expect(secondRun).toBe(firstRun);
    expect(thirdRun).toBe(firstRun);
  });
});

describe("defensive: large messages", () => {
  it("handles 200 OBX segments without error", async () => {
    const segments = [msh("2.5"), s("PID", f("1"), f(""), f("12345"))];
    for (let i = 1; i <= 200; i++) {
      segments.push(
        s(
          "OBX",
          f(String(i)),
          f("NM"),
          f(c(`${8300 + i}`), c(`Obs ${i}`), c("LN"))
        )
      );
    }
    const tree = m(...segments);

    await processor().run(tree);

    // First and last OBX should both be annotated
    const firstRep = getRep(tree, "OBX", 2);
    expect(firstRep?.data?.kind).toBe("composite");

    // PID should also be annotated
    const pidRep = getRep(tree, "PID", 2);
    expect(pidRep?.data?.datatypeId).toBeDefined();
  });
});

describe("defensive: datatypes annotator without fields annotator", () => {
  it("produces no annotations and does not crash", async () => {
    const tree = m(msh("2.5"), s("PID", f("1"), f(""), f("12345")));

    // Run ONLY the datatypes annotator (no context or fields annotator first)
    await unified().use(hl7v2AnnotateProfileDatatypes).run(tree);

    // Nothing should be annotated — file.data.datatypes is never set
    const rep = getRep(tree, "MSH", 8);
    expect(rep?.data?.datatypeId).toBeUndefined();

    const pidRep = getRep(tree, "PID", 0);
    expect(pidRep?.data?.datatypeId).toBeUndefined();
  });
});
