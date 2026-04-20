/**
 * Encode escapes benchmarks — measures the cost of encoding
 * special characters as HL7v2 escape sequences in subcomponent values.
 *
 * Run: pnpm bench
 */
import type { Root } from "@glion/ast";
import { f, m, s } from "@glion/builder";
import { unified } from "unified";
import { bench, describe } from "vitest";

import { hl7v2EncodeEscapes } from "../src/index";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function buildPlainTree(segmentCount: number): Root {
  const segments = [s("MSH", f("SENDER"), f("FAC"), f("RECV"))];
  for (let i = 0; i < segmentCount; i++) {
    segments.push(
      s(
        "OBX",
        f(String(i + 1)),
        f("NM"),
        f("8302-2"),
        f(""),
        f(String(170 + i)),
        f("cm")
      )
    );
  }
  return m(...segments);
}

function buildDelimiterTree(segmentCount: number): Root {
  const segments = [s("MSH", f("SENDER"), f("FAC"), f("RECV"))];
  for (let i = 0; i < segmentCount; i++) {
    segments.push(
      s(
        "OBX",
        f(String(i + 1)),
        f("TX"),
        f("NOTE"),
        f(""),
        f(`Patient allergic to |Peanuts| and ^Shellfish & ~repeat~`),
        f("units")
      )
    );
  }
  return m(...segments);
}

function buildMixedTree(segmentCount: number): Root {
  const segments = [s("MSH", f("SENDER"), f("FAC"), f("RECV"))];
  for (let i = 0; i < segmentCount; i++) {
    if (i % 3 === 0) {
      segments.push(
        s(
          "OBX",
          f(String(i + 1)),
          f("TX"),
          f("NOTE"),
          f(""),
          f(`Value with |pipes| and \\escapes`)
        )
      );
    } else {
      segments.push(
        s(
          "OBX",
          f(String(i + 1)),
          f("NM"),
          f("8302-2"),
          f(""),
          f(String(170 + i))
        )
      );
    }
  }
  return m(...segments);
}

const PLAIN_SMALL = buildPlainTree(10);
const PLAIN_LARGE = buildPlainTree(200);
const DELIM_SMALL = buildDelimiterTree(10);
const DELIM_LARGE = buildDelimiterTree(200);
const MIXED_LARGE = buildMixedTree(200);

const encoder = unified().use(hl7v2EncodeEscapes);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("encode-escapes", () => {
  bench("encode: 10 segments, plain text (no-op)", async () => {
    await encoder.run(structuredClone(PLAIN_SMALL));
  });

  bench("encode: 200 segments, plain text (no-op)", async () => {
    await encoder.run(structuredClone(PLAIN_LARGE));
  });

  bench("encode: 10 segments, delimiter-heavy values", async () => {
    await encoder.run(structuredClone(DELIM_SMALL));
  });

  bench("encode: 200 segments, delimiter-heavy values", async () => {
    await encoder.run(structuredClone(DELIM_LARGE));
  });

  bench("encode: 200 segments, mixed values", async () => {
    await encoder.run(structuredClone(MIXED_LARGE));
  });
});
