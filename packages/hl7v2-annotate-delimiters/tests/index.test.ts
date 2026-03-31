import type { Root } from "@rethinkhealth/hl7v2-ast";
import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { DEFAULT_DELIMITERS } from "@rethinkhealth/hl7v2-utils";
import { unified } from "unified";

import { hl7v2AnnotateDelimiters } from "../src";

/** Capture plugin that reads file.data.delimiters set by the annotator */
const capturePlugin =
  (capture: { delimiters?: unknown }) =>
  () =>
  (_tree: Root, file: { data: Record<string, unknown> }) => {
    capture.delimiters = file.data.delimiters;
  };

describe("hl7v2AnnotateDelimiters", () => {
  it("sets standard delimiters from MSH", async () => {
    const tree = m(s("MSH", f("|"), f("^~\\&"), f("SENDER")));
    const capture: { delimiters?: unknown } = {};

    await unified()
      .use(hl7v2AnnotateDelimiters)
      .use(capturePlugin(capture))
      .run(tree);

    expect(capture.delimiters).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("sets custom delimiters from MSH", async () => {
    const tree = m(s("MSH", f("*"), f("%$#&"), f("SENDER")));
    const capture: { delimiters?: unknown } = {};

    await unified()
      .use(hl7v2AnnotateDelimiters)
      .use(capturePlugin(capture))
      .run(tree);

    expect(capture.delimiters).toStrictEqual({
      component: "%",
      escape: "#",
      field: "*",
      repetition: "$",
      segment: "\r",
      subcomponent: "&",
    });
  });

  it("sets DEFAULT_DELIMITERS when no MSH segment", async () => {
    const tree = m(s("PID", f("12345")));
    const capture: { delimiters?: unknown } = {};

    await unified()
      .use(hl7v2AnnotateDelimiters)
      .use(capturePlugin(capture))
      .run(tree);

    expect(capture.delimiters).toStrictEqual(DEFAULT_DELIMITERS);
  });
});
