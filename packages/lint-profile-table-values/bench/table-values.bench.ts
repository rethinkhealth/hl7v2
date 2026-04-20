/**
 * Benchmarks for hl7v2-lint-profile-table-values.
 *
 * Run: pnpm bench
 */
import { c, f, m, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { bench, describe } from "vitest";

import hl7v2LintTableValues from "../src";

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

const processor = unified().use(hl7v2LintTableValues);

describe("table-values performance", () => {
  const small = m(msh("2.5"), s("EVN", f("A01")));

  bench("small (MSH + EVN)", async () => {
    await processor.run(small, new VFile());
  });

  const segments = [
    msh("2.5"),
    s("EVN", f("A01")),
    s("PID", f("1"), f(""), f("12345"), f(""), f("Doe")),
  ];
  for (let i = 1; i <= 50; i++) {
    segments.push(obx(i));
  }
  const large = m(...segments);

  bench("large (53 segments)", async () => {
    await processor.run(large, new VFile());
  });

  const xlSegments = [
    msh("2.5"),
    s("EVN", f("A01")),
    s("PID", f("1"), f(""), f("12345"), f(""), f("Doe")),
  ];
  for (let i = 1; i <= 100; i++) {
    xlSegments.push(obx(i));
  }
  const xl = m(...xlSegments);

  bench("xl (103 segments)", async () => {
    await processor.run(xl, new VFile());
  });
});
