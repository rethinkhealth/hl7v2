import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Field, Root } from "@glion/ast";
import { c, f, m, r, s } from "@glion/builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileFieldsTables } from "../src";

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
    .use(hl7v2AnnotateProfileFieldsTables);
}

function getField(tree: Root, segmentName: string, fieldIndex: number): Field {
  for (const child of tree.children) {
    if (child.type === "segment" && child.name === segmentName) {
      return child.children[fieldIndex]!;
    }
  }
  throw new Error(`Segment ${segmentName} not found`);
}

describe("hl7v2AnnotateProfileFieldsTables", () => {
  it("annotates the coded component with its entry in the field's table", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );

    await processor().run(tree);

    expect(
      getField(tree, "PID", 7).children[0]?.children[0]?.data?.tableValue
    ).toEqual({
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
    expect(pid8.children[0]?.children[0]?.data?.tableValue?.description).toBe(
      "Female"
    );
    expect(pid8.children[1]?.children[0]?.data?.tableValue?.description).toBe(
      "Male"
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
      getField(v23, "PID", 7).children[0]?.children[0]?.data?.tableValue
    ).toBeUndefined();
    expect(
      getField(v25, "PID", 7).children[0]?.children[0]?.data?.tableValue
    ).toEqual({
      description: "Ambiguous",
      value: "A",
    });
  });

  it("reads the code of a CWE field from its first component", async () => {
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
        f(c("F"), c("Female"), c("HL70001"))
      )
    );

    await processor().run(tree);

    expect(
      getField(tree, "PID", 7).children[0]?.children[0]?.data?.tableValue?.value
    ).toBe("F");
  });

  it("reads the code from the component that prints the field's table", async () => {
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

    expect(
      getField(tree, "PID", 4).children[0]?.children[6]?.data?.tableValue
    ).toEqual({
      description: "Maiden Name",
      value: "M",
    });
  });

  it("annotates every component that prints the field's table", async () => {
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

  it("removes the entry of a value that no longer matches the table", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );
    const proc = processor();
    await proc.run(tree);
    const sub = getField(tree, "PID", 7).children[0]?.children[0]?.children[0];
    if (sub) {
      sub.value = "INVALID";
    }

    await proc.run(tree);

    expect(
      getField(tree, "PID", 7).children[0]?.children[0]?.data?.tableValue
    ).toBeUndefined();
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
      getField(tree, "PID", 7).children[0]?.children[0]?.data?.tableValue
    ).toBeUndefined();
  });

  it("leaves an empty field unannotated", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f(""))
    );

    await processor().run(tree);

    expect(
      getField(tree, "PID", 7).children[0]?.children[0]?.data?.tableValue
    ).toBeUndefined();
  });

  it("skips Z-segments", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("F")));

    await processor().run(tree);

    expect(
      getField(tree, "ZZZ", 0).children[0]?.children[0]?.data?.tableValue
    ).toBeUndefined();
  });

  it("returns the tree unchanged without a profile context", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );
    const before = JSON.stringify(tree);

    await unified().use(hl7v2AnnotateProfileFieldsTables).run(tree);

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
