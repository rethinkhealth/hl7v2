import { f, g, m, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";

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
      actual: "PID_ADDED",
      message:
        "The Segment ID is 9 characters long; a Segment ID must be exactly 3 characters.",
      ruleId: "segment-header-length",
      source: "hl7v2-lint",
      url: "https://github.com/rethinkhealth/glion/tree/main/packages/lint-segment-header-length#readme",
    });
  });

  it("should warn when segment header length is less than 3 characters", async () => {
    const tree = m(s("PI", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]).toMatchObject({
      actual: "PI",
      message:
        "The Segment ID is 2 characters long; a Segment ID must be exactly 3 characters.",
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
      actual: "PIDAFD",
      message:
        "The Segment ID is 6 characters long; a Segment ID must be exactly 3 characters.",
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
    expect(file.messages[0].message).toBe(
      "The Segment ID is 6 characters long; a Segment ID must be exactly 3 characters."
    );
    expect(file.messages[1].message).toBe(
      "The Segment ID is 2 characters long; a Segment ID must be exactly 3 characters."
    );
  });

  it("should warn for invalid headers in groups", async () => {
    const tree = m(
      s("MSH", f("|"), f("^~\\&")),
      g("PATIENT", s("PIDLONG", f("1")), s("OBX", f("2")))
    );
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toBe(
      "The Segment ID is 7 characters long; a Segment ID must be exactly 3 characters."
    );
  });

  it("names an empty Segment ID in the report", async () => {
    const tree = m(s("", f("1")));
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]).toMatchObject({
      actual: "",
      message:
        "The segment has an empty Segment ID; a Segment ID must be exactly 3 characters.",
    });
  });

  // The report points at the segment, and its ancestors run from the message
  // through any group to the segment, so tools can highlight it.
  it("places the report on a segment whose Segment ID is not 3 characters", async () => {
    const segment = s("PIDLONG", f("1"));
    segment.position = {
      end: { column: 10, line: 2, offset: 21 },
      start: { column: 1, line: 2, offset: 12 },
    };
    const group = g("PATIENT", segment);
    const tree = m(s("MSH", f("|"), f("^~\\&")), group);
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.place).toEqual({
      end: { column: 10, line: 2, offset: 21 },
      start: { column: 1, line: 2, offset: 12 },
    });
    expect(file.messages[0]?.ancestors).toEqual([tree, group, segment]);
  });

  it("places the report on a segment with an empty Segment ID", async () => {
    const segment = s("", f("1"));
    segment.position = {
      end: { column: 3, line: 2, offset: 14 },
      start: { column: 1, line: 2, offset: 12 },
    };
    const group = g("PATIENT", segment);
    const tree = m(s("MSH", f("|"), f("^~\\&")), group);
    const file = new VFile();

    await unified().use([hl7v2LintSegmentHeaderLength]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.place).toEqual({
      end: { column: 3, line: 2, offset: 14 },
      start: { column: 1, line: 2, offset: 12 },
    });
    expect(file.messages[0]?.ancestors).toEqual([tree, group, segment]);
  });
});
