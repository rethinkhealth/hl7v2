/**
 * Escape encode/decode benchmarks — measures the cost of encoding
 * and decoding HL7v2 escape sequences in subcomponent values.
 *
 * Tests both directions with varying message sizes and escape density.
 */
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { hl7v2DecodeEscapes } from "@rethinkhealth/hl7v2-decode-escapes";
import { hl7v2EncodeEscapes } from "@rethinkhealth/hl7v2-encode-escapes";
import { unified } from "unified";
import { bench, describe } from "vitest";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

/** Plain text — no escapes needed (best case for early exit) */
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

/** Values with delimiter characters that need encoding */
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

/** Values with encoded escape sequences that need decoding */
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

/** Mixed: some fields have escapes, some don't */
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

// Pre-built trees at various sizes
const PLAIN_SMALL = buildPlainTree(10);
const PLAIN_LARGE = buildPlainTree(200);
const DELIM_SMALL = buildDelimiterTree(10);
const DELIM_LARGE = buildDelimiterTree(200);
const ESCAPED_SMALL = buildEscapedTree(10);
const ESCAPED_LARGE = buildEscapedTree(200);
const MIXED_LARGE = buildMixedTree(200);

// Pre-built processors (frozen, reusable)
const encoder = unified().use(hl7v2EncodeEscapes);
const decoder = unified().use(hl7v2DecodeEscapes);

// ---------------------------------------------------------------------------
// Encode benchmarks
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

// ---------------------------------------------------------------------------
// Decode benchmarks
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

// ---------------------------------------------------------------------------
// Round-trip benchmarks
// ---------------------------------------------------------------------------

describe("escape round-trip", () => {
  bench("round-trip: encode → decode, 10 segments", async () => {
    const encoded = await encoder.run(structuredClone(DELIM_SMALL));
    await decoder.run(encoded);
  });

  bench("round-trip: encode → decode, 200 segments", async () => {
    const encoded = await encoder.run(structuredClone(DELIM_LARGE));
    await decoder.run(encoded);
  });
});
