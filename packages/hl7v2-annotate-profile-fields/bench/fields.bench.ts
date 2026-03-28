/**
 * Benchmarks for hl7v2-annotate-profile-fields.
 *
 * Measures the cost of loading field definitions and annotating
 * fields across messages of varying size.
 *
 * Run: pnpm bench
 */
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { bench, describe } from "vitest";

import { hl7v2AnnotateProfileFields } from "../src";

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
    f(c("Doe"), c("John"), c("M")),
    f(""),
    f("19800101"),
    f("F")
  );
}

function obx(index: number) {
  return s(
    "OBX",
    f(String(index)),
    f("NM"),
    f(c("8302-2"), c("Body Height"), c("LN")),
    f(""),
    f("185"),
    f(c("cm"), c("Centimeter"), c("UCUM"))
  );
}

function nk1() {
  return s(
    "NK1",
    f("1"),
    f(c("Smith"), c("Jane")),
    f("SPO"),
    f(c("123 Main"), c(""), c("Springfield"), c("IL"), c("62701"))
  );
}

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

const processor = unified().use(hl7v2AnnotateProfileFields);

describe("small message (MSH + PID)", () => {
  const tree = m(msh("2.5"), pid());

  bench("annotate fields", async () => {
    await processor.run(structuredClone(tree));
  });
});

describe("medium message (MSH + PID + 10 OBX)", () => {
  const segments = [msh("2.5"), pid()];
  for (let i = 1; i <= 10; i++) {
    segments.push(obx(i));
  }
  const tree = m(...segments);

  bench("annotate fields", async () => {
    await processor.run(structuredClone(tree));
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

  bench("annotate fields", async () => {
    await processor.run(structuredClone(tree));
  });
});

describe("many unique segments (MSH + PID + OBX + NK1 + IN1 + DG1 + AL1)", () => {
  const tree = m(
    msh("2.5"),
    pid(),
    obx(1),
    nk1(),
    s("IN1", f("1"), f("PLAN001"), f(c("INS"), c("Insurance Co"))),
    s(
      "DG1",
      f("1"),
      f(""),
      f(c("I10"), c("Essential Hypertension"), c("ICD10"))
    ),
    s("AL1", f("1"), f("DA"), f(c("ASA"), c("Aspirin")))
  );

  bench("annotate fields (7 unique segment types)", async () => {
    await processor.run(structuredClone(tree));
  });
});
