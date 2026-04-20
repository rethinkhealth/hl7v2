import { parseHL7v2 } from "@glion/parser";
import fc from "fast-check";

import {
  arbAdversarialInput,
  arbHL7v2Message,
  arbHL7v2MessageCustomDelimiters,
  arbMutatedCustomDelimiterMessage,
  arbMutatedMessage,
} from "../src/arbitraries";
import { normalize } from "../src/fixtures";

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

  it("generates mutated custom-delimiter messages as strings", () => {
    fc.assert(
      fc.property(arbMutatedCustomDelimiterMessage, (msg) => {
        expectTypeOf(msg).toBeString();
      }),
      { numRuns: 50 }
    );
  });

  it("generates mutated messages as strings", () => {
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

describe("normalize()", () => {
  it("converts LF to CR", () => {
    expect(normalize("MSH|a\nPID|b")).toBe("MSH|a\rPID|b");
  });

  it("converts CRLF to CR", () => {
    expect(normalize("MSH|a\r\nPID|b")).toBe("MSH|a\rPID|b");
  });

  it("trims trailing CR", () => {
    expect(normalize("MSH|a\rPID|b\r")).toBe("MSH|a\rPID|b");
  });

  it("trims multiple trailing CRs", () => {
    expect(normalize("MSH|a\r\r\r")).toBe("MSH|a");
  });

  it("handles mixed line endings", () => {
    expect(normalize("MSH|a\r\nPID|b\nPV1|c\r")).toBe("MSH|a\rPID|b\rPV1|c");
  });

  it("returns empty string unchanged", () => {
    expect(normalize("")).toBe("");
  });
});
