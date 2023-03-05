import { JsonSchema, HL7v2Schema } from "../schema";

describe("Schema", () => {
  it("should have a Json Schema by default", () => {
    // Given
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema: JsonSchema = require("../schema/2.8/SIU_S12.schema.json");

    // When
    const schema = new HL7v2Schema(jsonSchema);

    // Then
    expect(schema.schema).toEqual(jsonSchema);
  });

  it("should retrieve the segments for the root", () => {
    // Given
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema: JsonSchema = require("../schema/2.8/SIU_S12.schema.json");

    // When
    const schema = new HL7v2Schema(jsonSchema);

    // Then
    expect(schema.getSegments()).toEqual(["MSH", "SCH", "TQ1", "NTE"]);
  });

  it("should retrieve the segments for a root group", () => {
    // Given
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema: JsonSchema = require("../schema/2.8/SIU_S12.schema.json");

    // When
    const schema = new HL7v2Schema(jsonSchema);

    // Then
    expect(schema.getSegments("PATIENT")).toEqual([
      "PID",
      "PD1",
      "PV1",
      "PV2",
      "OBX",
      "DG1",
    ]);
  });

  it("should retrieve the segments for a nested group", () => {
    // Given
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema: JsonSchema = require("../schema/2.8/SIU_S12.schema.json");

    // When
    const schema = new HL7v2Schema(jsonSchema);

    // Then
    expect(schema.getSegments("SERVICE")).toEqual(["AIS", "NTE"]);
  });
});
