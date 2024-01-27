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

  it("should parse 2.5.1 message", () => {
    // Given
    const raw = getSample("ORU - test from HL7.org");

    // When
    const message = new Message(raw);
    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it.skip("should retrieve the version of the message", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");
    const raw_2_3_1 = getSample("VXU_V04 - message 2.3.1");
    // When
    const message = new Message(raw);
    const message_2_3_1 = new Message(raw_2_3_1);

    // Then
    expect(message.version).toEqual("2.5.1");
    expect(message_2_3_1.version).toEqual("2.3.1");
  });

  it("should accept version 2.9", () => {
    // Given
    const raw = getSample("ADT_A01 - standard message for 2.9");

    // When
    const message = new Message(raw);

    // Then
    expect(message.version).toEqual("2.9");
    expect(message.toJson()).toMatchSnapshot();
  });

  it.skip("should raise exception if version is not compatible", () => {
    // Given
    const raw = getSample("VXU_V04 - message 2.3.1");

    // Expect error
    expect(() => {
      new Message(raw);
    }).toThrow(
      /Version 2.3.1 is not supported. Supported versions are: 2.5.1, 2.8./,
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

  it("should retrieve the MSH Segment", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw);

    // Then
    expect(Object.keys(message.segments)).toContain("MSH");
  });

  it("should retrieve the all Segments if no schema is requested", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw, {
      useSchema: false,
    });

    // Then
    expect(Object.keys(message.segments)).toEqual([
      "MSH",
      "SCH",
      "NTE",
      "PID",
      "PV1",
      "RGS",
      "AIS",
      "AIG",
    ]);
  });

  it("should retrieve the only the root Segments if schema", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw, {
      useSchema: true,
    });

    // Then
    expect(Object.keys(message.segments)).toEqual(["MSH", "SCH", "NTE"]);
    expect(Object.keys(message.groups)).toEqual(["PATIENT", "RESOURCES"]);
  });

  it("should add the correct line order to segments", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with multiple NTE");

    // When
    const message = new Message(raw);

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
      "MSH|^~\\&||APPT_NEW|||20210917093833|78797|SIU^S12|82636|T|2.5.1|||||||||||",
    );
  });

  it("should retrieve the chapter associated with a message", () => {
    // Given
    const raw = getSample("ADT_A01 - standard message");

    // When
    const message = new Message(raw);

    // Then
    expect(message.chapter).toBeDefined();
    expect(message.chapter?.name).toEqual("Patient Administration");
    expect(message.chapter?.id).toEqual(3);
  });

  it("should include the custom segment ZTP", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with ZTP");

    // When
    const message = new Message(raw, {
      useSchema: true,
    });

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should include the custom segment ZTP", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with Z segment");

    // When
    const message = new Message(raw, {
      useSchema: true,
    });

    // Then
    expect(Object.keys(message.segments)).toEqual(["MSH", "SCH", "NTE", "ZTP"]);
  });

  it("should use the message structure if provided in the MSH.9", () => {
    const raw = getSample("ADT_A04 - includes a Message Structure");

    // WHEN
    const message = new Message(raw);

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should use a closest message type for non-existing JSON Schema", () => {
    const raw = getSample("ADT_A04 - multiple  NK1");

    // WHEN
    const message = new Message(raw);

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should handle repeated segments with schema", async () => {
    // Given
    const raw = getSample("VXU_V04 - standard message");

    // When
    const message = new Message(raw, {
      useSchema: true,
    });

    // Then
    // expect(message.segments.filter((a) => a.name === "OBX").length).toEqual(5);
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should handle repeated segments without schema", async () => {
    // Given
    const raw = getSample("VXU_V04 - standard message");

    // When
    const message = new Message(raw, {
      useSchema: false,
    });

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
    const message = new Message(raw);

    // Then
    expect(message.schema).toBeDefined();
    expect(message.schema).toMatchSnapshot();
  });

  it("should match the json schema", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw);

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should parse only root segments", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw);

    const json = message.toJson();

    // Then
    expect(json.MSH).toBeDefined();
    expect(json.SCH).toBeDefined();
    expect(json.NTE).toBeDefined();
    expect(json.PID).toBeUndefined();
    expect(json.RESOURCES).toBeDefined();
    expect(json.PATIENT).toBeDefined();
  });

  it("should use the schema retrieved from standard table (e.g. ADT_A04 -> ADT_A01)", async () => {
    // Given
    const raw = getSample("ADT_A04 - includes a Message Structure");

    // When
    const message = new Message(raw);

    // Then
    expect(message.schema).toBeDefined();
    expect(message.header.messageType).toEqual("ADT_A04");
    expect(message.header.messageStructure).toEqual("ADT_A01");
    expect(message.schema?.schema.title).toEqual("HL7v2 ADT_A01");
    expect(message.schema).toMatchSnapshot();
  });

  it("should parse multiple NTE into an array", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message with multiple NTE");

    // When.line
    const message = new Message(raw);

    // Then
    expect(Array.isArray(message.toJson().NTE)).toBeTruthy();
    expect(message.toJson().NTE.length).toEqual(2);
  });

  it("should have sub-groups", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When.line
    const message = new Message(raw);

    // Then
    expect(message.toJson().RESOURCES).toBeDefined();
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should be the parent of the root groups", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When.line
    const message = new Message(raw);

    // Then
    expect((message.groups.RESOURCES as IGroup).parent).toBe(message);
  });
});

describe("Segment with multiple identical segments", () => {
  it("should group them together", () => {
    const raw = getSample("SIU_S12 - multiple patients");

    // WHEN
    const message = new Message(raw);

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
    const message = new Message(raw);

    // Then
    expect(message.toJson().RESOURCES).toBeDefined();
    expect(message.toJson().RESOURCES.SERVICE).toBeDefined();
  });

  it("should combine NK1 together", () => {
    const raw = getSample("ADT_A04 - multiple  NK1");

    // WHEN
    const message = new Message(raw);

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should combine repeated Z segments together", () => {
    const raw = getSample("SIU_S12 - standard message with multiple ZTP");

    // WHEN
    const message = new Message(raw);

    // Then
    expect(message.toJson().PATIENT.ZTP).toBeDefined();
    expect(message.toJson().PATIENT.ZTP.length).toEqual(2);
    expect(Array.isArray(message.toJson().PATIENT.ZTP)).toBeTruthy();
    expect(message.toJson()).toMatchSnapshot();
  });
});

describe.each([
  ["RTB_Z74 - multiple records", "RTB_Z74"],
  ["VXU_V04 - standard message", "VXU_V04"],
])("Message %s", (input, expected) => {
  test(`${input} corresponds to snapshot`, () => {
    // Given
    const raw = getSample(input);

    // When
    const message = new Message(raw);

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });
  test(`has header ${expected}`, () => {
    // Given
    const raw = getSample(input);

    // When
    const message = new Message(raw);

    // Then
    expect(message.header.messageType).toEqual(expected);
  });
});
