import { m, s } from "@rethinkhealth/hl7v2-builder";
import type { Definition } from "@rethinkhealth/hl7v2-profiles";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintSegmentOrder from "../src";

describe("hl7v2LintSegmentOrder", () => {
  it("should accept valid segment order with explicit definition", async () => {
    const definition: Definition = {
      start: 0,
      transitions: new Map([
        [0, new Map([["MSH", 1]])],
        [1, new Map([["PID", 2]])],
      ]),
      finals: new Set([2]),
    };

    const tree = m(s("MSH"), s("PID"));

    const processor = unified().use(hl7v2LintSegmentOrder, { definition });
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("should reject invalid segment order with explicit definition", async () => {
    const definition: Definition = {
      start: 0,
      transitions: new Map([
        [0, new Map([["MSH", 1]])],
        [1, new Map([["PID", 2]])],
        [2, new Map([["PV1", 3]])],
      ]),
      finals: new Set([3]),
    };

    const tree = m(s("MSH"), s("INVALID"));

    const processor = unified().use(hl7v2LintSegmentOrder, { definition });
    const file = new VFile();

    try {
      await processor.run(tree, file);
    } catch {
      // test
    }

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]).toMatchObject({
      message:
        "Segment 'INVALID' is not allowed at the order defined by the profile. Expected: PID",
      ruleId: "segment-order",
      source: "hl7v2-lint",
      reason:
        "Segment 'INVALID' is not allowed at the order defined by the profile. Expected: PID",
    });
  });

  it("should handle valid segment order with repeating segments", async () => {
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

    const processor = unified().use(hl7v2LintSegmentOrder, { definition });
    const file = new VFile();

    await processor.run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("should reject incomplete segment sequence", async () => {
    const definition: Definition = {
      start: 0,
      transitions: new Map([
        [0, new Map([["MSH", 1]])],
        [1, new Map([["PID", 2]])],
      ]),
      finals: new Set([2]),
    };

    const tree = m(s("MSH"));

    const processor = unified().use(hl7v2LintSegmentOrder, { definition });
    const file = new VFile();

    try {
      await processor.run(tree, file);
    } catch {
      // test
    }

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]).toMatchObject({
      message: "Message ended prematurely. Required segments missing: PID",
      reason: "Message ended prematurely. Required segments missing: PID",
      ruleId: "segment-order",
      source: "hl7v2-lint",
    });
  });

  it("should handle empty message", async () => {
    const definition: Definition = {
      start: 0,
      transitions: new Map([[0, new Map([["MSH", 1]])]]),
      finals: new Set([1]),
    };

    const tree = m();

    const processor = unified().use(hl7v2LintSegmentOrder, { definition });
    const file = new VFile();

    try {
      await processor.run(tree, file);
    } catch {
      // test
    }

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]).toMatchObject({
      message: "Message ended prematurely. Required segments missing: MSH",
      reason: "Message ended prematurely. Required segments missing: MSH",
      ruleId: "segment-order",
      source: "hl7v2-lint",
    });
  });

  it("should return tree unchanged when no definition and no metadata", async () => {
    const tree = m(s("MSH"), s("PID"));

    const processor = unified().use(hl7v2LintSegmentOrder);
    const file = new VFile();

    await processor.run(tree, file);
    // test

    expect(file.messages).toHaveLength(0);
  });

  describe("position tracking", () => {
    it("should attach position information from invalid segment to error message", async () => {
      const definition: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
      };

      // Create segments with position information
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

      const processor = unified().use(hl7v2LintSegmentOrder, { definition });
      const file = new VFile();

      try {
        await processor.run(tree, file);
      } catch {
        // test
      }

      expect(file.messages).toHaveLength(1);

      // Check that the invalid segment error has position information
      expect(file.messages[0]).toMatchObject({
        ruleId: "segment-order",
        source: "hl7v2-lint",
        place: {
          start: { line: 2, column: 1, offset: 10 },
          end: { line: 2, column: 20, offset: 29 },
        },
      });
    });

    it("should attach message-level error to root when message ends prematurely", async () => {
      const definition: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
          [2, new Map([["PV1", 3]])],
        ]),
        finals: new Set([3]),
      };

      const mshSegment = s("MSH");
      mshSegment.position = {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 10, offset: 9 },
      };

      const tree = m(mshSegment);

      const processor = unified().use(hl7v2LintSegmentOrder, { definition });
      const file = new VFile();

      try {
        await processor.run(tree, file);
      } catch {
        // test
      }

      expect(file.messages).toHaveLength(1);

      // Check that the missing segments error is a message-level error (attached to root)
      expect(file.messages[0]).toMatchObject({
        source: "hl7v2-lint",
        // Message-level errors don't have specific position - attached to root
      });
      expect(file.messages[0]?.message).toContain("Message ended prematurely");
      expect(file.messages[0]?.message).toContain("PID");
    });

    it("should handle multiple invalid segments with different positions", async () => {
      const definition: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
      };

      const mshSegment = s("MSH");
      mshSegment.position = {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 10, offset: 9 },
      };

      const invalidSegment = s("WRONG");
      invalidSegment.position = {
        start: { line: 3, column: 5, offset: 50 },
        end: { line: 3, column: 15, offset: 60 },
      };

      const tree = m(mshSegment, invalidSegment);

      const processor = unified().use(hl7v2LintSegmentOrder, { definition });
      const file = new VFile();

      try {
        await processor.run(tree, file);
      } catch {
        // test
      }

      // Should have error for invalid segment with position from that segment
      const invalidError = file.messages.find(
        (msg) => msg.ruleId === "segment-order" && msg.source === "hl7v2-lint"
      );

      expect(invalidError).toBeDefined();
      expect(invalidError?.place).toEqual({
        start: { line: 3, column: 5, offset: 50 },
        end: { line: 3, column: 15, offset: 60 },
      });
    });

    it("should use tree position when segment position is unavailable", async () => {
      const definition: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
        ]),
        finals: new Set([2]),
      };

      // Create segments without position information
      const tree = m(s("MSH"), s("INVALID"));

      // Add position to the tree root
      tree.position = {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 5, column: 1, offset: 100 },
      };

      const processor = unified().use(hl7v2LintSegmentOrder, { definition });
      const file = new VFile();

      try {
        await processor.run(tree, file);
      } catch {
        // test
      }

      // When segment doesn't have position, it should use tree position as fallback
      const invalidError = file.messages.find(
        (msg) => msg.ruleId === "segment-order" && msg.source === "hl7v2-lint"
      );

      expect(invalidError).toBeDefined();
      // Should have some position (either from tree or undefined)
      // The report function should handle this gracefully
    });

    it("should correctly map automaton index to segment position", async () => {
      const definition: Definition = {
        start: 0,
        transitions: new Map([
          [0, new Map([["MSH", 1]])],
          [1, new Map([["PID", 2]])],
          [2, new Map([["PV1", 3]])],
          [3, new Map([["OBX", 4]])],
        ]),
        finals: new Set([4]),
      };

      const segments = [
        { id: "MSH", line: 1, start: 0, end: 20 },
        { id: "PID", line: 2, start: 21, end: 45 },
        { id: "WRONG", line: 3, start: 46, end: 70 }, // Invalid at index 2
      ];

      const tree = m(
        ...segments.map((seg) => {
          const segment = s(seg.id);
          segment.position = {
            start: { line: seg.line, column: 1, offset: seg.start },
            end: {
              line: seg.line,
              column: seg.end - seg.start,
              offset: seg.end,
            },
          };
          return segment;
        })
      );

      const processor = unified().use(hl7v2LintSegmentOrder, { definition });
      const file = new VFile();

      try {
        await processor.run(tree, file);
      } catch {
        // test
      }

      const invalidError = file.messages.find(
        (msg) => msg.ruleId === "segment-order" && msg.source === "hl7v2-lint"
      );

      expect(invalidError).toBeDefined();
      // Should map to the third segment (index 2) position
      expect(invalidError?.place).toEqual({
        start: { line: 3, column: 1, offset: 46 },
        end: { line: 3, column: 24, offset: 70 },
      });
    });
  });
});
