import { c, f, g, m, s } from "@glion/builder";
import type { EventSchema } from "@glion/profiles";
import { profiles } from "@glion/profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintSegmentOrder from "../src";

/** MSH, then PID, both required. */
const MSH_PID: EventSchema = {
  elements: [
    { name: "MSH", optional: false, repeating: false, type: "segment" },
    { name: "PID", optional: false, repeating: false, type: "segment" },
  ],
  id: "TEST",
};

/** MSH, PID, then PV1, all required. */
const MSH_PID_PV1: EventSchema = {
  elements: [
    { name: "MSH", optional: false, repeating: false, type: "segment" },
    { name: "PID", optional: false, repeating: false, type: "segment" },
    { name: "PV1", optional: false, repeating: false, type: "segment" },
  ],
  id: "TEST",
};

/** MSH, then one or more OBX, then PV1. */
const MSH_OBX_PV1: EventSchema = {
  elements: [
    { name: "MSH", optional: false, repeating: false, type: "segment" },
    { name: "OBX", optional: false, repeating: true, type: "segment" },
    { name: "PV1", optional: false, repeating: false, type: "segment" },
  ],
  id: "TEST",
};

/**
 * MSH PATIENT { ORDER } [DSC], where PATIENT is `PID [PD1]`, ORDER is
 * `[ORC] OBR [{ RESULT }]`, and RESULT is `OBX [{ NTE }]`.
 */
const LAB: EventSchema = {
  elements: [
    { name: "MSH", optional: false, repeating: false, type: "segment" },
    {
      elements: [
        { name: "PID", optional: false, repeating: false, type: "segment" },
        { name: "PD1", optional: true, repeating: false, type: "segment" },
      ],
      id: "PATIENT",
      name: "Patient",
      optional: false,
      repeating: false,
      type: "group",
    },
    {
      elements: [
        { name: "ORC", optional: true, repeating: false, type: "segment" },
        { name: "OBR", optional: false, repeating: false, type: "segment" },
        {
          elements: [
            { name: "OBX", optional: false, repeating: false, type: "segment" },
            { name: "NTE", optional: true, repeating: true, type: "segment" },
          ],
          id: "RESULT",
          name: "Result",
          optional: true,
          repeating: true,
          type: "group",
        },
      ],
      id: "ORDER",
      name: "Order",
      optional: false,
      repeating: true,
      type: "group",
    },
    { name: "DSC", optional: true, repeating: false, type: "segment" },
  ],
  id: "LAB",
};

