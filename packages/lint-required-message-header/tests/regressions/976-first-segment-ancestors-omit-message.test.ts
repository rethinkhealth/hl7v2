/**
 * Regression for https://github.com/rethinkhealth/glion/issues/976.
 *
 * Date: 2026-10-15
 * Symptom: a finding on a first segment that is not `MSH` had `ancestors`
 * `[segment]`, without the message or the segment groups around it, unlike
 * every other rule's findings.
 * Cause: the rule kept the first segment and dropped the ancestors the visit
 * passed with it.
 * Resolution: the rule reports the first segment with its ancestors.
 */

import { f, g, m, s } from "@glion/builder";
import { unified } from "unified";
import { VFile } from "vfile";
import { describe, expect, it } from "vitest";

import hl7v2LintRequiredMessageHeader from "../../src";

describe("a first segment inside a segment group", () => {
  it("is reported under the message and its group", async () => {
    const pid = s("PID", f("1"));
    const patient = g("PATIENT", pid);
    const tree = m(patient);
    const file = new VFile();

    await unified().use(hl7v2LintRequiredMessageHeader).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.ancestors).toStrictEqual([tree, patient, pid]);
  });

  it("with an empty Segment ID is reported under the message and its group", async () => {
    const empty = s("", f("1"));
    const patient = g("PATIENT", empty);
    const tree = m(patient);
    const file = new VFile();

    await unified().use(hl7v2LintRequiredMessageHeader).run(tree, file);

    expect(file.messages).toHaveLength(1);
    expect(file.messages[0]?.ancestors).toStrictEqual([tree, patient, empty]);
  });
});
