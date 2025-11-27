/**
 * Vitest benchmark comparing legacy vs empty-array mode
 *
 * Run with: pnpm --filter @rethinkhealth/hl7v2-parser bench
 */

import type { Delimiters } from "@rethinkhealth/hl7v2-ast";
import { bench, describe } from "vitest";
import { parseHL7v2 } from "../src/parser";

const delims: Delimiters = {
  field: "|",
  component: "^",
  repetition: "~",
  escape: "\\",
  subcomponent: "&",
  segment: "\r",
};

// Sample HL7v2 messages with varying amounts of empty fields
const MESSAGES = {
  // 30% empty fields - typical clinical message
  lowEmpty: [
    "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
    "PID|1||12345^^^HOSP^MR||DOE^JOHN^A||19700101|M||C|123 MAIN ST^^CITY^ST^12345||555-1234|||S||54321",
    "PV1|1|I|WARD^ROOM^BED||||||DOC123^SMITH^JANE|||SVC||||2||||||||||||||||||||||||||20250101",
  ].join("\r"),

  // 50% empty fields - partially filled data
  mediumEmpty: [
    "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
    "PID|||12345^^^HOSP^MR||DOE^JOHN||||M||||||||||||||||",
    "PV1|||WARD||||||||||||||||||||||||||||20250101",
  ].join("\r"),

  // 70% empty fields - sparse data
  highEmpty: [
    "MSH|^~\\&|SENDER||RCVR||20250101||||MSG00001||2.5",
    "PID|||12345||DOE||||||||||||||||||",
    "PV1|||||||||||||||||||||||||||||",
  ].join("\r"),

  // Complex real-world message with mixed content
  realWorld: [
    "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
    "PID|||PATID1234^5^M11^ADT1^MR^UNIVERSITY HOSPITAL~123456789^^^USSSA^SS||EVERYMAN^ADAM^A^III||19610615|M||C|1200 N ELM STREET^^GREENSBORO^NC^27401-1020|GL|(919)379-1212|(919)271-3434||S||PATID12345001^2^M10^ADT1^AN^A|123456789|987654^NC",
    "NK1|1|DOE^JANE^|SPO|1200 N ELM STREET^^GREENSBORO^NC^27401-1020|(919)379-1212",
    "PV1|1|I|2000^2012^01||||004777^ATTEND^AARON^A|||SUR||||2||A0||||||||||||||||||||||||||||||20250101",
    "OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE^LN|||200202150730|||||||||DOCT^KILDARE^JAMES^A|||||||200202150930||F|||^^^^^R",
  ].join("\r"),

  // Small message - quick parse
  minimal: "MSH|^~\\&|SYS||SYS||20250101||||MSG001||2.5\rPID|||12345",

  // Large message - stress test
  large: [
    "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ORU^R01|MSG00001|P|2.5",
    ...Array.from(
      { length: 20 },
      (_, i) =>
        `OBX|${i + 1}||TX|||Result ${i + 1}|||||||F|||202501010${String(i).padStart(2, "0")}0101`
    ),
  ].join("\r"),
};

describe("Parser Mode: Low Empty Fields (30%)", () => {
  const message = MESSAGES.lowEmpty;

  bench("legacy mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "legacy" },
    });
  });

  bench("empty-array mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "empty" },
    });
  });
});

describe("Parser Mode: Medium Empty Fields (50%)", () => {
  const message = MESSAGES.mediumEmpty;

  bench("legacy mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "legacy" },
    });
  });

  bench("empty-array mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "empty" },
    });
  });
});

describe("Parser Mode: High Empty Fields (70%)", () => {
  const message = MESSAGES.highEmpty;

  bench("legacy mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "legacy" },
    });
  });

  bench("empty-array mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "empty" },
    });
  });
});

describe("Parser Mode: Real-World Message", () => {
  const message = MESSAGES.realWorld;

  bench("legacy mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "legacy" },
    });
  });

  bench("empty-array mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "empty" },
    });
  });
});

describe("Parser Mode: Minimal Message", () => {
  const message = MESSAGES.minimal;

  bench("legacy mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "legacy" },
    });
  });

  bench("empty-array mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "empty" },
    });
  });
});

describe("Parser Mode: Large Message (20 OBX segments)", () => {
  const message = MESSAGES.large;

  bench("legacy mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "legacy" },
    });
  });

  bench("empty-array mode", () => {
    parseHL7v2(message, {
      delimiters: delims,
      experimental: { emptyMode: "empty" },
    });
  });
});
