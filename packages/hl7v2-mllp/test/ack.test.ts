import { describe, expect, it } from "vitest";
import { AckCode, generateAck, generateNak, parseMsh } from "../src/ack.js";

const SAMPLE_MESSAGE =
  "MSH|^~\\&|SENDING_APP|SENDING_FAC|RECEIVING_APP|RECEIVING_FAC|20250128120000||ADT^A01|MSG00001|P|2.5.1\rEVN|A01|20250128120000\rPID|1||12345^^^MRN||DOE^JOHN";

describe("parseMsh", () => {
  it("should parse MSH segment from full message", () => {
    const msh = parseMsh(SAMPLE_MESSAGE);

    expect(msh.fieldSeparator).toBe("|");
    expect(msh.encodingCharacters).toBe("^~\\&");
    expect(msh.sendingApplication).toBe("SENDING_APP");
    expect(msh.sendingFacility).toBe("SENDING_FAC");
    expect(msh.receivingApplication).toBe("RECEIVING_APP");
    expect(msh.receivingFacility).toBe("RECEIVING_FAC");
    expect(msh.messageControlId).toBe("MSG00001");
    expect(msh.processingId).toBe("P");
    expect(msh.versionId).toBe("2.5.1");
  });

  it("should parse MSH segment alone", () => {
    const mshSegment =
      "MSH|^~\\&|APP1|FAC1|APP2|FAC2|20250128||ORU^R01|CTRL123|P|2.5";
    const msh = parseMsh(mshSegment);

    expect(msh.sendingApplication).toBe("APP1");
    expect(msh.receivingApplication).toBe("APP2");
    expect(msh.messageControlId).toBe("CTRL123");
  });

  it("should handle missing fields gracefully", () => {
    const msh = parseMsh("MSH|^~\\&|||");

    expect(msh.fieldSeparator).toBe("|");
    expect(msh.sendingApplication).toBe("");
    expect(msh.messageControlId).toBe("");
  });
});

describe("generateAck", () => {
  it("should generate a basic ACK with AA code", () => {
    const ack = generateAck(SAMPLE_MESSAGE);

    expect(ack).toContain("MSH|^~\\&|");
    expect(ack).toContain("MSA|AA|MSG00001");
    // Sender/receiver should be swapped
    expect(ack).toContain(
      "RECEIVING_APP|RECEIVING_FAC|SENDING_APP|SENDING_FAC"
    );
  });

  it("should generate ACK with custom code", () => {
    const ack = generateAck(SAMPLE_MESSAGE, { code: AckCode.AE });

    expect(ack).toContain("MSA|AE|MSG00001");
  });

  it("should include text message in MSA-3", () => {
    const ack = generateAck(SAMPLE_MESSAGE, {
      code: AckCode.AE,
      textMessage: "Invalid patient ID",
    });

    expect(ack).toContain("MSA|AE|MSG00001|Invalid patient ID");
  });

  it("should include ERR segment when errorCondition provided", () => {
    const ack = generateAck(SAMPLE_MESSAGE, {
      code: AckCode.AR,
      errorCondition: "Unknown segment XYZ",
    });

    expect(ack).toContain("ERR|Unknown segment XYZ");
  });

  it("should accept parsed MSH as input", () => {
    const msh = parseMsh(SAMPLE_MESSAGE);
    const ack = generateAck(msh);

    expect(ack).toContain("MSA|AA|MSG00001");
  });

  it("should allow custom sending application/facility", () => {
    const ack = generateAck(SAMPLE_MESSAGE, {
      sendingApplication: "CUSTOM_APP",
      sendingFacility: "CUSTOM_FAC",
    });

    expect(ack).toContain("CUSTOM_APP|CUSTOM_FAC|SENDING_APP|SENDING_FAC");
  });

  it("should preserve version from original message", () => {
    const ack = generateAck(SAMPLE_MESSAGE);

    // The ACK should use the same version as original
    const segments = ack.split("\r");
    const mshFields = segments[0].split("|");
    expect(mshFields[11]).toBe("2.5.1");
  });

  it("should generate unique control IDs", () => {
    const ack1 = generateAck(SAMPLE_MESSAGE);
    const ack2 = generateAck(SAMPLE_MESSAGE);

    const controlId1 = ack1.split("|")[9];
    const controlId2 = ack2.split("|")[9];

    // Control IDs should be different (unique)
    expect(controlId1).not.toBe(controlId2);
  });
});

describe("generateNak", () => {
  it("should generate a NAK with AR code by default", () => {
    const nak = generateNak(SAMPLE_MESSAGE, "Message rejected");

    expect(nak).toContain("MSA|AR|MSG00001|Message rejected");
    expect(nak).toContain("ERR|Message rejected");
  });

  it("should allow custom rejection code", () => {
    const nak = generateNak(SAMPLE_MESSAGE, "Processing error", AckCode.AE);

    expect(nak).toContain("MSA|AE|MSG00001|Processing error");
  });
});

describe("AckCode", () => {
  it("should have all standard codes", () => {
    expect(AckCode.AA).toBe("AA");
    expect(AckCode.AE).toBe("AE");
    expect(AckCode.AR).toBe("AR");
    expect(AckCode.CA).toBe("CA");
    expect(AckCode.CE).toBe("CE");
    expect(AckCode.CR).toBe("CR");
  });
});
