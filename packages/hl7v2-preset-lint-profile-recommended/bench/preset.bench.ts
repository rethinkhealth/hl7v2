/**
 * Benchmarks for hl7v2-preset-lint-profile.
 *
 * Measures the end-to-end cost of running all 5 profile lint rules
 * as a preset on messages of varying sizes.
 *
 * Run: pnpm bench
 */
import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { bench, describe } from "vitest";

import hl7v2PresetLintProfileRecommended from "../src";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

/** Complete MSH with all required fields */
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

/** Valid PID with all required fields */
function validPid() {
  return s(
    "PID",
    f("1"),
    f(""),
    f("12345"),
    f(""),
    f("Doe^John"),
    f(""),
    f(""),
    f("M")
  );
}

/** OBX segment */
function obx(index: number) {
  return s(
    "OBX",
    f(String(index)),
    f("NM"),
    f(c("8302-2")),
    f(""),
    f("185"),
    f("cm")
  );
}

/** EVN segment with valid event code */
function evn() {
  return s("EVN", f("A01"), f("20241201120000"));
}

// ---------------------------------------------------------------------------
// Processors
// ---------------------------------------------------------------------------

const presetProcessor = unified().use(hl7v2PresetLintProfileRecommended);

// ---------------------------------------------------------------------------
// Benchmarks: valid messages (no warnings)
// ---------------------------------------------------------------------------

describe("preset — valid messages (no warnings)", () => {
  const small = m(msh("2.5"), evn(), validPid());

  bench("small (MSH + EVN + PID)", async () => {
    await presetProcessor.run(small, new VFile());
  });

  const mediumSegments = [msh("2.5"), evn(), validPid()];
  for (let i = 1; i <= 10; i++) {
    mediumSegments.push(obx(i));
  }
  const medium = m(...mediumSegments);

  bench("medium (13 segments)", async () => {
    await presetProcessor.run(medium, new VFile());
  });

  const largeSegments = [msh("2.5"), evn(), validPid()];
  for (let i = 1; i <= 50; i++) {
    largeSegments.push(obx(i));
  }
  const large = m(...largeSegments);

  bench("large (53 segments)", async () => {
    await presetProcessor.run(large, new VFile());
  });

  const xlSegments = [msh("2.5"), evn(), validPid()];
  for (let i = 1; i <= 100; i++) {
    xlSegments.push(obx(i));
  }
  const xl = m(...xlSegments);

  bench("xl (103 segments)", async () => {
    await presetProcessor.run(xl, new VFile());
  });
});

// ---------------------------------------------------------------------------
// Benchmarks: messages with violations
// ---------------------------------------------------------------------------

describe("preset — messages with violations", () => {
  const violations = m(
    msh("2.5"),
    s("EVN", f("ZZZ")), // table violation
    s(
      "PID",
      f(r("12345"), r("67890")), // maxLength + repetition
      f(""),
      f(""), // required field empty
      f(""),
      f("Doe")
    )
  );

  bench("multiple violations (MSH + EVN + PID)", async () => {
    await presetProcessor.run(violations, new VFile());
  });
});

// ---------------------------------------------------------------------------
// Benchmarks: cold vs warm (profile caching)
// ---------------------------------------------------------------------------

describe("preset — cold vs warm (small message)", () => {
  const tree = m(msh("2.5"), evn(), validPid());

  bench("cold (cache reset each iteration)", async () => {
    profiles.reset();
    await presetProcessor.run(tree, new VFile());
  });

  bench("warm (cached profiles)", async () => {
    await presetProcessor.run(tree, new VFile());
  });
});

describe("preset — cold vs warm (large message)", () => {
  const segments = [msh("2.5"), evn(), validPid()];
  for (let i = 1; i <= 50; i++) {
    segments.push(obx(i));
  }
  const tree = m(...segments);

  bench("cold (cache reset each iteration)", async () => {
    profiles.reset();
    await presetProcessor.run(tree, new VFile());
  });

  bench("warm (cached profiles)", async () => {
    await presetProcessor.run(tree, new VFile());
  });
});
