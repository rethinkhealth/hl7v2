import { parseHL7v2 } from "@rethinkhealth/hl7v2";
/**
 * End-to-end unified pipeline benchmarks.
 *
 * Measures the full user-facing path: parse → structure → decode → lint → jsonify.
 * These are the primary benchmarks tracked by CodSpeed for regression detection.
 */
import { bench, describe } from "vitest";

// ---------------------------------------------------------------------------
// Fixtures — realistic HL7v2 messages
// ---------------------------------------------------------------------------

const ADT_A01_SMALL = [
  "MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20241201120000",
  "PID|1||12345^^^MRN||Doe^John^Q||19800101|M|||123 Main St^^Springfield^IL^62701",
].join("\r");

const ORU_R01_MEDIUM = [
  "MSH|^~\\&|LAB|FAC|EMR|RFAC|20241201120000||ORU^R01^ORU_R01|MSG002|P|2.5.1",
  "PID|1||12345^^^MRN||Doe^John^Q||19800101|M",
  "ORC|RE|ORD001|LAB001",
  "OBR|1|ORD001|LAB001|CBC^Complete Blood Count|||20241201",
  ...Array.from(
    { length: 10 },
    (_, i) =>
      `OBX|${i + 1}|NM|WBC-${i}^White Blood Cell||${(5 + i * 0.3).toFixed(1)}|10*9/L|4.5-11.0|N|||F`
  ),
].join("\r");

function buildLargeMessage(obxCount: number): string {
  const segments = [
    "MSH|^~\\&|LAB|FAC|EMR|RFAC|20241201120000||ORU^R01^ORU_R01|MSG003|P|2.5.1",
    "PID|1||12345^^^MRN||Doe^John^Q^^Dr||19800101|M|||123 Main St^^Springfield^IL^62701^USA",
    "PV1|1|I|ICU^101^A",
    "ORC|RE|ORD001|LAB001",
    "OBR|1|ORD001|LAB001|CBC^Complete Blood Count|||20241201",
  ];
  for (let i = 1; i <= obxCount; i++) {
    segments.push(
      `OBX|${i}|NM|8302-${i}^Test${i}^LN||${(100 + i * 0.5).toFixed(1)}|mg/dL|50-200|N|||F`
    );
  }
  return segments.join("\r");
}

const LARGE_50 = buildLargeMessage(50);
const LARGE_200 = buildLargeMessage(200);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("pipeline — full unified processor", () => {
  bench("ADT^A01 small (3 segments)", async () => {
    await parseHL7v2.process(ADT_A01_SMALL);
  });

  bench("ORU^R01 medium (14 segments)", async () => {
    await parseHL7v2.process(ORU_R01_MEDIUM);
  });

  bench("ORU^R01 large (55 segments)", async () => {
    await parseHL7v2.process(LARGE_50);
  });

  bench("ORU^R01 xl (205 segments)", async () => {
    await parseHL7v2.process(LARGE_200);
  });
});
