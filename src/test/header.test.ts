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
    expect(segment.elements.length).toBe(16);
    expect(segment.toJson()).toEqual({
      "1": "|",
      "2": "^~\\&",
      "3": "Ntierprise",
      "4": "Ntierprise Clinic",
      "5": "Healthmatics EHR",
      "6": "Healthmatics Clinic",
      "7": "20190423114154",
      "8": "",
      "9": {
        "1": "SIU",
        "2": "S12",
      },
      "10": "8907-45",
      "11": "P",
      "12": "2.3",
      "13": "",
      "14": "",
      "15": "NE",
      "16": "NE",
    });
  });

  it("should throw an error if the segment does not start with MSH", () => {
    // Given
    const input = "PID|1||12345678^^^Ntierprise^MR||Doe^John";

    // When
    const segment = () => new MessageHeader(input);

    // Then
    expect(segment).toThrowError("Message header must start with MSH");
  });

  it("should parse JSONATA", async () => {
    const formatting = fs
      .readFileSync(path.join(__dirname, "../jsonata/msh.jsonata"))
      .toString();
    const input =
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE";
    const segment = new MessageHeader(input);
    const expression = await segment.transform(formatting);
    expect(expression).toMatchSnapshot();
  });
});
