import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2AnnotateMessage } from "../src";

describe(hl7v2AnnotateMessage, () => {
  it("is a no-op that returns the tree unchanged", async () => {
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
        f(c("ADT"), c("A01"), c("ADT_A01")),
        f("MSG00001"),
        f("P"),
        f("2.5")
      )
    );

    const processor = unified().use(hl7v2AnnotateMessage);
    const result = await processor.run(tree);

    // Returns same tree instance, no messageInfo on data
    expect(result).toBe(tree);
  });
});
