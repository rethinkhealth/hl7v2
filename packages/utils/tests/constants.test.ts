import { DEFAULT_DELIMITERS, HEADER_SEGMENTS } from "../src/constants";

describe("DEFAULT_DELIMITERS", () => {
  it("should be defined", () => {
    expect(DEFAULT_DELIMITERS).toBeDefined();
    expect(DEFAULT_DELIMITERS).toStrictEqual({
      component: "^",
      escape: "\\",
      field: "|",
      repetition: "~",
      segment: "\r",
      subcomponent: "&",
    });
  });

  it("should be immutable", () => {
    expect(DEFAULT_DELIMITERS).toBe(DEFAULT_DELIMITERS);
    expect(DEFAULT_DELIMITERS).not.toBe({
      component: "^",
      escape: "\\",
      field: "|",
      repetition: "~",
      segment: "\r",
      subcomponent: "&",
    });
  });
});

describe("HEADER_SEGMENTS", () => {
  it("holds the message, batch, and file headers", () => {
    expect([...HEADER_SEGMENTS]).toStrictEqual(["BHS", "FHS", "MSH"]);
  });
});
