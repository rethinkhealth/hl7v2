import { AckError, AckReject } from "../src/errors";
import {
  AckDuplicateMessageError,
  AckInternalError,
  AckUnknownPatientError,
  AckUnsupportedMessageTypeError,
} from "../src/predefined";

describe("AckUnknownPatientError", () => {
  it("extends AckError with errorCode 204", () => {
    const error = new AckUnknownPatientError("Patient 12345 not found");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("204");
    expect(error.severity).toBe("E");
    expect(error.message).toBe("Patient 12345 not found");
    expect(error.name).toBe("AckUnknownPatientError");
  });

  it("allows overriding optional fields", () => {
    const error = new AckUnknownPatientError("Not found", {
      location: "PID^1^3",
      userMessage: "Check patient ID",
    });
    expect(error.errorCode).toBe("204");
    expect(error.location).toBe("PID^1^3");
    expect(error.userMessage).toBe("Check patient ID");
  });
});

describe("AckDuplicateMessageError", () => {
  it("extends AckError with errorCode 205", () => {
    const error = new AckDuplicateMessageError("Duplicate MSG001");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("205");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("AckDuplicateMessageError");
  });
});

describe("AckInternalError", () => {
  it("extends AckError with errorCode 207", () => {
    const error = new AckInternalError("Database timeout");
    expect(error).toBeInstanceOf(AckError);
    expect(error.code).toBe("AE");
    expect(error.errorCode).toBe("207");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("AckInternalError");
  });
});

describe("AckUnsupportedMessageTypeError", () => {
  it("extends AckReject with errorCode 200", () => {
    const error = new AckUnsupportedMessageTypeError("ADT^Z99 not supported");
    expect(error).toBeInstanceOf(AckReject);
    expect(error.code).toBe("AR");
    expect(error.errorCode).toBe("200");
    expect(error.severity).toBe("E");
    expect(error.name).toBe("AckUnsupportedMessageTypeError");
  });
});
