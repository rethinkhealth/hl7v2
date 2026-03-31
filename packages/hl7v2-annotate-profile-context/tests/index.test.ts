import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateProfileContext } from "../src";

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

describe("hl7v2AnnotateProfileContext", () => {
  it("populates file.data with version, fields, datatypes, and tables", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe^John"))
    );
    const file = new VFile();

    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);

    expect(file.data.profile?.version).toBe("2.5");
    expect(file.data.profile?.fields).toBeInstanceOf(Map);
    expect(file.data.profile?.datatypes).toBeInstanceOf(Map);
    expect(file.data.profile?.tables).toBeInstanceOf(Map);
  });

  it("loads field definitions for all segments in the tree", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe^John"))
    );
    const file = new VFile();

    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);

    expect(file.data.profile?.fields!.has("MSH")).toBe(true);
    expect(file.data.profile?.fields!.has("PID")).toBe(true);
    // Verify field definitions have expected structure
    const mshDef = file.data.profile?.fields!.get("MSH")!;
    expect(mshDef.segmentId).toBe("MSH");
    expect(mshDef.bySequence.has(9)).toBe(true); // MSH-9 (Message Type)
  });

  it("loads datatype definitions including cascaded component datatypes", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe^John"))
    );
    const file = new VFile();

    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);

    // MSH-9 has datatype MSG which is composite
    expect(file.data.profile?.datatypes!.has("MSG")).toBe(true);
    const msgDef = file.data.profile?.datatypes!.get("MSG")!;
    expect(msgDef.kind).toBe("composite");

    // MSG has component datatypes that should be cascaded
    // MSG.1 is CM_MSG which is a string type — verify cascade loaded it
    for (const comp of msgDef.componentsBySequence.values()) {
      expect(file.data.profile?.datatypes!.has(comp.datatypeId)).toBe(true);
    }
  });

  it("loads table definitions with normalized IDs", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe^John"))
    );
    const file = new VFile();

    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);

    // Tables should use normalized IDs (no "HL7" prefix)
    for (const [key] of file.data.profile!.tables) {
      expect(key).not.toMatch(/^HL7/);
    }
    // At least some tables should be loaded (PID and MSH have table references)
    expect(file.data.profile?.tables!.size).toBeGreaterThan(0);
  });

  it("silently omits unknown segments (Z-segments)", async () => {
    const tree = m(msh("2.5"), s("ZZZ", f("custom1"), f("custom2")));
    const file = new VFile();

    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);

    expect(file.data.profile?.fields!.has("MSH")).toBe(true);
    expect(file.data.profile?.fields!.has("ZZZ")).toBe(false);
    // No VFile messages emitted
    expect(file.messages).toHaveLength(0);
  });

  it("returns early when MSH-12.1 is missing", async () => {
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
        // No MSH-12
      )
    );
    const file = new VFile();

    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);

    expect(file.data.profile).toBeUndefined();
  });

  it("is idempotent — running twice produces identical results", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe^John"))
    );
    const file = new VFile();

    const processor = unified().use(hl7v2AnnotateProfileContext);
    await processor.run(tree, file);

    const firstProfile = file.data.profile;

    // Run again — should return early due to idempotency check
    await processor.run(tree, file);

    // Same object reference (not reloaded)
    expect(file.data.profile).toBe(firstProfile);
  });

  it("emits no VFile messages", async () => {
    const tree = m(
      msh("2.5"),
      s("PID", f("1"), f(""), f("12345"), f(""), f("Doe^John"))
    );
    const file = new VFile();

    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("handles empty root with only MSH", async () => {
    const tree = m(msh("2.5"));
    const file = new VFile();

    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);

    expect(file.data.profile!.version).toBe("2.5");
    expect(file.data.profile!.fields.has("MSH")).toBe(true);
    expect(file.data.profile!.fields.size).toBe(1);
  });
});
