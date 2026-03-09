import { AckError, AckReject } from "../src/errors";
import {
  DuplicateMessageError,
  InternalError,
  UnknownPatientError,
  UnsupportedMessageTypeError,
} from "../src/predefined";

describe("UnknownPatientError", () => {
  it("extends AckError with errorCode 204", () => {
    const error = new UnknownPatientError("Patient 12345 not found");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("204");
    expect(error.severity).toBe("E");
    expect(error.message).toBe("Patient 12345 not found");
    expect(error.name).toBe("UnknownPatientError");
  });

  it("allows overriding optional fields", () => {
    const error = new UnknownPatientError("Not found", {
      location: "PID^1^3",
      userMessage: "Check patient ID",
    });
    expect(error.errorCode).toBe("204");
    expect(error.location).toBe("PID^1^3");
    expect(error.userMessage).toBe("Check patient ID");
  });
});

describe("DuplicateMessageError", () => {
  it("extends AckError with errorCode 205", () => {
    const error = new DuplicateMessageError("Duplicate MSG001");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("205");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("DuplicateMessageError");
  });
});

describe("InternalError", () => {
  it("extends AckError with errorCode 207", () => {
    const error = new InternalError("Database timeout");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("InternalError");
  });
});

describe("UnsupportedMessageTypeError", () => {
  it("extends AckReject with errorCode 200", () => {
    const error = new UnsupportedMessageTypeError("ADT^Z99 not supported");
    expect(error).toBeInstanceOf(AckReject);
    expect(error.code).toBe("AR");
    expect(error.errorCode).toBe("200");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("UnsupportedMessageTypeError");
  });
});
