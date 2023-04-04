import { IGroup } from "../group";
import { Message } from "../message";
import { ISegment } from "../segment";

const getSample = (name: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const samples = require("./data/unit_testing.json").samples as [];
  const message = (samples.find((a: any) => a.name === name) as any)
    .message as string;
  if (!message) throw new Error("Message not found");
  return message;
};

describe("HL7v2 Message", () => {
  it("should store the original message", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw);

    // Then
    expect(message.raw).toEqual(raw);
  });

  it("should retrieve the version from the raw if no version is passed in options", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw);

    // Then
    expect(message.version).toEqual("2.5.1");
  });

  it("should replace message version if passed in options", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw, { version: "2.8" });

    // Then
    expect(message.version).toEqual("2.8");
  });

  it("should raise exception if version is not compatible", () => {
    // Given
    const raw = getSample("VXU_V04 - message 2.3.1");

    // Expect error
    expect(() => {
      new Message(raw);
    }).toThrowError(
      /Version 2.3.1 is not supported. Supported versions are: 2.5.1, 2.8./
    );
  });

  it("should have delimiters extracted from the message", () => {
    // Given
    const raw = `MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.5.1|||NE|NE`;

    // When
    const message = new Message(raw);

    // Then
    expect(message.delimiters).toHaveProperty("repeatSeparator", "~");
    expect(message.delimiters).toHaveProperty("escapeSeparator", "\\");
    expect(message.delimiters).toHaveProperty("componentSeparator", "^");
    expect(message.delimiters).toHaveProperty("fieldSeparator", "|");
    expect(message.delimiters).toHaveProperty("subComponentSeparator", "&");
  });

  it("should have custom delimiters extracted from the message", () => {
    // Given
    const raw = `MSH$%*/@$Ntierprise$Ntierprise Clinic$Healthmatics EHR$Healthmatics Clinic$20190423114154$$SIU%S12$8907-45$P$2.5.1$$$NE$NE`;

    // When
    const message = new Message(raw);

    // Then
    expect(message.delimiters).toHaveProperty("fieldSeparator", "$");
    expect(message.delimiters).toHaveProperty("componentSeparator", "%");
    expect(message.delimiters).toHaveProperty("repeatSeparator", "*");
    expect(message.delimiters).toHaveProperty("escapeSeparator", "/");
    expect(message.delimiters).toHaveProperty("subComponentSeparator", "@");
  });

  it("should retrieve the root segments", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw);

    // Then
    expect(Object.keys(message.segments)).toEqual(["MSH", "SCH", "NTE"]);
  });

  it("should add the correct line order to segments", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with multiple NTE");

    // When
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.header.line).toEqual(1);
    // MSH
    expect((message.segments.MSH as ISegment).name).toEqual("MSH");
    expect((message.segments.MSH as ISegment).line).toEqual(1);

    // SCH
    expect((message.segments.SCH as ISegment).name).toEqual("SCH");
    expect((message.segments.SCH as ISegment).line).toEqual(2);

    // NTE - Array
    expect((message.segments.NTE as ISegment[])[0].name).toEqual("NTE");
    expect((message.segments.NTE as ISegment[])[0].line).toEqual(3);
    expect((message.segments.NTE as ISegment[])[1].name).toEqual("NTE");
    expect((message.segments.NTE as ISegment[])[1].line).toEqual(4);
  });

  it("should return the header segment (MSH)", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw);

    // Then
    expect(message.header.name).toEqual("MSH");
    expect(message.header.raw).toBe(
      "MSH|^~\\&||APPT_NEW|||20210917093833|78797|SIU^S12|82636|T|2.5.1|||||||||||"
    );
  });

  it("should include the custom segment ZTP", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with ZTP");

    // When
    const message = new Message(raw);

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should include the custom segment ZTP", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with Z segment");

    // When
    const message = new Message(raw);

    // Then
    expect(Object.keys(message.segments)).toEqual(["MSH", "SCH", "NTE", "ZTP"]);
  });

  it("should use the message structure if provided in the MSH.9", () => {
    const raw = getSample("ADT_A04 - includes a Message Structure");

    // WHEN
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it.skip("should use a closest message type for non-existing JSON Schema", () => {
    const raw = getSample("ADT_A04 - multiple  NK1");

    // WHEN
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should handle repeated segments", async () => {
    // Given
    const raw = getSample("VXU_V04 - standard message");

    // When
    const message = new Message(raw);

    // Then
    // expect(message.segments.filter((a) => a.name === "OBX").length).toEqual(5);
    expect(message.toJson()).toMatchSnapshot();
  });
});

describe("Segment Schema", () => {
  it("should retrieve the schema", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.schema).toBeDefined();
    expect(message.schema).toMatchSnapshot();
  });

  it("should match the json schema", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should parse only root segments", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw, { useSchema: true });

    const json = message.toJson();

    // Then
    expect(json.MSH).toBeDefined();
    expect(json.SCH).toBeDefined();
    expect(json.NTE).toBeDefined();
    expect(json.PID).toBeUndefined();
    expect(json.RESOURCES).toBeDefined();
    expect(json.PATIENT).toBeDefined();
  });

  it("should parse multiple NTE into an array", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with multiple NTE");

    // When.line
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(Array.isArray(message.toJson().NTE)).toBeTruthy();
    expect(message.toJson().NTE.length).toEqual(2);
  });

  it("should have sub-groups", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When.line
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.toJson().RESOURCES).toBeDefined();
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should be the parent of the root groups", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When.line
    const message = new Message(raw, { useSchema: true });

    // Then
    expect((message.groups.RESOURCES as IGroup).parent).toBe(message);
  });
});

describe("Segment with multiple identical segments", () => {
  it("should group them together", () => {
    const raw = getSample("SIU_S12 - multiple patients");

    // WHEN
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.toJson().PATIENT).toBeInstanceOf(Array);
    expect(message.toJson().PATIENT.length).toEqual(2);
    expect(message.toJson().PATIENT[0].PID).toBeDefined();
    expect(message.toJson().PATIENT[1].PID).toBeDefined();
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should managed nested group", () => {
    const raw = getSample("SIU_S12 - standard message");

    // WHEN
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.toJson().RESOURCES).toBeDefined();
    expect(message.toJson().RESOURCES.SERVICE).toBeDefined();
  });

  it("should combine NK1 together", () => {
    const raw = getSample("ADT_A04 - multiple  NK1");

    // WHEN
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });
});
