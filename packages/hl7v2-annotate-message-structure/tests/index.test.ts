import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { getMessageStructure } from "@rethinkhealth/hl7v2-util-message-info";
import { unified } from "unified";

import { hl7v2AnnotateMessageStructure } from "../src";

describe(hl7v2AnnotateMessageStructure, () => {
  it("resolves message structure from event map", async () => {
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
        f(c("ADT"), c("A01")), // MSH-9.1 and MSH-9.2, no MSH-9.3
        f(""),
        f(""),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(getMessageStructure(result)).toBe("ADT_A01");
  });

  it("does not override existing message structure", async () => {
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
        f(c("ADT"), c("A01"), c("ADT_A02")), // Already has MSH-9.3
        f(""),
        f(""),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(getMessageStructure(result)).toBe("ADT_A02");
  });

  it("does not resolve structure when message code is missing", async () => {
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
        f(c(""), c("A01")), // Only MSH-9.2
        f(""),
        f(""),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(getMessageStructure(result)).toBeUndefined();
  });

  it("does not resolve structure when trigger event is missing", async () => {
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
        f(c("ADT")), // Only MSH-9.1
        f(""),
        f(""),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(getMessageStructure(result)).toBeUndefined();
  });

  it("works without hl7v2AnnotateMessage in the pipeline", async () => {
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
        f(c("ADT"), c("A01")),
        f(""),
        f(""),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(getMessageStructure(result)).toBe("ADT_A01");
  });

  it("handles tree without MSH segment", async () => {
    const tree = m(s("PID", f("12345")));

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(result).toBe(tree);
    expect(getMessageStructure(result)).toBeUndefined();
  });

  it("resolves canonical events (identity mappings)", async () => {
    const testCases = [
      { code: "ADT", event: "A01", version: "2.5", expected: "ADT_A01" },
      { code: "ORU", event: "R01", version: "2.5", expected: "ORU_R01" },
      { code: "ORM", event: "O01", version: "2.3.1", expected: "ORM_O01" },
      { code: "VXU", event: "V04", version: "2.5.1", expected: "VXU_V04" },
      { code: "MDM", event: "T02", version: "2.5", expected: "MDM_T02" },
      { code: "SIU", event: "S12", version: "2.7", expected: "SIU_S12" },
    ];

    for (const testCase of testCases) {
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
          f(c(testCase.code), c(testCase.event)),
          f(""),
          f(""),
          f(testCase.version)
        )
      );

      const processor = unified().use(hl7v2AnnotateMessageStructure);
      const result = await processor.run(tree);

      expect(getMessageStructure(result)).toBe(testCase.expected);
    }
  });

  it("resolves alias events to their canonical structures", async () => {
    const testCases = [
      { code: "ADT", event: "A04", version: "2.5", expected: "ADT_A01" },
      { code: "ADT", event: "A08", version: "2.5", expected: "ADT_A01" },
      { code: "ADT", event: "A07", version: "2.5", expected: "ADT_A06" },
      { code: "ADT", event: "A14", version: "2.5", expected: "ADT_A05" },
      { code: "MDM", event: "T04", version: "2.5", expected: "MDM_T02" },
      { code: "SIU", event: "S13", version: "2.7", expected: "SIU_S12" },
    ];

    for (const testCase of testCases) {
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
          f(c(testCase.code), c(testCase.event)),
          f(""),
          f(""),
          f(testCase.version)
        )
      );

      const processor = unified().use(hl7v2AnnotateMessageStructure);
      const result = await processor.run(tree);

      expect(getMessageStructure(result)).toBe(testCase.expected);
    }
  });

  it("returns the same tree instance (mutates in place)", async () => {
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
        f(c("ADT"), c("A04")),
        f(""),
        f(""),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(result).toBe(tree);
  });

  it("preserves existing data properties", async () => {
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
        f(c("ADT"), c("A08")),
        f(""),
        f(""),
        f("2.5")
      )
    );

    tree.data = {
      delimiters: {
        component: "^",
        escape: "\\",
        field: "|",
        repetition: "~",
        segment: "\r",
        subcomponent: "&",
      },
    };

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(result.data?.delimiters).toBeDefined();
    expect(getMessageStructure(result)).toBe("ADT_A01");
  });

  describe("event map resolution", () => {
    it("uses custom event map when provided", async () => {
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
          f(c("ADT"), c("A04")),
          f(""),
          f(""),
          f("2.5")
        )
      );

      const customMap: Record<string, Record<string, string>> = {
        "2.5": { ADT_A04: "CUSTOM_STRUCTURE" },
      };

      const processor = unified().use(hl7v2AnnotateMessageStructure, {
        eventMap: customMap,
      });
      const result = await processor.run(tree);

      expect(getMessageStructure(result)).toBe("CUSTOM_STRUCTURE");
    });

    it("does not resolve unknown events", async () => {
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
          f(c("ZZZ"), c("Z99")),
          f(""),
          f(""),
          f("2.5")
        )
      );

      const processor = unified().use(hl7v2AnnotateMessageStructure);
      const result = await processor.run(tree);

      expect(getMessageStructure(result)).toBeUndefined();
    });

    it("does not resolve when version is missing", async () => {
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
          f(c("ADT"), c("A04"))
        )
      );

      const processor = unified().use(hl7v2AnnotateMessageStructure);
      const result = await processor.run(tree);

      expect(getMessageStructure(result)).toBeUndefined();
    });

    it("does not override existing MSH-9.3", async () => {
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
          f(c("ADT"), c("A04"), c("ADT_A04")), // MSH-9.3 explicitly set
          f(""),
          f(""),
          f("2.5")
        )
      );

      const processor = unified().use(hl7v2AnnotateMessageStructure);
      const result = await processor.run(tree);

      expect(getMessageStructure(result)).toBe("ADT_A04");
    });
  });
});
