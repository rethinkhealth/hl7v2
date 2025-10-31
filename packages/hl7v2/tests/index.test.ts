import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import { describe, expect, it } from "vitest";
import { parseHL7v2 } from "../src";

describe("parseHL7v2 (holistic)", () => {
  it("parses MSH + PID and decodes escapes, then stringifies to JSON", async () => {
    const msg = [
      // MSH with delimiters and sender
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
      // PID with components, repetitions and escapes (\S\ for ^)
      "PID|1||12345^^^HOSP^MR||DOE\\S\\JOHN^A&J|19700101|M",
    ].join("\r");

    const file = await parseHL7v2.process(msg);

    expect(file.value).toMatchSnapshot();
  });

  it("handles trailing delimiters and preserves empty structures appropriately", async () => {
    const msg = "PID|A^B&|C~|";
    const file = await parseHL7v2.process(msg);

    expect(file.value).toMatchSnapshot();
  });

  it("includes delimiters in the output", () => {
    const msg = [
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
      "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
      "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
    ].join("\r");

    const root = parseHL7v2.parse(msg);

    expect(root.data?.delimiters).toBeDefined();
    expect(root.data?.delimiters).toEqual(DEFAULT_DELIMITERS);
  });

  it("handles decoding escapes", async () => {
    const msg = "PID|1|Value\\F\\More\\S\\Stuff\\R\\Again\\T\\Sub\\E\\Escaped|";
    const file = await parseHL7v2.process(msg);

    expect(file.value).toMatchSnapshot();
  });

  it("parses multiple segments with MSH as the first segment", async () => {
    const msg = [
      // MSH
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
      // PID
      "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
      // OBX
      "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
    ].join("\r");

    const file = await parseHL7v2.process(msg);
    expect(file.value).toMatchSnapshot();
  });

  it("parses multiple segments without MSH as the first segment", async () => {
    const msg = [
      // PID
      "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
      // OBX
      "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
    ].join("\r");

    const file = await parseHL7v2.process(msg);

    expect(file.value).toMatchSnapshot();
  });

  it("parses correctly similar messages with different carriage returns", async () => {
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

    const fileCr = await parseHL7v2.process(msgWithCr);
    const fileLf = await parseHL7v2.process(msgWithLf);

    expect(fileCr.result).toEqual(fileLf.result);
  });

  it("parses correctly similar messages with or without trailing field separators", async () => {
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

    const fileCr = await parseHL7v2.process(msgWithTrailingFieldSeparator);
    const fileLf = await parseHL7v2.process(msgWithoutTrailingFieldSeparator);

    expect(fileCr.result).toEqual(fileLf.result);
  });

  it("parses correctly similar messages with or without trailing field separators and empty last field", async () => {
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

    const fileCr = await parseHL7v2.process(msgWithTrailingFieldSeparator);
    const fileLf = await parseHL7v2.process(msgWithoutTrailingFieldSeparator);

    expect(fileCr.result).toEqual(fileLf.result);
  });

  it("process immunization sample", async () => {
    const msg = [
      "MSH|^~\\&|VALLEY CLINIC^^^|||WIR^^^|19991005032342||VXU^V04|682299|P^|2.4^^|||ER",
      "PID|||79928^^^^PI|A5SMIT0071^^^^^|SMITH^MARY^T^^^^^|JOHNSON^^^^^^^|19951212|F||||",
      "RXA|0|999|19970903|19970903|^^^90701^DTP^CPT|0.5",
    ].join("\r");

    const file = await parseHL7v2.process(msg);

    expect(file.result).toMatchSnapshot();
  });
});
