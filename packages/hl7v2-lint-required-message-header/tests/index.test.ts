/** biome-ignore-all lint/style/noNonNullAssertion: unit tests */
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { VFile } from "vfile";
import { reporter } from "vfile-reporter";
import { describe, expect, it } from "vitest";
import hl7v2LintSegmentRequiredMessageHeader from "../src";

describe("hl7v2-lint:segment-required-message-header", () => {
  it("should have no issues when message header MSH segment is present", () => {
    const hl7v2 = m(
      s("MSH", f("|^~\\&")),
      s("PID", f("hello")),
      s("OBX", f("1"))
    );
    const file = new VFile();

    hl7v2LintSegmentRequiredMessageHeader()!(hl7v2, file, () => {
      const report = reporter(file);

      expect(report).toEqual("no issues found");
    });
  });

  it("warns when message header MSH segment is missing", () => {
    const hl7v2 = m(s("PID", f("hello")), s("OBX", f("1")));
    const file = new VFile();

    hl7v2LintSegmentRequiredMessageHeader()!(hl7v2, file, () => {
      const report = reporter(file);

      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toEqual(
        "Message header (MSH) segment is required. Received PID instead."
      );
    });
  });
});
