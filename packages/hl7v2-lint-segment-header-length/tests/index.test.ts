/** biome-ignore-all lint/style/noNonNullAssertion: unit tests */
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { VFile } from "vfile";
import { reporter } from "vfile-reporter";
import { describe, expect, it } from "vitest";
import hl7v2LintSegmentHeaderLength from "../src";

describe("hl7v2-lint:segment-header-length", () => {
  it("should have no issues when segment header length is valid", () => {
    const hl7v2 = m(s("MSH", f("|^~\\&")));
    const file = new VFile();

    hl7v2LintSegmentHeaderLength()!(hl7v2, file, () => {
      const report = reporter(file);

      expect(report).toEqual("no issues found");
    });
  });

  it("should warn when segment header length is invalid - more than 3 characters", () => {
    const hl7v2 = m(s("PID_ADDED", f("|^~\\&")));
    const file = new VFile();

    hl7v2LintSegmentHeaderLength()!(hl7v2, file, () => {
      expect(file.messages.length).toEqual(1);
      expect(file.messages[0]).toMatchObject({
        message:
          "Unexpected 9 header length, expected 3 characters, remove 6 characters",
        ruleId: "segment-header-length",
        source: "hl7v2-lint",
        url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-segment-header-length#readme",
      });
    });
  });

  it("should warn when segment header length is invalid - less than 3 characters", () => {
    const hl7v2 = m(s("PI", f("|^~\\&")));
    const file = new VFile();

    hl7v2LintSegmentHeaderLength()!(hl7v2, file, () => {
      const report = reporter(file);

      expect(report).not.toEqual("no issues found");
      expect(file.messages.length).toEqual(1);
      expect(file.messages[0]).toMatchObject({
        message:
          "Unexpected 2 header length, expected 3 characters, add 1 character",
      });
    });
  });

  it("shoud not warn when multiple segments are present", () => {
    const hl7v2 = m(
      s("PID", f("1|John Doe|Doe|John|19900101|M|||")),
      s("PID", f("2|Jane Doe|Doe|Jane|19900101|F|||"))
    );
    const file = new VFile();

    hl7v2LintSegmentHeaderLength()!(hl7v2, file, () => {
      const report = reporter(file);

      expect(report).toEqual("no issues found");
      expect(file.messages.length).toEqual(0);
    });
  });

  it("shoud warn when multiple segments are present - first segment is invalid", () => {
    const hl7v2 = m(
      s("PIDAFD", f("1||12345^^^HOSP^MR||DOE\\S\\JOHN^A&J|19700101|M")),
      s("NK1", f("1||12345^^^HOSP^MR||DOE\\S\\JOHN^A&J|19700101|M"))
    );
    const file = new VFile();

    hl7v2LintSegmentHeaderLength()!(hl7v2, file, () => {
      const report = reporter(file);

      expect(report).not.toEqual("no issues found");
      expect(file.messages.length).toEqual(1);
      expect(file.messages[0]).toMatchObject({
        message:
          "Unexpected 6 header length, expected 3 characters, remove 3 characters",
      });
    });
  });
});
