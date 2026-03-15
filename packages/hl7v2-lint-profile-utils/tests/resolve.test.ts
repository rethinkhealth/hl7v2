import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { afterEach, describe, expect, it, vi } from "vitest";

import {
  resolveDatatypeDefinition,
  resolveEventDefinition,
  resolveFieldDefinition,
  resolveTableDefinition,
} from "../src/resolve";

describe("resolveEventDefinition", () => {
  const loadSpy = vi.spyOn(profiles.events, "load");

  afterEach(() => {
    loadSpy.mockClear();
  });

  it("resolves from MSH-9.3 with provided version", async () => {
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
        f(c("ADT"), c("A01"), c("ADT_A01")),
        f(""),
        f(""),
        f("2.5")
      )
    );

    const result = await resolveEventDefinition(tree, "2.5");

    expect(result.ok).toBe(true);
    expect(loadSpy).toHaveBeenCalledWith("2.5", "ADT_A01");
    if (result.ok) {
      expect(result.value.start).toBeDefined();
      expect(result.value.transitions).toBeInstanceOf(Map);
      expect(result.value.finals).toBeInstanceOf(Set);
    }
  });

  it("fails when MSH-9.3 is missing", async () => {
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

    const result = await resolveEventDefinition(tree, "2.5");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("missing message structure");
    }
  });

  it("fails when profile does not exist", async () => {
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
        f(c("ZZZ"), c("Z99"), c("ZZZ_Z99")),
        f(""),
        f(""),
        f("2.5")
      )
    );

    const result = await resolveEventDefinition(tree, "2.5");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("no profile found");
    }
  });
});

describe("resolveFieldDefinition", () => {
  it("resolves PID field definition", async () => {
    const result = await resolveFieldDefinition("2.5", "PID");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.segmentId).toBe("PID");
      expect(result.value.bySequence).toBeInstanceOf(Map);
      expect(result.value.requiredSequences).toBeInstanceOf(Set);
    }
  });

  it("fails for unknown segment", async () => {
    const result = await resolveFieldDefinition("2.5", "ZZZ");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("ZZZ");
    }
  });
});

describe("resolveDatatypeDefinition", () => {
  it("resolves CWE datatype definition", async () => {
    const result = await resolveDatatypeDefinition("2.5", "CWE");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("CWE");
      expect(result.value.componentsBySequence).toBeInstanceOf(Map);
    }
  });

  it("fails for unknown datatype", async () => {
    const result = await resolveDatatypeDefinition("2.5", "ZZZZZ");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("ZZZZZ");
    }
  });
});

describe("resolveTableDefinition", () => {
  it("resolves table 0001", async () => {
    const result = await resolveTableDefinition("2.5", "0001");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("0001");
      expect(result.value.codes).toBeInstanceOf(Map);
    }
  });

  it("fails for unknown table", async () => {
    const result = await resolveTableDefinition("2.5", "ZZZZ");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("ZZZZ");
    }
  });
});
