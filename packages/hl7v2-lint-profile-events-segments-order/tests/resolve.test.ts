import "@rethinkhealth/hl7v2-annotate-message";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { profiles } from "@rethinkhealth/hl7v2-profiles";
import { afterEach, describe, expect, it, vi } from "vitest";

import { resolveDefinition } from "../src/resolve";

const loadSpy = vi.spyOn(profiles.events, "load");

afterEach(() => {
  loadSpy.mockClear();
});

describe("resolveDefinition", () => {
  describe("from annotated tree.data.messageInfo", () => {
    it("calls load with annotated version and structure", async () => {
      const tree = m(s("MSH"));
      tree.data = {
        messageInfo: {
          version: "2.5",
          messageCode: "ADT",
          triggerEvent: "A01",
          messageStructure: "ADT_A01",
        },
      };

      const result = await resolveDefinition(tree);

      expect(result.ok).toBe(true);
      expect(loadSpy).toHaveBeenCalledWith("2.5", "ADT_A01");
      if (result.ok) {
        expect(result.definition.start).toBeDefined();
        expect(result.definition.transitions).toBeInstanceOf(Map);
        expect(result.definition.finals).toBeInstanceOf(Set);
      }
    });

    it("prefers annotated data over MSH fields", async () => {
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
          f(c("ORU"), c("R01"), c("ORU_R01")), // MSH says ORU_R01
          f(""),
          f(""),
          f("2.3.1") // MSH says v2.3.1
        )
      );
      tree.data = {
        messageInfo: {
          version: "2.5",
          messageCode: "ADT",
          triggerEvent: "A01",
          messageStructure: "ADT_A01",
        },
      };

      const result = await resolveDefinition(tree);

      // Should use annotated values (2.5, ADT_A01), not MSH values (2.3.1, ORU_R01)
      expect(loadSpy).toHaveBeenCalledWith("2.5", "ADT_A01");
      expect(loadSpy).not.toHaveBeenCalledWith("2.3.1", "ORU_R01");
      expect(result.ok).toBe(true);
    });

    it("uses annotated version with MSH structure fallback", async () => {
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
          f(c("ORU"), c("R01"), c("ORU_R01")),
          f(""),
          f(""),
          f("2.3.1")
        )
      );
      // Annotated has version but no structure
      tree.data = {
        messageInfo: {
          version: "2.5",
          messageCode: "ADT",
          triggerEvent: "A01",
        },
      };

      await resolveDefinition(tree);

      // Version from annotated (2.5), structure from MSH (ORU_R01)
      expect(loadSpy).toHaveBeenCalledWith("2.5", "ORU_R01");
    });
  });

  describe("from MSH fields", () => {
    it("calls load with MSH-12 version and MSH-9.3 structure", async () => {
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

      const result = await resolveDefinition(tree);

      expect(result.ok).toBe(true);
      expect(loadSpy).toHaveBeenCalledWith("2.5", "ADT_A01");
      if (result.ok) {
        expect(result.definition.start).toBeDefined();
        expect(result.definition.transitions).toBeInstanceOf(Map);
        expect(result.definition.finals).toBeInstanceOf(Set);
        expect(result.definition.finals.size).toBeGreaterThan(0);
      }
    });

    it("calls load with correct version for different HL7 versions", async () => {
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
          f(c("ORU"), c("R01"), c("ORU_R01")),
          f(""),
          f(""),
          f("2.3.1")
        )
      );

      await resolveDefinition(tree);

      expect(loadSpy).toHaveBeenCalledWith("2.3.1", "ORU_R01");
    });

    it("does not call load when version is missing", async () => {
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
          f(c("ADT"), c("A01"), c("ADT_A01")) // No MSH-12
        )
      );

      const result = await resolveDefinition(tree);

      expect(loadSpy).not.toHaveBeenCalled();
      expect(result).toStrictEqual({
        ok: false,
        reason:
          "Cannot validate segment order: missing version (MSH-12) or message structure (MSH-9.3)",
      });
    });

    it("does not call load when structure is missing", async () => {
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
          f(c("ADT"), c("A01")), // No MSH-9.3
          f(""),
          f(""),
          f("2.5")
        )
      );

      const result = await resolveDefinition(tree);

      expect(loadSpy).not.toHaveBeenCalled();
      expect(result).toStrictEqual({
        ok: false,
        reason:
          "Cannot validate segment order: missing version (MSH-12) or message structure (MSH-9.3)",
      });
    });
  });

  describe("failure cases", () => {
    it("fails when both version and structure are missing", async () => {
      const tree = m(s("MSH"));

      const result = await resolveDefinition(tree);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.reason).toContain("missing version");
        expect(result.reason).toContain("message structure");
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

      const result = await resolveDefinition(tree);

      expect(loadSpy).toHaveBeenCalledWith("2.5", "ZZZ_Z99");
      expect(result).toStrictEqual({
        ok: false,
        reason:
          "Cannot validate segment order: no profile found for ZZZ_Z99 (v2.5)",
      });
    });

    it("fails for unknown version", async () => {
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
          f("9.9.9")
        )
      );

      const result = await resolveDefinition(tree);

      expect(loadSpy).toHaveBeenCalledWith("9.9.9", "ADT_A01");
      expect(result).toStrictEqual({
        ok: false,
        reason:
          "Cannot validate segment order: no profile found for ADT_A01 (v9.9.9)",
      });
    });
  });

  describe("result type", () => {
    it("success result has ok: true and a valid Definition", async () => {
      const tree = m(s("MSH"));
      tree.data = {
        messageInfo: {
          version: "2.5",
          messageStructure: "ADT_A01",
        },
      };

      const result = await resolveDefinition(tree);

      expect(result.ok).toBe(true);
      if (result.ok) {
        // Definition must have start, transitions, and finals
        expectTypeOf(result.definition.start).toBeNumber();
        expect(result.definition.transitions).toBeInstanceOf(Map);
        expect(result.definition.finals).toBeInstanceOf(Set);
        // Should not have a "reason" property
        expect(result).not.toHaveProperty("reason");
      }
    });

    it("failure result has ok: false and a non-empty reason string", async () => {
      const tree = m(s("MSH"));

      const result = await resolveDefinition(tree);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expectTypeOf(result.reason).toBeString();
        expect(result.reason.length).toBeGreaterThan(0);
        // Should not have a "definition" property
        expect(result).not.toHaveProperty("definition");
      }
    });
  });
});
