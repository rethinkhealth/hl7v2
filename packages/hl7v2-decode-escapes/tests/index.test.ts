import type { Delimiters, Segment } from "@rethinkhealth/hl7v2-ast";
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";
import { hl7v2DecodeEscapes } from "../src/index";

describe("hl7v2DecodeEscapes plugin", () => {
  it("decodes standard delimiter escapes with default delimiters", async () => {
    const tree = m(
      s("MSH", f("Value\\F\\More\\S\\Stuff\\R\\Again\\T\\Sub\\E\\Escaped"))
    );
    const results = await unified().use(hl7v2DecodeEscapes).run(tree);

    expect(
      (results.children[0] as Segment).children[1].children[0].children[0]
        .children[0].value
    ).toBe("Value|More^Stuff~Again&Sub\\Escaped");
  });

  it("decodes using custom delimiters from Root.data.delimiters", async () => {
    const customDelimiters = {
      field: "*",
      component: "$",
      repetition: "%",
      subcomponent: "@",
      escape: "\\",
      segment: "\n",
    } satisfies Delimiters;

    const tree = m(
      s("MSH", f("Value\\F\\More\\S\\Stuff\\R\\Again\\T\\Sub\\E\\Escaped"))
    );
    const results = await unified()
      .use(hl7v2DecodeEscapes, { delimiters: customDelimiters })
      .run(tree);

    expect(
      (results.children[0] as Segment).children[1].children[0].children[0]
        .children[0].value
    ).toBe("Value*More$Stuff%Again@Sub\\Escaped");
  });

  it("decodes .br into the default segment delimiter", async () => {
    const tree = m(s("MSH", f("Line1\\.br\\Line2")));

    const results = await unified().use(hl7v2DecodeEscapes).run(tree);

    expect(
      (results.children[0] as Segment).children[1].children[0].children[0]
        .children[0].value
    ).toBe("Line1\rLine2");
  });

  it("decodes hex escapes", async () => {
    const tree = m(s("MSH", f("Hello\\X0A\\World\\X0D\\Done")));

    const results = await unified().use(hl7v2DecodeEscapes).run(tree);

    expect(
      (results.children[0] as Segment).children[1].children[0].children[0]
        .children[0].value
    ).toBe("Hello\nWorld\rDone");
  });

  it("leaves unknown escapes untouched", async () => {
    const tree = m(s("MSH", f("Unknown\\ABC\\Value")));

    const results = await unified().use(hl7v2DecodeEscapes).run(tree);

    expect(
      (results.children[0] as Segment).children[1].children[0].children[0]
        .children[0].value
    ).toBe("Unknown\\ABC\\Value");
  });

  it("does nothing when there are no escapes", async () => {
    const tree = m(s("MSH", f("PlainValue")));

    const results = await unified().use(hl7v2DecodeEscapes).run(tree);

    expect(
      (results.children[0] as Segment).children[1].children[0].children[0]
        .children[0].value
    ).toBe("PlainValue");
  });
});
