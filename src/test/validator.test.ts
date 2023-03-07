import { Message } from "../message";
import { Validator } from "../validator";

const getSample = (name: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const samples = require("../samples/unit_testing.json").samples as [];
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
    const schema = require("../schema/2.8/SIU_S12.schema.json");
    const message = new Message(raw);

    // When
    const result = new Validator(schema).validate(message.toJson());

    // Then
    expect(result).toEqual(true);
  });

  it("should validate nested groups", () => {
    const raw = getSample("SIU_S12 - multiple patients");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const schema = require("../schema/2.8/SIU_S12.schema.json");
    const message = new Message(raw);

    // When
    const result = new Validator(schema).validate(message.toJson());

    // Then
    expect(result).toEqual(true);
  });

  it("should raise output error for invalid message", async () => {
    // Given
    const raw = getSample("SIU_S12 - missing PID segments");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const schema = require("../schema/2.8/SIU_S12.schema.json");
    const message = new Message(raw);

    // When
    const result = new Validator(schema).validate(message.toJson());

    // Then
    expect(result).not.toEqual(true);
  });
});
