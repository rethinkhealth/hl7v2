import fs from "fs";
import path from "path";

import { MessageHeader } from "../header";

describe("MSH message", () => {
  it("should return the elements with sequence for MSH", () => {
    // Given
    const input =
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE";

    // When
    const segment = new MessageHeader(input);

    // Then
    expect(segment.fields.length).toBe(16);
    expect(segment.toJson()).toEqual({
      "MSH.1": "|",
      "MSH.2": "^~\\&",
      "MSH.3": "Ntierprise",
      "MSH.4": "Ntierprise Clinic",
      "MSH.5": "Healthmatics EHR",
      "MSH.6": "Healthmatics Clinic",
      "MSH.7": "20190423114154",
      "MSH.8": "",
      "MSH.9": {
        "1": "SIU",
        "2": "S12",
      },
      "MSH.10": "8907-45",
      "MSH.11": "P",
      "MSH.12": "2.3",
      "MSH.13": "",
      "MSH.14": "",
      "MSH.15": "NE",
      "MSH.16": "NE",
    });
  });

  it("should return the elements with sequence for MSH", () => {
    // Given
    const input =
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE";

    // When
    const segment = new MessageHeader(input);

    // Then
    expect(segment.fields.length).toBe(16);
    expect(segment.messageType).toEqual("SIU_S12");
  });

  it("should have the default line to be 1", () => {
    // Given
    const input = "MSH|1||12345678^^^Ntierprise^MR||Doe^John";

    // When
    const segment = new MessageHeader(input);

    // Then
    expect(segment.line).toEqual(1);
  });

  it("should throw an error if the segment does not start with MSH", () => {
    // Given
    const input = "PID|1||12345678^^^Ntierprise^MR||Doe^John";

    // When
    const segment = () => new MessageHeader(input);

    // Then
    expect(segment).toThrowError("Message header must start with MSH");
  });

  it.each([
    [
      "2.5.1",
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.5.1|||NE|NE",
    ],
    [
      "2.8",
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.8|||NE|NE",
    ],
    [
      "2.3.1",
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3.1^^|||NE|NE",
    ],
  ])(
    "should return the version %s of the message",
    (expectedVersion, input) => {
      // When
      const segment = new MessageHeader(input);

      // Then
      expect(segment.version).toEqual(expectedVersion);
    }
  );
});
