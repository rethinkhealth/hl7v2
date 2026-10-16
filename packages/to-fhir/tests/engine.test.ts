import { readFileSync } from "node:fs";

import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import { translate } from "../src/engine";
import { indexPaths, isDelimiterLeaf } from "../src/paths";
import { oruR01 } from "../src/schema/oru-r01";
import type { ResourceRule, TranslationSchema } from "../src/types";
import { bundleOf, compile, toTree } from "./processor";

const message = readFileSync(
  new URL("fixtures/oru-r01.hl7", import.meta.url),
  "utf8"
);
const twoNotes = readFileSync(
  new URL("fixtures/oru-r01-two-patient-notes.hl7", import.meta.url),
  "utf8"
);

const resourceOf = (
  bundle: { entry: { resource: Record<string, unknown> }[] },
  type: string
) =>
  bundle.entry.find((entry) => entry.resource.resourceType === type)?.resource;

describe("PID as a US Core Patient", () => {
  it("writes one identifier per HL7v2 field repetition", async () => {
    const patient = resourceOf(bundleOf(await compile(message)), "Patient");

    expect(patient?.identifier).toStrictEqual([
      {
        type: {
          coding: [
            {
              code: "MR",
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            },
          ],
        },
        value: "MRN445566",
      },
      {
        type: {
          coding: [
            {
              code: "SS",
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            },
          ],
        },
        value: "998877665",
      },
    ]);
  });

  it("writes the components of one XPN as one HumanName", async () => {
    const patient = resourceOf(bundleOf(await compile(message)), "Patient");

    expect(patient?.name).toStrictEqual([
      { family: "RIVERA", given: ["MARIA", "ELENA"], use: "official" },
    ]);
  });

  it("converts PID-7 to the precision the HL7v2 value carries", async () => {
    const patient = resourceOf(bundleOf(await compile(message)), "Patient");

    expect(patient?.birthDate).toBe("1978-11-03");
  });

  it("translates PID-8 through the concept map", async () => {
    const patient = resourceOf(bundleOf(await compile(message)), "Patient");

    expect(patient?.gender).toBe("female");
  });

  it("leaves no hole in an array where a component is empty", async () => {
    const patient = resourceOf(bundleOf(await compile(message)), "Patient");

    expect(patient?.address).toStrictEqual([
      {
        city: "AUSTIN",
        country: "USA",
        line: ["742 BIRCHWOOD LN", "APT 4B"],
        postalCode: "78702",
        state: "TX",
        use: "home",
      },
    ]);
  });
});

describe("PV1 as a US Core Encounter", () => {
  it("writes the CodeSystem of a translated code beside it", async () => {
    const encounter = resourceOf(bundleOf(await compile(message)), "Encounter");

    expect(encounter?.class).toStrictEqual({
      code: "AMB",
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    });
  });

  it("reads PV1-45 to decide the status, and finds it empty", async () => {
    const encounter = resourceOf(bundleOf(await compile(message)), "Encounter");

    expect(encounter?.status).toBe("in-progress");
    expect(encounter?.period).toStrictEqual({ start: "2026-10-14T08:00:00" });
  });

  it("points at the Patient of the enclosing group", async () => {
    const encounter = resourceOf(bundleOf(await compile(message)), "Encounter");

    expect(encounter?.subject).toStrictEqual({
      reference: "Patient/patient-1",
    });
  });
});

