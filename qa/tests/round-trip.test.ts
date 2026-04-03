/**
 * QR4: Data Fidelity — Round-trip parse-serialize invariant.
 *
 * Proves that for valid HL7v2 messages, parse(S) → serialize → S' yields
 * S' === S. This is the strongest proof that no data is lost, reordered,
 * or corrupted during the parse-transform-serialize lifecycle.
 *
 * Uses both fixed fixtures (from the conformance corpus) and property-based
 * generation with varying delimiters.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

import { hl7v2AnnotateDelimiters } from "@rethinkhealth/hl7v2-annotate-delimiters";
import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
import { hl7v2ToHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";
import fc from "fast-check";
import { unified } from "unified";

import {
  arbAdversarialInput,
  arbHL7v2Message,
  arbMutatedMessage,
} from "../src/arbitraries";

const FIXTURES_DIR = resolve(import.meta.dirname, "../fixtures");

/**
 * Minimal pipeline for round-trip testing: parse → annotate delimiters → serialize.
 * No lint or decode plugins — we want to test data preservation, not transformation.
 */
const roundTripProcessor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateDelimiters)
  .use(hl7v2ToHl7v2)
  .freeze();

/**
 * Normalize a message for comparison: trim trailing whitespace and
 * normalize line endings to \r (the HL7v2 standard segment terminator).
 *
 * The parser accepts both \r and \n but the serializer always outputs \r.
 * This normalization accounts for that difference so fixtures stored with
 * \n line endings can round-trip correctly.
 */
function normalize(msg: string): string {
  return msg
    .replaceAll("\r\n", "\r") // CRLF → CR
    .replaceAll("\n", "\r") // LF → CR
    .replace(/\r+$/, ""); // trim trailing segment terminators
}

// ---------------------------------------------------------------------------
// Fixed fixture round-trip tests
// ---------------------------------------------------------------------------

/**
 * Discover conformance fixtures (non-invalid, non-edge) that should
 * round-trip cleanly. Edge cases with custom delimiters or CRLF are
 * tested separately since they require normalization awareness.
 */
function discoverRoundTripFixtures(): string[] {
  return readdirSync(FIXTURES_DIR)
    .filter(
      (f) =>
        f.endsWith(".hl7") &&
        !f.startsWith("invalid-") &&
        !f.startsWith("edge-")
    )
    .toSorted();
}

const fixtures = discoverRoundTripFixtures();

describe("QR4: round-trip data fidelity", () => {
  describe("fixed fixtures", () => {
    it.each(fixtures)(
      "%s — round-trips through parse → serialize",
      async (filename) => {
        const filepath = join(FIXTURES_DIR, filename);
        const source = readFileSync(filepath, "utf8");

        const result = await roundTripProcessor.process(source);
        const serialized = String(result);

        expect(normalize(serialized)).toBe(normalize(source));
      }
    );
  });

  describe("edge cases", () => {
    it("CRLF line endings round-trip after normalization", async () => {
      const source = readFileSync(
        join(FIXTURES_DIR, "edge-crlf-line-endings.hl7"),
        "utf8"
      );

      const result = await roundTripProcessor.process(source);
      const serialized = String(result);

      // Parser normalizes CRLF → CR, serializer outputs CR.
      // After normalization both should match.
      expect(normalize(serialized)).toBe(normalize(source));
    });

    it("custom delimiters round-trip correctly", async () => {
      const source = readFileSync(
        join(FIXTURES_DIR, "edge-custom-delimiters.hl7"),
        "utf8"
      );

      const result = await roundTripProcessor.process(source);
      const serialized = String(result);

      expect(normalize(serialized)).toBe(normalize(source));
    });

    it("escaped delimiters round-trip correctly", async () => {
      const source = readFileSync(
        join(FIXTURES_DIR, "edge-escaped-delimiters.hl7"),
        "utf8"
      );

      const result = await roundTripProcessor.process(source);
      const serialized = String(result);

      expect(normalize(serialized)).toBe(normalize(source));
    });

    it("empty segments preserve non-empty fields through round-trip", async () => {
      const source = readFileSync(
        join(FIXTURES_DIR, "edge-empty-segments.hl7"),
        "utf8"
      );

      const result = await roundTripProcessor.process(source);
      const serialized = String(result);

      // The parser normalizes trailing empty fields — "PID|1||||||||||||||"
      // becomes "PID|1" because trailing empties are meaningless in HL7v2.
      // We verify that all non-empty field values survive the round-trip
      // by stripping trailing pipes from both sides before comparing.
      const stripTrailing = (s: string) =>
        normalize(s)
          .split("\r")
          .map((seg) => seg.replace(/\|+$/, ""))
          .join("\r");

      expect(stripTrailing(serialized)).toBe(stripTrailing(source));
    });
  });

  // ---------------------------------------------------------------------------
  // Fuzz-driven round-trip tests
  //
  // Instead of hardcoded inputs, we use the same fast-check arbitraries from
  // the crash resilience suite (QR3) to verify round-trip properties across
  // valid, mutated, and adversarial inputs.
  // ---------------------------------------------------------------------------

  describe("fuzz: valid messages", () => {
    it("round-trip is idempotent — second pass produces the same output", async () => {
      await fc.assert(
        fc.asyncProperty(arbHL7v2Message, async (msg) => {
          const firstPass = String(await roundTripProcessor.process(msg));
          const secondPass = String(
            await roundTripProcessor.process(firstPass)
          );

          expect(normalize(secondPass)).toBe(normalize(firstPass));
        }),
        { numRuns: 300 }
      );
    });

    it("messages without trailing empties round-trip exactly", async () => {
      await fc.assert(
        fc.asyncProperty(arbHL7v2Message, async (msg) => {
          const cleaned = normalize(msg)
            .split("\r")
            .map((seg) => seg.replace(/\|+$/, ""))
            .join("\r");

          const serialized = String(await roundTripProcessor.process(cleaned));

          expect(normalize(serialized)).toBe(cleaned);
        }),
        { numRuns: 300 }
      );
    });
  });

  describe("fuzz: mutated messages", () => {
    it("any parseable mutated input stabilizes after one round-trip", async () => {
      await fc.assert(
        fc.asyncProperty(arbMutatedMessage, async (msg) => {
          // Try to parse — if the parser throws, skip this input.
          // Crash resilience is tested in fuzz.test.ts.
          let firstPass: string;
          try {
            firstPass = String(await roundTripProcessor.process(msg));
          } catch {
            return;
          }

          // If it parsed, the round-trip MUST be idempotent — no swallowing here.
          const secondPass = String(
            await roundTripProcessor.process(firstPass)
          );
          expect(normalize(secondPass)).toBe(normalize(firstPass));
        }),
        { numRuns: 300 }
      );
    });
  });

  describe("fuzz: adversarial inputs", () => {
    it("any parseable adversarial input stabilizes after one round-trip", async () => {
      await fc.assert(
        fc.asyncProperty(arbAdversarialInput, async (msg) => {
          // Try to parse — if the parser throws, skip this input.
          let firstPass: string;
          try {
            firstPass = String(await roundTripProcessor.process(msg));
          } catch {
            return;
          }

          // If it parsed, the round-trip MUST be idempotent — no swallowing here.
          const secondPass = String(
            await roundTripProcessor.process(firstPass)
          );
          expect(normalize(secondPass)).toBe(normalize(firstPass));
        }),
        { numRuns: 300 }
      );
    });
  });
});
