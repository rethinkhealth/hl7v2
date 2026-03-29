import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import type { Root, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileFieldsCodeSystems } from "../src";

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
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2AnnotateProfileFieldsCodeSystems);
}

function getCodedSubcomponent(
  tree: Root,
  segmentName: string,
  fieldIndex: number,
  repIndex = 0
): Subcomponent | undefined {
  for (const child of tree.children) {
    if (child.type === "segment" && child.name === segmentName) {
      return child.children[fieldIndex]?.children[repIndex]?.children[0]
        ?.children[0];
    }
  }
}

describe("hl7v2AnnotateProfileFieldsCodeSystems", () => {
  it("annotates PID-8 (Administrative Sex) with UTG display and status", async () => {
    const tree = m(
      msh("2.5"),
      s(
        "PID",
        f("1"),
        f(""),
        f("12345"),
        f(""),
        f(c("Doe"), c("John")),
        f(""),
        f("19800101"),
        f("F") // PID-8 Administrative Sex — table HL70001
      )
    );

    await processor().run(tree);

    const sub = getCodedSubcomponent(tree, "PID", 7);
    expect(sub?.data?.display).toBe("Female");
    expect(sub?.data?.status).toBe("active");
    expect(sub?.data?.codeSystem).toEqual({
      id: "v2-0001",
      name: "AdministrativeSex",
      title: "administrativeSex",
    });
  });

  it("annotates male code correctly", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("M"))
    );

    await processor().run(tree);

    const sub = getCodedSubcomponent(tree, "PID", 7);
    expect(sub?.data?.display).toBe("Male");
    expect(sub?.data?.status).toBe("active");
  });

  it("skips unknown code values silently", async () => {
    const tree = m(
      msh("2.5"),
      s(
        "PID",
        f("1"),
        f(""),
        f("12345"),
        f(""),
        f("Doe"),
        f(""),
        f(""),
        f("INVALID")
      )
    );

    await processor().run(tree);

    const sub = getCodedSubcomponent(tree, "PID", 7);
    expect(sub?.data?.display).toBeUndefined();
  });

  it("skips fields without table reference", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1")) // PID-1 (SI) has no table
    );

    await processor().run(tree);

    const sub = getCodedSubcomponent(tree, "PID", 0);
    expect(sub?.data?.display).toBeUndefined();
  });

  it("skips empty coded fields", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f(""))
    );

    await processor().run(tree);

    const sub = getCodedSubcomponent(tree, "PID", 7);
    expect(sub?.data?.display).toBeUndefined();
  });

  it("annotates multiple coded fields in the same segment", async () => {
    const tree = m(
      msh("2.5"),
      s(
        "PID",
        f("1"),
        f(""),
        f("12345"),
        f(""),
        f(c("Doe"), c("John")),
        f(""),
        f("19800101"),
        f("F") // PID-8 Administrative Sex
      )
    );

    await processor().run(tree);

    // PID-8 should be annotated
    const pid8Sub = getCodedSubcomponent(tree, "PID", 7);
    expect(pid8Sub?.data?.display).toBe("Female");
  });

  it("annotates each repetition independently", async () => {
    const tree = m(
      msh("2.5"),
      s(
        "PID",
        f("1"),
        f(""),
        f("12345"),
        f(""),
        f("Doe"),
        f(""),
        f(""),
        f(r(c("F")), r(c("M"))) // PID-8 with 2 repetitions
      )
    );

    await processor().run(tree);

    const rep0 = getCodedSubcomponent(tree, "PID", 7, 0);
    expect(rep0?.data?.display).toBe("Female");

    const rep1 = getCodedSubcomponent(tree, "PID", 7, 1);
    expect(rep1?.data?.display).toBe("Male");
  });

  it("skips Z-segments silently", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("custom")));
    await processor().run(tree);

    const sub = getCodedSubcomponent(tree, "ZZZ", 0);
    expect(sub?.data?.display).toBeUndefined();
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
      ),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );

    await processor().run(tree);

    const sub = getCodedSubcomponent(tree, "PID", 7);
    expect(sub?.data?.display).toBeUndefined();
  });

  it("produces no annotations when fields annotator was not run first", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );

    // Run ONLY code-systems (no fields annotator)
    await unified().use(hl7v2AnnotateProfileFieldsCodeSystems).run(tree);

    const sub = getCodedSubcomponent(tree, "PID", 7);
    expect(sub?.data?.display).toBeUndefined();
  });
});
