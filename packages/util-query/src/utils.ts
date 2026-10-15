import type { Group, Nodes, Root, Segment } from "@glion/ast";

import type { GroupLocator, PathParts } from "./types";

/** A node a path resolves to, with its ancestors from the root. */
export interface Match {
  node: Nodes;
  ancestors: Nodes[];
}

/** The name a path gives a node: a segment's name, or a group's ID. */
export const keyOf = (node: Nodes): string | undefined => {
  switch (node.type) {
    // Stryker disable StringLiteral,BlockStatement,ConditionalExpression: an unnamed node has no key, whichever arm it reaches
    case "root":
    case "field":
    case "field-repetition":
    case "component":
    case "subcomponent": {
      return undefined;
    }
    // Stryker restore StringLiteral,BlockStatement,ConditionalExpression
    case "segment": {
      return node.name;
    }
    case "group": {
      return node.id;
    }
  }
};

/**
 * The `position`th of `children` (1-based) when given; otherwise every one
 * when `every` is set, or the first.
 */
function pick<T>(
  children: T[],
  position: number | undefined,
  every: boolean
): T[] {
  if (position !== undefined) {
    const child = children[position - 1];
    return child === undefined ? [] : [child];
  }
  return every ? children : children.slice(0, 1);
}

/**
 * The children of `parent` a path step names `name`, segments and groups
 * together: the `position`th (1-based) when given; otherwise every one when
 * `every` is set, or the first.
 */
export function stepChildren(
  parent: Root | Segment | Group,
  name: string,
  position: number | undefined,
  every: boolean
): (Segment | Group)[] {
  const result: (Segment | Group)[] = [];
  const target = position ?? 1;
  let count = 0;
  for (const child of parent.children) {
    if (keyOf(child) !== name) {
      continue;
    }
    if (every && position === undefined) {
      result.push(child as Segment | Group);
      continue;
    }
    count += 1;
    if (count === target) {
      return [child as Segment | Group];
    }
  }
  return result;
}

interface Scope {
  node: Root | Segment | Group;
  ancestors: Nodes[];
}

/** The children of each scope that `step` names, with their ancestors. */
function advance(scopes: Scope[], step: GroupLocator, every: boolean): Scope[] {
  const next: Scope[] = [];
  for (const scope of scopes) {
    for (const node of stepChildren(
      scope.node,
      step.name,
      step.repetition,
      every
    )) {
      next.push({ ancestors: [...scope.ancestors, scope.node], node });
    }
  }
  return next;
}

/**
 * The field, repetitions, components, or subcomponents `parts` addresses in
 * `segment`.
 */
function resolveField(
  segment: Segment,
  ancestors: Nodes[],
  fieldNumber: number,
  parts: PathParts,
  every: boolean
): Match[] {
  const field = segment.children[fieldNumber - 1];
  if (!field) {
    return [];
  }
  const fieldAncestors = [...ancestors, segment];
  if (parts.repetition === undefined && parts.component === undefined) {
    return [{ ancestors: fieldAncestors, node: field }];
  }

  const matches: Match[] = [];
  for (const repetition of pick(
    field.children ?? [],
    parts.repetition,
    every
  )) {
    const repetitionAncestors = [...fieldAncestors, field];
    if (parts.component === undefined) {
      matches.push({ ancestors: repetitionAncestors, node: repetition });
      continue;
    }

    const component = repetition.children?.[parts.component - 1];
    if (!component) {
      continue;
    }
    const componentAncestors = [...repetitionAncestors, repetition];
    if (parts.subcomponent === undefined) {
      matches.push({ ancestors: componentAncestors, node: component });
      continue;
    }

    const subcomponent = component.children?.[parts.subcomponent - 1];
    if (subcomponent) {
      matches.push({
        ancestors: [...componentAncestors, component],
        node: subcomponent,
      });
    }
  }
  return matches;
}

/**
 * The nodes `parts` addresses under `root`, in document order, each with its
 * own ancestors array.
 *
 * Every step names a direct child of the node before it; the first step
 * names a direct child of `root`. A step's `[n]` counts the children with
 * that name, segments and groups together. A step without `[n]` matches the
 * first such child, or every one when `every` is set; so does a field
 * without a repetition when the path names a component.
 */
export function resolve(root: Root, parts: PathParts, every: boolean): Match[] {
  let scopes: Scope[] = [{ ancestors: [], node: root }];
  for (const group of parts.groups ?? []) {
    scopes = advance(scopes, group, every);
  }
  scopes = advance(scopes, parts.segment, every);

  if (parts.field === undefined) {
    return scopes;
  }

  const matches: Match[] = [];
  for (const { node, ancestors } of scopes) {
    if (node.type !== "segment") {
      continue;
    }
    for (const match of resolveField(
      node,
      ancestors,
      parts.field,
      parts,
      every
    )) {
      matches.push(match);
    }
  }
  return matches;
}
