import { describe, expect, it } from "vitest";
import { DEFAULT_DELIMITERS } from "../src/constants";

describe("DEFAULT_DELIMITERS", () => {
  it("should be defined", () => {
    expect(DEFAULT_DELIMITERS).toBeDefined();
    expect(DEFAULT_DELIMITERS).toEqual({
      field: "|",
      component: "^",
      repetition: "~",
      subcomponent: "&",
      escape: "\\",
      segment: "\r",
    });
  });

  it("should be immutable", () => {
    expect(DEFAULT_DELIMITERS).toBe(DEFAULT_DELIMITERS);
    expect(DEFAULT_DELIMITERS).not.toBe({
      field: "|",
      component: "^",
      repetition: "~",
      subcomponent: "&",
      escape: "\\",
      segment: "\r",
    });
  });
});
