import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { c, f, m, r, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintExtraComponents from "../src";

/** Complete MSH with all required fields — uses v2.7.1 */
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

describe("hl7v2LintExtraComponents", () => {
  it("no warnings when components are within bounds", async () => {
    // MSH-9 is MSG with 3 components in v2.7.1 — all 3 present, none extra
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
        f(c("ADT"), c("A01"), c("ADT_A01")), // exactly 3 components
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "extra-components"
    );
    expect(errors).toHaveLength(0);
  });

  it("reports a repetition with more components than its datatype defines, once", async () => {
    // MSH-9 is MSG with 3 defined components — adding a 4th and 5th
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
        f(c("ADT"), c("A01"), c("ADT_A01"), c("EXTRA1"), c("EXTRA2")),
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "extra-components"
    );
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toBe(
      "The field repetition has 5 components; its datatype allows at most 3 components."
    );
    expect(errors[0].actual).toBe("5");
    expect(errors[0].source).toBe("hl7v2-lint");
  });

  it("warns when primitive field has extra components", async () => {
    // PID-1 is datatype SI (primitive) — maxComponent is 1
    // Two components means the second is extra
    const tree = m(msh("2.7.1"), s("PID", f(c("1"), c("extra"))));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "extra-components"
    );
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toBe(
      "The field repetition has 2 components; its datatype allows at most 1 component."
    );
  });

  it("no warning when primitive field has single component", async () => {
    // PID-1 is datatype SI (primitive) — single component is fine
    const tree = m(msh("2.7.1"), s("PID", f("1")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "extra-components"
    );
    expect(errors).toHaveLength(0);
  });

  it("skips empty fields", async () => {
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
        f(), // MSH-9 empty
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "extra-components"
    );
    expect(errors).toHaveLength(0);
  });

  it("skips Z-segments silently", async () => {
    const tree = m(
      msh("2.7.1"),
      s("ZPD", f(c("a"), c("b"), c("c"), c("d"), c("e")))
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "extra-components"
    );
    expect(errors).toHaveLength(0);
  });

  it("silently skips when version is missing", async () => {
    const tree = m(s("MSH", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("reports only for the repetition with extra components", async () => {
    // MSH-9 with two reps — first valid (3 components), second has 4
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
        f(
          r(c("ADT"), c("A01"), c("ADT_A01")), // valid
          r(c("ADT"), c("A01"), c("ADT_A01"), c("EXTRA")) // extra component
        ),
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    const errors = file.messages.filter(
      (msg) => msg.ruleId === "extra-components"
    );
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toBe(
      "The field repetition has 4 components; its datatype allows at most 3 components."
    );
  });

  // v2.7.1 PID-2 (Patient ID) is withdrawn; the standard gives it no
  // datatype, so it has no component count to check against.
  it("skips a field the standard gives no datatype", async () => {
    const tree = m(msh("2.7.1"), s("PID", f("1"), f(c("12345"), c("EXTRA"))));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  // `^^` holds three components, none with a value: an empty field.
  it("does not check an empty field, whatever its number of components", async () => {
    const field = f(c(""), c(""), c(""));
    field.data = { datatype: "ST", id: "ZPD-1", name: "Site Code" };
    const tree = m(msh("2.7.1"), s("ZPD", field));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    expect(file.messages).toEqual([]);
  });

  it("does not report a field whose datatype the profile does not define", async () => {
    const field = f(c("a"), c("b"));
    field.data = { datatype: "ZZZ", id: "ZPD-1", name: "Site Code" };
    const tree = m(msh("2.7.1"), s("ZPD", field));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    expect(file.messages).toEqual([]);
  });

  // The rule reads the datatypes from the profile context that
  // `@glion/annotate-profile-context` puts on the file.
  it("reports nothing on a file without a profile", async () => {
    const tree = m(msh("2.7.1"), s("PID", f(c("1"), c("extra"))));
    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .run(tree, new VFile());
    const file = new VFile();

    await unified().use(hl7v2LintExtraComponents).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("points a finding at the repetition with extra components", async () => {
    const valid = r(c("ADT"), c("A01"), c("ADT_A01"));
    valid.position = {
      end: { column: 46, line: 1, offset: 45 },
      start: { column: 35, line: 1, offset: 34 },
    };
    const extra = r(c("ADT"), c("A01"), c("ADT_A01"), c("EXTRA"));
    extra.position = {
      end: { column: 63, line: 1, offset: 62 },
      start: { column: 47, line: 1, offset: 46 },
    };
    const messageType = f(valid, extra);
    messageType.position = {
      end: { column: 63, line: 1, offset: 62 },
      start: { column: 35, line: 1, offset: 34 },
    };
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
        messageType,
        f("MSG001"),
        f("P"),
        f("2.7.1")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2LintExtraComponents)
      .run(tree, file);

    const [message] = file.messages;
    expect(message?.place).toStrictEqual({
      end: { column: 63, line: 1, offset: 62 },
      start: { column: 47, line: 1, offset: 46 },
    });
    expect(message?.ancestors?.map((node) => node.type)).toStrictEqual([
      "root",
      "segment",
      "field",
      "field-repetition",
    ]);
    expect(message?.ancestors?.at(-1)).toBe(extra);
  });
});
