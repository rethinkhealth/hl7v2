import { HL7v2Client } from "../src/client";

describe("HL7v2 - Generate", () => {
  let generator: HL7v2Client;

  beforeEach(() => {
    generator = new HL7v2Client();
  });

  // Basic message generation
  it("should generate empty message", () => {
    const result = generator.generate({});
    expect(result).toBe("\r");
  });

  // MSH segment handling
  it("should generate MSH segment with default delimiters", () => {
    const json = {
      MSH: {
        "3": "SIMHOSP",
        "4": "SFAC",
        "5": "RAPP",
        "6": "RFAC",
        "7": "20200508130643",
        "9": {
          "1": "ADT",
          "2": "A01"
        },
        "10": "5",
        "11": "T",
        "12": "2.3"
      }
    };

    const result = generator.generate(json);
    expect(result).toBe("MSH|^~\\&|SIMHOSP|SFAC|RAPP|RFAC|20200508130643||ADT^A01|5|T|2.3\r");
  });

  it("should generate MSH segment with custom delimiters", () => {
    const json = {
      MSH: {
        "1": "#",
        "2": "!@~$",
        "3": "SIMHOSP",
        "4": "SFAC",
        "5": "RAPP",
        "6": "RFAC",
        "7": "20200508130643",
        "9": {
          "1": "ADT",
          "2": "A01"
        },
        "10": "5",
        "11": "T",
        "12": "2.3"
      }
    };

    const result = generator.generate(json);
    expect(result).toBe("MSH#!@~$#SIMHOSP#SFAC#RAPP#RFAC#20200508130643##ADT!A01#5#T#2.3\r");
  });

  // Component handling
  it("should handle components correctly", () => {
    const json = {
      PID: {
        "1": "1",
        "3": {
          "1": "PATID1234",
          "2": "5",
          "3": "M11",
          "4": "ADT1",
          "5": "MR",
          "6": "GOOD HEALTH HOSPITAL"
        },
        "5": {
          "1": "SMITH",
          "2": "JOHN"
        }
      }
    };

    const result = generator.generate(json);
    expect(result).toBe("PID|1||PATID1234^5^M11^ADT1^MR^GOOD HEALTH HOSPITAL||SMITH^JOHN\r");
  });

  // Repeat handling
  it("should handle repeats correctly", () => {
    const json = {
      PID: {
        "3": [
          {
            "1": "PATID1234",
            "2": "5",
            "3": "M11",
            "4": "ADT1",
            "5": "MR",
            "6": "GOOD HEALTH HOSPITAL"
          },
          {
            "1": "123456789",
            "2": "",
            "3": "",
            "4": "USSSA",
            "5": "SS",
            "6": "" // Add empty string for consistency
          }
        ]
      }
    };

    const result = generator.generate(json);
    expect(result).toBe(
      "PID|||PATID1234^5^M11^ADT1^MR^GOOD HEALTH HOSPITAL~123456789^^^USSSA^SS^\r"
    );
  });

  // Segment repetition
  it("should handle segment repetition", () => {
    const json = {
      NK1: [
        {
          "1": "1",
          "2": {
            "1": "NUCLEAR",
            "2": "NELDA",
            "3": "W"
          }
        },
        {
          "1": "2",
          "2": {
            "1": "NUCLEAR",
            "2": "NELDA",
            "3": "W"
          }
        }
      ]
    };

    const result = generator.generate(json);
    expect(result).toBe("NK1|1|NUCLEAR^NELDA^W\rNK1|2|NUCLEAR^NELDA^W\r");
  });

  // Error handling
  it("should throw error when MSH is an array", () => {
    const json = {
      MSH: [
        {
          "3": "SIMHOSP",
          "4": "SFAC"
        }
      ]
    };

    expect(() => generator.generate(json)).toThrow("MSH segment cannot be an array");
  });

  it("should throw error when MSH.1 is not exactly one character", () => {
    const json = {
      MSH: {
        "1": "##",
        "2": "!@#$",
        "3": "SIMHOSP"
      }
    };

    expect(() => generator.generate(json)).toThrow(
      "MSH.1 (field separator) must be exactly one character"
    );
  });

  it("should throw error when MSH.2 is not exactly four characters", () => {
    const json = {
      MSH: {
        "1": "#",
        "2": "!@#$%",
        "3": "SIMHOSP"
      }
    };

    expect(() => generator.generate(json)).toThrow(
      "MSH.2 (encoding characters) must be exactly four characters"
    );
  });

  // Round trip test
  it("should generate message that can be (almost) parsed back to original JSON", () => {
    const originalJson = {
      MSH: {
        "3": "SIMHOSP",
        "4": "SFAC",
        "5": "RAPP",
        "6": "RFAC",
        "7": "20200508130643",
        "9": {
          "1": "ADT",
          "2": "A01"
        },
        "10": "5",
        "11": "T",
        "12": "2.3"
      },
      PID: {
        "1": "1",
        "3": {
          "1": "PATID1234",
          "2": "5",
          "3": "M11",
          "4": "ADT1",
          "5": "MR",
          "6": "GOOD HEALTH HOSPITAL"
        },
        "5": {
          "1": "SMITH",
          "2": "JOHN"
        }
      }
    };

    const generatedMessage = generator.generate(originalJson);
    const expectedJson = generator.parse(generatedMessage);

    expect(expectedJson).toEqual({
      MSH: {
        ...originalJson.MSH,
        "1": "|",
        "2": "^~\\&",
        "8": ""
      },
      PID: {
        ...originalJson.PID,
        "2": "",
        "4": ""
      }
    });
  });
});
