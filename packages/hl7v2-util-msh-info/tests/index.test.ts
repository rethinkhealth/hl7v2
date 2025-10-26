import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import { describe, expect, it } from "vitest";
import { getMshInfo } from "../src/index";

describe("getMshInfo", () => {
  it("extracts all fields from a complete MSH segment", () => {
    // MSH segment: field 0=separator, 1=app, 2=fac, 3=rcvapp, 4=rcvfac, 5=time, 6=empty, 7=empty, 8=empty, 9=msg type, 10=msgid, 11=priority, 12=version
    const message: Root = m(
      s(
        "MSH",
        f("|"), // MSH-0: Field separator
        f("MyApp"), // MSH-1: Sending Application
        f("Facility"), // MSH-2: Sending Facility
        f("ReceivingApp"), // MSH-3: Receiving Application
        f("ReceivingFacility"), // MSH-4: Receiving Facility
        f("20231201120000"), // MSH-5: Date/Time of Message
        f(""), // MSH-6: Security
        f(""), // MSH-7: Message Type (alternate)
        f(c("ADT"), c("A01"), c("ADT_A01")), // MSH-9: Message Type
        f("12345"), // MSH-10: Message Control ID
        f("P"), // MSH-11: Processing ID
        f("2.5") // MSH-12: Version ID
      )
    );

    const info = getMshInfo(message);
    expect(info).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
    });
  });

  it("extracts fields when MSH-9.3 is missing and derives it in default mode", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("MyApp"),
        f("Facility"),
        f("ReceivingApp"),
        f("ReceivingFacility"),
        f("20231201120000"),
        f(""),
        f(""),
        f(c("ADT"), c("A01")), // MSH-9: no MSH-9.3
        f("12345"),
        f("P"),
        f("2.5")
      )
    );

    const info = getMshInfo(message);
    expect(info).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
    });
  });

  it("does not derive MSH-9.3 in strict mode when missing", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("MyApp"),
        f("Facility"),
        f("ReceivingApp"),
        f("ReceivingFacility"),
        f("20231201120000"),
        f(""),
        f(""),
        f(c("ADT"), c("A01")),
        f("12345"),
        f("P"),
        f("2.5")
      )
    );

    const info = getMshInfo(message, { strict: true });
    expect(info).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: undefined,
    });
  });

  it("extracts version from MSH-12", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("App"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(),
        f(),
        f(),
        f("2.4")
      )
    );

    const info = getMshInfo(message);
    expect(info.version).toBe("2.4");
  });

  it("extracts message code from MSH-9.1", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(c("ORM")),
        f()
      )
    );

    const info = getMshInfo(message);
    expect(info.messageCode).toBe("ORM");
  });

  it("extracts trigger event from MSH-9.2", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(c("ORM"), c("O01")),
        f()
      )
    );

    const info = getMshInfo(message);
    expect(info.triggerEvent).toBe("O01");
  });

  it("handles missing MSH-9 completely", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("App"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(),
        f(),
        f("P"),
        f("2.5")
      )
    );

    const info = getMshInfo(message);
    expect(info).toEqual({
      version: "2.5",
      messageCode: undefined,
      triggerEvent: undefined,
      messageStructure: undefined,
    });
  });

  it("handles empty component values", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(c(""), c(""), c("")),
        f()
      )
    );

    const info = getMshInfo(message);
    // Empty values return undefined because the query utility's value() function returns null for empty strings
    expect(info.messageCode).toBeUndefined();
    expect(info.triggerEvent).toBeUndefined();
    expect(info.messageStructure).toBeUndefined();
  });

  it("derives structure with only messageCode and triggerEvent", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("App"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(c("RGV"), c("O15")),
        f()
      )
    );

    const info = getMshInfo(message);
    expect(info.messageStructure).toBe("RGV_O15");
  });

  it("prefers explicit MSH-9.3 over derived value", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("App"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(c("ADT"), c("A01"), c("ADT_A03")),
        f()
      )
    );

    const info = getMshInfo(message);
    expect(info.messageStructure).toBe("ADT_A03");
  });

  it("does not derive if only messageCode is present", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("App"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(c("ADT")),
        f()
      )
    );

    const info = getMshInfo(message);
    expect(info.messageStructure).toBeUndefined();
  });

  it("does not derive if only triggerEvent is present", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("App"),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(""),
        f(c(""), c("A01")),
        f()
      )
    );

    const info = getMshInfo(message);
    expect(info.messageStructure).toBeUndefined();
  });

  it("handles message with multiple segments", () => {
    const message: Root = m(
      s(
        "MSH",
        f("|"),
        f("MyApp"),
        f("Facility"),
        f("ReceivingApp"),
        f("ReceivingFacility"),
        f("20231201120000"),
        f(""),
        f(""),
        f(c("ADT"), c("A01")),
        f("12345"),
        f("P"),
        f("2.5")
      ),
      s("PID", f("1"), f(), f("123456789^^^MRN"))
    );

    const info = getMshInfo(message);
    expect(info).toEqual({
      version: "2.5",
      messageCode: "ADT",
      triggerEvent: "A01",
      messageStructure: "ADT_A01",
    });
  });

  it("returns empty object for message without MSH segment", () => {
    const message: Root = m(s("PID", f("1"), f(), f("123456789^^^MRN")));

    const info = getMshInfo(message);
    expect(info).toEqual({});
  });
});
