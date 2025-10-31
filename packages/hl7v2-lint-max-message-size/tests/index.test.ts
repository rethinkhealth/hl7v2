import { f, g, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";
import hl7v2LintMaxMessageSize from "../src";

describe("hl7v2-lint:max-message-size", () => {
  it("should have no issues for a small message", async () => {
    const tree = m(s("PID"));
    const file = new VFile();

    await unified().use(hl7v2LintMaxMessageSize).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("warns when message size exceeds the limit", async () => {
    // Message size is ~440 bytes
    const tree = m(
      s("MSH", f("Welcome"), f("Test")),
      s("PID", f("1234567890")),
      s("OBX", f("1234567890")),
      s("OBR", f("1234567890"))
    );
    const file = new VFile();

    await unified()
      .use(hl7v2LintMaxMessageSize, { maxBytes: 1 })
      .run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain(
      "Message size 9 B exceeds limit 1 B"
    );
  });

  it("warns when message has too many segments", async () => {
    const tree = m(
      s("MSH", f("Welcome"), f("Test")),
      s("PID", f("1234567890")),
      s("OBX", f("1234567890"))
    );
    const file = new VFile();

    await unified()
      .use(hl7v2LintMaxMessageSize, { maxSegments: 1 })
      .run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain(
      "Message has 3 segments, exceeds limit 1"
    );
  });

  it("warns when message with groups has too many segments", async () => {
    const tree = m(
      s("MSH", f("Welcome"), f("Test")),
      g("PATIENT", s("PID", f("1234567890")), s("OBX", f("1234567890"))),
      g(
        "ORDER",
        s("ORC", f("1234567890")),
        g("RESULT", s("OBX", f("1234567890"))) // nest group
      )
    );
    const file = new VFile();

    await unified()
      .use(hl7v2LintMaxMessageSize, { maxSegments: 2 })
      .run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0].message).toContain(
      "Message has 5 segments, exceeds limit 2"
    );
  });

  it("warns when message has too many segments and size exceeds the limit", async () => {
    // Message size is ~440 bytes
    const tree = m(
      s("MSH", f("Welcome"), f("Test")),
      s("PID", f("1234567890")),
      s("OBX", f("1234567890"))
    );
    const file = new VFile();

    await unified()
      .use(hl7v2LintMaxMessageSize, { maxSegments: 1, maxBytes: 1 })
      .run(tree, file);

    expect(file.messages).toHaveLength(2);
    expect(file.messages[0].message).toContain(
      "Message size 9 B exceeds limit 1 B"
    );
    expect(file.messages[1].message).toContain(
      "Message has 3 segments, exceeds limit 1"
    );
  });
});
