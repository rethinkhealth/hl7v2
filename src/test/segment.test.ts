import { Segment } from "../segment";

describe("Segment", () => {
  it("should have a line if provided", () => {
    const rawMessage =
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR";
    const segment = new Segment(rawMessage, { line: 1 });
    expect(segment.line).toEqual(1);
  });

  it("should have line undefined by default", () => {
    const rawMessage =
      "MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR";
    const segment = new Segment(rawMessage);
    expect(segment.line).toEqual(undefined);
  });
});

describe.each([
  ["AIG", "AIG|1||PULLEN^Pullen, Jeri|P^^CSI"],
  [
    "PID",
    "PID|1||150||Bond^James^^007||19770920|M|||007 Soho Lane^^Cary^NC^27511||(919)007-0007^^^^^919^0070007~(777)707-0707^^CP^^^777^7070707~^NET^X.400^007@BritishSecretService.com|(919)851-6177 X007^^^^^919^8516177^007||M||150|007-00-0007|||||||||||N",
  ],
  [
    "MSH",
    "MSH|^~&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE",
  ],
])("HL7v2 Segment for %s", (expectedName, input) => {
  it("should have the raw original segment", () => {
    // When
    const segment = new Segment(input);

    // Then
    expect(segment.raw).toEqual(input);
  });

  it("Name for the message should be %s", () => {
    // When
    const segment = new Segment(input);

    // Then
    expect(segment.name).toEqual(expectedName);
  });

  it("should raise an exception if the Segment Name is not identified", () => {
    // Given
    const incompatibleName = "XXR";
    const modifiedInput = input.replace(expectedName, incompatibleName);

    // When
    expect(() => {
      new Segment(modifiedInput);
    }).toThrowError(
      `Segment name not recognized. ${incompatibleName} is not in the list.`
    );
  });
});

describe("PID message", () => {
  it("should return the elements with sequence for PID", () => {
    // Given
    const input =
      "PID|1||150||Bond^James^^007||19770920|M|||007 Soho Lane^^Cary^NC^27511||(919)007-0007^^^^^919^0070007~(777)707-0707^^CP^^^777^7070707~^NET^X.400^007@BritishSecretService.com|(919)851-6177 X007^^^^^919^8516177^007||M||150|007-00-0007|||||||||||N";

    // When
    const segment = new Segment(input);

    // Then
    expect(segment.fields.length).toBe(30);
    expect(segment.fields[0].sequence).toEqual("1");
    expect(segment.fields[0].value).toEqual("1");
  });

  it("should return JSON format", () => {
    // Given
    const input =
      "PID|1||150||Somai^Melek^^007||19770920|M|||007 Soho Lane^^Cary^NC^27511||(919)007-0007^^^^^919^0070007~(777)707-0707^^CP^^^777^7070707~^NET^X.400^007@BritishSecretService.com|(919)851-6177 X007^^^^^919^8516177^007||M||150|007-00-0007|||||||||||N";

    // When
    const segment = new Segment(input);

    // Then
    expect(segment.toJson()).toMatchSnapshot();
  });
});

describe("MSH message", () => {
  it("should return the elements with sequence for MSH", () => {
    // Given
    const input =
      "MSH|^~&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE";

    // When
    const segment = new Segment(input);

    // Then
    expect(segment.fields.length).toBe(15);
  });
});
