import { hl7v2AnnotateMessage } from "@rethinkhealth/hl7v2-annotate-message";
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";

import { hl7v2AnnotateMessageStructure } from "../src";

describe(hl7v2AnnotateMessageStructure, () => {
  it("resolves alias events via event maps (ADT_A04 → ADT_A01)", async () => {
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
        f(c("ADT"), c("A04")), // A04 is an alias for A01 structure
        f(""),
        f(""),
        f("2.5")
      )
    );

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toStrictEqual({
      messageCode: "ADT",
      messageStructure: "ADT_A01",
      triggerEvent: "A04",
      version: "2.5",
    });
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

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toStrictEqual({
      messageCode: "ADT",
      messageStructure: "ADT_A02",
      triggerEvent: "A01",
      version: "2.5",
    });
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

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toStrictEqual({
      messageCode: undefined,
      messageStructure: undefined,
      triggerEvent: "A01",
      version: "2.5",
    });
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

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toStrictEqual({
      messageCode: "ADT",
      messageStructure: undefined,
      triggerEvent: undefined,
      version: "2.5",
    });
  });

  it("handles tree without messageInfo", async () => {
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

    // Run without hl7v2AnnotateMessage first
    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    // Should not crash, just return tree unchanged
    expect(result).toBe(tree);
    expect(result.data).toBeUndefined();
  });

  it("handles tree without data", async () => {
    const tree = m(s("PID", f("12345"))) as Root;
    tree.data = undefined;

    const processor = unified().use(hl7v2AnnotateMessageStructure);
    const result = await processor.run(tree);

    expect(result).toBe(tree);
    expect(result.data).toBeUndefined();
  });

  it("resolves various alias events", async () => {
    const testCases = [
      { code: "ADT", event: "A08", expected: "ADT_A01" },
      { code: "ADT", event: "A07", expected: "ADT_A06" },
      { code: "ADT", event: "A14", expected: "ADT_A05" },
      { code: "MDM", event: "T04", expected: "MDM_T02" },
      { code: "SIU", event: "S13", expected: "SIU_S12" },
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
          f("2.5")
        )
      );

      const processor = unified()
        .use(hl7v2AnnotateMessage)
        .use(hl7v2AnnotateMessageStructure);

      const result = await processor.run(tree);

      expect(result.data?.messageInfo?.messageStructure).toBe(
        testCase.expected
      );
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

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    // Should be the same instance
    expect(result).toBe(tree);
  });

  it("works when run in different order with other plugins", async () => {
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

    // Run structure annotator before message annotator (should handle gracefully)
    const processor = unified()
      .use(hl7v2AnnotateMessageStructure)
      .use(hl7v2AnnotateMessage);

    const result = await processor.run(tree);

    // Structure should not be resolved because messageInfo didn't exist when structure annotator ran
    expect(result.data?.messageInfo?.messageStructure).toBeUndefined();
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
        f(c("ADT"), c("A08")), // alias → ADT_A01
        f(""),
        f(""),
        f("2.5")
      )
    );

    // Add existing data
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

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    expect(result.data?.delimiters).toBeDefined();
    expect(result.data?.messageInfo?.messageStructure).toBe("ADT_A01");
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

      const processor = unified()
        .use(hl7v2AnnotateMessage)
        .use(hl7v2AnnotateMessageStructure, { eventMap: customMap });

      const result = await processor.run(tree);

      expect(result.data?.messageInfo?.messageStructure).toBe(
        "CUSTOM_STRUCTURE"
      );
    });

    it("returns undefined for unknown events", async () => {
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
          f(c("ZZZ"), c("Z99")), // Unknown custom event
          f(""),
          f(""),
          f("2.5")
        )
      );

      const processor = unified()
        .use(hl7v2AnnotateMessage)
        .use(hl7v2AnnotateMessageStructure);

      const result = await processor.run(tree);

      expect(result.data?.messageInfo?.messageStructure).toBeUndefined();
    });

    it("returns undefined when version is missing", async () => {
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
          f(c("ADT"), c("A04")) // No version (MSH-12 missing)
        )
      );

      const processor = unified()
        .use(hl7v2AnnotateMessage)
        .use(hl7v2AnnotateMessageStructure);

      const result = await processor.run(tree);

      expect(result.data?.messageInfo?.messageStructure).toBeUndefined();
    });

    it("does not override existing MSH-9.3 even when event map has a mapping", async () => {
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

      const processor = unified()
        .use(hl7v2AnnotateMessage)
        .use(hl7v2AnnotateMessageStructure);

      const result = await processor.run(tree);

      // Should keep the original value, not resolve to ADT_A01
      expect(result.data?.messageInfo?.messageStructure).toBe("ADT_A04");
    });
  });
});
