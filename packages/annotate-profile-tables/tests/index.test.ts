import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Field, Root } from "@glion/ast";
import { c, f, m, r, s } from "@glion/builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileTables } from "../src";

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
    .use(hl7v2AnnotateProfileDatatypes)
    .use(hl7v2AnnotateProfileTables);
}

function getField(tree: Root, segmentName: string, fieldIndex: number): Field {
  for (const child of tree.children) {
    if (child.type === "segment" && child.name === segmentName) {
      return child.children[fieldIndex]!;
    }
  }
  throw new Error(`Segment ${segmentName} not found`);
}

describe("hl7v2AnnotateProfileTables", () => {
  it("annotates the repetition of a primitive field with its table entry", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );

    await processor().run(tree);

    expect(getField(tree, "PID", 7).children[0]?.data?.tableValue).toEqual({
      description: "Female",
      value: "F",
    });
  });

  it("annotates each repetition with its own entry", async () => {
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
        f(r(c("F")), r(c("M")))
      )
    );

    await processor().run(tree);

    const pid8 = getField(tree, "PID", 7);
    expect(pid8.children[0]?.data?.tableValue?.description).toBe("Female");
    expect(pid8.children[1]?.data?.tableValue?.description).toBe("Male");
  });

  it("reads the value of a primitive field from its first component", async () => {
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
        f(c("F"), c("Female"))
      )
    );

    await processor().run(tree);

    expect(getField(tree, "PID", 7).children[0]?.data?.tableValue?.value).toBe(
      "F"
    );
  });

  it("reads the table of the message's HL7v2 version", async () => {
    const v23 = m(
      msh("2.3"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("A"))
    );
    const v25 = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("A"))
    );

    await processor().run(v23);
    await processor().run(v25);

    expect(
      getField(v23, "PID", 7).children[0]?.data?.tableValue
    ).toBeUndefined();
    expect(getField(v25, "PID", 7).children[0]?.data?.tableValue).toEqual({
      description: "Ambiguous",
      value: "A",
    });
  });

  it("annotates a primitive component with its own table entry", async () => {
    const tree = m(
      msh("2.6"),
      s(
        "PID",
        f("1"),
        f(""),
        f("12345"),
        f(""),
        f(c("L"), c("John"), c(""), c(""), c(""), c(""), c("M"))
      )
    );

    await processor().run(tree);

    const xpn = getField(tree, "PID", 4).children[0];
    expect(xpn?.children[6]?.data?.tableValue).toEqual({
      description: "Maiden Name",
      value: "M",
    });
    expect(xpn?.children[0]?.children[0]?.data?.tableValue).toBeUndefined();
  });

  it("annotates every primitive component that has a table", async () => {
    const tree = m(
      msh("2.5"),
      s(
        "LDP",
        f("1"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(c("MON"), c("FRI"), c("0800"), c("1700"))
      )
    );

    await processor().run(tree);

    const vh = getField(tree, "LDP", 9).children[0];
    expect(vh?.children[0]?.data?.tableValue?.value).toBe("MON");
    expect(vh?.children[1]?.data?.tableValue?.value).toBe("FRI");
    expect(vh?.children[2]?.data?.tableValue).toBeUndefined();
  });

  it("annotates a primitive subcomponent with its own table entry", async () => {
    const tree = m(
      msh("2.5.1"),
      s(
        "PV1",
        f("1"),
        f("I"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(
          c("123"),
          c("Smith"),
          c(""),
          c(""),
          c(""),
          c(""),
          c(""),
          c(""),
          c("", "1.2.3", "ISO")
        )
      )
    );

    await processor().run(tree);

    const xcn9 = getField(tree, "PV1", 6).children[0]?.children[8];
    expect(xcn9?.children[2]?.data?.tableValue).toEqual({
      description: "An International Standards Organization Object Identifier",
      value: "ISO",
    });
  });

  it("does not annotate a coded composite field", async () => {
    const tree = m(
      msh("2.7"),
      s(
        "PID",
        f("1"),
        f(""),
        f("12345"),
        f(""),
        f("Doe"),
        f(""),
        f(""),
        f(c("F"), c("Female"), c("LN"))
      )
    );

    await processor().run(tree);

    const cwe = getField(tree, "PID", 7).children[0];
    expect(cwe?.data?.tableValue).toBeUndefined();
    expect(cwe?.children[0]?.data?.tableValue).toBeUndefined();
    expect(cwe?.children[2]?.data?.tableValue?.value).toBe("LN");
  });

  it("leaves a value that is not in the table unannotated", async () => {
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

    expect(
      getField(tree, "PID", 7).children[0]?.data?.tableValue
    ).toBeUndefined();
  });

  it("leaves an empty field unannotated", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f(""))
    );

    await processor().run(tree);

    expect(
      getField(tree, "PID", 7).children[0]?.data?.tableValue
    ).toBeUndefined();
  });

  it("skips Z-segments", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("F")));

    await processor().run(tree);

    expect(
      getField(tree, "ZZZ", 0).children[0]?.data?.tableValue
    ).toBeUndefined();
  });

  it("returns the tree unchanged without a profile context", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );
    const before = JSON.stringify(tree);

    await unified().use(hl7v2AnnotateProfileTables).run(tree);

    expect(JSON.stringify(tree)).toBe(before);
  });

  it("produces identical results when run twice", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );
    const proc = processor();

    await proc.run(tree);
    const first = JSON.stringify(tree);
    await proc.run(tree);

    expect(JSON.stringify(tree)).toBe(first);
  });
});
