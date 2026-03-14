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

      await resolveDefinition(tree);

      // Should use annotated values, not MSH values
      expect(loadSpy).toHaveBeenCalledWith("2.5", "ADT_A01");
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

      await resolveDefinition(tree);

      expect(loadSpy).not.toHaveBeenCalled();
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

      await resolveDefinition(tree);

      expect(loadSpy).not.toHaveBeenCalled();
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

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.reason).toContain("no profile found");
        expect(result.reason).toContain("ZZZ_Z99");
        expect(result.reason).toContain("v2.5");
      }
      expect(loadSpy).toHaveBeenCalledWith("2.5", "ZZZ_Z99");
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

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.reason).toContain("no profile found");
        expect(result.reason).toContain("v9.9.9");
      }
      expect(loadSpy).toHaveBeenCalledWith("9.9.9", "ADT_A01");
    });
  });

  describe("result type", () => {
    it("returns ok: true with definition on success", async () => {
      const tree = m(s("MSH"));
      tree.data = {
        messageInfo: {
          version: "2.5",
          messageStructure: "ADT_A01",
        },
      };

      const result = await resolveDefinition(tree);

      expect(result).toHaveProperty("ok", true);
      expect(result).toHaveProperty("definition");
    });

    it("returns ok: false with reason on failure", async () => {
      const tree = m(s("MSH"));

      const result = await resolveDefinition(tree);

      expect(result).toHaveProperty("ok", false);
      expect(result).toHaveProperty("reason");
    });
  });
});