describe("coverage", () => {
  it("accounts for every populated leaf exactly once", async () => {
    const file = await compile(message);
    const coverage = file.data.fhirCoverage;

    expect(coverage?.populated).toBe(
      coverage!.read + coverage!.consulted + coverage!.unmapped
    );
  });

  it("counts every leaf but the delimiters HL7v2 declares in MSH", async () => {
    const file = await compile(message);
    const index = indexPaths(await toTree(message));
    const content = index.leaves.filter((leaf) => !isDelimiterLeaf(leaf));

    expect(file.data.fhirCoverage?.populated).toBe(content.length);
    expect(index.leaves.length - content.length).toBe(2);
  });

  it("reports a populated field of a mapped segment that no element reads", async () => {
    const file = await compile(message);
    const finding = file.messages.find(
      (candidate) => candidate.ruleId === "fhir-unmapped-field"
    );

    expect(finding?.reason).toBe(
      "Field `PATIENT_RESULT[1].PATIENT[1].PID.1.1.1` (Set ID - PID) carries `1`, and no element of the mapping reads it."
    );
    expect(finding?.actual).toBe("1");
    expect(finding?.source).toBe("glion-to-fhir");
  });

  it("reports a segment with no segment map once, with its value count", async () => {
    const file = await compile(message);
    const finding = file.messages.find(
      (candidate) =>
        candidate.ruleId === "fhir-unmapped-segment" &&
        candidate.reason.includes("`OBX`")
    );

    expect(finding?.reason).toBe(
      "Segment `OBX` carries 12 values, and the mapping has no segment map for it."
    );
  });

  it("records the provenance of every element written", async () => {
    const file = await compile(message);
    const written = file.data.provenance ?? [];

    expect(written).toContainEqual({
      fhir: "gender",
      resource: "Patient/patient-1",
      slot: "Patient[1]",
      v2: "PATIENT_RESULT[1].PATIENT[1].PID.8.1.1",
      via: "direct + vocab:AdministrativeSex",
      written: "female",
    });
    expect(written).toContainEqual({
      fhir: "subject.reference",
      resource: "Encounter/encounter-1",
      slot: "Encounter[1]",
      v2: null,
      via: "reference:Patient[1]",
      written: "Patient/patient-1",
    });
  });
});

describe("references", () => {
  /** The shipped schema, with the Patient pointed at the Encounter below it. */
  const inverted: TranslationSchema = {
    ...oruR01,
    resources: oruR01.resources.map((rule): ResourceRule =>
      rule.anchor === "PID"
        ? {
            ...rule,
            references: [
              {
                slot: "Encounter[1]",
                target: "managingOrganization.reference",
              },
            ],
          }
        : rule
    ),
  };

  it("declines a slot filled only in a group below the referring resource", async () => {
    const file = new VFile({ value: message });
    const bundle = translate(await toTree(message), inverted, file);
    const patient = resourceOf(bundle, "Patient");

    expect(patient?.managingOrganization).toBeUndefined();
    expect(
      file.messages.find(
        (candidate) => candidate.ruleId === "fhir-unresolved-reference"
      )?.reason
    ).toBe(
      "The `managingOrganization.reference` element of `Patient` points at `Encounter[1]`, which no resource in an enclosing group fills."
    );
  });

  it("declines a slot no segment map fills", async () => {
    const file = new VFile({ value: message });
    const missing: TranslationSchema = {
      ...oruR01,
      resources: oruR01.resources.map((rule): ResourceRule =>
        rule.anchor === "PV1"
          ? {
              ...rule,
              references: [
                ...(rule.references ?? []),
                {
                  slot: "Practitioner[1]",
                  target: "participant[1].individual.reference",
                },
              ],
            }
          : rule
      ),
    };
    translate(await toTree(message), missing, file);

    expect(
      file.messages.find(
        (candidate) => candidate.ruleId === "fhir-unresolved-reference"
      )?.reason
    ).toBe(
      "The `participant[1].individual.reference` element of `Encounter` points at `Practitioner[1]`, which no resource in an enclosing group fills."
    );
  });
});

describe("a repeated anchor in one group instance", () => {
  /** The shipped schema, plus a resource anchored on the repeating NTE. */
  const withNote: TranslationSchema = {
    ...oruR01,
    resources: [
      ...oruR01.resources,
      {
        anchor: "NTE",
        elements: [{ source: "NTE.3", target: "payload[1].contentString" }],
        map: "NTE[Communication]",
        resourceType: "Communication",
        scope: "PATIENT_RESULT.PATIENT",
        slot: "Communication[1]",
      },
    ],
  };

  it("writes one resource and reports the second segment", async () => {
    const file = new VFile({ value: twoNotes });
    const bundle = translate(await toTree(twoNotes), withNote, file);
    const communications = bundle.entry.filter(
      (entry) => entry.resource.resourceType === "Communication"
    );

    expect(communications).toHaveLength(1);
    expect(
      file.messages.find(
        (candidate) => candidate.ruleId === "fhir-duplicate-anchor"
      )?.reason
    ).toBe(
      "A second `NTE` segment in one group would write `Communication[1]` again; the mapping produces one `Communication[1]` resource per group instance."
    );
  });
});
