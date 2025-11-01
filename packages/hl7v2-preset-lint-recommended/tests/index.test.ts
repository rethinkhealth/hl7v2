import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2PresetLintRecommended from "../src/index";

describe("hl7v2-preset-lint-recommended", () => {
  it("should have no issues for a valid message", async () => {
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
      ),
      s("PID", f("1"), f("John Doe")),
      s("OBR", f("1"), f("845439^GHH OE"))
    );
    const file = new VFile();

    await unified().use(hl7v2PresetLintRecommended).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("errors when segment header length is invalid", async () => {
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
      ),
      s("PIDTOOLONG", f("PATID1234^5^M11")),
      s("OBR", f("1"), f("845439^GHH OE"))
    );
    const file = new VFile();

    await unified().use(hl7v2PresetLintRecommended).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toBe(
      "Unexpected 10 header length, expected 3 characters, remove 7 characters"
    );
    expect(file.messages[0].fatal).toBe(true);
  });

  it("errors when message header is missing", async () => {
    const tree = m(
      s("PID", f("PATID1234^5^M11")),
      s("OBR", f("1"), f("845439^GHH OE"))
    );
    const file = new VFile();

    await unified().use(hl7v2PresetLintRecommended).run(tree, file);

    // Should have error for missing MSH (and possibly missing version)
    expect(file.messages.length).toBeGreaterThanOrEqual(1);
    expect(
      file.messages.some((msg) =>
        msg.message.includes("Message header (MSH) segment is required")
      )
    ).toBe(true);
    expect(file.messages[0].fatal).toBe(true);
  });

  it("errors when message version is missing", async () => {
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
        f("P")
        // MSH-12 (version) is missing
      )
    );
    const file = new VFile();

    await unified().use(hl7v2PresetLintRecommended).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toBe(
      "Required MSH-12 segment value is missing"
    );
    expect(file.messages[0].fatal).toBe(true);
  });

  it("errors when message version is unsupported", async () => {
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
        f("3.0") // Unsupported version
      )
    );
    const file = new VFile();

    await unified().use(hl7v2PresetLintRecommended).run(tree, file);

    expect(file.messages.length).toBeGreaterThanOrEqual(1);
    expect(
      file.messages.some((msg) =>
        msg.message.includes("MSH-12 segment value is not supported")
      )
    ).toBe(true);
    expect(file.messages.some((msg) => msg.fatal === true)).toBe(true);
  });

  it("warns about trailing empty fields", async () => {
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
      ),
      s("PID", f("1"), f("John Doe"), f(""), f("")) // Trailing empty fields
    );
    const file = new VFile();

    await unified().use(hl7v2PresetLintRecommended).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain("trailing empty field");
    expect(file.messages[0].fatal).toBe(false); // This is a warning, not an error
  });

  it("reports multiple errors from different rules", async () => {
    const tree = m(
      s("PIDTOOLONG", f("1"), f("John Doe")) // Missing MSH + invalid header length
    );
    const file = new VFile();

    await unified().use(hl7v2PresetLintRecommended).run(tree, file);

    expect(file.messages.length).toBeGreaterThanOrEqual(2);
    // Should have errors for both missing MSH and invalid header length
  });
});
