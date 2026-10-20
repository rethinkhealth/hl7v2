import type { Delimiters } from "@glion/ast";
import fc from "fast-check";

import { DEFAULT_DELIMITERS } from "../src/constants";
import { EscapeSequenceError } from "../src/errors";
import { decodeEscapes, encodeEscapes } from "../src/escapes";

const CUSTOM_DELIMITERS: Delimiters = {
  component: "$",
  escape: "#",
  field: "*",
  repetition: "%",
  segment: "\n",
  subcomponent: "@",
};

// The round-trip properties at the end of this file are built from three
// helpers. Each property first draws a delimiter set with `arbDelimiters`,
// then chains into `arbValue` to draw a value for that set, encodes it, and
// checks the result with `heldDelimiters` and `decodeEscapes`.

// Characters that are not letters or digits. `.` collides with `\.br\`, but no
// hexadecimal escape holds one of them, so a delimiter set drawn from them can
// write every value.
const PUNCTUATION = [..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
// The characters escape codes are written with: the named codes (`E`, `F`,
// `R`, `S`, `T`, `.br`) and the hexadecimal escape (`X`, hexadecimal digits in
// both cases). Mixing them into the draw makes a delimiter that collides with
// an escape code common instead of a rare accident.
const ESCAPE_CODE_CHARACTERS = [..."EFRST.brX0123456789ABCDEFabcdef"];

// A delimiter set: five distinct characters from `arbCharacter`, assigned to
// the field, component, repetition, escape, and subcomponent roles, with `\r`
// as the segment delimiter.
const arbDelimiters = (
  arbCharacter: fc.Arbitrary<string>
): fc.Arbitrary<Delimiters> =>
  fc
    .uniqueArray(arbCharacter, { maxLength: 5, minLength: 5 })
    .map(([field, component, repetition, escape, subcomponent]) => ({
      component: component as string,
      escape: escape as string,
      field: field as string,
      repetition: repetition as string,
      segment: "\r",
      subcomponent: subcomponent as string,
    }));

// A value for the delimiter set `d`, built one unit at a time from either a
// delimiter of `d` or any grapheme, so that most values hold delimiters and
// the escape character the encoder must write as escape sequences.
const arbValue = (d: Delimiters): fc.Arbitrary<string> =>
  fc.string({
    unit: fc.oneof(
      fc.constantFrom(
        d.field,
        d.component,
        d.repetition,
        d.escape,
        d.subcomponent,
        d.segment
      ),
      fc.string({ maxLength: 1, minLength: 1, unit: "grapheme" })
    ),
  });

// The delimiters of `d` that appear in the encoded value `wire`. An encoded
// value must hold none: the parser splits at a delimiter before it decodes
// escape sequences, so a delimiter inside `wire` would split the value.
const heldDelimiters = (wire: string, d: Delimiters): string[] =>
  [d.field, d.component, d.repetition, d.subcomponent, d.segment].filter(
    (delimiter) => wire.includes(delimiter)
  );

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

  it("decodes the bytes of a hex escape as UTF-8", () => {
    expect(decodeEscapes("caf\\XC3A9\\ \\XE282AC\\", DEFAULT_DELIMITERS)).toBe(
      "café €"
    );
  });

  it("leaves a hex escape with an odd number of digits untouched", () => {
    expect(decodeEscapes("A\\X414\\B\\X4\\C", DEFAULT_DELIMITERS)).toBe(
      "A\\X414\\B\\X4\\C"
    );
  });

  it("leaves a hex escape whose bytes are not UTF-8 untouched", () => {
    expect(decodeEscapes("caf\\XE9\\ \\XC3\\", DEFAULT_DELIMITERS)).toBe(
      "caf\\XE9\\ \\XC3\\"
    );
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

  it("keeps the highlight commands as they are", () => {
    expect(
      decodeEscapes("\\H\\Important\\N\\ value\\F\\pipe", DEFAULT_DELIMITERS)
    ).toBe("\\H\\Important\\N\\ value|pipe");
  });

  it("keeps a formatting command as it is", () => {
    expect(
      decodeEscapes("a\\.sp 2\\b\\.in+4\\c\\.ce\\d", DEFAULT_DELIMITERS)
    ).toBe("a\\.sp 2\\b\\.in+4\\c\\.ce\\d");
  });

  it("keeps a locally defined sequence as it is", () => {
    expect(decodeEscapes("a\\Zsite 7\\b\\Z\\c", DEFAULT_DELIMITERS)).toBe(
      "a\\Zsite 7\\b\\Z\\c"
    );
  });

  it("keeps a character set switch as it is", () => {
    expect(
      decodeEscapes(
        "\\C2842\\abc\\M2442\\def\\M242844\\ghi",
        DEFAULT_DELIMITERS
      )
    ).toBe("\\C2842\\abc\\M2442\\def\\M242844\\ghi");
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

  it("writes a formatting command as it is", () => {
    expect(
      encodeEscapes("\\H\\a|b\\N\\ \\.sp 2\\c\\.in+4\\d", DEFAULT_DELIMITERS)
    ).toBe("\\H\\a\\F\\b\\N\\ \\.sp 2\\c\\.in+4\\d");
  });

  it("writes a locally defined sequence as it is", () => {
    expect(encodeEscapes("a\\Zsite 7\\b|\\Z\\c", DEFAULT_DELIMITERS)).toBe(
      "a\\Zsite 7\\b\\F\\\\Z\\c"
    );
  });

  it("writes a character set switch as it is", () => {
    expect(
      encodeEscapes("\\C2842\\a|b\\M2442\\c\\M242844\\d", DEFAULT_DELIMITERS)
    ).toBe("\\C2842\\a\\F\\b\\M2442\\c\\M242844\\d");
  });

  it("encodes a delimiter inside a locally defined sequence", () => {
    expect(
      encodeEscapes("a\\Zfoo|bar\\b\\Zx^y~z&w\\c\\Zq\rr\\d", DEFAULT_DELIMITERS)
    ).toBe(
      "a\\E\\Zfoo\\F\\bar\\E\\b\\E\\Zx\\S\\y\\R\\z\\T\\w\\E\\c\\E\\Zq\\.br\\r\\E\\d"
    );
  });

  it("encodes a control character inside a locally defined sequence", () => {
    expect(encodeEscapes("a\\Zfoo\nbar\\b", DEFAULT_DELIMITERS)).toBe(
      "a\\E\\Zfoo\\X0A\\bar\\E\\b"
    );
  });

  it("encodes a sequence whose case is not the one HL7v2 defines", () => {
    expect(
      encodeEscapes("\\h\\a\\n\\b\\.BR\\c\\z1\\d\\c2842\\e", DEFAULT_DELIMITERS)
    ).toBe(
      "\\E\\h\\E\\a\\E\\n\\E\\b\\E\\.BR\\E\\c\\E\\z1\\E\\d\\E\\c2842\\E\\e"
    );
  });

  it("encodes a literal .br so it reads back as text", () => {
    expect(encodeEscapes("a\\.br\\b", DEFAULT_DELIMITERS)).toBe(
      "a\\E\\.br\\E\\b"
    );
    expect(
      decodeEscapes(
        encodeEscapes("a\\.br\\b", DEFAULT_DELIMITERS),
        DEFAULT_DELIMITERS
      )
    ).toBe("a\\.br\\b");
  });

  it("writes a character set switch with the escape character MSH-2 declares", () => {
    expect(encodeEscapes("#C2842#a*b#M2442#c", CUSTOM_DELIMITERS)).toBe(
      "#C2842#a#F#b#M2442#c"
    );
  });

  it("encodes a character set switch whose content is not hexadecimal pairs", () => {
    expect(
      encodeEscapes(
        "a\\C284\\b\\C28G2\\c\\M24\\d\\M2442843\\e",
        DEFAULT_DELIMITERS
      )
    ).toBe("a\\E\\C284\\E\\b\\E\\C28G2\\E\\c\\E\\M24\\E\\d\\E\\M2442843\\E\\e");
  });

  it("encodes an escape character that does not start a sequence written as it is", () => {
    expect(encodeEscapes("a\\Q\\b\\.sp|2\\c\\", DEFAULT_DELIMITERS)).toBe(
      "a\\E\\Q\\E\\b\\E\\.sp\\F\\2\\E\\c\\E\\"
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

  it("writes a character whose escape code is a delimiter as a hex escape", () => {
    expect(encodeEscapes("a#b", { ...CUSTOM_DELIMITERS, component: "E" })).toBe(
      "a#X23#b"
    );
  });

  it("writes the escape character as a hex escape when it is E", () => {
    expect(encodeEscapes("aEb", { ...CUSTOM_DELIMITERS, escape: "E" })).toBe(
      "aEX45Eb"
    );
  });

  it("writes a hex escape with lowercase digits when an uppercase digit is a delimiter", () => {
    expect(
      encodeEscapes("a~b", { ...CUSTOM_DELIMITERS, escape: "~", field: "E" })
    ).toBe("a~X7e~b");
  });

  it("writes the segment delimiter as a hex escape when a delimiter is in .br", () => {
    expect(encodeEscapes("a\nb", { ...CUSTOM_DELIMITERS, field: "." })).toBe(
      "a#X0A#b"
    );
  });

  it("throws for a character no escape sequence can write", () => {
    const d = { ...CUSTOM_DELIMITERS, component: "S", field: "X" };

    expect(() => encodeEscapes("aSb", d)).toThrow(
      new EscapeSequenceError("S", d)
    );
    expect(() => encodeEscapes("aSb", d)).toThrow(
      "The value holds a character that no escape sequence can write, because a delimiter appears in both its escape code and its hexadecimal escape; use delimiters that are not letters or digits."
    );
  });

  it("writes any value with delimiters that are not letters or digits", () => {
    fc.assert(
      fc.property(
        arbDelimiters(fc.constantFrom(...PUNCTUATION)).chain((d) =>
          fc.tuple(fc.constant(d), arbValue(d))
        ),
        ([d, value]) => {
          const wire = encodeEscapes(value, d);

          expect(heldDelimiters(wire, d)).toEqual([]);
          expect(decodeEscapes(wire, d)).toBe(value);
        }
      )
    );
  });

  it("writes any value with any delimiters, or throws EscapeSequenceError", () => {
    fc.assert(
      fc.property(
        arbDelimiters(
          fc.oneof(fc.constantFrom(...ESCAPE_CODE_CHARACTERS), fc.char())
        ).chain((d) => fc.tuple(fc.constant(d), arbValue(d))),
        ([d, value]) => {
          let wire: string;
          try {
            wire = encodeEscapes(value, d);
          } catch (error) {
            expect(error).toBeInstanceOf(EscapeSequenceError);
            return;
          }

          expect(heldDelimiters(wire, d)).toEqual([]);
          expect(decodeEscapes(wire, d)).toBe(value);
        }
      )
    );
  });
});
