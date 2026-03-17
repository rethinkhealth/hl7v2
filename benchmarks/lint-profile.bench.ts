/**
 * Profile lint preset benchmarks — measures the cost of running all
 * profile-based lint rules on messages with mostly empty fields.
 *
 * This benchmark is sensitive to the "early empty check" optimization:
 * checking isEmptyNode() before profile lookups avoids Map lookups
 * for the majority of fields in typical HL7v2 messages.
 */
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import hl7v2PresetLintProfileRecommended from "@rethinkhealth/hl7v2-preset-lint-profile-recommended";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { bench, describe } from "vitest";

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

function evn() {
  return s("EVN", f("A01"), f("20241201120000"));
}

// ---------------------------------------------------------------------------
// Processor
// ---------------------------------------------------------------------------

const processor = unified().use(hl7v2PresetLintProfileRecommended);

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

describe("lint-profile", () => {
  const small = m(msh("2.5"), evn(), validPid());

  bench("lint-profile: validate 3 segments", async () => {
    await processor.run(small, new VFile());
  });

  const mediumSegments = [msh("2.5"), evn(), validPid()];
  for (let i = 1; i <= 10; i++) {
    mediumSegments.push(obx(i));
  }
  const medium = m(...mediumSegments);

  bench("lint-profile: validate 13 segments", async () => {
    await processor.run(medium, new VFile());
  });

  const largeSegments = [msh("2.5"), evn(), validPid()];
  for (let i = 1; i <= 50; i++) {
    largeSegments.push(obx(i));
  }
  const large = m(...largeSegments);

  bench("lint-profile: validate 53 segments", async () => {
    await processor.run(large, new VFile());
  });

  // Warm cache, then measure — isolates lint rule cost from cache lookup
  profiles.reset();
  bench("lint-profile: validate 53 segments (cold cache)", async () => {
    profiles.reset();
    await processor.run(large, new VFile());
  });
});
