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

  it("should have an Original JSON parsed format", async () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message);

    // Then
    expect(await parser.original).toMatchSnapshot();
  });

  it("should return the Original value if no Expression is provided", async () => {
    // Given
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message);

    // Then
    expect(await parser.toJson()).toBe(parser.original);
    expect(await parser.toJson()).toMatchSnapshot();
  });
});

describe("Message with JSONata expression", () => {
  it("should have expression defined", async () => {
    // Given
    const jsonataExpression = "PID.`6`";
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message, jsonataExpression);

    // Then
    expect(parser.expression).toBeDefined();
  });

  it("should keep JSON response equal to the Original value", async () => {
    // Given
    const jsonataExpression = "PID.`6`";
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message, jsonataExpression);

    // Then
    expect(await parser.toJson()).toBe(parser.original);
  });

  it("should retrieve JSONata value", async () => {
    // Given
    const jsonataExpression = "PID.`6`.`2` &  ' ' & PID.`6`.`1`";
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message, jsonataExpression);

    // Then
    expect(await parser.jsonata()).toEqual("James Bond");
  });

  it("should retrieve JSONata object", async () => {
    // Given
    const jsonataExpression =
      "{ 'name': PID.`6`.`2` &  ' ' & PID.`6`.`1`, 'address': { 'line1': PID.`12`.`1`, 'line2': PID.`12`.`2`, 'city': PID.`12`.`3`, 'state': PID.`12`.`4`, 'zipCode': PID.`12`.`5` }}";
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message, jsonataExpression);

    // Then
    expect(await parser.jsonata()).toEqual({
      name: "James Bond",
      address: {
        line1: "007 Soho Lane",
        line2: "",
        city: "Cary",
        state: "NC",
        zipCode: "27511",
      },
    });
  });

  it("should resolve JSONata from jsonata file", async () => {
    // Given
    const jsonata = fs
      .readFileSync(path.join(__dirname, "../jsonata/pid.jsonata"))
      .toString();
    const message = fs
      .readFileSync(path.join(__dirname, "../samples/siu_s12.txt"))
      .toString();

    // When
    const parser = new Message(message, jsonata);

    // Then
    expect(await parser.jsonata()).toMatchSnapshot();
  });
});
