/**
 * Regression for https://github.com/rethinkhealth/glion/issues/960.
 *
 * Date: 2026-10-15
 * Symptom: on an `ORU_R01` grouped by `@glion/transform-profile-groups`,
 * `select(oru, "ORDER_OBSERVATION[2]")` found the group, but
 * `value(oru, "ORDER_OBSERVATION[2].OBR.1")` found nothing, and the README
 * documented the second form.
 * Cause: a path's last step matched at any depth, while a step before it
 * matched only the direct children of the scope.
 * Resolution: every step names a direct child of the node before it, the
 * first step a direct child of the message (ADR 0029), and the README names
 * every group from the message down.
 */

import { f, g, m, s } from "@glion/builder";
import { describe, expect, it } from "vitest";

import { select, selectAll, value } from "../../src";

const oru = m(
  s("MSH"),
  g(
    "PATIENT_RESULT",
    g("PATIENT", s("PID")),
    g(
      "ORDER_OBSERVATION",
      s("OBR", f("first")),
      g("OBSERVATION", s("OBX", f("1"), f("NM"), f("8302-2"), f(), f("82")))
    ),
    g(
      "ORDER_OBSERVATION",
      s("OBR", f("second")),
      g("OBSERVATION", s("OBX", f("1"), f("NM"), f("29463-7"), f(), f("74")))
    )
  )
);

describe("a nested group named as the first step", () => {
  it("is not found as the last step", () => {
    expect(select(oru, "ORDER_OBSERVATION[2]")).toBeNull();
  });

  it("is not found as a step before a segment", () => {
    expect(value(oru, "ORDER_OBSERVATION[2].OBR.1")).toBeNull();
    expect(selectAll(oru, "ORDER_OBSERVATION.OBR")).toHaveLength(0);
  });
});

describe("a nested group named from the message down", () => {
  it("is found as the last step", () => {
    expect(
      select(oru, "PATIENT_RESULT.ORDER_OBSERVATION[2]")?.node
    ).toMatchObject({ id: "ORDER_OBSERVATION", type: "group" });
  });

  it("is found as a step before a segment", () => {
    expect(value(oru, "PATIENT_RESULT.ORDER_OBSERVATION[2].OBR.1")?.value).toBe(
      "second"
    );
    expect(selectAll(oru, "PATIENT_RESULT.ORDER_OBSERVATION.OBR")).toHaveLength(
      2
    );
  });

  it("reads the observation value the README example reads", () => {
    expect(
      value(oru, "PATIENT_RESULT.ORDER_OBSERVATION[2].OBSERVATION.OBX.5")?.value
    ).toBe("74");
  });
});
