import * as fs from "fs";
import * as path from "path";

import { Message } from "../message";

describe("HL7v2 Parser", () => {
  it("should store the original message", () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message);

    // Then
    expect(parser.raw).toEqual(message);
  });

  it("should retrieve the segments", () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message);

    // Then
    expect(parser.segments.length).toEqual(8);
  });

  it("should return the header segment (MSH)", () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message);

    // Then
    expect(parser.header.name).toEqual("MSH");
    expect(parser.header.raw).toBe(
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE"
    );
  });

  it("should return a JSON object", () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message);

    // Then
    expect(parser.toJson()).toMatchSnapshot();
  });
});
