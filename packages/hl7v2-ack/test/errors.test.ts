import { describe, expect, it } from "vitest";

import { AckError, AckException, AckReject } from "../src/errors";

describe("AckException", () => {
  it("is the base class for both AckError and AckReject", () => {
    const error = new AckError("test", { errorCode: "207" });
    const reject = new AckReject("test", { errorCode: "200" });
    expect(error).toBeInstanceOf(AckException);
    expect(reject).toBeInstanceOf(AckException);
  });

  it("allows a single instanceof check for any ACK error", () => {
    const errors: unknown[] = [
      new AckError("err", { errorCode: "207" }),
      new AckReject("rej", { errorCode: "200" }),
    ];
    for (const e of errors) {
      expect(e).toBeInstanceOf(AckException);
    }
  });
});

describe("AckError", () => {
  it("creates an AE error with required errorCode", () => {
    const error = new AckError("Something went wrong", { errorCode: "207" });
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckError);
    expect(error.message).toBe("Something went wrong");
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBeUndefined();
  });

  it("creates an AE error with severity", () => {
    const error = new AckError("Validation failed", {
      errorCode: "207",
      severity: "E",
    });
    expect(error.code).toBe("AE");
    expect(error.message).toBe("Validation failed");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBe("E");
  });

  it("has the correct name property", () => {
    const error = new AckError("test", { errorCode: "207" });
    expect(error.name).toBe("AckError");
  });

  it("preserves the cause when provided", () => {
    const cause = new Error("root cause");
    const error = new AckError("Something went wrong", {
      cause,
      errorCode: "207",
    });
    expect(error.cause).toBe(cause);
  });

  it("has a stack trace", () => {
    const error = new AckError("test", { errorCode: "207" });
    expect(error.stack).toBeDefined();
    expect(error.stack).toContain("AckError");
  });
});

describe("AckReject", () => {
  it("creates an AR error with required errorCode", () => {
    const error = new AckReject("Rejected", { errorCode: "200" });
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckReject);
    expect(error.message).toBe("Rejected");
    expect(error.code).toBe("AR");
    expect(error.errorCode).toBe("200");
  });

  it("creates an AR error with severity", () => {
    const error = new AckReject("Unsupported", {
      errorCode: "200",
      severity: "E",
    });
    expect(error.code).toBe("AR");
    expect(error.errorCode).toBe("200");
    expect(error.severity).toBe("E");
    expect(error.message).toBe("Unsupported");
  });

  it("has the correct name property", () => {
    const error = new AckReject("test", { errorCode: "200" });
    expect(error.name).toBe("AckReject");
  });

  it("preserves the cause when provided", () => {
    const cause = new TypeError("invalid input");
    const error = new AckReject("Rejected", {
      cause,
      errorCode: "200",
    });
    expect(error.cause).toBe(cause);
  });

  it("has a stack trace", () => {
    const error = new AckReject("test", { errorCode: "200" });
    expect(error.stack).toBeDefined();
    expect(error.stack).toContain("AckReject");
  });
});
