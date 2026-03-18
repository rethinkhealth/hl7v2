import { describe, expect, it } from "vitest";

import {
  AckApplicationError,
  AckApplicationReject,
  AckCommitError,
  AckCommitReject,
  AckError,
  AckException,
  AckReject,
} from "../src/errors";

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
    expect(error.name).toBe("AckApplicationError");
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
    expect(error.stack).toContain("AckApplicationError");
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
    expect(error.name).toBe("AckApplicationReject");
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
    expect(error.stack).toContain("AckApplicationReject");
  });
});

describe("AckApplicationError", () => {
  it("creates an AE error with required errorCode", () => {
    const error = new AckApplicationError("Something went wrong", {
      errorCode: "207",
    });
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckException);
    expect(error).toBeInstanceOf(AckApplicationError);
    expect(error.message).toBe("Something went wrong");
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBeUndefined();
    expect(error.name).toBe("AckApplicationError");
  });

  it("creates an AE error with severity", () => {
    const error = new AckApplicationError("Validation failed", {
      errorCode: "207",
      severity: "E",
    });
    expect(error.code).toBe("AE");
    expect(error.severity).toBe("E");
  });

  it("preserves the cause when provided", () => {
    const cause = new Error("root cause");
    const error = new AckApplicationError("fail", {
      cause,
      errorCode: "207",
    });
    expect(error.cause).toBe(cause);
  });
});

describe("AckApplicationReject", () => {
  it("creates an AR error with required errorCode", () => {
    const error = new AckApplicationReject("Rejected", { errorCode: "200" });
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckException);
    expect(error).toBeInstanceOf(AckApplicationReject);
    expect(error.message).toBe("Rejected");
    expect(error.code).toBe("AR");
    expect(error.errorCode).toBe("200");
    expect(error.name).toBe("AckApplicationReject");
  });

  it("creates an AR error with severity", () => {
    const error = new AckApplicationReject("Unsupported", {
      errorCode: "200",
      severity: "E",
    });
    expect(error.code).toBe("AR");
    expect(error.severity).toBe("E");
  });
});

describe("AckCommitError", () => {
  it("creates a CE error with required errorCode", () => {
    const error = new AckCommitError("Commit failed", { errorCode: "207" });
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckException);
    expect(error).toBeInstanceOf(AckCommitError);
    expect(error.message).toBe("Commit failed");
    expect(error.code).toBe("CE");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBeUndefined();
    expect(error.name).toBe("AckCommitError");
  });

  it("creates a CE error with severity", () => {
    const error = new AckCommitError("Storage failure", {
      errorCode: "207",
      severity: "E",
    });
    expect(error.code).toBe("CE");
    expect(error.severity).toBe("E");
  });

  it("preserves the cause when provided", () => {
    const cause = new Error("disk full");
    const error = new AckCommitError("fail", { cause, errorCode: "207" });
    expect(error.cause).toBe(cause);
  });
});

describe("AckCommitReject", () => {
  it("creates a CR error with required errorCode", () => {
    const error = new AckCommitReject("Commit rejected", { errorCode: "200" });
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckException);
    expect(error).toBeInstanceOf(AckCommitReject);
    expect(error.message).toBe("Commit rejected");
    expect(error.code).toBe("CR");
    expect(error.errorCode).toBe("200");
    expect(error.severity).toBeUndefined();
    expect(error.name).toBe("AckCommitReject");
  });

  it("creates a CR error with severity", () => {
    const error = new AckCommitReject("Not accepted", {
      errorCode: "200",
      severity: "E",
    });
    expect(error.code).toBe("CR");
    expect(error.severity).toBe("E");
  });

  it("preserves the cause when provided", () => {
    const cause = new TypeError("invalid");
    const error = new AckCommitReject("fail", { cause, errorCode: "200" });
    expect(error.cause).toBe(cause);
  });
});

describe("backward-compatible aliases", () => {
  it("AckError is an alias for AckApplicationError", () => {
    expect(AckError).toBe(AckApplicationError);
  });

  it("AckReject is an alias for AckApplicationReject", () => {
    expect(AckReject).toBe(AckApplicationReject);
  });

  it("AckError instances are instanceof AckApplicationError", () => {
    const error = new AckError("test", { errorCode: "207" });
    expect(error).toBeInstanceOf(AckApplicationError);
    expect(error.name).toBe("AckApplicationError");
  });

  it("AckReject instances are instanceof AckApplicationReject", () => {
    const error = new AckReject("test", { errorCode: "200" });
    expect(error).toBeInstanceOf(AckApplicationReject);
    expect(error.name).toBe("AckApplicationReject");
  });
});

describe("instanceof grouping", () => {
  it("all four subclasses are instanceof AckException", () => {
    const errors: unknown[] = [
      new AckApplicationError("e", { errorCode: "207" }),
      new AckApplicationReject("r", { errorCode: "200" }),
      new AckCommitError("ce", { errorCode: "207" }),
      new AckCommitReject("cr", { errorCode: "200" }),
    ];
    for (const e of errors) {
      expect(e).toBeInstanceOf(AckException);
    }
  });
});
