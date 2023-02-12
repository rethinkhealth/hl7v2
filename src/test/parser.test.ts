import * as fs from "fs";
import * as path from "path";

import { Parser } from "../parser";

describe("HL7v2 Parser", () => {
  it("should store the original message", () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Parser(message);

    // Then
    expect(parser.raw).toEqual(message);
  });

  it("should retrieve the segments", () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Parser(message);

    // Then
    expect(parser.segments.length).toEqual(8);
  });

  it("should return a JSON object", () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Parser(message);

    // Then
    expect(parser.toJson()).toMatchSnapshot();
  });
});
