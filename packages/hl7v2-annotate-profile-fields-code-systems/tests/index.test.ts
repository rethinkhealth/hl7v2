import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import type { Field, Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
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

function getField(tree: Root, segmentName: string, fieldIndex: number): Field {
  for (const child of tree.children) {
    if (child.type === "segment" && child.name === segmentName) {
      return child.children[fieldIndex]!;
    }
  }
  throw new Error(`Segment ${segmentName} not found`);
}

describe("hl7v2AnnotateProfileFieldsCodeSystems", () => {
  it("annotates PID-8 (Administrative Sex) with code system", async () => {
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

    const pid8 = getField(tree, "PID", 7);
    expect(pid8.data?.codeSystem?.id).toBe("v2-0001");
    expect(pid8.data?.codeSystem?.name).toBe("AdministrativeSex");
    expect(pid8.data?.codeSystem?.codes.get("F")).toEqual({
      code: "F",
      display: "Female",
      status: "active",
    });
    expect(pid8.data?.codeSystem?.codes.get("M")).toEqual({
      code: "M",
      display: "Male",
      status: "active",
    });
  });

  it("provides full codes map for any value lookup", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("M"))
    );

    await processor().run(tree);

    const pid8 = getField(tree, "PID", 7);
    // Consumer can resolve any code from the map
    const entry = pid8.data?.codeSystem?.codes.get("M");
    expect(entry?.display).toBe("Male");
    expect(entry?.status).toBe("active");
  });

  it("skips fields without table reference", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1")) // PID-1 (SI) has no table
    );

    await processor().run(tree);

    const pid1 = getField(tree, "PID", 0);
    expect(pid1.data?.codeSystem).toBeUndefined();
  });

  it("annotates EVN-1 (Event Type Code) with code system", async () => {
    const tree = m(msh("2.5"), s("EVN", f("A01"), f("20241201120000")));

    await processor().run(tree);

    const evn1 = getField(tree, "EVN", 0);
    expect(evn1.data?.codeSystem?.id).toBe("v2-0003");
    expect(evn1.data?.codeSystem?.codes.has("A01")).toBe(true);
  });

  it("skips Z-segments silently", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("custom")));
    await processor().run(tree);

    const zzz1 = getField(tree, "ZZZ", 0);
    expect(zzz1.data?.codeSystem).toBeUndefined();
  });

  it("returns tree unchanged when MSH-12 is missing", async () => {
    // Without fields annotator running (no MSH-12 → fields annotator skips
    // → no table refs → code-systems skips)
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

    const pid8 = getField(tree, "PID", 7);
    expect(pid8.data?.codeSystem).toBeUndefined();
  });

  it("produces no annotations when fields annotator was not run first", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );

    await unified().use(hl7v2AnnotateProfileFieldsCodeSystems).run(tree);

    const pid8 = getField(tree, "PID", 7);
    expect(pid8.data?.codeSystem).toBeUndefined();
  });

  it("produces identical results when run three times (idempotency)", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );

    const proc = processor();

    await proc.run(tree);
    const firstRun = JSON.stringify(tree, mapReplacer);

    await proc.run(tree);
    const secondRun = JSON.stringify(tree, mapReplacer);

    await proc.run(tree);
    const thirdRun = JSON.stringify(tree, mapReplacer);

    expect(secondRun).toBe(firstRun);
    expect(thirdRun).toBe(firstRun);
  });

  it("reports unexpected load errors as VFile messages", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe"), f(""), f(""), f("F"))
    );
    const file = new VFile();

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

    const pid8 = getField(tree, "PID", 7);
    expect(pid8.data?.codeSystem).toBeUndefined();

    const messages = file.messages.filter(
      (msg) => msg.source === "hl7v2-annotate-profile-fields-code-systems"
    );
    expect(messages.length).toBeGreaterThan(0);
    expect(messages[0]!.cause).toBe(loadError);
  });
});

/** JSON.stringify replacer that handles Map objects. */
function mapReplacer(_key: string, value: unknown): unknown {
  if (value instanceof Map) {
    return Object.fromEntries(value);
  }
  return value;
}
