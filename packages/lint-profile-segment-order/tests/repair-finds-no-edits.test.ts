import { parseHL7v2 } from "@glion/parser";
import type { EventSchema } from "@glion/profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it, vi } from "vitest";

import hl7v2LintSegmentOrder from "../src";

// repair() finds edits for every message runner() rejects; these tests break
// that contract on purpose, with a repair() that finds none.
vi.mock("@glion/profiles", async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  repair: () => [],
}));

/** MSH, then PID, both required. */
const MSH_PID: EventSchema = {
  elements: [
    { name: "MSH", optional: false, repeating: false, type: "segment" },
    { name: "PID", optional: false, repeating: false, type: "segment" },
  ],
  id: "TEST",
};

/** The findings for the message whose segments are `segments`. */
const lintAgainst = async (...segments: string[]) => {
  const file = new VFile();
  await unified()
    .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
    .run(parseHL7v2(segments.join("\r")), file);
  return file.messages;
};

// When the rule cannot list a rejected message's edits, it still reports the
// message, as the first segment that does not fit, and says why in `note`.
describe("a message the rule cannot list the edits of", () => {
  // XXX stands where PID belongs.
  it("reports the first segment that does not fit", async () => {
    const [message, ...rest] = await lintAgainst("MSH|^~\\&", "XXX|1");

    expect(rest).toEqual([]);
    expect(message?.reason).toBe(
      "Segment `XXX` is out of place; the event schema does not allow it at this point."
    );
    expect(message?.actual).toBe("XXX");
    expect(message?.expected).toEqual(["PID"]);
    expect(message?.note).toBe(
      "The rule could not list every missing or out-of-place segment in this message, so it reports only the first segment that does not fit. This is a bug; please report it."
    );
  });

  // The message ends after MSH, before the PID the schema requires.
  it("reports where a message that ends early ends", async () => {
    const [message, ...rest] = await lintAgainst("MSH|^~\\&");

    expect(rest).toEqual([]);
    expect(message?.reason).toBe(
      "The message ends before its event schema is complete; the event schema requires `PID` next."
    );
    expect(message?.expected).toEqual(["PID"]);
    expect(message?.note).toBe(
      "The rule could not list every missing or out-of-place segment in this message, so it reports only where the message ends. This is a bug; please report it."
    );
  });
});
