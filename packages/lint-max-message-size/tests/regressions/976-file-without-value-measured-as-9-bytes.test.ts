/**
 * Regression for https://github.com/rethinkhealth/glion/issues/976.
 *
 * Date: 2026-10-15
 * Symptom: a file with no value was reported as 9 bytes, and a file whose
 * value is a `Uint8Array` was measured by the length of its numbers written
 * out with commas, not by its bytes.
 * Cause: the rule measured `String(file.value)`, which is `"undefined"` for
 * no value and `"80,73,68"` for the bytes of `PID`.
 * Resolution: the rule measures the bytes of the value itself, and a file with
 * no value as 0 bytes.
 */

import { f, m, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintMaxMessageSize from "../../src";

describe("the size of a message read from a file", () => {
  it("is 0 bytes when the file has no value", async () => {
    const tree = m(s("PID", f("1")));
    const file = new VFile();

    await unified()
      .use(hl7v2LintMaxMessageSize, { maxBytes: 1 })
      .run(tree, file);

    expect(file.messages).toEqual([]);
  });

  it("is the number of bytes when the value is a Uint8Array", async () => {
    const tree = m(s("PID", f("1")));
    const file = new VFile(new TextEncoder().encode("PID|1"));

    await unified()
      .use(hl7v2LintMaxMessageSize, { maxBytes: 4 })
      .run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toBe(
      "The message is 5 bytes; the configured limit is 4 bytes. Shorten the message or raise `maxBytes`."
    );
    expect(file.messages[0].actual).toBe("5");
  });
});
