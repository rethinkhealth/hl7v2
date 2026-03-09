import { describe, expect, it } from "vitest";

import { AckError, AckReject } from "../src/errors";

describe("AckError", () => {
  it("creates an AE error with default values", () => {
    const error = new AckError("Something went wrong");
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckError);
    expect(error.message).toBe("Something went wrong");
    expect(error.code).toBe("AE");
    expect(error.text).toBeUndefined();
    expect(error.errorCode).toBeUndefined();
    expect(error.severity).toBeUndefined();
    expect(error.location).toBeUndefined();
    expect(error.userMessage).toBeUndefined();
  });

  it("creates an AE error with all ERR fields", () => {
    const error = new AckError("Validation failed", {
      errorCode: "207",
      location: "PID^1^3",
      severity: "E",
      text: "Missing required field",
      userMessage: "Patient name is required",
    });
    expect(error.code).toBe("AE");
    expect(error.text).toBe("Missing required field");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBe("E");
    expect(error.location).toBe("PID^1^3");
    expect(error.userMessage).toBe("Patient name is required");
  });

  it("has the correct name property", () => {
    const error = new AckError("test");
    expect(error.name).toBe("AckError");
  });
});

describe("AckReject", () => {
  it("creates an AR error with default values", () => {
    const error = new AckReject("Rejected");
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(AckReject);
    expect(error.message).toBe("Rejected");
    expect(error.code).toBe("AR");
  });

  it("creates an AR error with ERR fields", () => {
    const error = new AckReject("Unsupported", {
      errorCode: "200",
      severity: "E",
      userMessage: "Message type not supported",
    });
    expect(error.code).toBe("AR");
    expect(error.errorCode).toBe("200");
    expect(error.severity).toBe("E");
    expect(error.userMessage).toBe("Message type not supported");
  });

  it("has the correct name property", () => {
    const error = new AckReject("test");
    expect(error.name).toBe("AckReject");
  });
});
