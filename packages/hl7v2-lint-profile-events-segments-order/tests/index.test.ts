import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintSegmentOrder from "../src";

/** Simple definition: MSH -> PID (both required) */
function simpleDef(): Definition {
  return {
    start: 0,
    transitions: new Map([
      [0, new Map([["MSH", 1]])],
      [1, new Map([["PID", 2]])],
    ]),
    finals: new Set([2]),
  };
}

/** Definition: MSH -> PID -> PV1 (all required) */
function threeSegmentDef(): Definition {
  return {
    start: 0,
    transitions: new Map([
      [0, new Map([["MSH", 1]])],
      [1, new Map([["PID", 2]])],
      [2, new Map([["PV1", 3]])],
    ]),
    finals: new Set([3]),
  };
}

describe("hl7v2LintSegmentOrder", () => {
  describe("valid messages", () => {
    it("accepts correct segment order", async () => {
      const tree = m(s("MSH"), s("PID"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: simpleDef() })
        .run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("accepts repeating segments", async () => {
      const definition: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [
            1,
            new Map([
              ["OBX", 1],
              ["END", 2],
            ]),
          ],
        ]),
        finals: new Set([2]),
      };

      const tree = m(s("MSH"), s("OBX"), s("OBX"), s("OBX"), s("END"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition })
        .run(tree, file);

      expect(file.messages).toHaveLength(0);
    });
  });

  describe("invalid segment order", () => {
    it("reports unexpected segment", async () => {
      const tree = m(s("MSH"), s("INVALID"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: simpleDef() })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]).toMatchObject({
        message: "Unexpected segment 'INVALID'. Expected: PID",
        ruleId: "segment-order",
        source: "hl7v2-lint",
      });
    });

    it("reports segment with empty name", async () => {
      const tree = m(s("MSH"), s(""));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: simpleDef() })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]).toMatchObject({
        ruleId: "segment-order",
        source: "hl7v2-lint",
      });
      expect(file.messages[0]?.message).toContain("empty segment name");
    });

    it("reports segment with undefined name", async () => {
      const seg = s("MSH");
      const unnamed = s("placeholder");
      // oxlint-disable-next-line typescript/no-explicit-any
      (unnamed as any).name = undefined;

      const tree = m(seg, unnamed);
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: simpleDef() })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]).toMatchObject({
        ruleId: "segment-order",
        source: "hl7v2-lint",
      });
      expect(file.messages[0]?.message).toContain("empty segment name");
    });

    it("stops at first invalid segment", async () => {
      const tree = m(s("MSH"), s("WRONG1"), s("WRONG2"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: threeSegmentDef() })
        .run(tree, file);

      // Only reports the first invalid segment
      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("WRONG1");
    });
  });

  describe("premature end", () => {
    it("reports missing required segments", async () => {
      const tree = m(s("MSH"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: simpleDef() })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]).toMatchObject({
        message: "Message ended prematurely. Expected: PID",
        ruleId: "segment-order",
        source: "hl7v2-lint",
      });
    });

    it("reports for empty message", async () => {
      const tree = m();
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: simpleDef() })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain(
        "Message ended prematurely. Expected: MSH"
      );
    });
  });

  describe("position tracking", () => {
    it("attaches segment position to error", async () => {
      const mshSegment = s("MSH");
      mshSegment.position = {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 10, offset: 9 },
      };

      const invalidSegment = s("INVALID");
      invalidSegment.position = {
        start: { line: 2, column: 1, offset: 10 },
        end: { line: 2, column: 20, offset: 29 },
      };

      const tree = m(mshSegment, invalidSegment);
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: simpleDef() })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.place).toStrictEqual({
        start: { line: 2, column: 1, offset: 10 },
        end: { line: 2, column: 20, offset: 29 },
      });
    });

    it("handles segment without position gracefully", async () => {
      const tree = m(s("MSH"), s("INVALID"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: simpleDef() })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.place).toBeUndefined();
    });
  });

  describe("auto-resolution", () => {
    it("reports when both version and structure are missing", async () => {
      const tree = m(s("MSH"), s("PID"));
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain(
        "missing version (MSH-12) or message structure (MSH-9.3)"
      );
    });

    it("reports when version is present but structure is missing", async () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01")), // MSH-9.1 and MSH-9.2 only, no MSH-9.3
          f(""),
          f(""),
          f("2.5")
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("missing message structure");
    });

    it("reports when structure is present but version is missing", async () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01"), c("ADT_A01")) // MSH-9.3 present but no MSH-12
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain(
        "missing version (MSH-12) or message structure (MSH-9.3)"
      );
    });

    it("reports when profile is not found", async () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ZZZ"), c("Z99"), c("ZZZ_Z99")),
          f(""),
          f(""),
          f("2.5")
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages).toHaveLength(1);
      expect(file.messages[0]?.message).toContain("no profile found");
    });

    it("loads profile from MSH-9.3 and MSH-12", async () => {
      const tree = m(
        s(
          "MSH",
          f("|"),
          f("^~\\&"),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(""),
          f(c("ADT"), c("A01"), c("ADT_A01")),
          f(""),
          f(""),
          f("2.5")
        ),
        s("EVN"),
        s("PID")
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      // Should load profile from MSH fields — no resolution errors
      const resolutionErrors = file.messages.filter(
        (msg) =>
          msg.message.includes("missing version") ||
          msg.message.includes("no profile found")
      );
      expect(resolutionErrors).toHaveLength(0);
    });
  });

  describe("integration with real profiles", () => {
    it("validates ADT_A01 segment order", async () => {
      const definition = await profiles.events.load("2.5", "ADT_A01");

      // Valid start of ADT_A01: MSH -> EVN -> PID
      const tree = m(s("MSH"), s("EVN"), s("PID"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition })
        .run(tree, file);

      // MSH -> EVN -> PID is valid; may report premature end but no invalid segments
      const invalidSegmentErrors = file.messages.filter((msg) =>
        msg.message.includes("Unexpected segment")
      );
      expect(invalidSegmentErrors).toHaveLength(0);
    });

    it("rejects wrong segment order in ADT_A01", async () => {
      const definition = await profiles.events.load("2.5", "ADT_A01");

      // PID before EVN should be invalid in ADT_A01
      const tree = m(s("MSH"), s("PID"), s("EVN"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition })
        .run(tree, file);

      const invalidErrors = file.messages.filter((msg) =>
        msg.message.includes("Unexpected segment")
      );
      expect(invalidErrors).toHaveLength(1);
      expect(invalidErrors[0]?.message).toContain("PID");
    });
  });
});
