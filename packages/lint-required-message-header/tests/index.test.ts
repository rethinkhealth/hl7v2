import { f, g, m, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";

import hl7v2LintRequiredMessageHeader from "../src";

describe("hl7v2-lint:required-message-header", () => {
  it("should have no issues when message header MSH segment is present", async () => {
    const tree = m(
      s("MSH", f("|"), f("^~\\&")),
      s("PID", f("hello")),
      s("OBX", f("1"))
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("should have no issues when MSH is the first segment in a group", async () => {
    const tree = m(
      g("GROUP", s("MSH", f("|"), f("^~\\&")), s("PID", f("hello")))
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("warns when message header MSH segment is missing", async () => {
    const tree = m(s("PID", f("hello")), s("OBX", f("1")));
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.message).toBe(
      "The first segment is `PID`; a message must start with the message header segment (`MSH`)."
    );
    expect(file.messages[0]?.actual).toBe("PID");
    expect(file.messages[0]?.expected).toEqual(["MSH"]);
  });

  it("warns when first segment in a group is not MSH", async () => {
    const tree = m(g("GROUP", s("PID", f("hello")), s("OBX", f("1"))));
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.message).toBe(
      "The first segment is `PID`; a message must start with the message header segment (`MSH`)."
    );
    expect(file.messages[0]?.actual).toBe("PID");
    expect(file.messages[0]?.expected).toEqual(["MSH"]);
  });

  it("should have no issues when MSH is before groups", async () => {
    const tree = m(
      s("MSH", f("|"), f("^~\\&")),
      g("PATIENT", s("PID", f("hello")), s("OBX", f("1")))
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("should have no issues when MSH is the first segment in a nested group", async () => {
    const tree = m(
      g(
        "GROUP",
        s("MSH", f("|"), f("^~\\&")),
        g("PATIENT", s("PID", f("hello")), s("OBX", f("1")))
      )
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(0);
  });

  it("warns when MSH is not the first segment", async () => {
    const tree = m(
      s("PID", f("hello")),
      s("MSH", f("|"), f("^~\\&")),
      s("OBX", f("1"))
    );
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.message).toBe(
      "The first segment is `PID`; a message must start with the message header segment (`MSH`)."
    );
    expect(file.messages[0]?.actual).toBe("PID");
    expect(file.messages[0]?.expected).toEqual(["MSH"]);
  });

  it("names an empty Segment ID in the report", async () => {
    const tree = m(s("", f("A"), f("B")));
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.message).toBe(
      "The first segment has an empty Segment ID; a message must start with the message header segment (`MSH`)."
    );
    expect(file.messages[0]?.actual).toBe("");
    expect(file.messages[0]?.expected).toEqual(["MSH"]);
  });

  // The report points at the first segment, so tools can highlight it.
  it("places the report on a first segment that is not MSH", async () => {
    const pid = s("PID", f("hello"));
    pid.position = {
      end: { column: 10, line: 1, offset: 9 },
      start: { column: 1, line: 1, offset: 0 },
    };
    const tree = m(pid, s("MSH", f("|"), f("^~\\&")));
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.place).toEqual({
      end: { column: 10, line: 1, offset: 9 },
      start: { column: 1, line: 1, offset: 0 },
    });
    expect(file.messages[0]?.ancestors?.at(-1)).toBe(pid);
  });

  it("places the report on a first segment with an empty Segment ID", async () => {
    const segment = s("", f("A"), f("B"));
    segment.position = {
      end: { column: 5, line: 1, offset: 4 },
      start: { column: 1, line: 1, offset: 0 },
    };
    const tree = m(segment);
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.place).toEqual({
      end: { column: 5, line: 1, offset: 4 },
      start: { column: 1, line: 1, offset: 0 },
    });
    expect(file.messages[0]?.ancestors?.at(-1)).toBe(segment);
  });

  // With no segment to point at, the report points at the whole message.
  it("places the report on the message when it has no segments", async () => {
    const tree = m();
    tree.position = {
      end: { column: 1, line: 1, offset: 0 },
      start: { column: 1, line: 1, offset: 0 },
    };
    const file = new VFile();

    await unified().use([hl7v2LintRequiredMessageHeader]).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.place).toEqual({
      end: { column: 1, line: 1, offset: 0 },
      start: { column: 1, line: 1, offset: 0 },
    });
    expect(file.messages[0]?.ancestors).toEqual([tree]);
  });
});
