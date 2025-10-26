import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { reporter } from "vfile-reporter";
import { describe, expect, it } from "vitest";
import hl7v2LintMaxMessageVersion from "../src/index";

/**
 * Helper function to create an MSH segment with specified version
 */
function createMshSegment(version: string) {
  return s(
    "MSH",
    f("|^~\\&"), // Field 1: Field separator and encoding characters
    f("SENDER"), // Field 2: Sending Application
    f("FAC"), // Field 3: Sending Facility
    f("RCVR"), // Field 4: Receiving Application
    f("FAC"), // Field 5: Receiving Facility
    f("20250101010101"), // Field 6: Timestamp
    f(""), // Field 7: Security
    f("ADT^A01"), // Field 8: Message Type
    f("MSG00001"), // Field 9: Message ID
    f("P"), // Field 10: Processing ID
    f(""), // Field 11: Version ID (can be empty, we'll set field 12 instead)
    f(version) // Field 12: Version ID (actual version field used by the rule)
  );
}

describe("hl7v2-lint:max-message-version", () => {
  describe("Passes", () => {
    it("should pass when message version equals the maximum allowed version", async () => {
      const hl7v2 = m(createMshSegment("2.5"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
      expect(file.messages).toHaveLength(0);
    });

    it("should pass when message version is lower than the maximum allowed version", async () => {
      const hl7v2 = m(createMshSegment("2.3"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
    });

    it("should pass when message version is lower with different minor versions", async () => {
      const hl7v2 = m(createMshSegment("2.4.1"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
    });

    it("should pass when message version is lower than version with minor version difference", async () => {
      const hl7v2 = m(createMshSegment("2.5"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5.1" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
    });

    it("should pass when message version is significantly lower", async () => {
      const hl7v2 = m(createMshSegment("1.0"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "3.0" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
    });

    it("should pass when message version is lower but on the same major and minor version", async () => {
      const hl7v2 = m(createMshSegment("2.5.1"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5.2" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
    });

    it("should work correctly with multi-segment messages", async () => {
      const hl7v2 = m(
        createMshSegment("2.6"),
        s("PID", f("1"), f("2"), f("3")),
        s("OBR", f("1"), f("2"), f("3"))
      );
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toContain(
        "Message version 2.6 exceeds the maximum allowed version 2.5"
      );
    });

    it("should support version comparison with single digit versions", async () => {
      const hl7v2 = m(createMshSegment("2"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "3" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
    });

    it("should compare versions correctly with trailing zeros", async () => {
      const hl7v2 = m(createMshSegment("2.5.0"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
    });

    it("should not warn for boundary condition at maximum version", async () => {
      const hl7v2 = m(createMshSegment("2.7.1"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.7.1" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).toEqual("no issues found");
    });
  });

  describe("Fails", () => {
    it("should fail when message version exceeds the maximum allowed version", async () => {
      const hl7v2 = m(createMshSegment("2.8"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toContain(
        "Message version 2.8 exceeds the maximum allowed version 2.5"
      );
    });

    it("should fail when message version is significantly higher", async () => {
      const hl7v2 = m(createMshSegment("3.0"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      console.log(file.messages);
      expect(file.messages[0]).toMatchObject({
        message: "Message version 3.0 exceeds the maximum allowed version 2.5",
        ruleId: "max-message-version",
        source: "hl7v2-lint",
        url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-max-message-version#readme",
      });
    });

    it("should fail when message version is higher but on the same major and minor version", async () => {
      const hl7v2 = m(createMshSegment("2.5.2"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5.1" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]).toMatchObject({
        message:
          "Message version 2.5.2 exceeds the maximum allowed version 2.5.1",
        ruleId: "max-message-version",
        source: "hl7v2-lint",
        url: "https://github.com/rethinkhealth/hl7v2/tree/main/packages/hl7v2-lint-max-message-version#readme",
      });
    });

    it("should warn for version just above maximum", async () => {
      const hl7v2 = m(createMshSegment("2.7.2"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.7.1" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toContain(
        "Message version 2.7.2 exceeds the maximum allowed version 2.7.1"
      );
    });
  });

  describe("Errors/Missing", () => {
    it("should fail when MSH.12 (version) is missing", async () => {
      const hl7v2 = m(
        s(
          "MSH",
          f("|^~\\&"),
          f("SENDER"),
          f("FAC"),
          f("RCVR"),
          f("FAC"),
          f("20250101010101"),
          f(""),
          f("ADT^A01"),
          f("MSG00001"),
          f("P"),
          f("")
          // No 12th field
        )
      );
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toContain(
        "Message version (MSH.12) is not present"
      );
    });

    it("should fail when MSH segment is missing entirely", async () => {
      const hl7v2 = m(s("PID", f("123"), f("456")));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, { version: "2.5" })
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toContain(
        "Message version (MSH.12) is not present"
      );
    });

    it("should fail when options.version is not provided", async () => {
      const hl7v2 = m(createMshSegment("2.5"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintMaxMessageVersion, {} as any)
        .run(hl7v2, file);

      const report = reporter(file);
      expect(report).not.toEqual("no issues found");
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0].message).toContain(
        "Unexpected value `undefined` for `options.version`, expected `string`"
      );
    });
  });
});
