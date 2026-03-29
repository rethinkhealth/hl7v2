/**
 * Benchmarks for hl7v2-annotate-profile-fields-code-systems.
 *
 * Measures the cost of resolving UTG code systems and annotating
 * coded value subcomponents across messages of varying size.
 *
 * Run: pnpm bench
 */
import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { bench, describe } from "vitest";

import { hl7v2AnnotateProfileFieldsCodeSystems } from "../src";

function msh(version: string) {
  return s(
    "MSH",
    f("|"),
    f("^~\\&"),
    f("SENDER"),
    f("FAC"),
    f("RECV"),
    f("RFAC"),
    f("20241201"),
    f(""),
    f(c("ADT"), c("A01"), c("ADT_A01")),
    f("MSG001"),
    f("P"),
    f(version)
  );
}

function pid() {
  return s(
    "PID",
    f("1"),
    f(""),
    f("12345"),
    f(""),
    f(c("Doe"), c("John")),
    f(""),
    f("19800101"),
    f("F") // PID-8 coded (table HL70001)
  );
}

function evn() {
  return s("EVN", f("A01"), f("20241201120000"));
}

const fieldsOnly = unified().use(hl7v2AnnotateProfileFields);
const fieldsThenCodeSystems = unified()
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileFieldsCodeSystems);

describe("small message (MSH + PID with coded field)", () => {
  const tree = m(msh("2.5"), pid());

  bench("fields only", async () => {
    await fieldsOnly.run(structuredClone(tree));
  });

  bench("fields + code-systems", async () => {
    await fieldsThenCodeSystems.run(structuredClone(tree));
  });
});

describe("message with multiple coded fields", () => {
  const tree = m(msh("2.5"), evn(), pid());

  bench("fields + code-systems", async () => {
    await fieldsThenCodeSystems.run(structuredClone(tree));
  });
});

describe("message with repetitions in coded field", () => {
  const tree = m(
    msh("2.5"),
    s(
      "PID",
      f("1"),
      f(""),
      f("12345"),
      f(""),
      f("Doe"),
      f(""),
      f(""),
      f(r(c("F")), r(c("M")), r(c("U"))) // 3 reps of coded PID-8
    )
  );

  bench("fields + code-systems (3 coded reps)", async () => {
    await fieldsThenCodeSystems.run(structuredClone(tree));
  });
});

describe("large message (MSH + PID + 50 OBX)", () => {
  const segments = [msh("2.5"), pid()];
  for (let i = 1; i <= 50; i++) {
    segments.push(
      s(
        "OBX",
        f(String(i)),
        f("NM"),
        f(c(`${8300 + i}`), c(`Obs ${i}`), c("LN")),
        f(""),
        f(String(70 + i)),
        f(c("kg"), c("Kilogram"), c("UCUM")),
        f(c("N")), // OBX-8 Abnormal Flags — coded (table HL70078)
        f("F")
      )
    );
  }
  const tree = m(...segments);

  bench("fields + code-systems (52 segments, many coded)", async () => {
    await fieldsThenCodeSystems.run(structuredClone(tree));
  });
});
