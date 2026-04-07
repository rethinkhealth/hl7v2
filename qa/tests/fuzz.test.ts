/**
 * QR3: Crash Resilience — Property-based fuzz testing.
 *
 * Uses fast-check to prove the parser never throws an exception on any input.
 * Every error must be surfaced as a VFileMessage diagnostic, never as a thrown
 * exception. This is the crash boundary that protects every consumer
 * application.
 */
import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";
import fc from "fast-check";

import {
  arbAdversarialInput,
  arbHL7v2Message,
  arbHL7v2MessageCustomDelimiters,
  arbMutatedCustomDelimiterMessage,
  arbMutatedMessage,
} from "../src/arbitraries";

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

const NUM_RUNS = 300;

describe("QR3: crash resilience", () => {
  describe("structurally valid messages", () => {
    it("parser always returns a Root node", () => {
      fc.assert(
        fc.property(arbHL7v2Message, (msg) => {
          const root = parseHL7v2(msg);
          expect(root.type).toBe("root");
        }),
        { numRuns: NUM_RUNS }
      );
    });

    it("AST root position covers the full source range", () => {
      fc.assert(
        fc.property(arbHL7v2Message, (msg) => {
          const root = parseHL7v2(msg);
          expect(root.position).toBeDefined();
          if (!root.position) {
            return;
          }
          expect(root.position.start.offset).toBe(0);
          expect(root.position.end.offset).toBeGreaterThanOrEqual(
            msg.length - 1
          );
        }),
        { numRuns: NUM_RUNS }
      );
    });
  });

  describe("custom delimiter messages", () => {
    it("parser always returns a Root node", () => {
      fc.assert(
        fc.property(arbHL7v2MessageCustomDelimiters, (msg) => {
          const root = parseHL7v2(msg);
          expect(root.type).toBe("root");
        }),
        { numRuns: NUM_RUNS }
      );
    });

    it("AST root position covers the full source range", () => {
      fc.assert(
        fc.property(arbHL7v2MessageCustomDelimiters, (msg) => {
          const root = parseHL7v2(msg);
          expect(root.position).toBeDefined();
          if (!root.position) {
            return;
          }
          expect(root.position.start.offset).toBe(0);
          expect(root.position.end.offset).toBeGreaterThanOrEqual(
            msg.length - 1
          );
        }),
        { numRuns: NUM_RUNS }
      );
    });
  });

  describe("mutated messages", () => {
    it("parser never throws on corrupted input", () => {
      fc.assert(
        fc.property(arbMutatedMessage, (msg) => {
          const root = parseHL7v2(msg);
          expect(root.type).toBe("root");
        }),
        { numRuns: NUM_RUNS }
      );
    });
  });

  describe("mutated custom delimiter messages", () => {
    it("parser never throws on corrupted input", () => {
      fc.assert(
        fc.property(arbMutatedCustomDelimiterMessage, (msg) => {
          const root = parseHL7v2(msg);
          expect(root.type).toBe("root");
        }),
        { numRuns: NUM_RUNS }
      );
    });
  });

  describe("adversarial inputs", () => {
    it("parser never throws on adversarial input", () => {
      fc.assert(
        fc.property(arbAdversarialInput, (msg) => {
          const root = parseHL7v2(msg);
          expect(root.type).toBe("root");
        }),
        { numRuns: NUM_RUNS }
      );
    });
  });
});
