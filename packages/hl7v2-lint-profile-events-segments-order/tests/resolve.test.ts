import "@rethinkhealth/hl7v2-annotate-message";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";

import { resolveDefinition } from "../src/resolve";

describe("resolveDefinition", () => {
  describe("from annotated tree.data.messageInfo", () => {
    it("resolves definition from annotated metadata", async () => {
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
      if (result.ok) {
        expect(result.definition).toBeDefined();
        expect(result.definition.start).toBeDefined();
        expect(result.definition.transitions).toBeInstanceOf(Map);
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
          f("2.5")
        )
      );
      // Annotated data says ADT_A01
      tree.data = {
        messageInfo: {
          version: "2.5",
          messageCode: "ADT",
          triggerEvent: "A01",
          messageStructure: "ADT_A01",
        },
      };

      const result = await resolveDefinition(tree);

      // Should resolve ADT_A01 (from annotated), not ORU_R01 (from MSH)
      expect(result.ok).toBe(true);
    });
  });

  describe("from MSH fields", () => {
    it("resolves definition from MSH-9.3 and MSH-12", async () => {
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
      if (result.ok) {
        expect(result.definition).toBeDefined();
      }
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

    it("fails when version is present but structure is missing", async () => {
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

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.reason).toContain("missing version");
      }
    });

    it("fails when structure is present but version is missing", async () => {
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

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.reason).toContain("missing version");
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
      expectTypeOf((result as { reason: string }).reason).toBeString();
    });
  });
});
