import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintFieldRepetition from "../src";

const msh = (version: string) =>
  `MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|${version}`;

const lint = async (...segments: string[]) => {
  const file = new VFile();
  await unified()
    .use(hl7v2AnnotateProfileContext)
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2LintFieldRepetition)
    .run(parseHL7v2(segments.join("\r")), file);
  return file.messages;
};

/**
 * A v2.6 OBR segment whose OBR-17 (Order Callback Phone Number, at most 2
 * repetitions) is `value`.
 */
const obr17 = (value: string) => `OBR${"|".repeat(17)}${value}`;

describe("hl7v2LintFieldRepetition", () => {
  describe("a field that does not repeat", () => {
    it("accepts one value", async () => {
      // v2.5 PID-7 (Date/Time of Birth) does not repeat
      expect(
        await lint(msh("2.5"), "PID|1||12345||DOE^JOHN||19800101")
      ).toEqual([]);
    });

    it("reports two repetitions", async () => {
      const [message, ...rest] = await lint(
        msh("2.5"),
        "PID|1||12345||DOE^JOHN||19800101~19800102"
      );

      expect(rest).toEqual([]);
      expect(message?.message).toBe(
        "Field `PID-7` (Date/Time of Birth) has 2 repetitions; it allows at most 1 repetition."
      );
      expect(message?.actual).toBe("2");
      expect(message?.ruleId).toBe("field-repetition");
      expect(message?.source).toBe("hl7v2-lint");
    });

    it("accepts an empty field", async () => {
      expect(await lint(msh("2.5"), "PID|1||12345||DOE^JOHN||")).toEqual([]);
    });
  });

  describe("a field with a repetition limit", () => {
    it("accepts as many repetitions as the limit", async () => {
      expect(await lint(msh("2.6"), obr17("555-0001~555-0002"))).toEqual([]);
    });

    it("reports one repetition more than the limit", async () => {
      const messages = await lint(
        msh("2.6"),
        obr17("555-0001~555-0002~555-0003")
      );

      expect(messages.map((message) => message.message)).toEqual([
        "Field `OBR-17` (Order Callback Phone Number) has 3 repetitions; it allows at most 2 repetitions.",
      ]);
    });
  });

  it("accepts any number of repetitions in a field without a limit", async () => {
    // v2.5 PID-3 (Patient Identifier List) repeats without a limit
    expect(await lint(msh("2.5"), "PID|1||A1~A2~A3~A4~A5||DOE^JOHN")).toEqual(
      []
    );
  });

  it("reports each field with too many repetitions, in every segment", async () => {
    const messages = await lint(
      msh("2.5"),
      "PID|1~2||12345||DOE^JOHN||19800101~19800102",
      "OBX|1~2"
    );

    expect(messages.map((message) => message.message)).toEqual([
      "Field `PID-1` (Set ID - PID) has 2 repetitions; it allows at most 1 repetition.",
      "Field `PID-7` (Date/Time of Birth) has 2 repetitions; it allows at most 1 repetition.",
      "Field `OBX-1` (Set ID - OBX) has 2 repetitions; it allows at most 1 repetition.",
    ]);
  });

  it("places the report on the field", async () => {
    const [message] = await lint(msh("2.5"), "PID|1~2");

    expect(message?.place).toEqual({
      end: { column: 8, line: 2, offset: 76 },
      start: { column: 5, line: 2, offset: 73 },
    });
    expect(message?.ancestors?.map((node) => node.type)).toEqual([
      "root",
      "segment",
      "field",
    ]);
  });

  it("skips a segment without a profile", async () => {
    expect(await lint(msh("2.5"), "ZPD|a~b")).toEqual([]);
  });

  it("reports nothing when the message has no version", async () => {
    expect(await lint(msh(""), "PID|1~2")).toEqual([]);
  });

  // https://github.com/rethinkhealth/hl7v2/issues/489
  it("reads the version from a composite MSH-12", async () => {
    const messages = await lint(
      "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01^ADT_A01|MSG001|P|2.5^USA^ISO",
      "PID|1~2"
    );

    expect(messages.map((message) => message.message)).toEqual([
      "Field `PID-1` (Set ID - PID) has 2 repetitions; it allows at most 1 repetition.",
    ]);
  });
});
