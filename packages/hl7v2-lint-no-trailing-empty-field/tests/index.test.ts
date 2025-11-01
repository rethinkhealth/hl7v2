import { c, f, m, r, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2LintNoTrailingEmptyField from "../src";

describe("hl7v2-lint:no-trailing-empty-field", () => {
  it("does not warn for a segment with no trailing empty fields", async () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f("ADT^A01"),
        f("MSG00001"),
        f("P"),
        f("2.5")
      )
    );
    const file = new VFile();

    await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("does not warn for a segment with an end field with components", async () => {
    const tree = m(
      s(
        "OBR",
        f("1"),
        f("845439^GHH OE"),
        f("1045813^GHH LAB"),
        f("1554-5^GLUCOSE^LN"),
        f(""),
        f(""),
        f("200202150730"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f("DOCT^KILDARE^JAMES^A"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f("200202150930"),
        f(""),
        f("F"),
        f(""),
        f(""),
        f(""),
        f(c("", "", "", "", "", "R"))
      )
    );
    const file = new VFile();

    await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("does not warn for a segment with an end field with empty components", async () => {
    const tree = m(
      s(
        "OBR",
        f("1"),
        f(""),
        f("200202150930"),
        f(""),
        f(""),
        f(c("", "", "", "", ""))
      )
    );
    const file = new VFile();

    await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("does not warn for a segment with end field with multiple components", async () => {
    const tree = m(s("OBR", f(""), f(""), f(c("", "", "", "", ""))));
    const file = new VFile();

    await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("does not warn for a segment with end field with multiple repetitions", async () => {
    const tree = m(s("OBR", f(""), f(""), f(r(""), r(c("", "")))));
    const file = new VFile();

    await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("warns for a segment with trailing empty fields", async () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f("ADT^A01"),
        f("MSG00001"),
        f("P"),
        f("2.5"),
        f("") // trailing empty field
      )
    );
    const file = new VFile();

    await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain(
      "Segment has 1 trailing empty field(s)."
    );
  });

  it("warns for a segment with multiple trailing empty fields", async () => {
    const tree = m(
      s(
        "PID",
        f("1"),
        f("John"),
        f(""), // trailing empty field
        f(""), // trailing empty field
        f("") // trailing empty field
      )
    );
    const file = new VFile();

    await unified().use([hl7v2LintNoTrailingEmptyField]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain(
      "Segment has 3 trailing empty field(s)."
    );
  });
});