describe("hl7v2LintSegmentOrder", () => {
  describe("valid messages", () => {
    it("accepts correct segment order", async () => {
      const tree = m(s("MSH"), s("PID"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("accepts repeating segments", async () => {
      const definition: EventSchema = {
        elements: [
          { name: "MSH", optional: false, repeating: false, type: "segment" },
          { name: "OBX", optional: true, repeating: true, type: "segment" },
          { name: "END", optional: false, repeating: false, type: "segment" },
        ],
        id: "TEST",
      };

      const tree = m(s("MSH"), s("OBX"), s("OBX"), s("OBX"), s("END"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition })
        .run(tree, file);

      expect(file.messages).toHaveLength(0);
    });
  });

  describe("grouped messages", () => {
    it("validates segments nested in groups in document order", async () => {
      const tree = m(s("MSH"), g("PATIENT", s("PID"), g("VISIT", s("PV1"))));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID_PV1 })
        .run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("reports segments out of order nested in a group", async () => {
      const tree = m(s("MSH"), g("PATIENT", s("PV1"), s("PID")));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID_PV1 })
        .run(tree, file);

      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PID` is missing; the event schema requires it at this point.",
        "Segment `PID` is out of place; the event schema does not allow it at this point.",
      ]);
    });
  });

  describe("definition function", () => {
    it("validates against the schema the function returns for the message", async () => {
      const tree = m(s("MSH"), s("PV1"));
      const file = new VFile();
      const seen: unknown[] = [];

      await unified()
        .use(hl7v2LintSegmentOrder, {
          definition: (context) => {
            seen.push(context.tree, context.file);
            return MSH_PID;
          },
        })
        .run(tree, file);

      expect(seen).toEqual([tree, file]);
      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PID` is missing; the event schema requires it at this point.",
        "Segment `PV1` is out of place; the event schema does not allow it at this point.",
      ]);
    });

    it("awaits a schema the function resolves asynchronously", async () => {
      const tree = m(s("MSH"), s("PV1"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, {
          definition: async () => await Promise.resolve(MSH_PID_PV1),
        })
        .run(tree, file);

      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PID` is missing; the event schema requires it at this point.",
      ]);
    });

    it("uses the schema MSH-9 names when the function returns no schema", async () => {
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

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: () => {} })
        .run(tree, file);

      // ADT_A01 requires PV1 after PID: the report proves the fallback loaded.
      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PV1` is missing; the event schema requires it at this point.",
      ]);
    });
  });

  describe("invalid segment order", () => {
    it("reports a segment in place of a required one as unexpected, and the required one as missing", async () => {
      const tree = m(s("MSH"), s("INVALID"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages).toMatchObject([
        {
          message:
            "Segment `PID` is missing; the event schema requires it at this point.",
          ruleId: "segment-order",
          source: "hl7v2-lint",
        },
        {
          message:
            "Segment `INVALID` is out of place; the event schema does not allow it at this point.",
          ruleId: "segment-order",
          source: "hl7v2-lint",
        },
      ]);
    });

    it("reports a segment with an empty ID as unexpected", async () => {
      const tree = m(s("MSH"), s(""));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PID` is missing; the event schema requires it at this point.",
        "A segment with an empty Segment ID is out of place; the event schema does not allow it at this point.",
      ]);
    });

    it("reports a malformed segment ID as unexpected, and the segment it stands for as missing", async () => {
      const tree = m(s("MSH"), s("PIDX"), s("PV1"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID_PV1 })
        .run(tree, file);

      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PID` is missing; the event schema requires it at this point.",
        "Segment `PIDX` is out of place; the event schema does not allow it at this point.",
      ]);
    });

    it("reports each segment out of place next to the required one it displaces", async () => {
      const tree = m(s("MSH"), s("WRONG1"), s("WRONG2"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID_PV1 })
        .run(tree, file);

      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PID` is missing; the event schema requires it at this point.",
        "Segment `WRONG1` is out of place; the event schema does not allow it at this point.",
        "Segment `PV1` is missing; the event schema requires it at this point.",
        "Segment `WRONG2` is out of place; the event schema does not allow it at this point.",
      ]);
    });
  });

  describe("reports in groups", () => {
    const lintLab = async (...segmentIds: string[]) => {
      const file = new VFile();
      await unified()
        .use(hl7v2LintSegmentOrder, { definition: LAB })
        .run(m(...segmentIds.map((id) => s(id))), file);
      return file.messages.map((message) => message.reason);
    };

    it("names the groups a missing segment belongs in", async () => {
      expect(await lintLab("MSH", "OBR", "OBX")).toEqual([
        "Segment `PID` of segment group `PATIENT` is missing; the event schema requires it at this point.",
      ]);
      expect(await lintLab("MSH", "PID", "OBX", "OBX")).toEqual([
        "Segment `OBR` of segment group `ORDER` is missing; the event schema requires it at this point.",
      ]);
    });

    it("names no group for an unexpected segment, which belongs in none", async () => {
      expect(await lintLab("MSH", "PID", "OBR", "OBX", "PV1", "OBX")).toEqual([
        "Segment `PV1` is out of place; the event schema does not allow it at this point.",
      ]);
    });

    it("reads a segment that starts a new group as that group's, with its first segment missing", async () => {
      expect(await lintLab("MSH", "PID", "OBR", "OBX", "ORC", "OBX")).toEqual([
        "Segment `OBR` of segment group `ORDER` is missing; the event schema requires it at this point.",
      ]);
    });
  });

  describe("missing at the end", () => {
    it("reports a required segment missing at the end", async () => {
      const tree = m(s("MSH"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages).toMatchObject([
        {
          message:
            "Segment `PID` is missing; the event schema requires it at this point.",
          ruleId: "segment-order",
          source: "hl7v2-lint",
        },
      ]);
    });

    it("reports every required segment of an empty message as missing", async () => {
      const tree = m();
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `MSH` is missing; the event schema requires it at this point.",
        "Segment `PID` is missing; the event schema requires it at this point.",
      ]);
    });
  });

  describe("report fields", () => {
    const positioned = (name: string, line: number) => {
      const node = s(name);
      node.position = {
        end: { column: 4, line, offset: (line - 1) * 5 + 3 },
        start: { column: 1, line, offset: (line - 1) * 5 },
      };
      return node;
    };

    it("places a missing segment at the start of the segment it comes before, with expected its ID", async () => {
      const msh = positioned("MSH", 1);
      const pv1 = positioned("PV1", 2);
      const tree = m(msh, pv1);
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID_PV1 })
        .run(tree, file);

      const [missing] = file.messages;
      expect(missing?.reason).toBe(
        "Segment `PID` is missing; the event schema requires it at this point."
      );
      expect(missing?.place).toStrictEqual(pv1.position?.start);
      expect(missing?.ancestors).toStrictEqual([tree]);
      expect(missing?.expected).toStrictEqual(["PID"]);
      expect(missing?.actual).toBeUndefined();
    });

    it("places a missing segment at the end of the message after the last segment", async () => {
      const tree = m(positioned("MSH", 1));
      tree.position = {
        end: { column: 4, line: 1, offset: 3 },
        start: { column: 1, line: 1, offset: 0 },
      };
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      const [missing] = file.messages;
      expect(missing?.reason).toBe(
        "Segment `PID` is missing; the event schema requires it at this point."
      );
      expect(missing?.place).toStrictEqual(tree.position.end);
      expect(missing?.ancestors).toStrictEqual([tree]);
    });

    it("gives a missing segment the ancestors of the point it goes at", async () => {
      const pv1 = s("PV1");
      const patient = g("PATIENT", pv1);
      const tree = m(s("MSH"), patient);
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID_PV1 })
        .run(tree, file);

      expect(file.messages[0]?.ancestors).toStrictEqual([tree, patient]);
    });

    it("places an unexpected segment on itself, with actual its ID", async () => {
      const invalid = positioned("INVALID", 2);
      const tree = m(positioned("MSH", 1), invalid);
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      const unexpected = file.messages.find(
        (message) => message.actual !== undefined
      );
      expect(unexpected?.reason).toBe(
        "Segment `INVALID` is out of place; the event schema does not allow it at this point."
      );
      expect(unexpected?.place).toStrictEqual(invalid.position);
      expect(unexpected?.ancestors).toStrictEqual([tree, invalid]);
      expect(unexpected?.actual).toBe("INVALID");
      expect(unexpected?.expected).toBeUndefined();
    });

    it("places an unexpected first segment on itself", async () => {
      const first = positioned("XXX", 1);
      const tree = m(first, positioned("MSH", 2), positioned("PID", 3));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      const [unexpected] = file.messages;
      expect(unexpected?.reason).toBe(
        "Segment `XXX` is out of place; the event schema does not allow it at this point."
      );
      expect(unexpected?.place).toStrictEqual(first.position);
      expect(unexpected?.ancestors).toStrictEqual([tree, first]);
      expect(unexpected?.actual).toBe("XXX");
    });

    it("reports without a place when the segments have no position", async () => {
      const tree = m(s("MSH"), s("INVALID"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages.map((message) => message.place)).toStrictEqual([
        undefined,
        undefined,
      ]);
    });
  });

  describe("limits", () => {
    it("reports 20 edits, then the count of the rest", async () => {
      // PID missing, then 25 segments out of place: 26 edits.
      const tree = m(s("MSH"), ...Array.from({ length: 25 }, () => s("XXX")));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages).toHaveLength(21);
      expect(file.messages[0]?.reason).toBe(
        "Segment `PID` is missing; the event schema requires it at this point."
      );
      expect(file.messages[20]?.reason).toBe(
        "The message has 6 more missing or out-of-place segments; the rule reports the first 20."
      );
      expect(file.messages[20]?.ancestors).toStrictEqual([tree]);
    });

    it("counts one edit past the 20th in the singular", async () => {
      // PID missing, then 20 segments out of place: 21 edits.
      const tree = m(s("MSH"), ...Array.from({ length: 20 }, () => s("XXX")));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages).toHaveLength(21);
      expect(file.messages[20]?.reason).toBe(
        "The message has 1 more missing or out-of-place segment; the rule reports the first 20."
      );
    });

    it("reports 20 edits with no count when there are no more", async () => {
      // PID missing, then 19 segments out of place: 20 edits.
      const tree = m(s("MSH"), ...Array.from({ length: 19 }, () => s("XXX")));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages).toHaveLength(20);
      expect(
        file.messages.every((message) => message.expected ?? message.actual)
      ).toBe(true);
    });

    it("repairs a message of 1,000 segments", async () => {
      const tree = m(s("MSH"), ...Array.from({ length: 999 }, () => s("OBX")));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_OBX_PV1 })
        .run(tree, file);

      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PV1` is missing; the event schema requires it at this point.",
      ]);
      expect(file.messages[0]?.note).toBeUndefined();
    });

    it("reports only the first segment that does not fit in a message of more than 1,000 segments", async () => {
      const xxx = s("XXX");
      const tree = m(
        s("MSH"),
        xxx,
        ...Array.from({ length: 999 }, () => s("PID"))
      );
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_PID })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      const [message] = file.messages;
      expect(message?.reason).toBe(
        "Segment `XXX` is out of place; the event schema does not allow it at this point."
      );
      expect(message?.ancestors).toStrictEqual([tree, xxx]);
      expect(message?.actual).toBe("XXX");
      expect(message?.expected).toStrictEqual(["PID"]);
      expect(message?.note).toBe(
        "The message has 1001 segments, more than the 1000 the rule repairs, so only the first segment that does not fit is reported."
      );
    });

    it("reports a message of more than 1,000 segments that ends early at its end, with the segment IDs valid there", async () => {
      const tree = m(s("MSH"), ...Array.from({ length: 1000 }, () => s("OBX")));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition: MSH_OBX_PV1 })
        .run(tree, file);

      expect(file.messages).toHaveLength(1);
      const [message] = file.messages;
      expect(message?.reason).toBe(
        "The message ends before its event schema is complete; the event schema requires `OBX` or `PV1` next."
      );
      expect(message?.ancestors).toStrictEqual([tree]);
      expect(message?.expected).toStrictEqual(["OBX", "PV1"]);
      expect(message?.note).toBe(
        "The message has 1001 segments, more than the 1000 the rule repairs, so only the first segment that does not fit is reported."
      );
    });
  });

  describe("auto-resolution", () => {
    it("silently skips when both version and schema are missing", async () => {
      const tree = m(s("MSH"), s("PID"));
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("resolves via event map when MSH-9.3 is missing but MSH-9.1 and MSH-9.2 are present", async () => {
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
        ),
        s("EVN"),
        s("PID")
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      // ADT_A01 requires PV1 after PID: the report proves the schema loaded.
      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PV1` is missing; the event schema requires it at this point.",
      ]);
    });

    it("silently skips when MSH-9 components are all missing", async () => {
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
          f(""), // Empty MSH-9
          f(""),
          f(""),
          f("2.5")
        )
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages).toHaveLength(0);
    });

    it("silently skips when schema is present but version is missing", async () => {
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

      expect(file.messages).toHaveLength(0);
    });

    it("silently skips when profile is not found", async () => {
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

      expect(file.messages).toHaveLength(0);
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

      // ADT_A01 requires PV1 after PID: the report proves the schema loaded.
      expect(file.messages.map((message) => message.reason)).toEqual([
        "Segment `PV1` is missing; the event schema requires it at this point.",
      ]);
    });
  });

  describe("event map fallback integration", () => {
    it("detects wrong segment order via event map fallback (no MSH-9.3)", async () => {
      // PID before EVN is invalid for ADT_A01
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
          f(c("ADT"), c("A01")), // No MSH-9.3
          f(""),
          f(""),
          f("2.5")
        ),
        s("PID"),
        s("EVN")
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages.map((msg) => msg.reason)).toEqual([
        "Segment `EVN` is missing; the event schema requires it at this point.",
        "Segment `PV1` is missing; the event schema requires it at this point.",
        "Segment `EVN` is out of place; the event schema does not allow it at this point.",
      ]);
    });

    it("validates alias event via fallback (ADT^A04 uses ADT_A01 schema)", async () => {
      // ADT_A04 maps to ADT_A01 schema — MSH -> EVN -> PID is valid start
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
          f(c("ADT"), c("A04")), // No MSH-9.3, alias event
          f(""),
          f(""),
          f("2.5")
        ),
        s("EVN"),
        s("PID")
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages.map((msg) => msg.reason)).toEqual([
        "Segment `PV1` is missing; the event schema requires it at this point.",
      ]);
    });

    it("validates v2.3 message without MSH-9.3", async () => {
      // ADT_A01 in v2.3: MSH -> EVN -> PID is valid start
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
          f(c("ADT"), c("A01")), // No MSH-9.3 — normal for v2.3
          f(""),
          f(""),
          f("2.3")
        ),
        s("EVN"),
        s("PID")
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages.map((msg) => msg.reason)).toEqual([
        "Segment `PV1` is missing; the event schema requires it at this point.",
      ]);
    });

    it("silently skips when MSH-9.3 is absent and event is unknown", async () => {
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
          f(c("ZZZ"), c("Z99")), // No MSH-9.3, unknown event
          f(""),
          f(""),
          f("2.5")
        ),
        s("PID")
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      // Cannot resolve — should skip silently
      expect(file.messages).toHaveLength(0);
    });

    it("wire value wins: uses MSH-9.3 even when it differs from event map", async () => {
      // ADT^A04 with MSH-9.3 = "ADT_A04" — wire value wins, load resolves alias internally
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
          f(c("ADT"), c("A04"), c("ADT_A04")),
          f(""),
          f(""),
          f("2.5")
        ),
        s("EVN"),
        s("PID")
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      expect(file.messages.map((msg) => msg.reason)).toEqual([
        "Segment `PV1` is missing; the event schema requires it at this point.",
      ]);
    });

    it("wire value wins: nonexistent MSH-9.3 schema skips gracefully", async () => {
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
          f(c("ADT"), c("A01"), c("BOGUS_X99")), // Wire value is nonsense
          f(""),
          f(""),
          f("2.5")
        ),
        s("EVN"),
        s("PID")
      );
      const file = new VFile();

      await unified().use(hl7v2LintSegmentOrder).run(tree, file);

      // Profile not found — should skip silently, not crash
      expect(file.messages.map((msg) => msg.reason)).toEqual([]);
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

      // MSH -> EVN -> PID is a valid start; only PV1, which follows, is missing
      expect(file.messages.map((msg) => msg.reason)).toEqual([
        "Segment `PV1` is missing; the event schema requires it at this point.",
      ]);
    });

    it("rejects wrong segment order in ADT_A01", async () => {
      const definition = await profiles.events.load("2.5", "ADT_A01");

      // PID before EVN: EVN is read as out of place after PID
      const tree = m(s("MSH"), s("PID"), s("EVN"));
      const file = new VFile();

      await unified()
        .use(hl7v2LintSegmentOrder, { definition })
        .run(tree, file);

      expect(file.messages.map((msg) => msg.reason)).toEqual([
        "Segment `EVN` is missing; the event schema requires it at this point.",
        "Segment `PV1` is missing; the event schema requires it at this point.",
        "Segment `EVN` is out of place; the event schema does not allow it at this point.",
      ]);
    });
  });

  // https://github.com/rethinkhealth/hl7v2/issues/489
  it("validates correctly when MSH-12 is composite VID — #489", async () => {
    function mshVid(version: string) {
      return s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RECV"),
        f("RFAC"),
        f("20241201"),
        f(""),
        f(c("ADT"), c("A01"), c("ADT_A01")),
        f("MSG001"),
        f("P"),
        f(c(version), c("USA"), c("ISO")) // VID composite
      );
    }

    // PID before EVN is wrong order for ADT_A01 — should trigger validation
    const tree = m(mshVid("2.5"), s("PID"), s("EVN"));
    const file = new VFile();

    await unified().use(hl7v2LintSegmentOrder).run(tree, file);

    // The rule must actually run and find the segment order violation
    const errors = file.messages.filter(
      (msg) => msg.ruleId === "segment-order"
    );
    expect(errors.length).toBeGreaterThanOrEqual(1);
  });
});
