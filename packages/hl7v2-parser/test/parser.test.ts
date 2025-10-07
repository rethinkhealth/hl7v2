import type {
  Component,
  Delimiters,
  Field,
  FieldRepetition,
  Segment,
} from "@rethinkhealth/hl7v2-ast";
import { describe, expect, it } from "vitest";
import { parseHL7v2 } from "../src/parser";
import type { PreprocessorStep } from "../src/types";

const delims: Delimiters = {
  field: "|",
  component: "^",
  repetition: "~",
  escape: "\\",
  subcomponent: "&",
  segment: "\r",
};

describe("HL7v2 parser", () => {
  describe("single segment", () => {
    it("parses a single segment with two fields", () => {
      const root = parseHL7v2("PID|1\r", { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      expect(seg.children).toHaveLength(1);
      expect(seg.children[0].children[0].children[0].children[0].value).toBe(
        "1"
      );

      expect(root).toMatchSnapshot();
    });

    it("parses a segment ending with a field delimiter", () => {
      const root = parseHL7v2("PID|1|", { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      expect(seg.children).toHaveLength(1);
      expect(seg.children[0].children[0].children[0].children[0].value).toBe(
        "1"
      );

      expect(root).toMatchSnapshot();
    });

    it("parses a segment ending with multiple field delimiters", () => {
      const root = parseHL7v2("PID|1|||||", { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      expect(seg.children).toHaveLength(5);

      expect(root).toMatchSnapshot();
    });

    it("parses a segment ending with multiple field delimiters and segment carriage return", () => {
      const root = parseHL7v2("PID|1|||||\r", { delimiters: delims });
      const root2 = parseHL7v2("PID|1|||||", { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      expect(seg.children).toHaveLength(5);

      expect(root).toEqual(root2);
      expect(root).toMatchSnapshot();
    });

    it("parses a segment ending with two field delimiters and preserves the last empty field", () => {
      const root = parseHL7v2("PID|1||", { delimiters: delims });
      const seg = root.children[0] as Segment;

      // Expect 1 segment at the root
      expect(root.children).toHaveLength(1);

      // Expect 2 fields in the segment (segment name is not a field anymore)
      expect(seg.children).toHaveLength(2);

      // Expect the last field to be empty array of field repetitions
      const lastField = seg.children[1] as Field;
      expect(lastField.children).toMatchObject([
        {
          type: "field-repetition",
          children: [
            {
              type: "component",
              children: [],
            },
          ],
        },
      ]);

      // Root should match the snapshot as a general check
      expect(root).toMatchSnapshot();
    });

    it("equates with and without CR when ending with a single trailing field delimiter", () => {
      const withCr = parseHL7v2("PID|1|\r", { delimiters: delims });
      const withoutCr = parseHL7v2("PID|1|", { delimiters: delims });
      expect(withCr).toEqual(withoutCr);
      const seg = withCr.children[0] as Segment;
      expect(seg.children).toHaveLength(1);
    });

    it("handles leading double field delimiters as two empty leading fields", () => {
      const root = parseHL7v2("SEG||A\r", { delimiters: delims });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("SEG");
      // SEG||A => first | separates segment name from fields (skipped)
      // second | creates empty first field, then A creates second field
      expect(seg.children).toHaveLength(2);

      expect(root).toMatchSnapshot();
    });

    it("preserves trailing component delimiter by creating an empty component", () => {
      const root = parseHL7v2("PID|A^\r", { delimiters: delims });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      const field1 = seg.children[0] as Field;
      const rep = field1.children[0] as FieldRepetition;
      expect(rep.children.length).toBe(2);
      // Second component exists but has no subcomponents
      expect(rep.children[1].children.length).toBe(0);

      expect(root).toMatchSnapshot();
    });

    it("preserves trailing subcomponent delimiter by creating an empty subcomponent", () => {
      const root = parseHL7v2("PID|A&B&\r", { delimiters: delims });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      const field1 = seg.children[0] as Field;
      const rep = field1.children[0] as FieldRepetition;
      const comp = rep.children[0] as Component;
      expect(comp.children.map((s) => s.value)).toEqual(["A", "B", ""]);
    });

    it("preserves trailing repetition delimiter by creating an empty repetition container", () => {
      const root = parseHL7v2("OBX|1~2~\r", { delimiters: delims });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("OBX");
      const field1 = seg.children[0];
      expect(field1.children.length).toBe(3);
      // Last repetition has a component container but no subcomponents
      const lastRep = field1.children.at(-1);
      expect(lastRep.children[0].children.length).toBe(0);
    });

    it('parses MSH line with bootstrap: TEXT("MSH"), FIELD_DELIM, TEXT(MSH.2)', () => {
      const root = parseHL7v2("MSH|^~\\&|SENDER\r", { delimiters: delims });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("MSH");
      expect(seg.children).toHaveLength(3);
      // MSH.1: field delimiter
      expect(seg.children[0].children[0].children[0].children[0].value).toBe(
        "|"
      );
      // MSH.2: delimiters
      expect(seg.children[1].children[0].children[0].children[0].value).toBe(
        "^~\\&"
      );
      // MSH.3: sender
      expect(seg.children[2].children[0].children[0].children[0].value).toBe(
        "SENDER"
      );
    });

    it("handles components and subcomponents", () => {
      const root = parseHL7v2("PID|1^A&B\r", { delimiters: delims });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      const field1 = seg.children[0] as Field;
      const rep = field1.children[0] as FieldRepetition;
      expect(rep.children).toHaveLength(2);
      expect(rep.children[0].children[0].value).toBe("1");
      const comp2 = rep.children[1] as Component;
      expect(comp2.children.map((s) => s.value)).toEqual(["A", "B"]);
    });

    it("handles repetitions", () => {
      const root = parseHL7v2("OBX|1~2\r", { delimiters: delims });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("OBX");
      const field1 = seg.children[0] as Field;
      expect(field1.children).toHaveLength(2);
      expect(field1.children[0].children[0].children[0].value).toBe("1");
      expect(field1.children[1].children[0].children[0].value).toBe("2");
    });

    it("handles leading field delimiter as empty first field", () => {
      const root = parseHL7v2("SEG|A\r", { delimiters: delims });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("SEG");
      expect(seg.children).toHaveLength(1);
      expect(seg.children[0].children[0].children[0].children[0].value).toBe(
        "A"
      );
    });

    it("finalizes last segment without trailing segment delimiter", () => {
      const root = parseHL7v2("PID|1", { delimiters: delims });
      expect(root.children).toHaveLength(1);
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      expect(seg.children).toHaveLength(1);
    });

    it("runs default preprocessors", () => {
      const root = parseHL7v2("PID|1|ABC|\nNK1|2|ABC|\n", {
        delimiters: delims,
      });

      expect(root.children).toHaveLength(2);

      expect(root).toMatchSnapshot();
    });

    it("runs custom preprocessors", () => {
      const customProcessor: PreprocessorStep = (context) => {
        context.input = context.input.replace("ABC", "DEF");
        return context;
      };

      const root = parseHL7v2("PID|1|ABC|", {
        delimiters: delims,
        preprocess: [customProcessor],
      });

      expect(root.children).toHaveLength(1);
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      expect(seg.children).toHaveLength(2);

      // The second field should be replaced with DEF
      expect(seg.children[1]).toMatchObject({
        type: "field",
        children: [
          {
            type: "field-repetition",
            children: [
              {
                type: "component",
                children: [
                  {
                    type: "subcomponent",
                    value: "DEF",
                  },
                ],
              },
            ],
          },
        ],
      });

      expect(root).toMatchSnapshot();
    });

    it("does not run preprocessors when option is an empty array", () => {
      // LF should NOT be normalized to CR when preprocessors are disabled
      const input = "PID|1\nOBX|2";
      const root = parseHL7v2(input, { delimiters: delims, preprocess: [] });

      // Without normalization, the tokenizer will not see a segment delimiter, so only one segment is produced
      expect(root.children).toHaveLength(1);
      expect(root).toMatchSnapshot();
    });

    it("parses MSH with custom delimiters)", () => {
      const randomMessage = "MSH$%*\\#$SENDER$12%34%abc%abc\n";
      const root = parseHL7v2(randomMessage, {
        delimiters: {
          segment: "\n",
          component: "%",
          escape: "\\",
          field: "$",
          repetition: "*",
          subcomponent: "#",
        },
      });
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("MSH");
      expect(seg.children).toHaveLength(4);
      // MSH Header
      expect(seg).toMatchSnapshot();
      expect(root.data?.delimiters).toBeDefined();
    });
  });

  describe("partial delimiters", () => {
    it("uses default delimiters when none are provided", () => {
      const root = parseHL7v2("PID|A^B~C&D\r", {});
      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      expect(seg.children).toHaveLength(1);

      const field1 = seg.children[0] as Field;
      // Should parse with default delimiters: | ^ ~ &
      expect(field1.children).toHaveLength(2); // Two repetitions
      expect(root).toMatchSnapshot();
    });

    it("overrides only the segment delimiter while keeping other defaults", () => {
      const root = parseHL7v2("PID|A^B\nOBX|1^2\n", {
        delimiters: {
          segment: "\n",
        },
      });

      expect(root.children).toHaveLength(2);
      const seg1 = root.children[0] as Segment;
      const seg2 = root.children[1] as Segment;

      // Check first segment
      expect(seg1.name).toBe("PID");
      const field1 = seg1.children[0] as Field;
      const rep = field1.children[0] as FieldRepetition;
      expect(rep.children).toHaveLength(2); // A and B as components

      // Check second segment
      expect(seg2.name).toBe("OBX");
      expect(root).toMatchSnapshot();
    });

    it("overrides only the component delimiter while keeping other defaults", () => {
      const root = parseHL7v2("PID|A%B%C\r", {
        delimiters: {
          component: "%",
        },
      });

      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      const field1 = seg.children[0] as Field;
      const rep = field1.children[0] as FieldRepetition;

      expect(rep.children).toHaveLength(3); // Three components: A, B, C
      expect(rep.children[0].children[0].value).toBe("A");
      expect(rep.children[1].children[0].value).toBe("B");
      expect(rep.children[2].children[0].value).toBe("C");
      expect(root).toMatchSnapshot();
    });

    it("overrides multiple delimiters while keeping others as defaults", () => {
      const root = parseHL7v2("PID|A%B*C%D\n", {
        delimiters: {
          segment: "\n",
          component: "%",
          repetition: "*",
        },
      });

      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      const field1 = seg.children[0] as Field;

      // Should have 2 repetitions (A%B and C%D)
      expect(field1.children).toHaveLength(2);

      // First repetition should have 2 components (A and B)
      const rep1 = field1.children[0] as FieldRepetition;
      expect(rep1.children).toHaveLength(2);
      expect(rep1.children[0].children[0].value).toBe("A");
      expect(rep1.children[1].children[0].value).toBe("B");

      // Second repetition should have 2 components (C and D)
      const rep2 = field1.children[1] as FieldRepetition;
      expect(rep2.children).toHaveLength(2);
      expect(rep2.children[0].children[0].value).toBe("C");
      expect(rep2.children[1].children[0].value).toBe("D");

      expect(root).toMatchSnapshot();
    });

    it("overrides field delimiter while keeping default subcomponent delimiter", () => {
      const root = parseHL7v2("PID$A^B&C\r", {
        delimiters: {
          field: "$",
        },
      });

      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("PID");
      expect(seg.children).toHaveLength(1);

      const field1 = seg.children[0] as Field;
      const rep = field1.children[0] as FieldRepetition;
      const comp2 = rep.children[1] as Component;

      // Component should have 2 subcomponents: B and C
      expect(comp2.children).toHaveLength(2);
      expect(comp2.children[0].value).toBe("B");
      expect(comp2.children[1].value).toBe("C");
      expect(root).toMatchSnapshot();
    });

    it("handles partial delimiters with MSH segment", () => {
      const root = parseHL7v2("MSH$%*\\#$SENDER", {
        delimiters: {
          field: "$",
          component: "%",
          repetition: "*",
          subcomponent: "#",
          segment: "\n",
          // escape defaults to \
        },
      });

      const seg = root.children[0] as Segment;
      expect(seg.name).toBe("MSH");
      expect(seg.children[0].children[0].children[0].children[0].value).toBe(
        "$"
      );
      expect(seg.children[1].children[0].children[0].children[0].value).toBe(
        "%*\\#"
      );
      expect(seg.children[2].children[0].children[0].children[0].value).toBe(
        "SENDER"
      );
      expect(root).toMatchSnapshot();
    });
  });

  describe("multiple segments", () => {
    it("parses multiple segments with MSH as the first segment", () => {
      const msg = [
        // MSH
        "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
        // PID
        "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
        // OBX
        "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
      ].join("\r");

      const root = parseHL7v2(msg, { delimiters: delims });
      expect(root.children).toHaveLength(3);
      expect(root).toMatchSnapshot();
    });

    it("parses multiple segments without MSH as the first segment", () => {
      const msg = [
        // PID
        "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
        // OBX
        "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
      ].join("\r");

      const root = parseHL7v2(msg, { delimiters: delims });
      expect(root.children).toHaveLength(2);
      expect(root).toMatchSnapshot();
    });

    it("parses correctly similar messages with different carriage returns", () => {
      const msgWithCr = [
        // PID
        "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
        // OBX
        "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
      ].join("\r");

      const msgWithLf = [
        // PID
        "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
        // OBX
        "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
      ].join("\n");

      const outputCr = parseHL7v2(msgWithCr, { delimiters: delims });
      const outputLf = parseHL7v2(msgWithLf, { delimiters: delims });

      expect(outputCr).toEqual(outputLf);
    });

    // biome-ignore lint/suspicious/noSkippedTests: must be fixed
    it.skip("parses correctly similar messages with or without trailing field separators", () => {
      const msgWithTrailingFieldSeparator = [
        // PID
        "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC|",
        // OBX
        "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R|",
      ].join("\r");

      const msgWithoutTrailingFieldSeparator = [
        // PID
        "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
        // OBX
        "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
      ].join("\r");

      const fileCr = parseHL7v2(msgWithTrailingFieldSeparator, {
        delimiters: delims,
      });

      const fileLf = parseHL7v2(msgWithoutTrailingFieldSeparator, {
        delimiters: delims,
      });

      expect(fileCr).toEqual(fileLf);
    });

    // biome-ignore lint/suspicious/noSkippedTests: must be fixed
    it.skip("parses correctly similar messages with or without trailing field separators and empty last field", () => {
      const msgWithTrailingFieldSeparator = [
        // PID
        "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC|",
        // OBX
        "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^|",
      ].join("\r");

      const msgWithoutTrailingFieldSeparator = [
        // PID
        "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
        // OBX
        "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^",
      ].join("\r");

      const fileCr = parseHL7v2(msgWithTrailingFieldSeparator, {
        delimiters: delims,
      });

      const fileLf = parseHL7v2(msgWithoutTrailingFieldSeparator, {
        delimiters: delims,
      });

      expect(fileCr).toEqual(fileLf);
    });
  });
});
