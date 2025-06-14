import { HL7v2Client } from "../src/client";
import { DefaultDelimiters } from "../src/delimiters";

interface SegmentField {
  [field: string]: string | Record<string, string> | Record<string, string>[];
}

describe("HL7v2 - Parse", () => {
  let parser: HL7v2Client;

  beforeEach(() => {
    parser = new HL7v2Client();
  });

  // Basic message handling
  it("should handle empty message", () => {
    const result = parser.parse("");
    expect(result).toEqual({});
  });

  it("should handle message with only whitespace", () => {
    const result = parser.parse("   \n  \t  ");
    expect(result).toEqual({});
  });

  // MSH segment handling
  it("should parse MSH segment correctly", () => {
    const raw = "MSH|^~\\&|SIMHOSP|SFAC|RAPP|RFAC|20200508130643||ADT^A01|5|T|2.3|||AL||44|ASCII";
    const result = parser.parse(raw);
    const mshSegment = result.MSH as SegmentField;

    // Verify MSH.1 and MSH.2 (special handling)
    expect(mshSegment["1"]).toBe("|");
    expect(mshSegment["2"]).toBe("^~\\&");

    // Verify remaining fields
    expect(mshSegment["3"]).toBe("SIMHOSP");
    expect(mshSegment["4"]).toBe("SFAC");
    expect(mshSegment["5"]).toBe("RAPP");
    expect(mshSegment["6"]).toBe("RFAC");
    expect(mshSegment["7"]).toBe("20200508130643");
    expect(mshSegment["8"]).toBe("");
    expect(mshSegment["9"]).toEqual({
      "1": "ADT",
      "2": "A01"
    });
    expect(mshSegment["10"]).toBe("5");
    expect(mshSegment["11"]).toBe("T");
    expect(mshSegment["12"]).toBe("2.3");
    expect(mshSegment["13"]).toBe("");
    expect(mshSegment["14"]).toBe("");
    expect(mshSegment["15"]).toBe("AL");
    expect(mshSegment["16"]).toBe("");
    expect(mshSegment["17"]).toBe("44");
    expect(mshSegment["18"]).toBe("ASCII");
  });

  // Field access
  it("should access fields correctly", () => {
    const raw = "MSH|^~\\&|SIMHOSP|SFAC|RAPP|RFAC|20200508130643||ADT^A01|5|T|2.3|||AL||44|ASCII";
    const result = parser.parse(raw);

    // Get single field
    const mshSegment = result.MSH as SegmentField;
    const msh1 = mshSegment["1"];
    expect(msh1).toBeDefined();
    expect(msh1).toBe("|");

    // Get non-existent field
    const nonExistent = result.XYZ;
    expect(nonExistent).toBeUndefined();
  });

  // Component handling
  it("should handle components correctly", () => {
    const raw = "MSH|^~\\&|SIMHOSP|SFAC|RAPP|RFAC|20200508130643||ADT^A01|5|T|2.3|||AL||44|ASCII";
    const result = parser.parse(raw);
    const mshSegment = result.MSH as SegmentField;

    // Get component
    const messageType = mshSegment["9"] as Record<string, string>;
    const component = messageType["1"];
    expect(component).toBe("ADT");

    // Get non-existent component
    const nonExistent = messageType["5"];
    expect(nonExistent).toBeUndefined();
  });

  // Repeat handling
  it("should handle repeats correctly", () => {
    const raw = "PID|||PATID1234^5^M11^ADT1^MR^GOOD HEALTH HOSPITAL~123456789^^^USSSA^SS";
    const result = parser.parse(raw);
    const pidSegment = result.PID as SegmentField;
    const pid3 = pidSegment["3"] as Record<string, string>[];

    expect(pid3).toBeDefined();
    expect(pid3).toEqual([
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
        "5": "SS"
      }
    ]);
  });

  // Segment repetition
  it("should handle segment repetition", () => {
    const raw =
      "MSH|^~\\&|SIMHOSP|SFAC|RAPP|RFAC|20200508130643||ADT^A01|5|T|2.3|||AL||44|ASCII\r" +
      "NK1|1|NUCLEAR^NELDA^W\r" +
      "NK1|2|NUCLEAR^NELDA^W";
    const result = parser.parse(raw);

    // First verify that NK1 exists in the JSON
    expect(result.NK1).toBeDefined();

    // Then verify it's an array
    const nk1Segments = result.NK1 as SegmentField[];
    expect(Array.isArray(nk1Segments)).toBe(true);
    expect(nk1Segments.length).toBe(2);

    // Verify the content of each NK1 segment
    expect(nk1Segments[0]["1"]).toBe("1");
    expect(nk1Segments[0]["2"]).toEqual({
      "1": "NUCLEAR",
      "2": "NELDA",
      "3": "W"
    });
    expect(nk1Segments[1]["1"]).toBe("2");
    expect(nk1Segments[1]["2"]).toEqual({
      "1": "NUCLEAR",
      "2": "NELDA",
      "3": "W"
    });
  });

  // Delimiter handling
  it("should use custom delimiters", () => {
    const raw = "MSH$^~\\&$SIMHOSP$SFAC$RAPP$RFAC$20200508130643$$ADT%A01$5$T$2.3$$$AL$$44$ASCII";
    const customDelimiters = {
      ...DefaultDelimiters,
      fieldSeparator: "$",
      componentSeparator: "%"
    };
    const customParser = new HL7v2Client({ delimiters: customDelimiters });
    const result = customParser.parse(raw);
    const mshSegment = result.MSH as SegmentField;

    expect(mshSegment["3"]).toBe("SIMHOSP");
    expect(mshSegment["9"]).toEqual({
      "1": "ADT",
      "2": "A01"
    });
  });

  // Error handling
  it("should throw error for invalid segment name", () => {
    const raw = "AB|field1|field2";
    expect(() => parser.parse(raw)).toThrow(/Segment name must be at least 3 characters/);
  });

  it("should throw error for invalid MSH segment", () => {
    const raw = "MSH|";
    expect(() => parser.parse(raw)).toThrow(/MSH segment must be at least 8 characters long/);
  });

  // Multiple messages
  it("should handle multiple messages independently", () => {
    const message1 = "MSH|^~\\&|HOSP1|FAC1|APP1|FAC1|20200508130643||ADT^A01|1|T|2.3";
    const message2 = "MSH|^~\\&|HOSP2|FAC2|APP2|FAC2|20200508130644||ADT^A02|2|T|2.3";

    const result1 = parser.parse(message1);
    const result2 = parser.parse(message2);

    expect(result1.MSH).not.toEqual(result2.MSH);
    expect((result1.MSH as SegmentField)["3"]).toBe("HOSP1");
    expect((result2.MSH as SegmentField)["3"]).toBe("HOSP2");
  });
});
