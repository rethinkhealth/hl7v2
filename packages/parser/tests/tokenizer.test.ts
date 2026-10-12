import { DEFAULT_DELIMITERS } from "@glion/utils";

import { HL7v2Tokenizer } from "../src/tokenizer";
import type { Token } from "../src/types";

function toks(input: string): Token[] {
  const t = new HL7v2Tokenizer();
  t.reset({ delimiters: DEFAULT_DELIMITERS, input });
  const out: Token[] = [];
  for (let k = t.next(); k; k = t.next()) {
    out.push(k);
  }
  return out;
}

describe("header segments", () => {
  const values = (out: Token[]) =>
    out.filter((t) => t.type === "TEXT").map((t) => t.value);

  it("emits MSH as TEXT, then a synthetic FIELD_DELIM, then MSH-1 and MSH-2 as TEXT", () => {
    const out = toks("MSH|^~\\&|SENDER\rPID|1\rMSH|^~\\&|AGAIN");

    expect(out[0]).toMatchObject({ type: "TEXT", value: "MSH" });
    expect(out[1]).toMatchObject({ type: "FIELD_DELIM" });
    expect(out[2]).toMatchObject({ type: "TEXT", value: "|" });
    expect(out[3]).toMatchObject({ type: "FIELD_DELIM" });
    expect(out[4]).toMatchObject({ type: "TEXT", value: "^~\\&" });

    expect(out).toMatchSnapshot();
  });

  it("reads fields 1 and 2 of every MSH, not only the first", () => {
    const out = toks("MSH|^~\\&|A\rPID|1\rMSH|^~\\&|B");

    expect(values(out)).toStrictEqual([
      "MSH",
      "|",
      "^~\\&",
      "A",
      "PID",
      "1",
      "MSH",
      "|",
      "^~\\&",
      "B",
    ]);
  });

  it("reads fields 1 and 2 of FHS and BHS", () => {
    const out = toks("FHS|^~\\&|LAB\rBHS|^~\\&|LAB");

    expect(values(out)).toStrictEqual([
      "FHS",
      "|",
      "^~\\&",
      "LAB",
      "BHS",
      "|",
      "^~\\&",
      "LAB",
    ]);
  });

  it("ends the encoding characters at the next field separator", () => {
    const out = toks("MSH|^~|A");

    expect(values(out)).toStrictEqual(["MSH", "|", "^~", "A"]);
  });

  it("ends the encoding characters at the end of the segment", () => {
    const out = toks("MSH|^~\rPID|1");

    expect(values(out)).toStrictEqual(["MSH", "|", "^~", "PID", "1"]);
  });

  it("reads all encoding characters up to the field separator, truncation character included", () => {
    const out = toks("MSH|^~\\&#|A");

    expect(values(out)).toStrictEqual(["MSH", "|", "^~\\&#", "A"]);
  });

  it("reads a header name not followed by the field separator as an ordinary segment", () => {
    const out = toks("PID|1\rMSH^X");

    expect(values(out)).toStrictEqual(["PID", "1", "MSH", "X"]);
  });

  it("does not read the first segment as a header when it is not one", () => {
    const out = toks("PID|1\rMSH|^~\\&|SENDER");
    // No special tokens up front—just TEXT('PID') then delimiters
    expect(out[0]).toMatchObject({ type: "TEXT", value: "PID" });
  });
});
