/** biome-ignore-all lint/style/useUnifiedTypeSignatures: fine */
import type {
  Component,
  Field,
  FieldRepetition,
  Group,
  Root,
  RootContent,
  Segment,
} from "@rethinkhealth/hl7v2-ast";
import { u } from "unist-builder";

export function m(...children: RootContent[]): Root {
  return u("root", children);
}

export function g(name: string, ...children: Array<Segment | Group>): Group {
  const group: Group = u("group", children);
  group.name = name;
  return group;
}

// TODO: Add support for string[]
// export function s(name: string, ...fields: string[]): Segment;
// export function s(name: string, ...fields: string[] | Field[]): Segment {
export function s(name: string, ...fields: Field[]): Segment {
  const segment: Segment = u("segment", fields);
  segment.name = name;
  return segment;
}

type FieldValue = FieldRepetition | Component | string;
type Flattenable<T> = T | T[];

function flatten<T>(values: Flattenable<T>[]): T[] {
  return values.flatMap((value) => (Array.isArray(value) ? value : [value]));
}

function isFieldRepetition(value: FieldValue): value is FieldRepetition {
  return (
    typeof value === "object" &&
    value !== null &&
    value.type === "field-repetition"
  );
}

function isComponent(value: FieldValue): value is Component {
  return (
    typeof value === "object" && value !== null && value.type === "component"
  );
}

/** Empty field */
export function f(): Field;
export function f(...values: Flattenable<FieldValue>[]): Field;
export function f(...values: Flattenable<FieldValue>[]): Field {
  if (values.length === 0) {
    return u("field", [r()]);
  }

  const flat = flatten<FieldValue>(values);
  if (flat.length === 0) {
    return u("field", [r()]);
  }

  const repetitions: FieldRepetition[] = [];
  let pendingComponents: Array<Component | string> = [];

  const flushPending = () => {
    if (pendingComponents.length === 0) {
      return;
    }
    repetitions.push(r(...pendingComponents));
    pendingComponents = [];
  };

  for (const value of flat) {
    if (isFieldRepetition(value)) {
      flushPending();
      repetitions.push(value);
      continue;
    }

    if (isComponent(value) || typeof value === "string") {
      pendingComponents.push(value);
    }
  }

  flushPending();

  if (repetitions.length === 0) {
    return u("field", [r()]);
  }

  return u("field", repetitions);
}

export function r(): FieldRepetition;
export function r(
  ...components: Flattenable<Component | string>[]
): FieldRepetition;
export function r(
  ...components: Flattenable<Component | string>[]
): FieldRepetition {
  if (components.length === 0) {
    return u("field-repetition", [c()]);
  }

  const flat = flatten<Component | string>(components);
  if (flat.length === 0) {
    return u("field-repetition", [c()]);
  }

  return u(
    "field-repetition",
    flat.map((value) => (typeof value === "string" ? c(value) : value))
  );
}

export function c(): Component;
export function c(...values: Flattenable<string>[]): Component;
export function c(...values: Flattenable<string>[]): Component {
  if (values.length === 0) {
    return u("component", [u("subcomponent", "")]);
  }

  const flat = flatten<string>(values);
  if (flat.length === 0) {
    return u("component", [u("subcomponent", "")]);
  }

  return u(
    "component",
    flat.map((subcomponent) => u("subcomponent", subcomponent))
  );
}
