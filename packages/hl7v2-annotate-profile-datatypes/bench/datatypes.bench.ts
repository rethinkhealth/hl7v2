/**
 * Benchmarks for hl7v2-annotate-profile-datatypes.
 *
 * Measures the cost of the three-pass stop-at-primitive cascade
 * across messages of varying size and datatype complexity.
 *
 * Run: pnpm bench
 */
import { hl7v2AnnotateProfileFields } from "@rethinkhealth/hl7v2-annotate-profile-fields";
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { bench, describe } from "vitest";

import { hl7v2AnnotateProfileDatatypes } from "../src";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

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
    f(c("ADT"), c("A01"), c("ADT_A01")), // MSG (composite)
    f("MSG001"), // ST (primitive)
    f("P"),
    f(version)
  );
}

/** PID with mix of primitive and composite fields */
function pid() {
  return s(
    "PID",
    f("1"), // SI (primitive)
    f(""), // CX (composite)
    f("12345"), // CX (composite)
    f(""), // CX
    f(c("Doe"), c("John"), c("M")), // XPN (composite → FN composite)
    f(""),
    f("19800101"), // TS (composite)
    f("F") // IS (primitive)
  );
}

/** OBX with composite observation identifier */
function obx(index: number) {
  return s(
    "OBX",
    f(String(index)), // SI (primitive)
    f("NM"), // ID (primitive)
    f(c("8302-2"), c("Body Height"), c("LN")), // CWE (composite)
    f(""),
    f("185"), // varies
    f(c("cm"), c("Centimeter"), c("UCUM")) // CWE (composite)
  );
}

/** NK1 with address (composite XAD) */
function nk1() {
  return s(
    "NK1",
    f("1"),
    f(c("Smith"), c("Jane")), // XPN
    f("SPO"), // CWE
    f(c("123 Main"), c(""), c("Springfield"), c("IL"), c("62701")) // XAD (composite)
  );
}

/** Field with multiple repetitions */
function pidWithRepetitions() {
  return s(
    "PID",
    f("1"),
    f(""),
    f(r(c("ID1")), r(c("ID2")), r(c("ID3"))), // 3 repetitions of CX
    f(""),
    f(c("Doe"), c("John"))
  );
}

// ---------------------------------------------------------------------------
// Processors
// ---------------------------------------------------------------------------

const fieldsOnly = unified().use(hl7v2AnnotateProfileFields);
const fieldsThenDatatypes = unified()
  .use(hl7v2AnnotateProfileFields)
  .use(hl7v2AnnotateProfileDatatypes);
const datatypesOnly = unified().use(hl7v2AnnotateProfileDatatypes);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("small message (MSH + PID)", () => {
  const tree = m(msh("2.5"), pid());

  bench("fields only", async () => {
    await fieldsOnly.run(structuredClone(tree));
  });

  bench("fields + datatypes", async () => {
    await fieldsThenDatatypes.run(structuredClone(tree));
  });
});

describe("medium message (MSH + PID + 10 OBX)", () => {
  const segments = [msh("2.5"), pid()];
  for (let i = 1; i <= 10; i++) {
    segments.push(obx(i));
  }
  const tree = m(...segments);

  bench("fields + datatypes", async () => {
    await fieldsThenDatatypes.run(structuredClone(tree));
  });
});

describe("large message (MSH + PID + 50 OBX + 5 NK1)", () => {
  const segments = [msh("2.5"), pid()];
  for (let i = 1; i <= 50; i++) {
    segments.push(obx(i));
  }
  for (let i = 0; i < 5; i++) {
    segments.push(nk1());
  }
  const tree = m(...segments);

  bench("fields + datatypes", async () => {
    await fieldsThenDatatypes.run(structuredClone(tree));
  });
});

describe("repetitions (PID-3 with 3 reps)", () => {
  const tree = m(msh("2.5"), pidWithRepetitions());

  bench("fields + datatypes", async () => {
    await fieldsThenDatatypes.run(structuredClone(tree));
  });
});

describe("warm cache (second run, same version)", () => {
  const tree = m(msh("2.5"), pid());

  bench("datatypes only (profiles pre-cached by fields)", async () => {
    // Pre-warm: run fields first so field.data.datatype is set
    const clone = structuredClone(tree);
    await fieldsOnly.run(clone);
    await datatypesOnly.run(clone);
  });
});

describe("nested composite depth (XPN → FN → ST)", () => {
  // PID-5 exercises the full 3-level cascade: XPN (composite) → FN (composite) → ST (primitive)
  const tree = m(
    msh("2.5"),
    s("PID", f("1"), f(""), f("12345"), f(""), f(c("Doe&VonPrefix"), c("John")))
  );

  bench("fields + datatypes (3 cascade levels)", async () => {
    await fieldsThenDatatypes.run(structuredClone(tree));
  });
});
