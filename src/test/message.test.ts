import { DefaultDelimiters } from "../delimiters";
import { HL7v2Message } from "../message";

const getSample = (name: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const samples = require("./data/unit_testing.json").samples as [];
  const message = (samples.find((a: any) => a.name === name) as any).message as string;
  if (!message) throw new Error("Message not found");
  return message;
};

describe("HL7v2Message", () => {
  it("should store the original message", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);

    // Then
    expect(message.raw).toEqual(raw);
  });

  it("should parse segments correctly", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);

    // Then
    expect(message.segments.length).toBeGreaterThan(0);
    expect(message.segments[0].name).toBe("MSH");
  });

  it("should use default delimiters if not provided", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);

    // Then
    expect(message.delimiters).toEqual(DefaultDelimiters);
  });

  it("should use custom delimiters if provided", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");
    const customDelimiters = {
      ...DefaultDelimiters,
      fieldSeparator: "$",
      componentSeparator: "%",
    };

    // When
    const message = new HL7v2Message(raw, { delimiters: customDelimiters });

    // Then
    expect(message.delimiters).toEqual(customDelimiters);
  });

  it("should get a single segment by name", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const mshSegment = message.getSegment("MSH");

    // Then
    expect(mshSegment).toBeDefined();
    expect(mshSegment?.name).toBe("MSH");
  });

  it("should get all segments by name", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with multiple NTE");

    // When
    const message = new HL7v2Message(raw);
    const nteSegments = message.getSegments("NTE");

    // Then
    expect(nteSegments.length).toBeGreaterThan(1);
    expect(nteSegments.every((s) => s.name === "NTE")).toBe(true);
  });

  it("should return undefined for non-existent segment", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const nonExistentSegment = message.getSegment("XYZ");

    // Then
    expect(nonExistentSegment).toBeUndefined();
  });

  it("should return empty array for non-existent segments", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const nonExistentSegments = message.getSegments("XYZ");

    // Then
    expect(nonExistentSegments).toEqual([]);
  });

  it("should convert message to JSON", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const json = message.toJSON();

    // Then
    expect(json).toHaveProperty("MSH");
    expect(json).toHaveProperty("SCH");
    expect(json).toHaveProperty("NTE");
  });

  it("should convert message to string", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const str = message.toString();

    // Then
    expect(str).toBe(raw);
  });

  it("should parse message using static parse method", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = HL7v2Message.parse(raw);

    // Then
    expect(message).toBeInstanceOf(HL7v2Message);
    expect(message.raw).toBe(raw);
  });
});
