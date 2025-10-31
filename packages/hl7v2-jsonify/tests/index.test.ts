import { f, m, s } from "@rethinkhealth/hl7v2-builder";
import { unified } from "unified";
import { describe, expect, it } from "vitest";
import { hl7v2Jsonify } from "../src/processor";

describe("hl7v2Jsonify plugin", () => {
  it("compiles single segment tree to JSON string of toJson output", async () => {
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f(["ADT", "A01"]),
        f("MSG00001"),
        f("P"),
        f("2.5")
      )
    );
    const result = await unified().use(hl7v2Jsonify).stringify(tree);

    console.log(result);

    expect(result).toEqual([
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
    // Given
    const tree = m(
      s(
        "MSH",
        f("|"),
        f("^~\\&"),
        f("SENDER"),
        f("FAC"),
        f("RCVR"),
        f("FAC"),
        f("20250101010101"),
        f(""),
        f(["ADT", "A01"]),
        f("MSG00001"),
        f("P"),
        f("2.5")
      ),
      s("PID", f("1234567890"))
    );

    // WHEN
    const result = await unified().use(hl7v2Jsonify).stringify(tree);

    // THEN
    expect(result).toEqual([
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
