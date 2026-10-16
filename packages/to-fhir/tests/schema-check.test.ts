import { describe, expect, it } from "vitest";

import { assertSchema, TranslationSchemaError } from "../src/schema-check";
import { oruR01 } from "../src/schema/oru-r01";
import type { ElementRule, TranslationSchema } from "../src/types";

/** The shipped schema with one element rule of `PV1[Encounter]` replaced. */
function withEncounterElement(element: ElementRule): TranslationSchema {
  return {
    ...oruR01,
    resources: oruR01.resources.map((rule) =>
      rule.anchor === "PV1" ? { ...rule, elements: [element] } : rule
    ),
  };
}

describe("assertSchema", () => {
  it("accepts the shipped ORU^R01 schema", () => {
    expect(() => assertSchema(oruR01)).not.toThrow();
  });

  it("rejects a source written with the HL7v2 printed form", () => {
    const schema = withEncounterElement({
      assign: "finished",
      target: "status",
      when: { valued: "PV1-45" },
    });

    expect(() => assertSchema(schema)).toThrow(
      "Segment map `PV1[Encounter]` reads `PV1-45`, which is not a path under its anchor segment `PV1`; a source is the Segment ID followed by the field sequence, as in `PV1.5`."
    );
  });

  it("rejects a source that belongs to another segment", () => {
    const schema = withEncounterElement({
      source: "PID.7",
      target: "period.start",
      transform: "hl7-date",
    });

    expect(() => assertSchema(schema)).toThrow(
      "Segment map `PV1[Encounter]` reads `PID.7`, which is not a path under its anchor segment `PV1`; a source is the Segment ID followed by the field sequence, as in `PV1.5`."
    );
  });

  it("rejects one occurrence per repetition written to a single target", () => {
    const schema = withEncounterElement({
      datatype: "CX[Identifier]",
      each: true,
      source: "PV1.19",
      target: "identifier",
    });

    expect(() => assertSchema(schema)).toThrow(
      "Segment map `PV1[Encounter]` writes one FHIR occurrence per HL7v2 field repetition into `identifier`; a repeating target ends with `[]`."
    );
  });

  it("rejects a datatype map the schema does not define", () => {
    const schema = withEncounterElement({
      datatype: "XCN[Practitioner]",
      source: "PV1.7",
      target: "participant[1].individual",
    });

    expect(() => assertSchema(schema)).toThrow(
      "Segment map `PV1[Encounter]` names datatype map `XCN[Practitioner]`, which the schema does not define."
    );
  });

  it("rejects a concept map the schema does not define", () => {
    const schema = withEncounterElement({
      source: "PV1.2",
      target: "class.code",
      vocabulary: "PatientClass",
    });

    expect(() => assertSchema(schema)).toThrow(
      "Segment map `PV1[Encounter]` names concept map `PatientClass`, which the schema does not define."
    );
  });

  it("rejects a datatype row that reads more than one component", () => {
    const schema: TranslationSchema = {
      ...oruR01,
      datatypes: {
        ...oruR01.datatypes,
        "CX[Identifier]": [{ source: "CX.1.1", target: "value" }],
      },
    };

    expect(() => assertSchema(schema)).toThrow(
      "Datatype map `CX[Identifier]` reads `CX.1.1`, which is not one component of a datatype; a row reads one component, as in `CX.1`, or `$value` for the field itself."
    );
  });

  it("names the fault and the map it was found in", () => {
    const schema = withEncounterElement({
      assign: "finished",
      target: "status",
      when: { valued: "PV1-45" },
    });

    try {
      assertSchema(schema);
      expect.unreachable("the schema has a fault");
    } catch (error) {
      expect(error).toBeInstanceOf(TranslationSchemaError);
      expect((error as TranslationSchemaError).code).toBe(
        "sourceNotUnderAnchor"
      );
      expect((error as TranslationSchemaError).map).toBe("PV1[Encounter]");
    }
  });
});
