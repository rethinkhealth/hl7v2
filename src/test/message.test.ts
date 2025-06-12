import { DefaultDelimiters } from "../delimiters";
import { HL7v2Message } from "../message";

const getSample = (name: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const samples = require("./data/unit_testing.json").samples as [];
  const message = (samples.find((a: any) => a.name === name) as any).message as string;
  if (!message) throw new Error("Message not found");
  return message;
};

interface MessageJSON {
  [segment: string]: {
    [field: string]: string | string[] | string[][];
  };
}

describe("HL7v2Message", () => {
  it("should store the original message", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);

    // Then
    expect(message.raw).toEqual(raw);
  });

  it("should parse fields correctly", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const mshField = message.getField("MSH", 1);

    // Then
    expect(mshField).toBeDefined();
    expect(mshField?.line).toBe(1);
    expect(mshField?.position).toBe(1);
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

  it("should get a single field", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const mshField = message.getField("MSH", 2);

    // Then
    expect(mshField).toBeDefined();
    expect(mshField?.line).toBe(1);
    expect(mshField?.position).toBe(2);
  });

  it("should get multiple fields", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with multiple NTE");

    // When
    const message = new HL7v2Message(raw);
    const nteFields = message.getFields("NTE", 1);

    // Then
    expect(nteFields.length).toBeGreaterThan(1);
    expect(nteFields[0].line).toBeLessThan(nteFields[1].line);
  });

  it("should get a component from a field", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const component = message.getComponent("MSH", 2, 1);

    // Then
    expect(component).toBeDefined();
  });

  it("should get components from multiple fields", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with multiple NTE");

    // When
    const message = new HL7v2Message(raw);
    const components = message.getComponents("NTE", 1, 1);

    // Then
    expect(components.length).toBeGreaterThan(0);
  });

  it("should return undefined for non-existent field", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const nonExistentField = message.getField("XYZ", 1);

    // Then
    expect(nonExistentField).toBeUndefined();
  });

  it("should return empty array for non-existent fields", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new HL7v2Message(raw);
    const nonExistentFields = message.getFields("XYZ", 1);

    // Then
    expect(nonExistentFields).toEqual([]);
  });

  it("should convert message to JSON", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");
    // When
    const message = new HL7v2Message(raw);
    const json = message.toJSON() as MessageJSON;

    // Then
    expect(json).toHaveProperty("MSH");
    expect(json.MSH).toHaveProperty("2");
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

  it("should handle empty message", () => {
    // Given
    const raw = "";

    // When
    const message = new HL7v2Message(raw);
    const json = message.toJSON();

    // Then
    expect(json).toEqual({});
  });

  it("should handle message with only whitespace", () => {
    // Given
    const raw = "   \n  \t  ";

    // When
    const message = new HL7v2Message(raw);
    const json = message.toJSON();

    // Then
    expect(json).toEqual({});
  });

  it("should handle custom delimiters in static parse method", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");
    const customDelimiters = {
      ...DefaultDelimiters,
      fieldSeparator: "$",
      componentSeparator: "%",
    };

    // When
    const message = HL7v2Message.parse(raw, { delimiters: customDelimiters });

    // Then
    expect(message.delimiters).toEqual(customDelimiters);
  });
});
