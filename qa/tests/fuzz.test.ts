/**
 * QR3: Crash Resilience — Property-based fuzz testing.
 *
 * Uses fast-check to prove the parser never throws an exception on any input.
 * Every error must be surfaced as a VFileMessage diagnostic, never as a thrown
 * exception. This is the crash boundary that protects every consumer application.
 *
 * ## Crash tolerance thresholds
 *
 * The parser currently has known throw paths (see processor.ts). The thresholds
 * below document the current crash rate and serve as ratchets — tighten them as
 * the parser is hardened. The target for all thresholds is 0.
 *
 * When a threshold is non-zero, the test prints a warning with counterexamples
 * so the crash rate stays visible in CI output even when the test passes.
 */
import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";
import fc from "fast-check";

import {
  arbAdversarialInput,
  arbHL7v2Message,
  arbMutatedMessage,
} from "../src/arbitraries";

// ---------------------------------------------------------------------------
// Crash tolerance thresholds — ratchet these toward 0
// ---------------------------------------------------------------------------

/**
 * Maximum number of allowed parser throws per 300 runs.
 * Tighten these as crash-inducing inputs are fixed in hl7v2-parser.
 *
 * To check current crash rates, run: pnpm --filter @rethinkhealth/qa test
 * and look for "parser crashed on N/300" warnings in the output.
 */
const CRASH_TOLERANCE = {
  /** Mutated messages: valid messages with random corruption applied */
  mutated: 0,
  /** Adversarial inputs: arbitrary strings, null bytes, emoji, etc. */
  adversarial: 0,
} as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface ParsedRoot {
  type: string;
  position?: {
    start: { offset?: number };
    end: { offset?: number };
  };
}

function safeParse(
  input: string
): { ok: true; root: ParsedRoot } | { ok: false; error: string } {
  try {
    const root = parseHL7v2(input);
    return { ok: true, root };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Assert crash count is within tolerance. Always warn when crashes > 0
 * so the count stays visible in CI output even when passing.
 */
function assertCrashTolerance(
  category: string,
  throwCount: number,
  numRuns: number,
  tolerance: number,
  counterexamples: string[]
) {
  if (throwCount > 0 && tolerance > 0) {
    const examples =
      counterexamples.length > 0
        ? `\n  Counterexamples:\n    ${counterexamples.join("\n    ")}`
        : "";
    // Print a visible warning in test output so crash rate stays visible
    // even when within tolerance. This prevents the threshold from being
    // forgotten — every CI run shows the current crash count.
    const warning = `⚠ [QR3] parser crashed on ${throwCount}/${numRuns} ${category} inputs (tolerance: ${tolerance}, target: 0)${examples}`;
    // biome-ignore lint/suspicious/noConsole: intentional CI visibility for crash rate tracking
    console.warn(warning);
  }

  expect(
    throwCount,
    `Parser crashed on ${throwCount}/${numRuns} ${category} inputs (tolerance: ${tolerance}). Counterexamples:\n${counterexamples.join("\n")}`
  ).toBeLessThanOrEqual(tolerance);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

const NUM_RUNS = 300;

describe("QR3: crash resilience", () => {
  describe("structurally valid messages", () => {
    it("parser always returns a Root node", () => {
      fc.assert(
        fc.property(arbHL7v2Message, (msg) => {
          const result = safeParse(msg);
          expect(result.ok).toBe(true);
          if (result.ok) {
            expect(result.root.type).toBe("root");
          }
        }),
        { numRuns: NUM_RUNS }
      );
    });

    it("AST root position covers the full source range", () => {
      fc.assert(
        fc.property(arbHL7v2Message, (msg) => {
          const result = safeParse(msg);
          expect(result.ok).toBe(true);
          if (!result.ok) {
            return;
          }

          const { root } = result;
          if (root.position) {
            expect(root.position.start.offset).toBe(0);
            if (root.position.end.offset !== undefined) {
              expect(root.position.end.offset).toBeGreaterThanOrEqual(
                msg.length - 1
              );
            }
          }
        }),
        { numRuns: 200 }
      );
    });
  });

  describe("mutated messages", () => {
    it("parser crash rate is within tolerance", () => {
      let throwCount = 0;
      const counterexamples: string[] = [];

      fc.assert(
        fc.property(arbMutatedMessage, (msg) => {
          const result = safeParse(msg);
          if (!result.ok) {
            throwCount++;
            if (counterexamples.length < 5) {
              counterexamples.push(
                `"${msg.slice(0, 80)}..." → ${result.error}`
              );
            }
          }
          if (result.ok) {
            expect(result.root.type).toBe("root");
          }
        }),
        { numRuns: NUM_RUNS }
      );

      assertCrashTolerance(
        "mutated",
        throwCount,
        NUM_RUNS,
        CRASH_TOLERANCE.mutated,
        counterexamples
      );
    });
  });

  describe("adversarial inputs", () => {
    it("parser crash rate is within tolerance", () => {
      let throwCount = 0;
      const counterexamples: string[] = [];

      fc.assert(
        fc.property(arbAdversarialInput, (msg) => {
          const result = safeParse(msg);
          if (!result.ok) {
            throwCount++;
            if (counterexamples.length < 5) {
              const preview =
                msg.length > 60
                  ? `${msg.slice(0, 60)}... (${msg.length} chars)`
                  : JSON.stringify(msg);
              counterexamples.push(`${preview} → ${result.error}`);
            }
          }
        }),
        { numRuns: NUM_RUNS }
      );

      assertCrashTolerance(
        "adversarial",
        throwCount,
        NUM_RUNS,
        CRASH_TOLERANCE.adversarial,
        counterexamples
      );
    });
  });
});
