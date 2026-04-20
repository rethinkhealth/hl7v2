/**
 * Benchmarks for hl7v2-preset-annotate-profile-recommended.
 *
 * Measures the full annotation pipeline (fields + datatypes)
 * as a single preset across messages of varying complexity.
 *
 * Run: pnpm bench
 */
import { c, f, m, s } from "@glion/builder";
import { unified } from "unified";
import { bench, describe } from "vitest";

import hl7v2PresetAnnotateProfileRecommended from "../src";

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

/** ADT_A01-like message: MSH + EVN + PID + NK1 + PV1 + OBXs */
function adtA01(obxCount: number) {
  const segments = [
    msh("2.5"),
    s("EVN", f("A01"), f("20241201120000")),
    pid(),
    nk1(),
    s(
      "PV1",
      f("1"),
      f("I"),
      f(c("W"), c("389"), c("1")),
      f(""),
      f(""),
      f(""),
      f(c("1234"), c("Smith"), c("Robert"))
    ),
  ];
  for (let i = 1; i <= obxCount; i++) {
    segments.push(obx(i));
  }
  return m(...segments);
}

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

const processor = unified().use(hl7v2PresetAnnotateProfileRecommended);

describe("preset: small ADT (5 segments)", () => {
  const tree = adtA01(0);

  bench("full pipeline", async () => {
    await processor.run(structuredClone(tree));
  });
});

describe("preset: medium ADT (15 segments)", () => {
  const tree = adtA01(10);

  bench("full pipeline", async () => {
    await processor.run(structuredClone(tree));
  });
});

describe("preset: large ADT (55 segments)", () => {
  const tree = adtA01(50);

  bench("full pipeline", async () => {
    await processor.run(structuredClone(tree));
  });
});

describe("preset: realistic ORU with repetitions", () => {
  const segments = [
    msh("2.5"),
    pid(),
    s("PV1", f("1"), f("O"), f(c("ER"), c("101"))),
  ];
  // 20 OBX segments with repeating fields
  for (let i = 1; i <= 20; i++) {
    segments.push(
      s(
        "OBX",
        f(String(i)),
        f("NM"),
        f(c(`${8300 + i}`), c(`Observation ${i}`), c("LN")),
        f(""),
        f(String(70 + i)),
        f(c("kg"), c("Kilogram"), c("UCUM")),
        f(c("N")),
        f("F")
      )
    );
  }
  const tree = m(...segments);

  bench("full pipeline (23 segments, mixed datatypes)", async () => {
    await processor.run(structuredClone(tree));
  });
});
