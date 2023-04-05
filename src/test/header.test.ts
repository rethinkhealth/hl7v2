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

  it("should retrieve the segment message code", () => {
    // Given
    const orginalMessageType = "ADT^A04";
    const input = `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|${orginalMessageType}|1817457|D|2.5.1`;

    // When
    const segment = new MessageHeader(input);

    // Then
    expect(segment.code).toEqual("ADT");
  });

  it("should raise an error if segment message code is missing", () => {
    // Given
    const orginalMessageType = "";
    const input = `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|${orginalMessageType}|1817457|D|2.5.1`;

    // When
    const code = () => new MessageHeader(input).code;

    // Then
    expect(code).toThrowError("Message code is missing");
  });

  it("should retrieve the segment message trigger event", () => {
    // Given
    const orginalMessageType = "ADT^A04";
    const input = `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|${orginalMessageType}|1817457|D|2.5.1`;

    // When
    const segment = new MessageHeader(input);

    // Then
    expect(segment.triggerEvent).toEqual("A04");
  });

  it("should raise an error if segment message trigger event is missing", () => {
    // Given
    const orginalMessageType = "";
    const input = `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|${orginalMessageType}|1817457|D|2.5.1`;

    // When
    const triggerEvent = () => new MessageHeader(input).triggerEvent;

    // Then
    expect(triggerEvent).toThrowError("Message trigger event is missing");
  });

  it("should retrieve the segment structure from MSH.9.3 when available", () => {
    // Given
    const orginalMessageType = "ADT^A04^ADT_A01";
    const input = `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|${orginalMessageType}|1817457|D|2.5.1`;

    // When
    const segment = new MessageHeader(input);

    // Then
    expect(segment.messageType).toEqual("ADT_A04");
    expect(segment.messageStructure).toEqual("ADT_A01");
  });

  it("should retrieve the segment structure from Structure.Json definition", () => {
    // Given
    const orginalMessageType = "ADT^A04";
    const input = `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|${orginalMessageType}|1817457|D|2.5.1`;

    // When
    const segment = new MessageHeader(input);

    // Then
    expect(segment.messageType).toEqual("ADT_A04");
    expect(segment.messageStructure).toEqual("ADT_A01");
  });

  it("should use the segment event type if the segment structure is not defined", () => {
    // Given
    const orginalMessageType = "ADT^A01";
    const input = `MSH|^~\\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|${orginalMessageType}|1817457|D|2.5.1`;

    // When
    const segment = new MessageHeader(input);

    // Then
    expect(segment.messageType).toEqual("ADT_A01");
    expect(segment.messageStructure).toEqual("ADT_A01");
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
