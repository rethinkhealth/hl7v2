import { hl7v2AnnotateMessage } from "@rethinkhealth/hl7v2-annotate-message";
import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";
import { hl7v2AnnotateMessageStructure } from "../src";

describe("hl7v2AnnotateMessageStructure", () => {
  it("infers message structure from message code and trigger event", async () => {
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

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
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

    expect(result.data?.messageInfo).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A02",
    });
  });

  it("does not infer structure when message code is missing", async () => {
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

    expect(result.data?.messageInfo).toEqual({
      version: "2.5",
      messageCode: undefined,
      triggerEvent: "A01",
      messageStructure: undefined,
    });
  });

  it("does not infer structure when trigger event is missing", async () => {
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

    expect(result.data?.messageInfo).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: undefined,
      messageStructure: undefined,
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

  it("infers various message structures", async () => {
    const testCases = [
      { code: "ORU", event: "R01", expected: "ORU_R01" },
      { code: "ORM", event: "O01", expected: "ORM_O01" },
      { code: "VXU", event: "V04", expected: "VXU_V04" },
      { code: "MDM", event: "T02", expected: "MDM_T02" },
      { code: "SIU", event: "S12", expected: "SIU_S12" },
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

  it("works with multi-segment messages", async () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f(""),
        f("RECEIVER"),
        f(""),
        f("20241201"),
        f(""),
        f(c("VXU"), c("V04")), // Missing MSH-9.3
        f("MSG789"),
        f("P"),
        f("2.5.1")
      ),
      s("PID", f("1"), f(""), f("12345"), f(""), f(c("DOE"), c("JOHN"))),
      s("ORC", f("RE")),
      s("RXA", f("0"), f("1"))
    );

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    expect(result.data?.messageInfo?.messageStructure).toBe("VXU_V04");
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
        f(c("ADT"), c("A01")),
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

    // Structure should not be inferred because messageInfo didn't exist when structure annotator ran
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
        f(c("ADT"), c("A01")),
        f(""),
        f(""),
        f("2.5")
      )
    );

    // Add existing data
    tree.data = {
      delimiters: {
        field: "|",
        component: "^",
        repetition: "~",
        subcomponent: "&",
        escape: "\\",
        segment: "\r",
      },
    };

    const processor = unified()
      .use(hl7v2AnnotateMessage)
      .use(hl7v2AnnotateMessageStructure);

    const result = await processor.run(tree);

    expect(result.data?.delimiters).toBeDefined();
    expect(result.data?.messageInfo?.messageStructure).toBe("ADT_A01");
  });
});
