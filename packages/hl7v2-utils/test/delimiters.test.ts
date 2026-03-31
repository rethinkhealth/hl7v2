import type { Root } from "@rethinkhealth/hl7v2-ast";
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

/** Helper: build a segment node */
const seg = (name: string, ...fields: ReturnType<typeof field>[]) => {
  const node = u("segment", fields);
  (node as { name: string }).name = name;
  return node;
};

/** Helper: build a root node */
const root = (...children: ReturnType<typeof seg>[]) =>
  u("root", children) as Root;

describe("resolveDelimiters", () => {
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

  it("handles MSH with missing MSH-2 by using defaults for encoding chars", () => {
    const tree = root(seg("MSH", field("*")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual({
      ...DEFAULT_DELIMITERS,
      field: "*",
    });
  });

  it("handles MSH-2 with fewer than 4 characters", () => {
    const tree = root(seg("MSH", field("|"), field("^~")));
    const result = resolveDelimiters(tree);
    expect(result).toStrictEqual({
      ...DEFAULT_DELIMITERS,
      component: "^",
      repetition: "~",
    });
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
});
