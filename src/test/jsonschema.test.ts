import { HL7v2Schema, JsonSchema } from "../jsonschema";

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

  it("should retrieve the segments if resource is undefined", () => {
    // Given
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema: JsonSchema = require("../schema/2.8/SIU_S12.schema.json");

    // When
    const schema = new HL7v2Schema(jsonSchema);

    // Then
    expect(schema.getSegments(undefined)).toEqual(["MSH", "SCH", "TQ1", "NTE"]);
  });

  it("should retrieve the segments for a root group", () => {
    // Given
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema: JsonSchema = require("../schema/2.8/SIU_S12.schema.json");

    // When
    const schema = new HL7v2Schema(jsonSchema);

    // Then
    expect(schema.getSegments("PATIENT")).toEqual(["PID", "PD1", "PV1", "PV2", "OBX", "DG1"]);
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

  it("should retrieve the groups for a root", () => {
    // Given
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema: JsonSchema = require("../schema/2.8/SIU_S12.schema.json");

    // When
    const schema = new HL7v2Schema(jsonSchema);

    // Then
    expect(schema.getGroups()).toEqual(["PATIENT", "RESOURCES"]);
  });

  it("should retrieve the groups for a nested group", () => {
    // Given
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jsonSchema: JsonSchema = require("../schema/2.8/SIU_S12.schema.json");

    // When
    const schema = new HL7v2Schema(jsonSchema);

    // Then
    expect(schema.getGroups("PATIENT")).toEqual([]);
    expect(schema.getGroups("SERVICE")).toEqual([]);
    expect(schema.getGroups("RESOURCES")).toEqual([
      "SERVICE",
      "GENERAL_RESOURCE",
      "LOCATION_RESOURCE",
      "PERSONNEL_RESOURCE",
    ]);
  });
});
