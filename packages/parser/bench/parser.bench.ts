/**
 * Benchmarks for hl7v2-parser.
 *
 * Measures parsing performance for HL7v2 messages of varying complexity.
 *
 * Run: pnpm bench
 */
import { bench, describe } from "vitest";

import { parseHL7v2 } from "../src/parser";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const SIMPLE_MESSAGE =
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01|MSG001|P|2.5\rPID|1||12345||Doe^John||19800101|M";

function buildMessage(segmentCount: number): string {
  const segments = [
    "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ADT^A01|MSG001|P|2.5",
    "PID|1||12345||Doe^John^Q||19800101|M|||123 Main St^^Springfield^IL^62701",
  ];
  for (let i = 1; i <= segmentCount; i++) {
    segments.push(`OBX|${i}|NM|8302-2^Height^LN||${170 + i}|cm|150-200||||F`);
  }
  return segments.join("\r");
}

const COMPLEX_FIELD_MESSAGE = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||ORU^R01|MSG001|P|2.5",
  "PID|1||123~456~789||Doe^John^Q&Jr||19800101|M",
  "OBX|1|CE|8302-2^Height^LN||185&cm^tall&yes~186&cm^tall&no|cm|150-200||||F",
].join("\r");

const SMALL = buildMessage(5);
const MEDIUM = buildMessage(50);
const LARGE = buildMessage(200);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("parseHL7v2 — message sizes", () => {
  bench("simple (2 segments)", () => {
    parseHL7v2(SIMPLE_MESSAGE);
  });

  bench("small (7 segments)", () => {
    parseHL7v2(SMALL);
  });

  bench("medium (52 segments)", () => {
    parseHL7v2(MEDIUM);
  });

  bench("large (202 segments)", () => {
    parseHL7v2(LARGE);
  });
});

describe("parseHL7v2 — field complexity", () => {
  bench("repetitions, components, and sub-components", () => {
    parseHL7v2(COMPLEX_FIELD_MESSAGE);
  });
});
