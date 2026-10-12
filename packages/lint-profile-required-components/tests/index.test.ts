import { hl7v2AnnotateProfileContext } from "@glion/annotate-profile-context";
import { hl7v2AnnotateProfileFields } from "@glion/annotate-profile-fields";
import { parseHL7v2 } from "@glion/parser";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintRequiredComponents from "../src";

/** An MSH segment whose MSH-9 (Message Type) is `messageType`. */
const msh = (version: string, messageType = "ADT^A01^ADT_A01") =>
  `MSH|^~\\&|SENDER|FAC|RECV|RFAC|20241201||${messageType}|MSG001|P|${version}`;

const lint = async (...segments: string[]) => {
  const file = new VFile();
  await unified()
    .use(hl7v2AnnotateProfileContext)
    .use(hl7v2AnnotateProfileFields)
    .use(hl7v2LintRequiredComponents)
    .run(parseHL7v2(segments.join("\r")), file);
  return file.messages;
};

// In v2.5, MSG.1 (Message Code), MSG.2 (Trigger Event) and MSG.3 (Message Structure) are required.
describe("hl7v2LintRequiredComponents", () => {
  it("accepts a field with every required component", async () => {
    expect(await lint(msh("2.5"))).toEqual([]);
  });

  it("reports a required component that is not present", async () => {
    const [message, ...rest] = await lint(msh("2.5", "ADT^A01"));

    expect(rest).toEqual([]);
    expect(message?.message).toBe(
      "Component `MSH-9.3` (Message Structure) is not present; it is required."
    );
    expect(message?.ruleId).toBe("required-components");
    expect(message?.source).toBe("hl7v2-lint");
  });

  it("reports a required component that is empty", async () => {
    const messages = await lint(msh("2.5", "ADT^^ADT_A01"));

    expect(messages.map((message) => message.message)).toEqual([
      "Component `MSH-9.2` (Trigger Event) is empty; it is required.",
    ]);
  });

  it("accepts a required component whose first subcomponent is empty but a later one has a value", async () => {
    expect(await lint(msh("2.5", "ADT^&A01^ADT_A01"))).toEqual([]);
  });

  it("reports every missing required component of a field", async () => {
    const messages = await lint(msh("2.5", "ADT"));

    expect(messages.map((message) => message.message)).toEqual([
      "Component `MSH-9.2` (Trigger Event) is not present; it is required.",
      "Component `MSH-9.3` (Message Structure) is not present; it is required.",
    ]);
  });

  it("places the report on the empty component", async () => {
    const [message] = await lint(msh("2.5", "ADT^^ADT_A01"));

    expect(message?.ancestors?.map((node) => node.type)).toEqual([
      "root",
      "segment",
      "field",
      "field-repetition",
      "component",
    ]);
  });

  it("places the report on the repetition when the component is not present", async () => {
    const [message] = await lint(msh("2.5", "ADT^A01"));

    expect(message?.ancestors?.map((node) => node.type)).toEqual([
      "root",
      "segment",
      "field",
      "field-repetition",
    ]);
  });

  it("checks every repetition of a repeating field", async () => {
    // v2.5 PID-3 (Patient Identifier List) is CX, whose CX.1 (ID Number) is required
    const messages = await lint(msh("2.5"), "PID|1||12345^^^HOSP~^^^HOSP");

    expect(messages.map((message) => message.message)).toEqual([
      "Component `PID-3.1` (ID Number) is empty; it is required.",
    ]);
  });

  it("does not check an empty field", async () => {
    expect(await lint(msh("2.5"), "PID|1||")).toEqual([]);
  });

  it("does not check a field of a primitive datatype", async () => {
    // v2.5 PID-1 (Set ID - PID) is SI
    expect(await lint(msh("2.5"), "PID|1^")).toEqual([]);
  });

  it("requires no component before v2.5, whose standard marks none", async () => {
    expect(await lint(msh("2.4", "ADT"))).toEqual([]);
  });

  it("skips a segment without a profile", async () => {
    expect(await lint(msh("2.5"), "ZPD|^^")).toEqual([]);
  });

  it("reports nothing when the message has no version", async () => {
    expect(await lint(msh("", "ADT"))).toEqual([]);
  });

  // https://github.com/rethinkhealth/hl7v2/issues/489
  it("reads the version from a composite MSH-12", async () => {
    const messages = await lint(msh("2.5^USA^ISO", "ADT^A01"));

    expect(messages.map((message) => message.message)).toEqual([
      "Component `MSH-9.3` (Message Structure) is not present; it is required.",
    ]);
  });
});
