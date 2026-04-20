/**
 * Benchmark: Profile loading strategies — cold vs warm
 *
 * Tests the REAL cost of each strategy.
 * Module-level top-level await handles warmup BEFORE any benchmarks run.
 */

import { bench, describe } from "vitest";

import { createProfiles } from "../src/profiles";

const SEGMENTS = [
  "MSH",
  "SFT",
  "EVN",
  "PID",
  "PD1",
  "NK1",
  "NK1",
  "PV1",
  "PV2",
  "DB1",
  "OBX",
  "OBX",
  "OBX",
  "AL1",
  "AL1",
  "DG1",
  "DG1",
  "DG1",
  "DRG",
  "PR1",
  "PR1",
  "GT1",
  "GT1",
  "IN1",
  "IN2",
  "IN1",
  "IN2",
  "ACC",
  "UB1",
  "UB2",
];

// ---------------------------------------------------------------------------
// Scenario 1: Cold start — fresh instance, nothing in our cache
// Node's module cache still has the modules from warmup above,
// so this measures our cache layer overhead, not disk I/O.
// ---------------------------------------------------------------------------

describe(`cold start — fresh profiles instance (${SEGMENTS.length} segments)`, () => {
  bench("cached instance", async () => {
    const p = createProfiles();
    for (const seg of SEGMENTS) {
      await p.fields.load("2.5", seg);
    }
  });

  bench("no-cache instance", async () => {
    const p = createProfiles({ cache: false });
    for (const seg of SEGMENTS) {
      await p.fields.load("2.5", seg);
    }
  });
});

// ---------------------------------------------------------------------------
// Scenario 2: Cold then warm — two messages back to back
// ---------------------------------------------------------------------------

describe("transition: cold first message then warm second", () => {
  bench("with cache", async () => {
    const p = createProfiles();

    // First message — cold
    await p.events.load("2.5", "ADT_A01");
    for (const seg of SEGMENTS) {
      await p.fields.load("2.5", seg);
    }

    // Second message — warm
    await p.events.load("2.5", "ADT_A01");
    for (const seg of SEGMENTS) {
      await p.fields.load("2.5", seg);
    }
  });

  bench("without cache", async () => {
    const p = createProfiles({ cache: false });

    // First message — cold
    await p.events.load("2.5", "ADT_A01");
    for (const seg of SEGMENTS) {
      await p.fields.load("2.5", seg);
    }

    // Second message — warm
    await p.events.load("2.5", "ADT_A01");
    for (const seg of SEGMENTS) {
      await p.fields.load("2.5", seg);
    }
  });
});
