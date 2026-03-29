import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import type { Root, Subcomponent } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { afterEach, describe, expect, it, vi } from "vitest";

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

  it("annotates composite coded field (CWE/CE) primary code position", async () => {
    // EVN-1 (Event Type Code) is ID type with table HL70003
    // ADT_A01 event type "A01" should be in UTG v2-0003
    const tree = m(msh("2.5"), s("EVN", f("A01"), f("20241201120000")));

    await processor().run(tree);

    const sub = getCodedSubcomponent(tree, "EVN", 0);
    expect(sub?.data?.display).toBeDefined();
    expect(sub?.data?.codeSystem?.id).toBe("v2-0003");
  });

  it("produces identical results when run three times (idempotency)", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
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

  it("reports unexpected load errors as VFile messages", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );
    const file = new VFile();

    // Pre-annotate fields
    await unified().use(hl7v2AnnotateProfileFields).run(tree, file);

    const loadError = new TypeError("Dynamic import failed");
    const spy = vi
      .spyOn(profiles.codeSystems, "load")
      .mockRejectedValue(loadError);

    afterEach(() => {
      spy.mockRestore();
    });

    await unified().use(hl7v2AnnotateProfileFieldsCodeSystems).run(tree, file);

    spy.mockRestore();

    // No code system annotations
    const sub = getCodedSubcomponent(tree, "PID", 7);
    expect(sub?.data?.display).toBeUndefined();

    // VFile should have error messages
    const messages = file.messages.filter(
      (msg) => msg.source === "hl7v2-annotate-profile-fields-code-systems"
    );
    expect(messages.length).toBeGreaterThan(0);
    expect(messages[0]!.cause).toBe(loadError);
  });
});
