import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintFieldMaxLength from "../src";

const msh = (version: string) =>
  `MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|${version}`;

const lint = async (...segments: string[]) => {
  const file = new VFile();
  await unified()
    .use(hl7v2AnnotateProfileContext)
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2LintFieldMaxLength)
    .run(parseHL7v2(segments.join("\r")), file);
  return file.messages;
};

// v2.5 PID-1 (Set ID - PID) allows 4 characters, PID-2 (Patient ID) 20.
describe("hl7v2LintFieldMaxLength", () => {
  it("accepts a value shorter than the maximum length", async () => {
    expect(await lint(msh("2.5"), "PID|123")).toEqual([]);
  });

  it("accepts a value exactly as long as the maximum length", async () => {
    expect(await lint(msh("2.5"), "PID|1234")).toEqual([]);
  });

  it("reports a value one character longer than the maximum length", async () => {
    const [message, ...rest] = await lint(msh("2.5"), "PID|12345");

    expect(rest).toEqual([]);
    expect(message?.message).toBe(
      "Field `PID-1` (Set ID - PID) is 5 characters long; it allows at most 4 characters."
    );
    expect(message?.actual).toBe("5");
    expect(message?.ruleId).toBe("field-max-length");
    expect(message?.source).toBe("hl7v2-lint");
  });

  it("accepts an empty field", async () => {
    expect(await lint(msh("2.5"), "PID|")).toEqual([]);
  });

  describe("a composite value", () => {
    it("counts the characters of its components, not the delimiters", async () => {
      // 12 + 8 + 2 = 22 characters, 25 with the delimiters
      const messages = await lint(
        msh("2.5"),
        "PID|1|ID1234567890^^^HOSPITAL^MR"
      );

      expect(messages.map((message) => message.message)).toEqual([
        "Field `PID-2` (Patient ID) is 22 characters long; it allows at most 20 characters.",
      ]);
    });

    it("accepts a value within the limit once its delimiters are left out", async () => {
      // 10 + 8 + 2 = 20 characters, 23 with the delimiters
      expect(await lint(msh("2.5"), "PID|1|ID12345678^^^HOSPITAL^MR")).toEqual(
        []
      );
    });
  });

  describe("a repeating field", () => {
    it("measures each repetition on its own", async () => {
      // v2.5 PID-3 (Patient Identifier List) allows 250 characters per repetition
      const repetition = "A".repeat(200);

      expect(
        await lint(msh("2.5"), `PID|1||${repetition}~${repetition}`)
      ).toEqual([]);
    });

    it("reports only the repetition over the limit, and places the report on it", async () => {
      const [message, ...rest] = await lint(msh("2.5"), "PID|123~12345");

      expect(rest).toEqual([]);
      expect(message?.message).toBe(
        "Field `PID-1` (Set ID - PID) is 5 characters long; it allows at most 4 characters."
      );
      expect(message?.place).toEqual({
        end: { column: 14, line: 2, offset: 82 },
        start: { column: 9, line: 2, offset: 77 },
      });
      expect(message?.ancestors?.map((node) => node.type)).toEqual([
        "root",
        "segment",
        "field",
        "field-repetition",
      ]);
    });
  });

  it("skips a segment without a profile", async () => {
    expect(await lint(msh("2.5"), `ZPD|${"X".repeat(500)}`)).toEqual([]);
  });

  it("reports nothing when the message has no version", async () => {
    expect(await lint(msh(""), "PID|12345")).toEqual([]);
  });

  // https://github.com/rethinkhealth/hl7v2/issues/489
  it("reads the version from a composite MSH-12", async () => {
    const messages = await lint(
      "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5^USA^ISO",
      "PID|12345"
    );

    expect(messages.map((message) => message.message)).toEqual([
      "Field `PID-1` (Set ID - PID) is 5 characters long; it allows at most 4 characters.",
    ]);
  });
});
