/**
 * Benchmarks for hl7v2-lint-profile-required-fields.
 *
 * Measures the end-to-end cost of running the lint rule on messages
 * of varying sizes and segment counts.
 *
 * Run: pnpm bench
 */
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { bench, describe } from "vitest";

import hl7v2LintRequiredFields from "../src";

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

/** PID with all required fields populated */
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

/** PID missing required field PID-3 */
function invalidPid() {
  return s("PID", f("1"), f(""), f(""), f(""), f("Doe^John"));
}

/** OBX segment (has required fields in v2.5) */
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

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

const processor = unified().use(hl7v2LintRequiredFields);

describe("small message (MSH + PID)", () => {
  const tree = m(msh("2.5"), validPid());

  bench("valid — no warnings", async () => {
    await processor.run(tree, new VFile());
  });

  const invalidTree = m(msh("2.5"), invalidPid());

  bench("invalid — missing required field", async () => {
    await processor.run(invalidTree, new VFile());
  });
});

describe("medium message (MSH + PID + 10 OBX)", () => {
  const segments = [msh("2.5"), validPid()];
  for (let i = 1; i <= 10; i++) {
    segments.push(obx(i));
  }
  const tree = m(...segments);

  bench("10 segments", async () => {
    await processor.run(tree, new VFile());
  });
});

describe("large message (MSH + PID + 50 OBX)", () => {
  const segments = [msh("2.5"), validPid()];
  for (let i = 1; i <= 50; i++) {
    segments.push(obx(i));
  }
  const tree = m(...segments);

  bench("52 segments", async () => {
    await processor.run(tree, new VFile());
  });
});

describe("repeated segment types (profile caching)", () => {
  const segments = [msh("2.5"), validPid()];
  for (let i = 1; i <= 100; i++) {
    segments.push(obx(i));
  }
  const tree = m(...segments);

  bench("102 segments (3 unique types)", async () => {
    await processor.run(tree, new VFile());
  });
});
