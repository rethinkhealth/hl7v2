import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import type { Root } from "@glion/ast";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileFields } from "../src";

const msh = (version: string) =>
  `MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|${version}`;

const annotate = async (...segments: string[]) => {
  const tree = parseHL7v2(segments.join("\r"));
  await unified()
    .use(hl7v2AnnotateProfileContext)
    .use(hl7v2AnnotateProfileFields)
    .run(tree);
  return tree;
};

/** The field at `sequence` of the `index`-th segment named `name`. */
const field = (tree: Root, name: string, sequence: number, index = 0) => {
  const segment = tree.children.filter(
    (node) => node.type === "segment" && node.name === name
  )[index];
  return segment?.type === "segment"
    ? segment.children[sequence - 1]
    : undefined;
};

describe("hl7v2AnnotateProfileFields", () => {
  describe("field data mirrors the segment attribute table", () => {
    it("copies the field's row", async () => {
      const tree = await annotate(msh("2.5"), "PID|1||12345");

      expect(field(tree, "PID", 3)?.data).toStrictEqual({
        datatype: "CX",
        id: "PID-3",
        item: "106",
        maxLength: 250,
        name: "Patient Identifier List",
        optionality: "R",
        repetitions: "unbounded",
        sequence: 3,
      });
    });

    it("annotates a withdrawn field with its row, which gives no datatype", async () => {
      // v2.6 DG1-2 (Diagnosis Coding Method) is withdrawn
      const tree = await annotate(msh("2.6"), "DG1|1|I9");

      expect(field(tree, "DG1", 2)?.data).toStrictEqual({
        id: "DG1-2",
        item: "376",
        name: "Diagnosis Coding Method",
        optionality: "W",
        repetitions: 1,
        sequence: 2,
      });
    });

    it("leaves out the optionality of a field whose row gives none", async () => {
      // v2.5.1 OBX-20 is reserved for harmonization with v2.6
      const tree = await annotate(msh("2.5.1"), `OBX${"|".repeat(20)}X`);

      expect(field(tree, "OBX", 20)?.data).toStrictEqual({
        datatype: "var",
        id: "OBX-20",
        item: "9999",
        name: "Reserved for harmonization with V2.6",
        repetitions: 1,
        sequence: 20,
      });
    });
  });

  it("annotates an empty field", async () => {
    const tree = await annotate(msh("2.5"), "PID||");

    expect(field(tree, "PID", 1)?.data?.id).toBe("PID-1");
  });

  it("annotates the fields of every segment with the same name", async () => {
    const tree = await annotate(msh("2.5"), "OBX|1|NM", "OBX|2|ST");

    expect(field(tree, "OBX", 2, 0)?.data?.id).toBe("OBX-2");
    expect(field(tree, "OBX", 2, 1)?.data?.id).toBe("OBX-2");
  });

  it("fills the data object already on a field, and does not replace it", async () => {
    const tree = parseHL7v2(`${msh("2.5")}\rPID|1`);
    const pid1 = field(tree, "PID", 1);
    const data = {};
    if (pid1) {
      pid1.data = data;
    }
    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .run(tree);

    expect(pid1?.data).toBe(data);
    expect(data).toMatchObject({ id: "PID-1", name: "Set ID - PID" });
  });

  it("does not annotate a field past the last one the segment defines", async () => {
    // v2.5 PID defines 39 fields
    const tree = await annotate(msh("2.5"), `PID${"|".repeat(40)}X`);

    expect(field(tree, "PID", 39)?.data?.id).toBe("PID-39");
    expect(field(tree, "PID", 40)?.data).toBeUndefined();
  });

  it("does not annotate a segment without a profile", async () => {
    const tree = await annotate(msh("2.5"), "ZPD|custom");

    expect(field(tree, "ZPD", 1)?.data).toBeUndefined();
  });

  it("annotates nothing when the message has no version", async () => {
    const tree = await annotate(msh(""), "PID|1");

    expect(field(tree, "PID", 1)?.data).toBeUndefined();
  });

  it("annotates nothing without the profile context", async () => {
    const tree = parseHL7v2(`${msh("2.5")}\rPID|1`);
    await unified().use(hl7v2AnnotateProfileFields).run(tree);

    expect(field(tree, "PID", 1)?.data).toBeUndefined();
  });
});
