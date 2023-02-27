import { MessagingEmitter } from "../emitter";
import { Message } from "../message";
import { ISegment } from "../segment";

const DEBUG_MODE = undefined;

const getSample = (name: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const samples = require("../samples/samples.json").samples as [];
  const message = (samples.find((a: any) => a.name === name) as any)
    .message as string;
  if (!message) throw new Error("Message not found");
  return message;
};

describe("HL7v2 Message", () => {
  let emitter: MessagingEmitter<any> | undefined;

  beforeAll(() => {
    if (DEBUG_MODE === "log") {
      emitter = new MessagingEmitter();
      emitter.on(
        "log",
        (body: any, tree: string, line: number, raw: string, metadata: any) => {
          console.log(body, tree, line, metadata);
        }
      );
      emitter.on(
        "warning",
        (body: any, tree: string, line: number, raw: string, metadata: any) => {
          console.log(body, tree, line, metadata);
        }
      );
      emitter.on("error", (error: Error) => {
        console.log(error);
      });
    }
  });

  it("should store the original message", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When
    const message = new Message(raw, { emitter });

    // Then
    expect(message.raw).toEqual(raw);
  });

  it("should emit events with event emitter", () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");
    // Then
    const emitter = new MessagingEmitter();
    emitter.once(
      "log",
      (body: any, tree: string, line: number, raw: string) => {
        expect(body).toBeDefined();
        expect(tree).toBeDefined();
        expect(line).toEqual(0);
        expect(raw).toEqual(raw);
      }
    );
    // When
    new Message(raw, { emitter });
  });

  it("should have delimiters extracted from the message", () => {
    // Given
    const raw = `MSH|^~\\&|Ntierprise|Ntierprise Clinic|Healthmatics EHR|Healthmatics Clinic|20190423114154||SIU^S12|8907-45|P|2.3|||NE|NE`;

    // When
    const message = new Message(raw, { emitter });

    // Then
    expect(message.delimiters).toHaveProperty("repeatSeparator", "~");
    expect(message.delimiters).toHaveProperty("escapeSeparator", "\\");
    expect(message.delimiters).toHaveProperty("componentSeparator", "^");
    expect(message.delimiters).toHaveProperty("fieldSeparator", "|");
    expect(message.delimiters).toHaveProperty("subComponentSeparator", "&");
  });

  it("should have custom delimiters extracted from the message", () => {
    // Given
    const raw = `MSH$%*/@$Ntierprise$Ntierprise Clinic$Healthmatics EHR$Healthmatics Clinic$20190423114154$$SIU%S12$8907-45$P$2.3$$$NE$NE`;

    // When
    const message = new Message(raw, { emitter });

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
    const message = new Message(raw, { emitter });

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
    const message = new Message(raw, { emitter });

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
    const message = new Message(raw, { emitter });

    // Then
    expect(message.toJson()).toMatchSnapshot();
  });

  it("should handle repeated segments", async () => {
    // Given
    const raw = getSample("VXU_V04 - standard message");

    // When
    const message = new Message(raw, { emitter });

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

  it("should group", async () => {
    // Given
    const raw = getSample("SIU_S12 - standard message");

    // When.line
    const message = new Message(raw, { useSchema: true });

    // Then
    expect(message.toJson().RESOURCES).toBeDefined();
    expect(message.toJson()).toMatchSnapshot();
  });
});
