import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { c, f, g, m, r, s } from "@glion/builder";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintWithdrawn from "../src";

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

const lint = async (tree: ReturnType<typeof m>) => {
  const file = new VFile();
  await unified()
    .use(hl7v2AnnotateProfileContext)
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2AnnotateProfileDatatypes)
    .use(hl7v2LintWithdrawn)
    .run(tree, file);
  return file.messages.filter((msg) => msg.ruleId === "withdrawn");
};

describe("hl7v2LintWithdrawn", () => {
  it("reports a value in a field HL7v2 has withdrawn", async () => {
    // v2.7 AL1-6 (Identification Date) is withdrawn
    const messages = await lint(
      m(
        msh("2.7"),
        s("AL1", f("1"), f(""), f("PENICILLIN"), f(""), f(""), f("20240101"))
      )
    );

    expect(messages).toHaveLength(1);
    expect(messages[0]?.message).toBe(
      "`AL1-6` (Identification Date) has a value; it is withdrawn in v2.7 and must be empty."
    );
    expect(messages[0]?.actual).toBe("20240101");
    expect(messages[0]?.source).toBe("hl7v2-lint");
  });

  it("reports a withdrawn field valued only in a later repetition", async () => {
    const messages = await lint(
      m(
        msh("2.7"),
        s(
          "AL1",
          f("1"),
          f(""),
          f("PENICILLIN"),
          f(""),
          f(""),
          f(r(), r("20240101"))
        )
      )
    );

    expect(messages.map((msg) => msg.actual)).toEqual(["~20240101"]);
  });

  it("reports a withdrawn field valued only in a later component", async () => {
    const messages = await lint(
      m(msh("2.6"), s("DG1", f("1"), f(c(""), c("I9")), f("250.00")))
    );

    expect(messages.map((msg) => msg.actual)).toEqual(["^I9"]);
  });

  it("reports a withdrawn field in a segment inside a group", async () => {
    const messages = await lint(
      m(msh("2.6"), g("DIAGNOSIS", s("DG1", f("1"), f("I9"), f("250.00"))))
    );

    expect(messages.map((msg) => msg.message)).toEqual([
      "`DG1-2` (Diagnosis Coding Method) has a value; it is withdrawn in v2.6 and must be empty.",
    ]);
  });

  it("places the report on the withdrawn field", async () => {
    const file = new VFile();
    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2AnnotateProfileFields)
      .use(hl7v2AnnotateProfileDatatypes)
      .use(hl7v2LintWithdrawn)
      .run(
        parseHL7v2(
          [
            "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.6",
            "DG1|1|I9|250.00",
          ].join("\r")
        ),
        file
      );
    const [message] = file.messages;

    expect(message?.place).toEqual({
      end: { column: 9, line: 2, offset: 77 },
      start: { column: 7, line: 2, offset: 75 },
    });
    expect(message?.ancestors?.map((node) => node.type)).toEqual([
      "root",
      "segment",
      "field",
    ]);
  });

  it("accepts the explicit null in a withdrawn field", async () => {
    const messages = await lint(
      m(msh("2.6"), s("DG1", f("1"), f('""'), f("250.00")))
    );

    expect(messages).toEqual([]);
  });

  it("reports a withdrawn field before the last field of its segment", async () => {
    // v2.6 DG1-2 (Diagnosis Coding Method) is withdrawn
    const messages = await lint(
      m(msh("2.6"), s("DG1", f("1"), f("I9"), f("250.00")))
    );

    expect(messages.map((msg) => msg.message)).toEqual([
      "`DG1-2` (Diagnosis Coding Method) has a value; it is withdrawn in v2.6 and must be empty.",
    ]);
  });

  it("accepts an empty withdrawn field", async () => {
    const messages = await lint(
      m(msh("2.6"), s("DG1", f("1"), f(""), f("250.00")))
    );

    expect(messages).toEqual([]);
  });

  it("accepts a value in a field that is not withdrawn", async () => {
    // v2.5.1 DG1-2 is required, not withdrawn
    const messages = await lint(
      m(msh("2.5.1"), s("DG1", f("1"), f("I9"), f("250.00")))
    );

    expect(messages).toEqual([]);
  });

  it("does not report a backward-compatible field", async () => {
    // v2.5.1 DG1-4 (Diagnosis Description) is backward compatible
    const messages = await lint(
      m(msh("2.5.1"), s("DG1", f("1"), f("I9"), f("250.00"), f("DIABETES")))
    );

    expect(messages).toEqual([]);
  });

  it("skips a segment without a profile", async () => {
    const messages = await lint(m(msh("2.7"), s("ZPD", f("1"), f("X"))));

    expect(messages).toEqual([]);
  });
});
