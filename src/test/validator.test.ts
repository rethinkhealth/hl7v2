import { Message } from "../message";
import { Validator } from "../validator";

const getSample = (name: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const samples = require("./data/unit_testing.json").samples as [];
  const message = (samples.find((a: any) => a.name === name) as any)
    .message as string;
  if (!message) throw new Error("Message not found");
  return message;
};

describe("Validator", () => {
  it("should validate the message against the schema", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const message = new Message(raw);

    // When
    const result = new Validator().validate(message);

    // Then
    expect(result).toBe(true);
  });

  it("should validate nested groups", () => {
    const raw = getSample("SIU_S12 - multiple patients");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const message = new Message(raw);

    // When
    const result = new Validator().validate(message);

    // Then
    expect(result).toEqual(true);
  });

  it("should validate 2.5.1", () => {
    const raw = getSample("ORU - test from HL7.org");

    const message = new Message(raw);

    // When
    const result = new Validator().validate(message);

    // Then
    expect(result).toEqual(true);
  });

  it("should validate 2.9", () => {
    const raw = getSample("ADT_A01 - standard message for 2.9");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const message = new Message(raw);

    // When
    const result = new Validator().validate(message);

    // Then
    expect(result).toEqual(true);
  });

  it("should raise output error for invalid message", async () => {
    // Given
    const raw = getSample("SIU_S12 - missing PID segments");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const message = new Message(raw);
    // When
    const result = new Validator().validate(message);

    // Then
    expect(result).not.toEqual(true);
  });
});
