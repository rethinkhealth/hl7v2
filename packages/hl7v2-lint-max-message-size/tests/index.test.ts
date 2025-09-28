import { hl7v2Jsonify } from "@rethinkhealth/hl7v2-jsonify";
import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
import { unified } from "unified";
import { reporter } from "vfile-reporter";
import { describe, expect, it } from "vitest";
import hl7v2LintMaxMessageSize from "../src";

describe("hl7v2-lint:max-message-size", () => {
  const parseHl7v2 = unified().use(hl7v2Parser).use(hl7v2Jsonify);

  it("should have no issues for a small message", async () => {
    const msg = [
      // MSH
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
      // PID
      "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
      // OBX
      "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
    ].join("\r");

    const output = await parseHl7v2().use(hl7v2LintMaxMessageSize).process(msg);

    const report = reporter(output);

    expect(report).toEqual("no issues found");
  });

  it("warns when message size exceeds the limit", async () => {
    // Message size is ~440 bytes
    const msg = [
      // MSH
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
      // PID
      "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
      // OBX
      "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
    ].join("\r");

    const output = await parseHl7v2()
      .use(hl7v2LintMaxMessageSize, { maxBytes: 100 })
      .process(msg);

    const report = reporter(output);

    expect(report).not.toEqual("no issues found");
    expect(report).toContain("Message size 441 B exceeds limit 100 B");
  });

  it("warns when message has too many segments", async () => {
    // Message size is ~440 bytes
    const msg = [
      // MSH
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
      // PID
      "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
      // OBX
      "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
    ].join("\r");

    const output = await parseHl7v2()
      .use(hl7v2LintMaxMessageSize, { maxSegments: 1 })
      .process(msg);

    const report = reporter(output);

    expect(report).not.toEqual("no issues found");
    expect(report).toContain("Message has 3 segments, exceeds limit 1");
  });

  it("warns when message has too many segments and size exceeds the limit", async () => {
    // Message size is ~440 bytes
    const msg = [
      // MSH
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
      // PID
      "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123_456_789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19_610_615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27_401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123_456_789|9-87_654^NC",
      // OBX
      "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
    ].join("\r");

    const file = await parseHl7v2()
      .use(hl7v2LintMaxMessageSize, { maxSegments: 1, maxBytes: 100 })
      .process(msg);

    const report = reporter(file);

    expect(report).not.toEqual("no issues found");
    expect(file.messages).toHaveLength(2);
    expect(file.messages[0].message).toContain(
      "Message size 441 B exceeds limit 100 B"
    );
    expect(file.messages[1].message).toContain(
      "Message has 3 segments, exceeds limit 1"
    );
  });
});
