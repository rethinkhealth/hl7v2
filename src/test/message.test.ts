import { DefaultDelimiters } from "../delimiters";
import { HL7v2Message } from "../message";
import type { MessageSegment } from "../types";

interface SegmentField {
  [field: string]: string | Record<string, string> | Record<string, string>[];
}

interface MessageJSON {
  [segment: string]: SegmentField | SegmentField[];
}

describe("HL7v2Message", () => {
  // Basic message handling
  it("should handle empty message", () => {
    const message = new HL7v2Message("");
    expect(message.toJSON()).toEqual({});
  });

  it("should handle message with only whitespace", () => {
    const message = new HL7v2Message("   \n  \t  ");
    expect(message.toJSON()).toEqual({});
  });

  // MSH segment handling
  it("should parse MSH segment correctly", () => {
    const raw = "MSH|^~\\&|SIMHOSP|SFAC|RAPP|RFAC|20200508130643||ADT^A01|5|T|2.3|||AL||44|ASCII";
    const message = new HL7v2Message(raw);
    const json = message.toJSON() as MessageJSON;
    const mshSegment = json.MSH as SegmentField;

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
    const message = new HL7v2Message(raw);
    const json = message.toJSON() as MessageJSON;

    // Get single field
    const mshSegment = json.MSH as SegmentField;
    const msh1 = mshSegment["1"];
    expect(msh1).toBeDefined();
    expect(msh1).toBe("|");

    // Get non-existent field
    const nonExistent = json["XYZ"];
    expect(nonExistent).toBeUndefined();
  });

  // Component handling
  it("should handle components correctly", () => {
    const raw = "MSH|^~\\&|SIMHOSP|SFAC|RAPP|RFAC|20200508130643||ADT^A01|5|T|2.3|||AL||44|ASCII";
    const message = new HL7v2Message(raw);
    const json = message.toJSON() as MessageJSON;
    const mshSegment = json.MSH as SegmentField;

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
    const message = new HL7v2Message(raw);
    const json = message.toJSON() as MessageJSON;
    const pidSegment = json.PID as SegmentField;
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
    const message = new HL7v2Message(raw);
    const json = message.toJSON() as MessageJSON;

    // First verify that NK1 exists in the JSON
    expect(json.NK1).toBeDefined();

    // Then verify it's an array
    const nk1Segments = json.NK1 as SegmentField[];
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
    const message = new HL7v2Message(raw, { delimiters: customDelimiters });
    const json = message.toJSON() as MessageJSON;
    const mshSegment = json.MSH as SegmentField;

    expect(mshSegment["3"]).toBe("SIMHOSP");
    expect(mshSegment["9"]).toEqual({
      "1": "ADT",
      "2": "A01"
    });
  });
});
