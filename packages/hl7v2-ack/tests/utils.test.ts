import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { describe, expect, it } from "vitest";

import { buildErr, buildMsa, buildMsh, generateId } from "../src/utils";

const HL7V2_DELIMITERS = ["|", "^", "~", "\\", "&"];

describe(generateId, () => {
  it("returns a non-empty string", () => {
    const id = generateId();
    expect(id).toBeTruthy();
    expectTypeOf(id).toBeString();
  });

  it("returns exactly 20 characters", () => {
    const id = generateId();
    expect(id).toHaveLength(20);
  });

  it("returns unique IDs on successive calls", () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId()));
    expect(ids.size).toBe(100);
  });

  it("contains no HL7v2 delimiter characters", () => {
    const ids = Array.from({ length: 100 }, () => generateId());
    for (const id of ids) {
      for (const delimiter of HL7V2_DELIMITERS) {
        expect(id).not.toContain(delimiter);
      }
    }
  });

  it("uses only URL-safe characters", () => {
    const ids = Array.from({ length: 100 }, () => generateId());
    for (const id of ids) {
      expect(id).toMatch(/^[A-Za-z0-9_-]+$/);
    }
  });
});

function inboundMessage() {
  return m(
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f("SEND_APP"),
      f("SEND_FAC"),
      f("RECV_APP"),
      f("RECV_FAC"),
      f("20260307120000"),
      f(""),
      f(c("ADT"), c("A01"), c("ADT_A01")),
      f("CTRL001"),
      f("P"),
      f("2.5")
    ),
    s("PID", f("1"), f(""), f("12345"))
  );
}

describe(buildMsh, () => {
  it("swaps sender and receiver fields", () => {
    const msh = buildMsh(inboundMessage(), "20260307140000", "CTRL_ACK");
    const root = m(msh);
    expect(value(root, "MSH-3")?.value).toBe("RECV_APP");
    expect(value(root, "MSH-4")?.value).toBe("RECV_FAC");
    expect(value(root, "MSH-5")?.value).toBe("SEND_APP");
    expect(value(root, "MSH-6")?.value).toBe("SEND_FAC");
  });

  it("sets MSH-9 to ACK with trigger event from inbound", () => {
    const msh = buildMsh(inboundMessage(), "20260307140000", "CTRL_ACK");
    const root = m(msh);
    expect(value(root, "MSH-9.1")?.value).toBe("ACK");
    expect(value(root, "MSH-9.2")?.value).toBe("A01");
  });

  it("preserves processing ID and version from inbound", () => {
    const msh = buildMsh(inboundMessage(), "20260307140000", "CTRL_ACK");
    const root = m(msh);
    expect(value(root, "MSH-11")?.value).toBe("P");
    expect(value(root, "MSH-12")?.value).toBe("2.5");
  });

  it("uses provided timestamp", () => {
    const msh = buildMsh(inboundMessage(), "20260101000000", "CTRL_ACK");
    const root = m(msh);
    expect(value(root, "MSH-7")?.value).toBe("20260101000000");
  });

  it("uses provided control ID", () => {
    const msh = buildMsh(inboundMessage(), "20260307140000", "MY_CTRL_ID");
    const root = m(msh);
    expect(value(root, "MSH-10")?.value).toBe("MY_CTRL_ID");
  });

  it("sets field separator and encoding characters", () => {
    const msh = buildMsh(inboundMessage(), "20260307140000", "CTRL_ACK");
    const root = m(msh);
    expect(value(root, "MSH-1")?.value).toBe("|");
    expect(value(root, "MSH-2")?.value).toBe("^~\\&");
  });
});

describe(buildMsa, () => {
  it("sets acknowledgment code in MSA-1", () => {
    const msa = buildMsa(inboundMessage(), "AA");
    const root = m(s("MSH", f("|"), f("^~\\&")), msa);
    expect(value(root, "MSA-1")?.value).toBe("AA");
  });

  it("sets inbound control ID in MSA-2", () => {
    const msa = buildMsa(inboundMessage(), "AA");
    const root = m(s("MSH", f("|"), f("^~\\&")), msa);
    expect(value(root, "MSA-2")?.value).toBe("CTRL001");
  });

  it("includes text in MSA-3 when provided", () => {
    const msa = buildMsa(inboundMessage(), "AE", "Something went wrong");
    const root = m(s("MSH", f("|"), f("^~\\&")), msa);
    expect(value(root, "MSA-3")?.value).toBe("Something went wrong");
  });

  it("omits MSA-3 when text is not provided", () => {
    const msa = buildMsa(inboundMessage(), "AA");
    const root = m(s("MSH", f("|"), f("^~\\&")), msa);
    expect(value(root, "MSA-3")?.value).toBeUndefined();
  });

  it("works with each ack code", () => {
    for (const code of ["AA", "AE", "AR"] as const) {
      const msa = buildMsa(inboundMessage(), code);
      const root = m(s("MSH", f("|"), f("^~\\&")), msa);
      expect(value(root, "MSA-1")?.value).toBe(code);
    }
  });
});

describe(buildErr, () => {
  it("sets error code in ERR-3", () => {
    const err = buildErr({ code: "207" });
    const root = m(s("MSH", f("|"), f("^~\\&")), err);
    expect(value(root, "ERR-3.1")?.value).toBe("207");
  });

  it("sets severity in ERR-4", () => {
    const err = buildErr({ severity: "W" });
    const root = m(s("MSH", f("|"), f("^~\\&")), err);
    expect(value(root, "ERR-4")?.value).toBe("W");
  });

  it("defaults severity to E when not provided", () => {
    const err = buildErr({});
    const root = m(s("MSH", f("|"), f("^~\\&")), err);
    expect(value(root, "ERR-4")?.value).toBe("E");
  });

  it("sets error location in ERR-2", () => {
    const err = buildErr({ location: "PID-3" });
    const root = m(s("MSH", f("|"), f("^~\\&")), err);
    expect(value(root, "ERR-2")?.value).toBe("PID-3");
  });

  it("sets user message in ERR-8", () => {
    const err = buildErr({ message: "Unknown patient ID" });
    const root = m(s("MSH", f("|"), f("^~\\&")), err);
    expect(value(root, "ERR-8")?.value).toBe("Unknown patient ID");
  });

  it("builds complete ERR segment with all fields", () => {
    const err = buildErr({
      code: "204",
      location: "PID-3",
      message: "Unknown key identifier",
      severity: "E",
    });
    const root = m(s("MSH", f("|"), f("^~\\&")), err);
    expect(value(root, "ERR-2")?.value).toBe("PID-3");
    expect(value(root, "ERR-3.1")?.value).toBe("204");
    expect(value(root, "ERR-4")?.value).toBe("E");
    expect(value(root, "ERR-8")?.value).toBe("Unknown key identifier");
  });

  it("handles empty error details", () => {
    const err = buildErr({});
    const root = m(s("MSH", f("|"), f("^~\\&")), err);
    expect(value(root, "ERR-4")?.value).toBe("E");
  });
});
