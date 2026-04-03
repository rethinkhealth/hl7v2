/**
 * QR5: Performance Predictability — Hard threshold CI gates.
 *
 * Establishes absolute performance thresholds that fail CI if the pipeline
 * regresses beyond acceptable limits. These complement the relative benchmarks
 * tracked by CodSpeed in benchmarks/.
 *
 * Thresholds are set at ~3-5x the observed baseline to avoid flakiness in CI
 * environments while still catching significant regressions.
 *
 * Baseline measurements (2026-04-03, Node 24, Linux):
 *   50 segments:   ~24ms  → threshold: 200ms
 *   500 segments:  ~96ms  → threshold: 1000ms
 *   2000 segments: ~357ms → threshold: 2000ms
 *
 * Set CI_SKIP_PERF=1 to skip these tests in resource-constrained environments.
 */
import { parseHL7v2 } from "@rethinkhealth/hl7v2";

const SKIP = process.env.CI_SKIP_PERF === "1";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Build a synthetic ORU^R01 message with the specified number of OBX segments.
 * Mirrors the pattern from benchmarks/pipeline.bench.ts.
 */
function buildMessage(obxCount: number): string {
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
  return segments.join("\n");
}

/**
 * Run the pipeline 7 times and return the median duration in milliseconds.
 * Three warm-up runs are excluded to allow V8 JIT tiering to stabilize.
 */
async function measureMedian(message: string): Promise<number> {
  // Warm-up runs: allow V8 to tier through Sparkplug → Maglev → TurboFan
  for (let i = 0; i < 3; i++) {
    await parseHL7v2.process(message);
  }

  const durations: number[] = [];
  for (let i = 0; i < 7; i++) {
    const start = performance.now();
    await parseHL7v2.process(message);
    durations.push(performance.now() - start);
  }

  durations.sort((a, b) => a - b);
  return durations[3]!; // median of 7
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

const describePerf = SKIP ? describe.skip : describe;

describePerf("QR5: performance gates", () => {
  it("50-segment ORU^R01 processes under 200ms", async () => {
    const msg = buildMessage(50);
    const median = await measureMedian(msg);

    expect(median).toBeLessThan(200);
  });

  it("500-segment ORU^R01 processes under 1000ms", async () => {
    const msg = buildMessage(500);
    const median = await measureMedian(msg);

    expect(median).toBeLessThan(1000);
  });

  it("2000-segment ORU^R01 processes under 2000ms", async () => {
    const msg = buildMessage(2000);
    const median = await measureMedian(msg);

    expect(median).toBeLessThan(2000);
  });

  // NOTE: Heap growth testing was considered but omitted because
  // process.memoryUsage().heapUsed is unreliable without --expose-gc.
  // Without forced GC, readings are dominated by GC timing noise.
  // The time thresholds above implicitly catch memory blowups — excessive
  // allocation causes GC pauses that push duration over the threshold.
});
