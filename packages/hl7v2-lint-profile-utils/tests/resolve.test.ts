import "@rethinkhealth/hl7v2-annotate-message";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { afterEach, describe, expect, it, vi } from "vitest";

import {
  resolveDatatypeDefinition,
  resolveEventDefinition,
  resolveFieldDefinition,
  resolveTableDefinition,
  resolveVersion,
} from "../src/resolve";

// ---------------------------------------------------------------------------
// resolveVersion
// ---------------------------------------------------------------------------

describe("resolveVersion", () => {
  it("reads version from annotated tree data", () => {
    const tree = m(s("MSH"));
    tree.data = {
      messageInfo: { version: "2.5" },
    };

    const result = resolveVersion(tree);

    expect(result).toStrictEqual({ ok: true, value: "2.5" });
  });

  it("falls back to MSH-12 when no annotation", () => {
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
        f("2.3.1")
      )
    );

    const result = resolveVersion(tree);

    expect(result).toStrictEqual({ ok: true, value: "2.3.1" });
  });

  it("prefers annotated version over MSH-12", () => {
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
        f("2.3.1")
      )
    );
    tree.data = { messageInfo: { version: "2.5" } };

    const result = resolveVersion(tree);

    expect(result).toStrictEqual({ ok: true, value: "2.5" });
  });

  it("returns failure when version is missing", () => {
    const tree = m(s("MSH"));

    const result = resolveVersion(tree);

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("Missing version");
    }
  });
});

// ---------------------------------------------------------------------------
// resolveEventDefinition
// ---------------------------------------------------------------------------

const eventLoadSpy = vi.spyOn(profiles.events, "load");

afterEach(() => {
  eventLoadSpy.mockClear();
});

describe("resolveEventDefinition", () => {
  it("resolves from annotated tree data", async () => {
    const tree = m(s("MSH"));
    tree.data = {
      messageInfo: {
        version: "2.5",
        messageCode: "ADT",
        triggerEvent: "A01",
        messageStructure: "ADT_A01",
      },
    };

    const result = await resolveEventDefinition(tree);

    expect(result.ok).toBe(true);
    expect(eventLoadSpy).toHaveBeenCalledWith("2.5", "ADT_A01");
    if (result.ok) {
      expect(result.value.start).toBeDefined();
      expect(result.value.transitions).toBeInstanceOf(Map);
      expect(result.value.finals).toBeInstanceOf(Set);
    }
  });

  it("resolves from MSH fields", async () => {
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

    const result = await resolveEventDefinition(tree);

    expect(result.ok).toBe(true);
    expect(eventLoadSpy).toHaveBeenCalledWith("2.5", "ADT_A01");
  });

  it("fails when version is missing", async () => {
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
        f(c("ADT"), c("A01"), c("ADT_A01"))
      )
    );

    const result = await resolveEventDefinition(tree);

    expect(result.ok).toBe(false);
    expect(eventLoadSpy).not.toHaveBeenCalled();
  });

  it("fails when message structure is missing", async () => {
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

    const result = await resolveEventDefinition(tree);

    expect(result.ok).toBe(false);
    expect(eventLoadSpy).not.toHaveBeenCalled();
  });

  it("fails for unknown profile", async () => {
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

    const result = await resolveEventDefinition(tree);

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("ZZZ_Z99");
      expect(result.reason).toContain("v2.5");
    }
  });
});

// ---------------------------------------------------------------------------
// resolveFieldDefinition
// ---------------------------------------------------------------------------

describe("resolveFieldDefinition", () => {
  it("resolves MSH field definition for v2.5", async () => {
    const tree = m(s("MSH"));
    tree.data = { messageInfo: { version: "2.5" } };

    const result = await resolveFieldDefinition(tree, "MSH");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.segmentId).toBe("MSH");
      expect(result.value.bySequence).toBeInstanceOf(Map);
      expect(result.value.bySequence.size).toBeGreaterThan(0);
    }
  });

  it("resolves PID field definition from MSH-12 fallback", async () => {
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

    const result = await resolveFieldDefinition(tree, "PID");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.segmentId).toBe("PID");
    }
  });

  it("fails when version is missing", async () => {
    const tree = m(s("MSH"));

    const result = await resolveFieldDefinition(tree, "PID");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("Missing version");
    }
  });

  it("fails for unknown segment", async () => {
    const tree = m(s("MSH"));
    tree.data = { messageInfo: { version: "2.5" } };

    const result = await resolveFieldDefinition(tree, "ZZZ");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("ZZZ");
    }
  });
});

// ---------------------------------------------------------------------------
// resolveDatatypeDefinition
// ---------------------------------------------------------------------------

describe("resolveDatatypeDefinition", () => {
  it("resolves CWE datatype for v2.5", async () => {
    const tree = m(s("MSH"));
    tree.data = { messageInfo: { version: "2.5" } };

    const result = await resolveDatatypeDefinition(tree, "CWE");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("CWE");
      expect(result.value.componentsBySequence).toBeInstanceOf(Map);
    }
  });

  it("resolves primitive datatype ST for v2.5", async () => {
    const tree = m(s("MSH"));
    tree.data = { messageInfo: { version: "2.5" } };

    const result = await resolveDatatypeDefinition(tree, "ST");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("ST");
    }
  });

  it("fails when version is missing", async () => {
    const tree = m(s("MSH"));

    const result = await resolveDatatypeDefinition(tree, "CWE");

    expect(result.ok).toBe(false);
  });

  it("fails for unknown datatype", async () => {
    const tree = m(s("MSH"));
    tree.data = { messageInfo: { version: "2.5" } };

    const result = await resolveDatatypeDefinition(tree, "ZZZZZ");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("ZZZZZ");
    }
  });
});

// ---------------------------------------------------------------------------
// resolveTableDefinition
// ---------------------------------------------------------------------------

describe("resolveTableDefinition", () => {
  it("resolves table 0001 for v2.5", async () => {
    const tree = m(s("MSH"));
    tree.data = { messageInfo: { version: "2.5" } };

    const result = await resolveTableDefinition(tree, "0001");

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("0001");
      expect(result.value.codes).toBeInstanceOf(Map);
      expect(result.value.codes.size).toBeGreaterThan(0);
    }
  });

  it("fails when version is missing", async () => {
    const tree = m(s("MSH"));

    const result = await resolveTableDefinition(tree, "0001");

    expect(result.ok).toBe(false);
  });

  it("fails for unknown table", async () => {
    const tree = m(s("MSH"));
    tree.data = { messageInfo: { version: "2.5" } };

    const result = await resolveTableDefinition(tree, "ZZZZ");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("ZZZZ");
    }
  });
});
