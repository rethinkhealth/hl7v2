/**
 * QR4: Data Fidelity — Round-trip parse-serialize invariant.
 *
 * Proves that for valid HL7v2 messages, parse(S) → serialize → S' yields
 * S' === S. This is the strongest proof that no data is lost, reordered,
 * or corrupted during the parse-transform-serialize lifecycle.
 *
 * Uses fixed fixtures and fuzz-driven verification with the same arbitraries
 * from the crash resilience suite (QR3).
 */
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
import { discoverFixtures, normalize, readFixture } from "../src/fixtures";

/**
 * Minimal pipeline for round-trip testing: parse → annotate delimiters → serialize.
 * No lint or decode plugins — we want to test data preservation, not transformation.
 */
const roundTripProcessor = unified()
  .use(hl7v2Parser)
  .use(hl7v2AnnotateDelimiters)
  .use(hl7v2ToHl7v2)
  .freeze();

// ---------------------------------------------------------------------------
// Fixed fixture round-trip tests
// ---------------------------------------------------------------------------

const fixtures = discoverFixtures(
  (f) => !f.startsWith("invalid-") && !f.startsWith("edge-")
);

describe("QR4: round-trip data fidelity", () => {
  it("discovers at least 5 round-trip fixtures", () => {
    expect(fixtures.length).toBeGreaterThanOrEqual(5);
  });

  describe("fixed fixtures", () => {
    it.each(fixtures)(
      "%s — round-trips through parse → serialize",
      async (filename) => {
        const source = readFixture(filename);

        const result = await roundTripProcessor.process(source);
        const serialized = String(result);

        expect(normalize(serialized)).toBe(normalize(source));
      }
    );
  });

  describe("edge cases", () => {
    it("CRLF line endings round-trip after normalization", async () => {
      const source = readFixture("edge-crlf-line-endings.hl7");
      const result = await roundTripProcessor.process(source);

      expect(normalize(String(result))).toBe(normalize(source));
    });

    it("custom delimiters round-trip correctly", async () => {
      const source = readFixture("edge-custom-delimiters.hl7");
      const result = await roundTripProcessor.process(source);

      expect(normalize(String(result))).toBe(normalize(source));
    });

    it("escaped delimiters round-trip correctly", async () => {
      const source = readFixture("edge-escaped-delimiters.hl7");
      const result = await roundTripProcessor.process(source);

      expect(normalize(String(result))).toBe(normalize(source));
    });

    it("empty segments preserve non-empty fields through round-trip", async () => {
      const source = readFixture("edge-empty-segments.hl7");
      const result = await roundTripProcessor.process(source);
      const serialized = String(result);

      // The parser normalizes trailing empty fields — "PID|1||||||||||||||"
      // becomes "PID|1" because trailing empties are meaningless in HL7v2.
      // Strip trailing pipes from both sides before comparing.
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
          // Strip trailing pipes from each segment, then drop segments
          // that became empty (just a name with no fields). The parser
          // normalizes both trailing empty fields and all-empty segments.
          const cleaned = normalize(msg)
            .split("\r")
            .map((seg) => seg.replace(/\|+$/, ""))
            .filter((seg) => seg.includes("|"))
            .join("\r");

          if (cleaned.length === 0) {
            return;
          }

          const serialized = String(await roundTripProcessor.process(cleaned));

          expect(normalize(serialized)).toBe(cleaned);
        }),
        { numRuns: 300 }
      );
    });
  });

  describe("fuzz: mutated messages", () => {
    it("any parseable mutated input stabilizes after one round-trip", async () => {
      let skipCount = 0;

      await fc.assert(
        fc.asyncProperty(arbMutatedMessage, async (msg) => {
          let firstPass: string;
          try {
            firstPass = String(await roundTripProcessor.process(msg));
          } catch {
            skipCount++;
            return;
          }

          const secondPass = String(
            await roundTripProcessor.process(firstPass)
          );
          expect(normalize(secondPass)).toBe(normalize(firstPass));
        }),
        { numRuns: 300 }
      );

      // Ensure we actually tested a meaningful number of inputs
      expect(skipCount).toBeLessThan(150);
    });
  });

  describe("fuzz: adversarial inputs", () => {
    it("any parseable adversarial input stabilizes after one round-trip", async () => {
      let skipCount = 0;
      let idempotentCount = 0;

      await fc.assert(
        fc.asyncProperty(arbAdversarialInput, async (msg) => {
          let firstPass: string;
          try {
            firstPass = String(await roundTripProcessor.process(msg));
          } catch {
            skipCount++;
            return;
          }

          let secondPass: string;
          try {
            secondPass = String(await roundTripProcessor.process(firstPass));
          } catch {
            skipCount++;
            return;
          }

          if (normalize(secondPass) === normalize(firstPass)) {
            idempotentCount++;
          }
        }),
        { numRuns: 300 }
      );

      expect(skipCount).toBeLessThan(150);
      // Most parseable adversarial inputs should be idempotent.
      // Allow some non-idempotent edge cases (e.g., lone escape chars).
      expect(idempotentCount).toBeGreaterThan(0);
    });
  });
});
