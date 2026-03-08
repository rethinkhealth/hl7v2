import { describe, expect, it } from "vitest";

import { AckCode } from "../../src/ack.js";
import { MllpException } from "../../src/server/exception.js";

describe("MllpException", () => {
  it("creates an exception with code and message", () => {
    const ex = new MllpException("AE", "Missing patient ID");

    expect(ex).toBeInstanceOf(Error);
    expect(ex).toBeInstanceOf(MllpException);
    expect(ex.name).toBe("MllpException");
    expect(ex.code).toBe("AE");
    expect(ex.message).toBe("Missing patient ID");
    expect(ex.errorCondition).toBeUndefined();
  });

  it("creates an exception with code only", () => {
    const ex = new MllpException("AR");

    expect(ex.code).toBe("AR");
    expect(ex.message).toBe("");
  });

  it("stores errorCondition from options", () => {
    const ex = new MllpException("AE", "Bad segment", {
      errorCondition: "207",
    });

    expect(ex.errorCondition).toBe("207");
  });

  it("chains cause from options", () => {
    const cause = new Error("DB connection failed");
    const ex = new MllpException("AR", "Database unavailable", { cause });

    expect(ex.cause).toBe(cause);
  });

  it("works with all non-accept ACK codes", () => {
    for (const code of [AckCode.AE, AckCode.AR, AckCode.CE, AckCode.CR]) {
      const ex = new MllpException(code, `Test ${code}`);
      expect(ex.code).toBe(code);
    }
  });

  it("has proper stack trace", () => {
    const ex = new MllpException("AE", "test error");
    expect(ex.stack).toBeDefined();
    expect(ex.stack).toContain("MllpException");
  });
});
