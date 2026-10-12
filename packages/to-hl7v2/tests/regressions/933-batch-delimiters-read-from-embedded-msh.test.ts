/**
 * Regression for https://github.com/rethinkhealth/glion/issues/933.
 *
 * Date: 2026-10-12
 * Symptom: a batch file (FHS and BHS around messages) or a stream of more
 * than one message came out of parse then serialize with its delimiters
 * rewritten and part of its data lost, with no error: the batch's encoding
 * characters were taken from MSH-3, and an embedded MSH lost MSH-2.
 * Cause: the parser applies the MSH-1 / MSH-2 header rule only when the input
 * starts with `MSH`, so FHS, BHS, and an embedded MSH are parsed as ordinary
 * segments; `delimiters()` then reads MSH-1 and MSH-2 from the first segment
 * named MSH, and the serializer writes every MSH as a header.
 * Resolution: MSH, FHS, and BHS are header segments wherever they start a
 * segment. The parser reads their fields 1 and 2 as the separator and the
 * encoding characters, `delimiters()` reads the first header segment, and the
 * serializer and `@glion/encode-escapes` treat all three alike.
 */

import { hl7v2AnnotateDelimiters } from "@glion/annotate-delimiters";
import { hl7v2Parser } from "@glion/parser";
import { unified } from "unified";
import { describe, expect, it } from "vitest";

import { hl7v2ToHl7v2 } from "../../src";

describe("parse then serialize a batch or a message stream", () => {
  const processor = unified()
    .use(hl7v2Parser)
    .use(hl7v2AnnotateDelimiters)
    .use(hl7v2ToHl7v2);

  const batch = [
    "FHS|^~\\&|LAB",
    "BHS|^~\\&|LAB",
    "MSH|^~\\&|LAB|FAC|||20260101||ORU^R01|1|P|2.5.1",
    "PID|1||123^^^MRN",
    "BTS|1",
    "FTS|1",
  ].join("\r");

  const stream = ["MSH|^~\\&|A", "PID|1", "MSH|^~\\&|B", "PID|2"].join("\r");

  it("writes a batch file back as it was read", async () => {
    const file = await processor.process(batch);

    expect(String(file)).toBe(batch);
  });

  it("reads a batch file's delimiters from its encoding characters", async () => {
    const file = await processor.process(batch);

    expect(file.data.delimiters).toEqual({
      component: "^",
      escape: "\\",
      field: "|",
      repetition: "~",
      segment: "\r",
      subcomponent: "&",
    });
  });

  it("writes a stream of messages back as it was read", async () => {
    const file = await processor.process(stream);

    expect(String(file)).toBe(stream);
  });
});
