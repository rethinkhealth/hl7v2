import * as fs from "fs";
import * as path from "path";

import { Message } from "../message";

describe("HL7v2 Message", () => {
  it("should store the original message", () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const message = new Message(raw);

    // Then
    expect(message.raw).toEqual(raw);
  });

  it("should have delimiters extracted from the message", () => {
    // Given
    const raw = `MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE`;

    // When
    const message = new Message(raw);

    // Then
    expect(message.delimiters).toHaveProperty("repeatSeparator", "~");
    expect(message.delimiters).toHaveProperty("escapeSeparator", "\\");
    expect(message.delimiters).toHaveProperty("componentSeparator", "^");
    expect(message.delimiters).toHaveProperty("fieldSeparator", "|");
    expect(message.delimiters).toHaveProperty("subComponentSeparator", "&");
  });

  it("should have custom delimiters extracted from the message", () => {
    // Given
    const raw = `MSH$%*/@$Ntierprise$Ntierprise Clinic$Healthmatics EHR$Healthmatics Clinic$20190423114154$$SIU%S12$8907-45$P$2.3$$$NE$NE`;

    // When
    const message = new Message(raw);

    // Then
    expect(message.delimiters).toHaveProperty("fieldSeparator", "$");
    expect(message.delimiters).toHaveProperty("componentSeparator", "%");
    expect(message.delimiters).toHaveProperty("repeatSeparator", "*");
    expect(message.delimiters).toHaveProperty("escapeSeparator", "/");
    expect(message.delimiters).toHaveProperty("subComponentSeparator", "@");
  });

  it("should retrieve the segments", () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const message = new Message(raw);

    // Then
    expect(message.segments.length).toEqual(11);
  });

  it("should return the header segment (MSH)", () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const message = new Message(raw);

    // Then
    expect(message.header.name).toEqual("MSH");
    expect(message.header.raw).toBe(
      "MSH|^~\\\\&||APPT_NEW|||20210917093833|78797|SIU^S12|82636|T|2.5.1|||||||||||"
    );
  });

  it("should have an Original JSON parsed format", async () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const message = new Message(raw);

    // Then
    expect(await message.original).toMatchSnapshot();
  });

  it("should parse message with custom delimiters", async () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12_custom.txt"))
      .toString();

    // When
    const message = new Message(raw);

    // Then
    expect(await message.original).toMatchSnapshot();
  });

  it("should return the Original value if no Expression is provided", async () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const message = new Message(raw);

    // Then
    expect(message.toJson()).toBe(message.original);
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should handle repetead segments", async () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/vxu_v04.txt"))
      .toString();

    // When
    const message = new Message(raw);

    // Then
    expect(message.segments.filter((a) => a.name === "OBX").length).toEqual(5);
    expect(message.toJson()).toMatchSnapshot();
  });
});

describe("Message schema validation", () => {
  it("should validate the message against the schema", async () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();
    const message = new Message(raw);

    // When
    const result = await message.validate(false);

    // Then
    expect(result).toBeTruthy();
  });

  it("should not validate the message against the schema", async () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12_invalid.txt"))
      .toString();
    const message = new Message(raw);

    // When
    const result = await message.validate();

    // Then
    expect(result).toBeFalsy();
  });

  it("should not validate the message against the schema with error", async () => {
    // Given
    const raw = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12_invalid.txt"))
      .toString();
    const message = new Message(raw);

    // When
    const result = async () => await message.validate(false);

    // Then
    await expect(result).rejects.toThrowError();
  });
});
