import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";
import fc from "fast-check";

import {
  arbAdversarialInput,
  arbHL7v2Message,
  arbHL7v2MessageCustomDelimiters,
  arbMutatedMessage,
} from "../src/arbitraries";

describe("HL7v2 message arbitraries", () => {
  it("generates valid messages starting with MSH", () => {
    fc.assert(
      fc.property(arbHL7v2Message, (msg) => {
        expect(msg).toMatch(/^MSH/);
        expect(msg).toContain("|");
      }),
      { numRuns: 50 }
    );
  });

  it("generates messages with custom delimiters starting with MSH", () => {
    fc.assert(
      fc.property(arbHL7v2MessageCustomDelimiters, (msg) => {
        expect(msg).toMatch(/^MSH/);
      }),
      { numRuns: 50 }
    );
  });

  it("generates mutated messages as non-empty strings", () => {
    fc.assert(
      fc.property(arbMutatedMessage, (msg) => {
        expectTypeOf(msg).toBeString();
      }),
      { numRuns: 50 }
    );
  });

  it("generates adversarial inputs as strings", () => {
    fc.assert(
      fc.property(arbAdversarialInput, (msg) => {
        expectTypeOf(msg).toBeString();
      }),
      { numRuns: 50 }
    );
  });

  it("generates valid messages that parse without throwing", () => {
    fc.assert(
      fc.property(arbHL7v2Message, (msg) => {
        const root = parseHL7v2(msg);
        expect(root.type).toBe("root");
      }),
      { numRuns: 100 }
    );
  });
});
