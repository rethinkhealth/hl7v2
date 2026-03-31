import type { Group, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import { u } from "unist-builder";

import { DEFAULT_DELIMITERS, resolveDelimiters } from "../src";

/** Helper: build a subcomponent node */
const sub = (value: string) => u("subcomponent", value);

/** Helper: build a component node */
const comp = (...values: string[]) =>
  u(
    "component",
    values.map((v) => sub(v))
  );

/** Helper: build a field-repetition node */
const rep = (...components: ReturnType<typeof comp>[]) =>
  u("field-repetition", components);

/** Helper: build a field node with a single string value */
const field = (value: string) => u("field", [rep(comp(value))]);

/** Helper: build an empty field node (no children) */
const emptyField = () => u("field", []);

/** Helper: build a segment node */
const seg = (name: string, ...fields: ReturnType<typeof field>[]) => {
  const node = u("segment", fields);
  (node as { name: string }).name = name;
  return node;
};

/** Helper: build a group node */
const group = (name: string, ...children: ReturnType<typeof seg>[]) => {
  const node = u("group", children);
  (node as { name: string }).name = name;
  return node as unknown as Group;
};

/** Helper: build a root node */
const root = (...children: (ReturnType<typeof seg> | Group)[]) =>
  u("root", children) as Root;

describe("resolveDelimiters", () => {
  // --- Standard cases ---

  it("extracts standard delimiters from MSH-1 and MSH-2", () => {
    const tree = root(seg("MSH", field("|"), field("^~\\&"), field("SENDER")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("extracts custom delimiters from MSH-1 and MSH-2", () => {
    const tree = root(seg("MSH", field("*"), field("%$#&"), field("SENDER")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual({
      component: "%",
      escape: "#",
      field: "*",
      repetition: "$",
      segment: "\r",
      subcomponent: "&",
    });
  });

  it("returns DEFAULT_DELIMITERS when no MSH segment exists", () => {
    const tree = root(seg("PID", field("12345")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("returns DEFAULT_DELIMITERS for empty root", () => {
    const tree = root();
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("finds MSH even when it is not the first segment", () => {
    const tree = root(
      seg("PID", field("12345")),
      seg("MSH", field("|"), field("^~\\&"), field("SENDER"))
    );
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("handles non-root node by returning defaults", () => {
    const node = seg("PID", field("12345"));
    const result = resolveDelimiters(node as unknown as Root);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  // --- Edge case 1: MSH with no children ---

  it("handles MSH with no fields", () => {
    const tree = root(seg("MSH"));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  // --- Edge case 2: MSH field with empty children (empty mode) ---

  it("handles MSH-1 with empty children array", () => {
    const tree = root(
      seg(
        "MSH",
        emptyField() as unknown as ReturnType<typeof field>,
        field("^~\\&")
      )
    );
    const result = resolveDelimiters(tree);
    // MSH-1 empty → default field delimiter, MSH-2 valid → uses it
    // But field="|" and component="^" are from different sources, still unique
    expect(result.field).toBe("|");
    expect(result.component).toBe("^");
  });

  // --- Edge case 3: MSH-1 multi-character value ---

  it("rejects MSH-1 with multi-character value", () => {
    const tree = root(seg("MSH", field("||"), field("^~\\&")));
    const result = resolveDelimiters(tree);
    // MSH-1 rejected (length !== 1), falls back to default "|"
    expect(result.field).toBe("|");
    expect(result.component).toBe("^");
  });

  // --- Edge case 4: MSH-1 with empty string ---

  it("handles MSH-1 with empty string value", () => {
    const tree = root(seg("MSH", field(""), field("^~\\&")));
    const result = resolveDelimiters(tree);
    // Empty string is falsy → falls back to default
    expect(result.field).toBe("|");
  });

  // --- Edge case 5: MSH-2 empty string ---

  it("handles MSH-2 with empty string value", () => {
    const tree = root(seg("MSH", field("|"), field("")));
    const result = resolveDelimiters(tree);
    // Empty MSH-2 → all encoding chars are defaults
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  // --- Edge case: MSH with only MSH-1 ---

  it("handles MSH with missing MSH-2 by using defaults for encoding chars", () => {
    const tree = root(seg("MSH", field("*")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual({
      ...DEFAULT_DELIMITERS,
      field: "*",
    });
  });

  // --- Edge case 6: MSH-2 with fewer than 4 characters ---

  it("handles MSH-2 with fewer than 4 characters", () => {
    const tree = root(seg("MSH", field("|"), field("^~")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual({
      ...DEFAULT_DELIMITERS,
      component: "^",
      repetition: "~",
    });
  });

  // --- Edge case 6b: MSH-2 with more than 4 characters ---

  it("ignores extra characters beyond 4 in MSH-2", () => {
    const tree = root(seg("MSH", field("|"), field("^~\\&XYZ")));
    const result = resolveDelimiters(tree);
    // Only first 4 chars used, extra ignored
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  // --- Edge case 7: multi-byte/emoji characters ---

  it("falls back to defaults when MSH-2 contains multi-byte character", () => {
    // "💀" is a surrogate pair (length 2), making it an invalid delimiter.
    // The uniqueness check rejects non-single-character delimiters.
    const tree = root(seg("MSH", field("|"), field("^~\\💀")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("rejects MSH-1 with multi-byte character", () => {
    // "💀".length === 2 in JS (surrogate pair), so it's rejected by length check
    const tree = root(seg("MSH", field("💀"), field("^~\\&")));
    const result = resolveDelimiters(tree);
    // MSH-1 rejected → default "|"
    expect(result.field).toBe("|");
  });

  // --- Edge case 8: duplicate delimiter characters ---

  it("falls back to defaults when MSH-2 has duplicate characters", () => {
    const tree = root(seg("MSH", field("|"), field("^^^^")));
    const result = resolveDelimiters(tree);
    // All four encoding chars are "^" → duplicates → fall back
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("falls back to defaults when MSH-2 has partial duplicates", () => {
    const tree = root(seg("MSH", field("|"), field("^~^&")));
    const result = resolveDelimiters(tree);
    // component and escape both "^" → duplicates → fall back
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  // --- Edge case 9: MSH-1 same as character in MSH-2 ---

  it("falls back to defaults when MSH-1 collides with MSH-2 character", () => {
    const tree = root(seg("MSH", field("^"), field("^~\\&")));
    const result = resolveDelimiters(tree);
    // field="^" and component="^" collide → fall back
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("accepts MSH-1 and MSH-2 when all delimiters are unique", () => {
    const tree = root(seg("MSH", field("#"), field("@!$%")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual({
      component: "@",
      escape: "$",
      field: "#",
      repetition: "!",
      segment: "\r",
      subcomponent: "%",
    });
  });

  // --- Edge case 10: multiple MSH segments ---

  it("uses the first MSH segment when multiple exist", () => {
    const tree = root(
      seg("MSH", field("*"), field("%$#&"), field("FIRST")),
      seg("PID", field("12345")),
      seg("MSH", field("|"), field("^~\\&"), field("SECOND"))
    );
    const result = resolveDelimiters(tree);
    expect(result.field).toBe("*");
    expect(result.component).toBe("%");
  });

  // --- Edge case 11: MSH inside a Group node ---

  it("finds MSH inside a Group node", () => {
    const tree = root(
      group(
        "HEADER",
        seg("MSH", field("|"), field("^~\\&"), field("SENDER")) as Segment
      )
    );
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual(DEFAULT_DELIMITERS);
  });

  it("finds MSH in a Group when preceded by non-MSH segments", () => {
    const tree = root(
      seg("EVN", field("A01")),
      group(
        "HEADER",
        seg("MSH", field("*"), field("%$#&"), field("SENDER")) as Segment
      )
    );
    const result = resolveDelimiters(tree);
    expect(result.field).toBe("*");
    expect(result.component).toBe("%");
  });

  it("prefers top-level MSH over MSH inside a Group", () => {
    const tree = root(
      seg("MSH", field("*"), field("%$#&"), field("TOP")),
      group(
        "HEADER",
        seg("MSH", field("|"), field("^~\\&"), field("NESTED")) as Segment
      )
    );
    const result = resolveDelimiters(tree);
    // Top-level MSH found first
    expect(result.field).toBe("*");
  });
});
