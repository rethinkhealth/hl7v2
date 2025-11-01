import { f, g, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2LintSegmentHeaderLength from "../src";

describe("hl7v2-lint:segment-header-length", () => {
  it("should have no issues when segment header length is valid", async () => {
    const tree = m(s("MSH", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("should warn when segment header length is more than 3 characters", async () => {
    const tree = m(s("PID_ADDED", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]).toMatchObject({
      message:
        "Unexpected 9 header length, expected 3 characters, remove 6 characters",
      ruleId: "segment-header-length",
      source: "hl7v2-lint",
      url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-segment-header-length#readme",
    });
  });

  it("should warn when segment header length is less than 3 characters", async () => {
    const tree = m(s("PI", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]).toMatchObject({
      message:
        "Unexpected 2 header length, expected 3 characters, add 1 character",
    });
  });

  it("should not warn when multiple segments with valid headers are present", async () => {
    const tree = m(
      s("PID", f("1"), f("John Doe"), f("Doe"), f("John")),
      s("PID", f("2"), f("Jane Doe"), f("Doe"), f("Jane"))
    );
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("should warn when first segment has invalid header length", async () => {
    const tree = m(
      s("PIDAFD", f("1"), f("12345^^^HOSP^MR")),
      s("NK1", f("1"), f("12345^^^HOSP^MR"))
    );
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]).toMatchObject({
      message:
        "Unexpected 6 header length, expected 3 characters, remove 3 characters",
    });
  });

  it("should warn for all invalid segment headers", async () => {
    const tree = m(
      s("PIDAFD", f("1")),
      s("NK", f("2")),
      s("MSH", f("|"), f("^~\\&"))
    );
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(2);
    expect(file.messages[0].message).toContain("Unexpected 6 header length");
    expect(file.messages[1].message).toContain("Unexpected 2 header length");
  });

  it("should warn for invalid headers in groups", async () => {
    const tree = m(
      s("MSH", f("|"), f("^~\\&")),
      g("PATIENT", s("PIDLONG", f("1")), s("OBX", f("2")))
    );
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain("Unexpected 7 header length");
  });
});
