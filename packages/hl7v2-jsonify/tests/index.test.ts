import { hl7v2Parser } from "@rethinkhealth/hl7v2-parser";
import { unified } from "unified";
import { describe, expect, it } from "vitest";
import { hl7v2Jsonify } from "../src/processor";

describe("hl7v2Jsonify plugin", () => {
  it("compiles single segment tree to JSON string of toJson output", async () => {
    const msg =
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5";
    const file = await unified()
      .use(hl7v2Parser)
      .use(hl7v2Jsonify)
      .process(msg);

    expect(file.value).toEqual(msg);
    expect(file.result).toEqual([
      {
        segment: "MSH",
        fields: [
          "|",
          "^~\\&",
          "SENDER",
          "FAC",
          "RCVR",
          "FAC",
          "20250101010101",
          "",
          ["ADT", "A01"],
          "MSG00001",
          "P",
          "2.5",
        ],
      },
    ]);
  });

  it("compiles multiple segment tree to JSON string of toJson output", async () => {
    const msg = [
      "MSH|^~\\&|SENDER|FAC|RCVR|FAC|20250101010101||ADT^A01|MSG00001|P|2.5",
      "PID|1234567890",
    ].join("\r");
    const file = await unified()
      .use(hl7v2Parser)
      .use(hl7v2Jsonify)
      .process(msg);
    expect(file.value).toEqual(msg);
    expect(file.result).toEqual([
      {
        segment: "MSH",
        fields: [
          "|",
          "^~\\&",
          "SENDER",
          "FAC",
          "RCVR",
          "FAC",
          "20250101010101",
          "",
          ["ADT", "A01"],
          "MSG00001",
          "P",
          "2.5",
        ],
      },
      { segment: "PID", fields: ["1234567890"] },
    ]);
  });
});
