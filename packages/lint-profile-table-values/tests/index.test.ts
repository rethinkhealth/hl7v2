import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { c, f, m, r, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintTableValues from "../src";

/** Complete MSH with all required fields */
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

describe("hl7v2LintTableValues", () => {
  it("no warnings for valid coded value in HL7 table", async () => {
    // EVN-1 (Event Type Code) references HL70003 (type: "hl7")
    // "A01" is a valid code
    const tree = m(msh("2.5"), s("EVN", f("A01")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toEqual([]);
  });

  it("reports invalid coded value in HL7 table", async () => {
    // EVN-1 = "ZZZ" is not a valid code in table 0003
    const tree = m(msh("2.5"), s("EVN", f("ZZZ")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages.map((message) => message.message)).toEqual([
      "Field `EVN-1` (Event Type Code) is `ZZZ`; it must be a code of table `HL70003` (Event type).",
    ]);
    expect(file.messages[0]?.actual).toBe("ZZZ");
    expect(file.messages[0]?.expected).toContain("A01");
    expect(file.messages[0]?.source).toBe("hl7v2-lint");
    expect(file.messages[0]?.url).toBe(
      "https://github.com/rethinkhealth/glion/tree/main/packages/lint-profile-table-values#readme"
    );
  });

  it("skips empty field values", async () => {
    const tree = m(msh("2.5"), s("EVN", f("")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toEqual([]);
  });

  it("skips user-type tables", async () => {
    // PID-8 (Administrative Sex) references HL70001 which is type "user"
    const tree = m(
      msh("2.5"),
      s(
        "PID",
        f(""),
        f(""),
        f("12345"),
        f(""),
        f("Doe"),
        f(""),
        f(""),
        f("INVALID_BUT_USER_TABLE")
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toEqual([]);
  });

  it("skips Z-segments silently", async () => {
    const tree = m(msh("2.5"), s("ZPD", f("INVALID")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("silently skips when version is missing", async () => {
    const tree = m(s("MSH"), s("EVN", f("A01")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("validates each repeated segment independently", async () => {
    // Two EVN segments: first valid, second invalid
    const tree = m(msh("2.5"), s("EVN", f("A01")), s("EVN", f("INVALID")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages.map((message) => message.message)).toEqual([
      "Field `EVN-1` (Event Type Code) is `INVALID`; it must be a code of table `HL70003` (Event type).",
    ]);
  });

  it("names the table and its description", async () => {
    const tree = m(msh("2.5"), s("EVN", f("INVALID")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages.map((message) => message.message)).toEqual([
      "Field `EVN-1` (Event Type Code) is `INVALID`; it must be a code of table `HL70003` (Event type).",
    ]);
  });

  describe("field repetition handling", () => {
    /**
     * Build an OBX segment with OBX-10 (Nature of Abnormal Test, table 0080)
     * set to the given values
     */
    function obxWithAbnormalFlags(...codes: string[]) {
      const reps = codes.map((code) => r(code));
      return s(
        "OBX",
        f("1"), // OBX-1 Set ID
        f("NM"), // OBX-2 Value Type
        f("12345"), // OBX-3 Observation Identifier
        f(""), // OBX-4 Observation Sub-ID
        f("100"), // OBX-5 Observation Value
        f("mg/dL"), // OBX-6 Units
        f("70-110"), // OBX-7 References Range
        f("N"), // OBX-8 Abnormal Flags
        f(""), // OBX-9 Probability
        f(...reps) // OBX-10 Nature of Abnormal Test
      );
    }

    it("no warning for single valid repetition", async () => {
      const tree = m(msh("2.5"), obxWithAbnormalFlags("A"));
      const file = new VFile();

      await unified()
        .use(hl7v2AnnotateProfileContext)
        .use(hl7v2LintTableValues)
        .run(tree, file);

      expect(file.messages).toEqual([]);
    });

    it("warning for single invalid repetition", async () => {
      const tree = m(msh("2.5"), obxWithAbnormalFlags("Z"));
      const file = new VFile();

      await unified()
        .use(hl7v2AnnotateProfileContext)
        .use(hl7v2LintTableValues)
        .run(tree, file);

      expect(file.messages.map((message) => message.message)).toEqual([
        "Field `OBX-10` (Nature of Abnormal Test) is `Z`; it must be a code of table `HL70080` (Nature of Abnormal Testing).",
      ]);
    });

    it("warning for second invalid repetition (A~Z)", async () => {
      const tree = m(msh("2.5"), obxWithAbnormalFlags("A", "Z"));
      const file = new VFile();

      await unified()
        .use(hl7v2AnnotateProfileContext)
        .use(hl7v2LintTableValues)
        .run(tree, file);

      expect(file.messages.map((message) => message.message)).toEqual([
        "Field `OBX-10` (Nature of Abnormal Test) is `Z`; it must be a code of table `HL70080` (Nature of Abnormal Testing).",
      ]);
    });

    it("warning for first invalid repetition (Z~A)", async () => {
      const tree = m(msh("2.5"), obxWithAbnormalFlags("Z", "A"));
      const file = new VFile();

      await unified()
        .use(hl7v2AnnotateProfileContext)
        .use(hl7v2LintTableValues)
        .run(tree, file);

      expect(file.messages.map((message) => message.message)).toEqual([
        "Field `OBX-10` (Nature of Abnormal Test) is `Z`; it must be a code of table `HL70080` (Nature of Abnormal Testing).",
      ]);
    });

    it("warnings for both invalid repetitions (X~Z)", async () => {
      const tree = m(msh("2.5"), obxWithAbnormalFlags("X", "Z"));
      const file = new VFile();

      await unified()
        .use(hl7v2AnnotateProfileContext)
        .use(hl7v2LintTableValues)
        .run(tree, file);

      expect(file.messages.map((message) => message.message)).toEqual([
        "Field `OBX-10` (Nature of Abnormal Test) is `X`; it must be a code of table `HL70080` (Nature of Abnormal Testing).",
        "Field `OBX-10` (Nature of Abnormal Test) is `Z`; it must be a code of table `HL70080` (Nature of Abnormal Testing).",
      ]);
    });

    it("skips an empty repetition after a valid one (A~)", async () => {
      const tree = m(msh("2.5"), obxWithAbnormalFlags("A", ""));
      const file = new VFile();

      await unified()
        .use(hl7v2AnnotateProfileContext)
        .use(hl7v2LintTableValues)
        .run(tree, file);

      expect(file.messages).toEqual([]);
    });

    it("skips a repetition that has no components", async () => {
      const tree = m(
        msh("2.5"),
        s(
          "OBX",
          f("1"),
          f("NM"),
          f("12345"),
          f(""),
          f("100"),
          f("mg/dL"),
          f("70-110"),
          f("N"),
          f(""),
          f(r("A"), r())
        )
      );
      const file = new VFile();

      await unified()
        .use(hl7v2AnnotateProfileContext)
        .use(hl7v2LintTableValues)
        .run(tree, file);

      expect(file.messages).toEqual([]);
    });

    it("skips a repetition whose first component has no subcomponents", async () => {
      const tree = m(
        msh("2.5"),
        s(
          "OBX",
          f("1"),
          f("NM"),
          f("12345"),
          f(""),
          f("100"),
          f("mg/dL"),
          f("70-110"),
          f("N"),
          f(""),
          f(r("A"), r(c()))
        )
      );
      const file = new VFile();

      await unified()
        .use(hl7v2AnnotateProfileContext)
        .use(hl7v2LintTableValues)
        .run(tree, file);

      expect(file.messages).toEqual([]);
    });
  });

  // https://github.com/rethinkhealth/hl7v2/issues/489
  it("validates correctly when MSH-12 is composite VID — #489", async () => {
    function mshVid(version: string) {
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
        f(c(version), c("USA"), c("ISO")) // VID composite
      );
    }

    // EVN-1 = "ZZZ" is not a valid code — should trigger validation
    const tree = m(mshVid("2.5"), s("EVN", f("ZZZ")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages.map((message) => message.message)).toEqual([
      "Field `EVN-1` (Event Type Code) is `ZZZ`; it must be a code of table `HL70003` (Event type).",
    ]);
  });

  it("reports the field, the value, and the table in one message", async () => {
    const tree = m(msh("2.5"), s("EVN", f("ZZZ")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages.map((message) => message.message)).toEqual([
      "Field `EVN-1` (Event Type Code) is `ZZZ`; it must be a code of table `HL70003` (Event type).",
    ]);
  });

  it("skips a field past the last one the segment's profile defines", async () => {
    // v2.5 EVN defines seven fields
    const tree = m(
      msh("2.5"),
      s("EVN", f("A01"), f(""), f(""), f(""), f(""), f(""), f(""), f("ZZZ"))
    );
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toEqual([]);
  });

  it("skips a field whose table the profile does not define", async () => {
    // v2.3 DB1-2 references HL70033, which the v2.3 profile has no table for
    // (https://github.com/rethinkhealth/hl7v2-profiles/issues/160)
    const tree = m(msh("2.3"), s("DB1", f("1"), f("ZZZ")));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toEqual([]);
  });

  it("points a finding at the repetition that holds the coded value", async () => {
    const repetition = r("ZZZ");
    repetition.position = {
      end: { column: 8, line: 2, offset: 70 },
      start: { column: 5, line: 2, offset: 67 },
    };
    const field = f(repetition);
    field.position = {
      end: { column: 12, line: 2, offset: 74 },
      start: { column: 5, line: 2, offset: 67 },
    };
    const evn = s("EVN", field);
    const tree = m(msh("2.5"), evn);
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toHaveLength(1);
    const [error] = file.messages;
    expect(error?.place).toStrictEqual({
      end: { column: 8, line: 2, offset: 70 },
      start: { column: 5, line: 2, offset: 67 },
    });
    expect(error?.ancestors).toStrictEqual([tree, evn, field, repetition]);
  });

  it("points a finding at the field when the repetition has no position", async () => {
    const repetition = r("ZZZ");
    const field = f(repetition);
    field.position = {
      end: { column: 8, line: 2, offset: 70 },
      start: { column: 5, line: 2, offset: 67 },
    };
    const tree = m(msh("2.5"), s("EVN", field));
    const file = new VFile();

    await unified()
      .use(hl7v2AnnotateProfileContext)
      .use(hl7v2LintTableValues)
      .run(tree, file);

    expect(file.messages).toHaveLength(1);
    const [error] = file.messages;
    expect(error?.place).toStrictEqual({
      end: { column: 8, line: 2, offset: 70 },
      start: { column: 5, line: 2, offset: 67 },
    });
  });
  // A profile of a site's own may define a coded field without a name.
  it("reports a coded field that has no name by its ID alone", async () => {
    const tree = m(msh("2.5"), s("ZPD", f("ZZZ")));
    const file = new VFile();
    await unified().use(hl7v2AnnotateProfileContext).run(tree, file);
    const profile = file.data.profile;
    expect(profile).toBeDefined();
    if (profile) {
      file.data.profile = {
        ...profile,
        fields: new Map([
          [
            "ZPD",
            {
              bySequence: new Map([
                [
                  1,
                  {
                    id: "ZPD-1",
                    repetitions: 1,
                    sequence: 1,
                    table: "HL70003",
                  },
                ],
              ] as const),
              requiredSequences: new Set<number>(),
              segmentId: "ZPD",
            },
          ],
        ]),
      };
    }

    await unified().use(hl7v2LintTableValues).run(tree, file);

    expect(file.messages.map((message) => message.message)).toEqual([
      "Field `ZPD-1` is `ZZZ`; it must be a code of table `HL70003` (Event type).",
    ]);
  });
});
