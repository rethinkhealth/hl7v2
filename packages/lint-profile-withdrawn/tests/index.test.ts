import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileDatatypes } from "@glion/annotate-profile-datatypes";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import type { Root } from "@glion/ast";
import { f, g, m, s } from "@glion/builder";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintWithdrawn from "../src";

const msh = (version: string) =>
  `MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|${version}`;

const run = async (tree: Root) => {
  const file = new VFile();
  await unified()
    .use(hl7v2AnnotateProfileContext)
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2AnnotateProfileDatatypes)
    .use(hl7v2LintWithdrawn)
    .run(tree, file);
  return file.messages;
};

const lint = (...segments: string[]) => run(parseHL7v2(segments.join("\r")));

describe("hl7v2LintWithdrawn", () => {
  describe("withdrawn fields", () => {
    it("reports a withdrawn field that has a value", async () => {
      // v2.7 AL1-6 (Identification Date) is withdrawn
      const [message, ...rest] = await lint(
        msh("2.7"),
        "AL1|1||PENICILLIN|||20240101"
      );

      expect(rest).toEqual([]);
      expect(message?.message).toBe(
        "`AL1-6` (Identification Date) has a value; it is withdrawn in v2.7 and must be empty."
      );
      expect(message?.actual).toBe("20240101");
      expect(message?.expected).toEqual(["", '""']);
      expect(message?.ruleId).toBe("withdrawn");
      expect(message?.source).toBe("hl7v2-lint");
    });

    it("accepts an empty withdrawn field", async () => {
      expect(await lint(msh("2.7"), "AL1|1||PENICILLIN|||")).toEqual([]);
    });

    it("accepts a withdrawn field absent from the end of its segment", async () => {
      expect(await lint(msh("2.7"), "AL1|1||PENICILLIN")).toEqual([]);
    });

    it("accepts the explicit null in a withdrawn field", async () => {
      expect(await lint(msh("2.7"), 'AL1|1||PENICILLIN|||""')).toEqual([]);
    });

    it("reports a withdrawn field once when any of its repetitions has a value", async () => {
      const messages = await lint(
        msh("2.7"),
        "AL1|1||PENICILLIN|||~20240101~20240102"
      );

      expect(messages.map((message) => message.actual)).toEqual([
        "~20240101~20240102",
      ]);
    });

    it("reports a withdrawn field when only a later component has a value", async () => {
      // v2.6 DG1-2 (Diagnosis Coding Method) is withdrawn
      const messages = await lint(msh("2.6"), "DG1|1|^I9|250.00");

      expect(messages.map((message) => message.message)).toEqual([
        "`DG1-2` (Diagnosis Coding Method) has a value; it is withdrawn in v2.6 and must be empty.",
      ]);
    });

    it("accepts a value in the same field in a version that does not withdraw it", async () => {
      // v2.5.1 DG1-2 is required
      expect(await lint(msh("2.5.1"), "DG1|1|I9|250.00")).toEqual([]);
    });

    it("reports a withdrawn field in a segment inside a segment group", async () => {
      const messages = await run(
        m(
          s(
            "MSH",
            f("|"),
            f("^~\\&"),
            ...Array.from({ length: 9 }, () => f("")),
            f("2.6")
          ),
          g("DIAGNOSIS", s("DG1", f("1"), f("I9"), f("250.00")))
        )
      );

      expect(messages.map((message) => message.message)).toEqual([
        "`DG1-2` (Diagnosis Coding Method) has a value; it is withdrawn in v2.6 and must be empty.",
      ]);
    });

    it("places the report on the withdrawn field", async () => {
      const [message] = await lint(msh("2.6"), "DG1|1|I9|250.00");

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
  });

  describe("withdrawn components", () => {
    it("reports a withdrawn component that has a value", async () => {
      // v2.7 XPN.6 (Degree) is withdrawn
      const messages = await lint(msh("2.7"), "PID|1||12345||DOE^JOHN^^^^MD");

      expect(
        messages.map((message) => [message.message, message.actual])
      ).toEqual([
        [
          "`XPN.6` (Degree (e.g., MD)) has a value; it is withdrawn in v2.7 and must be empty.",
          "MD",
        ],
      ]);
    });

    it("reports a withdrawn component once in each repetition that values it", async () => {
      const messages = await lint(
        msh("2.7"),
        "PID|1||12345||DOE^JOHN^^^^MD~ROE^JANE~POE^JIM^^^^PHD"
      );

      expect(messages.map((message) => message.actual)).toEqual(["MD", "PHD"]);
    });

    it("accepts an empty withdrawn component", async () => {
      expect(await lint(msh("2.7"), "PID|1||12345||DOE^JOHN^^^^^L")).toEqual(
        []
      );
    });
  });

  it("does not report a backward-compatible field", async () => {
    // v2.5.1 DG1-4 (Diagnosis Description) is backward compatible
    expect(await lint(msh("2.5.1"), "DG1|1|I9|250.00|DIABETES")).toEqual([]);
  });

  it("skips a segment without a profile", async () => {
    expect(await lint(msh("2.7"), "ZPD|1|X")).toEqual([]);
  });

  it("reports nothing when the message has no version", async () => {
    expect(
      await lint(
        "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|",
        "AL1|1||PENICILLIN|||20240101"
      )
    ).toEqual([]);
  });
});
