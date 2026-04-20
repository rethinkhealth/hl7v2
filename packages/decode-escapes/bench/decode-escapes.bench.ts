/**
 * Decode escapes benchmarks — measures the cost of decoding
 * HL7v2 escape sequences in subcomponent values.
 *
 * Run: pnpm bench
 */
import type { Root } from "@glion/ast";
import { f, m, s } from "@glion/builder";
import { unified } from "unified";
import { bench, describe } from "vitest";

import { hl7v2DecodeEscapes } from "../src/index";

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

function buildEscapedTree(segmentCount: number): Root {
  const segments = [s("MSH", f("SENDER"), f("FAC"), f("RECV"))];
  for (let i = 0; i < segmentCount; i++) {
    segments.push(
      s(
        "OBX",
        f(String(i + 1)),
        f("TX"),
        f("NOTE"),
        f(""),
        f(
          `Patient allergic to \\F\\Peanuts\\F\\ and \\S\\Shellfish \\T\\ \\R\\repeat\\R\\`
        ),
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
          f(`Value with \\F\\pipes\\F\\ and \\E\\escapes`)
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
const ESCAPED_SMALL = buildEscapedTree(10);
const ESCAPED_LARGE = buildEscapedTree(200);
const MIXED_LARGE = buildMixedTree(200);

const decoder = unified().use(hl7v2DecodeEscapes);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("decode-escapes", () => {
  bench("decode: 10 segments, plain text (no-op)", async () => {
    await decoder.run(structuredClone(PLAIN_SMALL));
  });

  bench("decode: 200 segments, plain text (no-op)", async () => {
    await decoder.run(structuredClone(PLAIN_LARGE));
  });

  bench("decode: 10 segments, escape-heavy values", async () => {
    await decoder.run(structuredClone(ESCAPED_SMALL));
  });

  bench("decode: 200 segments, escape-heavy values", async () => {
    await decoder.run(structuredClone(ESCAPED_LARGE));
  });

  bench("decode: 200 segments, mixed values", async () => {
    await decoder.run(structuredClone(MIXED_LARGE));
  });
});
