/**
 * Benchmarks for hl7v2-annotate-profile-context.
 *
 * Measures the cost of loading all profile data (fields, datatypes, tables)
 * onto file.data across messages of varying size and segment diversity.
 *
 * Run: pnpm bench
 */
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { bench, describe } from "vitest";

import { hl7v2AnnotateProfileContext } from "../src";

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

function evn() {
  return s("EVN", f("A01"), f("20241201120000"));
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
// Processor
// ---------------------------------------------------------------------------

const processor = unified().use(hl7v2AnnotateProfileContext);

// ---------------------------------------------------------------------------
// Benchmarks: warm cache (steady-state performance)
// ---------------------------------------------------------------------------

describe("context — warm cache", () => {
  const small = m(msh("2.5"), evn(), pid());

  bench("small (MSH + EVN + PID)", async () => {
    await processor.run(structuredClone(small), new VFile());
  });

  const mediumSegments = [msh("2.5"), evn(), pid()];
  for (let i = 1; i <= 10; i++) {
    mediumSegments.push(obx(i));
  }
  const medium = m(...mediumSegments);

  bench("medium (13 segments)", async () => {
    await processor.run(structuredClone(medium), new VFile());
  });

  const largeSegments = [msh("2.5"), evn(), pid()];
  for (let i = 1; i <= 50; i++) {
    largeSegments.push(obx(i));
  }
  const large = m(...largeSegments);

  bench("large (53 segments)", async () => {
    await processor.run(structuredClone(large), new VFile());
  });
});

// ---------------------------------------------------------------------------
// Benchmarks: segment diversity (more unique segments = more profile loads)
// ---------------------------------------------------------------------------

describe("context — segment diversity", () => {
  const minimal = m(msh("2.5"), pid());

  bench("2 unique segments (MSH + PID)", async () => {
    await processor.run(structuredClone(minimal), new VFile());
  });

  const diverse = m(
    msh("2.5"),
    evn(),
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

  bench("8 unique segments (MSH + EVN + PID + OBX + NK1 + IN1 + DG1 + AL1)", async () => {
    await processor.run(structuredClone(diverse), new VFile());
  });
});

// ---------------------------------------------------------------------------
// Benchmarks: cold vs warm (profile cache impact)
// ---------------------------------------------------------------------------

describe("context — cold vs warm", () => {
  const tree = m(msh("2.5"), evn(), pid());

  bench("cold (cache reset each iteration)", async () => {
    profiles.reset();
    await processor.run(structuredClone(tree), new VFile());
  });

  bench("warm (cached profiles)", async () => {
    await processor.run(structuredClone(tree), new VFile());
  });
});

// ---------------------------------------------------------------------------
// Benchmarks: idempotency (second run should be near-free)
// ---------------------------------------------------------------------------

describe("context — idempotency", () => {
  const tree = m(msh("2.5"), evn(), pid());

  bench("first run (populates file.data)", async () => {
    await processor.run(structuredClone(tree), new VFile());
  });

  bench("second run on same file (idempotent skip)", async () => {
    const file = new VFile();
    const cloned = structuredClone(tree);
    await processor.run(cloned, file);
    // Second run should bail immediately
    await processor.run(cloned, file);
  });
});
