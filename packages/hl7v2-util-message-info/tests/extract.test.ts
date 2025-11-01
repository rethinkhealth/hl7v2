import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import {
  getMessageCode,
  getMessageInfo,
  getMessageStructure,
  getTriggerEvent,
  getVersion,
} from "../src";

describe("getMessageInfo", () => {
  it("extracts all message metadata from a complete MSH segment", () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f(""),
        f(""),
        f(""),
        f("20241201120000"),
        f(""),
        f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9
        f("MSG00001"),
        f("P"),
        f("2.5") // MSH-12
      )
    );

    const info = getMessageInfo(tree);

    expect(info).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
    });
  });

  it("handles partial MSH-9 field (only message code)", () => {
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
        f(c("ORU")), // MSH-9.1 only
        f(""),
        f(""),
        f("2.3.1")
      )
    );

    const info = getMessageInfo(tree);

    expect(info).toEqual({
      version: "2.3.1",
      messageCode: "ORU",
      triggerEvent: undefined,
      messageStructure: undefined,
    });
  });

  it("handles missing MSH-12 field", () => {
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
        f(c("ADT"), c("A01"))
      )
    );

    const info = getMessageInfo(tree);

    expect(info).toEqual({
      version: undefined,
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: undefined,
    });
  });

  it("handles missing MSH-9 field", () => {
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
        f(""), // MSH-9 empty
        f(""),
        f(""),
        f("2.4")
      )
    );

    const info = getMessageInfo(tree);

    expect(info).toEqual({
      version: "2.4",
      messageCode: undefined,
      triggerEvent: undefined,
      messageStructure: undefined,
    });
  });

  it("handles empty MSH segment gracefully", () => {
    const tree = m(s("MSH", f("|"), f("^~\\&")));

    const info = getMessageInfo(tree);

    expect(info).toEqual({
      version: undefined,
      messageCode: undefined,
      triggerEvent: undefined,
      messageStructure: undefined,
    });
  });

  it("works with complete message structure", () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FACILITY"),
        f("RECEIVER"),
        f(""),
        f("20241201120000"),
        f(""),
        f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9
        f("MSG123"),
        f("P"),
        f("2.5") // MSH-12
      )
    );

    const info = getMessageInfo(tree);

    expect(info).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
    });
  });

  it("handles multi-segment messages", () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("HIS"),
        f("RIH"),
        f("EKG"),
        f("EKG"),
        f("199904140038"),
        f(""),
        f(c("ADT"), c("A01")), // MSH-9
        f(""),
        f("P"),
        f("2.3.1") // MSH-12
      ),
      s("PID", f("1"), f(""), f("123456"), f(""), f(c("DOE"), c("JOHN")))
    );

    const info = getMessageInfo(tree);

    expect(info).toEqual({
      version: "2.3.1",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: undefined,
    });
  });
});

describe("getVersion", () => {
  it("extracts version from MSH-12", () => {
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
        f(""),
        f(""),
        f(""),
        f("2.5")
      )
    );

    const version = getVersion(tree);

    expect(version).toBe("2.5");
  });

  it("returns undefined when MSH-12 is empty", () => {
    const tree = m(s("MSH", f("|"), f("^~\\&")));

    const version = getVersion(tree);

    expect(version).toBeUndefined();
  });

  it("handles version with subversions", () => {
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
        f(""),
        f(""),
        f(""),
        f("2.5.1")
      )
    );

    const version = getVersion(tree);

    expect(version).toBe("2.5.1");
  });
});

describe("getMessageCode", () => {
  it("extracts message code from MSH-9.1", () => {
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
        f(c("ADT"))
      )
    );

    const messageCode = getMessageCode(tree);

    expect(messageCode).toBe("ADT");
  });

  it("returns undefined when MSH-9.1 is empty", () => {
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
        f("")
      )
    );

    const messageCode = getMessageCode(tree);

    expect(messageCode).toBeUndefined();
  });

  it("handles various message codes", () => {
    const codes = ["ADT", "ORU", "ORM", "MDM", "VXU", "ACK"];

    for (const code of codes) {
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
          f(c(code))
        )
      );
      expect(getMessageCode(tree)).toBe(code);
    }
  });
});

describe("getTriggerEvent", () => {
  it("extracts trigger event from MSH-9.2", () => {
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
        f(c("ADT"), c("A01"))
      )
    );

    const triggerEvent = getTriggerEvent(tree);

    expect(triggerEvent).toBe("A01");
  });

  it("returns undefined when MSH-9.2 is empty", () => {
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
        f(c("ADT"))
      )
    );

    const triggerEvent = getTriggerEvent(tree);

    expect(triggerEvent).toBeUndefined();
  });

  it("handles various trigger events", () => {
    const events = ["A01", "A04", "R01", "O01", "Z01"];

    for (const event of events) {
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
          f(c("ADT"), c(event))
        )
      );
      expect(getTriggerEvent(tree)).toBe(event);
    }
  });
});

describe("getMessageStructure", () => {
  it("extracts message structure from MSH-9.3", () => {
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

    const messageStructure = getMessageStructure(tree);

    expect(messageStructure).toBe("ADT_A01");
  });

  it("returns undefined when MSH-9.3 is empty", () => {
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
        f(c("ADT"), c("A01"))
      )
    );

    const messageStructure = getMessageStructure(tree);

    expect(messageStructure).toBeUndefined();
  });

  it("handles various message structures", () => {
    const structures = ["ADT_A01", "ORU_R01", "ORM_O01", "MDM_T02", "VXU_V04"];

    for (const structure of structures) {
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
          f(c(""), c(""), c(structure))
        )
      );
      expect(getMessageStructure(tree)).toBe(structure);
    }
  });
});
