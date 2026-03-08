import { describe, expect, it } from "vitest";

import { MllpError } from "../../src/errors.js";
import { AckCode } from "../../src/middleware/ack/message.js";
import { AckError } from "../../src/server/error.js";

describe("AckError", () => {
  it("creates an error with code and message", () => {
    const err = new AckError("AE", "Missing patient ID");

    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(MllpError);
    expect(err).toBeInstanceOf(AckError);
    expect(err.name).toBe("AckError");
    expect(err.code).toBe("AE");
    expect(err.message).toBe("Missing patient ID");
    expect(err.errorCondition).toBeUndefined();
  });

  it("creates an error with code only", () => {
    const err = new AckError("AR");

    expect(err.code).toBe("AR");
    expect(err.message).toBe("");
  });

  it("stores errorCondition from options", () => {
    const err = new AckError("AE", "Bad segment", {
      errorCondition: "207",
    });

    expect(err.errorCondition).toBe("207");
  });

  it("chains cause from options", () => {
    const cause = new Error("DB connection failed");
    const err = new AckError("AR", "Database unavailable", { cause });

    expect(err.cause).toBe(cause);
  });

  it("works with all non-accept ACK codes", () => {
    for (const code of [AckCode.AE, AckCode.AR, AckCode.CE, AckCode.CR]) {
      const err = new AckError(code, `Test ${code}`);
      expect(err.code).toBe(code);
    }
  });

  it("has proper stack trace", () => {
    const err = new AckError("AE", "test error");
    expect(err.stack).toBeDefined();
    expect(err.stack).toContain("AckError");
  });
});
