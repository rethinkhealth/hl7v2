import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";
import { hl7v2AnnotateMessage } from "../src";

describe("hl7v2AnnotateMessage", () => {
  it("annotates tree with complete message metadata", async () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f(""),
        f(""),
        f(""),
        f("20241201120000"),
        f(""),
        f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9
        f("MSG00001"),
        f("P"),
        f("2.5") // MSH-12
      )
    );

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    expect(result.data).toBeDefined();
    expect(result.data?.messageInfo).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
    });
  });

  it("annotates tree with partial message metadata", async () => {
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
        f(c("ORU")), // MSH-9.1 only
        f(""),
        f(""),
        f("2.3.1")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toEqual({
      version: "2.3.1",
      messageCode: "ORU",
      triggerEvent: undefined,
      messageStructure: undefined,
    });
  });

  it("handles tree without MSH segment", async () => {
    const tree = m(s("PID", f("12345")));

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toEqual({
      version: undefined,
      messageCode: undefined,
      triggerEvent: undefined,
      messageStructure: undefined,
    });
  });

  it("initializes data object if it does not exist", async () => {
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
        f(c("ADT")),
        f(""),
        f(""),
        f("2.5")
      )
    ) as Root;

    // Ensure data doesn't exist initially
    tree.data = undefined;

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    expect(result.data).toBeDefined();
    expect(result.data?.messageInfo).toBeDefined();
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
        f(c("ADT")),
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

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    expect(result.data?.delimiters).toBeDefined();
    expect(result.data?.messageInfo).toBeDefined();
  });

  it("works with builder-created messages", async () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FACILITY"),
        f("RECEIVER"),
        f(""),
        f("20241201120000"),
        f(""),
        f(c("ADT"), c("A01"), c("ADT_A01")),
        f("MSG123"),
        f("P"),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
    });
  });

  it("works in a unified pipeline", async () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("HIS"),
        f("RIH"),
        f("EKG"),
        f("EKG"),
        f("199904140038"),
        f(""),
        f(c("ORU"), c("R01")),
        f("MSG456"),
        f("P"),
        f("2.4")
      )
    );

    // Apply annotator
    const annotatedTree = await unified().use(hl7v2AnnotateMessage).run(tree);

    expect(annotatedTree.data?.messageInfo).toEqual({
      version: "2.4",
      messageCode: "ORU",
      triggerEvent: "R01",
      messageStructure: undefined,
    });
  });

  it("annotates complex multi-segment messages", async () => {
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
        f(c("VXU"), c("V04"), c("VXU_V04")),
        f("MSG789"),
        f("P"),
        f("2.5.1")
      ),
      s("PID", f("1"), f(""), f("12345"), f(""), f(c("DOE"), c("JOHN"))),
      s("ORC", f("RE")),
      s("RXA", f("0"), f("1"))
    );

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toEqual({
      version: "2.5.1",
      messageCode: "VXU",
      triggerEvent: "V04",
      messageStructure: "VXU_V04",
    });
  });

  it("handles empty MSH-9 and MSH-12 fields", async () => {
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
        f("") // MSH-9 empty
        // MSH-12 missing
      )
    );

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    expect(result.data?.messageInfo).toEqual({
      version: undefined,
      messageCode: undefined,
      triggerEvent: undefined,
      messageStructure: undefined,
    });
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
        f(c("ADT")),
        f(""),
        f(""),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    // Should be the same instance
    expect(result).toBe(tree);
  });

  it("type augmentation allows type-safe access", async () => {
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

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    // TypeScript should recognize messageInfo without type assertion
    const version: string | undefined = result.data?.messageInfo?.version;
    const messageCode: string | undefined =
      result.data?.messageInfo?.messageCode;

    expect(version).toBe("2.5");
    expect(messageCode).toBe("ADT");
  });
});
