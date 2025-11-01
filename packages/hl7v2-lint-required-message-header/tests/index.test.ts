import { f, g, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2LintRequiredMessageHeader from "../src";

describe("hl7v2-lint:required-message-header", () => {
  it("should have no issues when message header MSH segment is present", async () => {
    const tree = m(
      s("MSH", f("|"), f("^~\\&")),
      s("PID", f("hello")),
      s("OBX", f("1"))
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    console.log("Messages:", file.messages);
    expect(file.messages).toHaveLength(0);
  });

  it("should have no issues when MSH is the first segment in a group", async () => {
    const tree = m(
      g("GROUP", s("MSH", f("|"), f("^~\\&")), s("PID", f("hello")))
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("warns when message header MSH segment is missing", async () => {
    const tree = m(s("PID", f("hello")), s("OBX", f("1")));
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain(
      "Message header (MSH) segment is required as the first segment. Received PID instead."
    );
  });

  it("warns when first segment in a group is not MSH", async () => {
    const tree = m(g("GROUP", s("PID", f("hello")), s("OBX", f("1"))));
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain(
      "Message header (MSH) segment is required as the first segment. Received PID instead."
    );
  });

  it("should have no issues when MSH is before groups", async () => {
    const tree = m(
      s("MSH", f("|"), f("^~\\&")),
      g("PATIENT", s("PID", f("hello")), s("OBX", f("1")))
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("should have no issues when MSH is the first segment in a nested group", async () => {
    const tree = m(
      g(
        "GROUP",
        s("MSH", f("|"), f("^~\\&")),
        g("PATIENT", s("PID", f("hello")), s("OBX", f("1")))
      )
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("warns when MSH is not the first segment", async () => {
    const tree = m(
      s("PID", f("hello")),
      s("MSH", f("|"), f("^~\\&")),
      s("OBX", f("1"))
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain(
      "Message header (MSH) segment is required as the first segment. Received PID instead."
    );
  });
});
