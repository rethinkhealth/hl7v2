import type { Delimiters } from "@glion/ast";
import fc from "fast-check";

import { DEFAULT_DELIMITERS } from "../src/constants";
import { decodeEscapes, encodeEscapes } from "../src/escapes";

const CUSTOM_DELIMITERS: Delimiters = {
  component: "$",
  escape: "#",
  field: "*",
  repetition: "%",
  segment: "\n",
  subcomponent: "@",
};

describe(decodeEscapes, () => {
  it("decodes the delimiter escapes to the default delimiters", () => {
    expect(
      decodeEscapes(
        "Value\\F\\More\\S\\Stuff\\R\\Again\\T\\Sub\\E\\Escaped",
        DEFAULT_DELIMITERS
      )
    ).toBe("Value|More^Stuff~Again&Sub\\Escaped");
  });

  it("decodes the delimiter escapes to custom delimiters", () => {
    expect(
      decodeEscapes(
        "Value#F#More#S#Stuff#R#Again#T#Sub#E#Escaped",
        CUSTOM_DELIMITERS
      )
    ).toBe("Value*More$Stuff%Again@Sub#Escaped");
  });

  it("decodes .br to the segment delimiter", () => {
    expect(decodeEscapes("Line1\\.br\\Line2", DEFAULT_DELIMITERS)).toBe(
      "Line1\rLine2"
    );
  });

  it("decodes a hex escape to the character it names", () => {
    expect(
      decodeEscapes("Hello\\X0A\\World\\X0D\\Done", DEFAULT_DELIMITERS)
    ).toBe("Hello\nWorld\rDone");
  });

  it("decodes each pair of hex digits as one character", () => {
    expect(decodeEscapes("\\X414243\\", DEFAULT_DELIMITERS)).toBe("ABC");
  });

  it("leaves a hex escape without digits untouched", () => {
    expect(decodeEscapes("A\\X\\B", DEFAULT_DELIMITERS)).toBe("A\\X\\B");
  });

  it("leaves a hex escape whose content is not hexadecimal digits untouched", () => {
    expect(decodeEscapes("A\\X-1\\B\\XZZ\\C", DEFAULT_DELIMITERS)).toBe(
      "A\\X-1\\B\\XZZ\\C"
    );
  });

  it("leaves an unknown escape untouched", () => {
    expect(decodeEscapes("Unknown\\ABC\\Value", DEFAULT_DELIMITERS)).toBe(
      "Unknown\\ABC\\Value"
    );
  });

  it("removes the highlight escapes", () => {
    expect(
      decodeEscapes("\\H\\Important\\N\\ value\\F\\pipe", DEFAULT_DELIMITERS)
    ).toBe("Important value|pipe");
  });

  it("leaves an escape character without a closing one untouched", () => {
    expect(decodeEscapes("Value\\Unterminated", DEFAULT_DELIMITERS)).toBe(
      "Value\\Unterminated"
    );
  });

  it("returns a value without escapes as it is", () => {
    expect(decodeEscapes("PlainValue", DEFAULT_DELIMITERS)).toBe("PlainValue");
  });
});

describe(encodeEscapes, () => {
  it("encodes every delimiter and the escape character", () => {
    expect(encodeEscapes("a|b^c~d&e\\f\rg", DEFAULT_DELIMITERS)).toBe(
      "a\\F\\b\\S\\c\\R\\d\\T\\e\\E\\f\\.br\\g"
    );
  });

  it("encodes custom delimiters", () => {
    expect(encodeEscapes("a*b$c%d@e#f\ng", CUSTOM_DELIMITERS)).toBe(
      "a#F#b#S#c#R#d#T#e#E#f#.br#g"
    );
  });

  it("encodes a control character as a hex escape", () => {
    expect(encodeEscapes("line\nfeed\ttab", DEFAULT_DELIMITERS)).toBe(
      "line\\X0A\\feed\\X09\\tab"
    );
  });

  it("returns a value without special characters as it is", () => {
    expect(encodeEscapes("PlainValue123", DEFAULT_DELIMITERS)).toBe(
      "PlainValue123"
    );
  });

  it("returns an empty value as it is", () => {
    expect(encodeEscapes("", DEFAULT_DELIMITERS)).toBe("");
  });

  it("decodes back to the value it encoded, for any value and delimiters", () => {
    fc.assert(
      fc.property(
        fc.string({ unit: "grapheme" }),
        fc.constantFrom(DEFAULT_DELIMITERS, CUSTOM_DELIMITERS),
        (value, d) => {
          expect(decodeEscapes(encodeEscapes(value, d), d)).toBe(value);
        }
      )
    );
  });
});
