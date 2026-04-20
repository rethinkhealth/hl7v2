import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import type { Root, Segment } from "@glion/ast";
import { c, f, m, s } from "@glion/builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileSegments } from "../src";

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

function getSegment(tree: Root, name: string): Segment {
  for (const child of tree.children) {
    if (child.type === "segment" && child.name === name) {
      return child;
    }
  }
  throw new Error(`Segment ${name} not found`);
}

describe("hl7v2AnnotateProfileSegments", () => {
  it("annotates MSH with its title", async () => {
    const tree = m(msh("2.5"));

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileSegments)
      .run(tree);

    const segment = getSegment(tree, "MSH");
    expect(segment.data?.title).toBe("Message Header");
  });

  it("annotates PID with its title", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe^John"))
    );

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileSegments)
      .run(tree);

    const segment = getSegment(tree, "PID");
    expect(segment.data?.title).toBe("Patient Identification");
  });

  it("annotates multiple segments", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1")),
      s("PV1", f("1")),
      s("OBR", f("1")),
      s("OBX", f("1"))
    );

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileSegments)
      .run(tree);

    expect(getSegment(tree, "MSH").data?.title).toBe("Message Header");
    expect(getSegment(tree, "PID").data?.title).toBe("Patient Identification");
    expect(getSegment(tree, "PV1").data?.title).toBe("Patient Visit");
    expect(getSegment(tree, "OBR").data?.title).toBe("Observation Request");
    expect(getSegment(tree, "OBX").data?.title).toBe("Observation/Result");
  });

  it("skips Z-segments without error", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("custom1"), f("custom2")));

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileSegments)
      .run(tree);

    const segment = getSegment(tree, "ZZZ");
    expect(segment.data?.title).toBeUndefined();
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

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileSegments)
      .run(tree);

    for (const child of tree.children) {
      if (child.type === "segment") {
        expect(child.data?.title).toBeUndefined();
      }
    }
  });

  it("works with different HL7v2 versions", async () => {
    const tree = m(msh("2.7.1"), s("PID", f("1")));

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileSegments)
      .run(tree);

    expect(getSegment(tree, "MSH").data?.title).toBe("Message Header");
    expect(getSegment(tree, "PID").data?.title).toBe("Patient Identification");
  });

  it("returns tree unchanged when no profile context exists", async () => {
    const tree = m(msh("2.5"));

    await unified().use(hl7v2AnnotateProfileSegments).run(tree);

    for (const child of tree.children) {
      if (child.type === "segment") {
        expect(child.data?.title).toBeUndefined();
      }
    }
  });

  it("initializes node.data when undefined", async () => {
    const tree = m(msh("2.5"));

    // Ensure data is undefined before plugin runs
    for (const child of tree.children) {
      if (child.type === "segment") {
        child.data = undefined;
      }
    }

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileSegments)
      .run(tree);

    const segment = getSegment(tree, "MSH");
    expect(segment.data).toBeDefined();
    expect(segment.data?.title).toBe("Message Header");
  });
});
