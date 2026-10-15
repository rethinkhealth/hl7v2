import type { Group, Nodes, Root, Segment } from "@glion/ast";

import type { PathParts } from "./types";

/** A node a path resolves to, with its ancestors from the root. */
export interface Match {
  node: Nodes;
  ancestors: Nodes[];
}

/** The name a path gives a node: a segment's name, or a group's ID. */
export const keyOf = (node: Nodes): string | undefined => {
  switch (node.type) {
    // Stryker disable StringLiteral,BlockStatement: an unnamed node has no key, whichever arm it reaches
    case "root":
    case "field":
    case "field-repetition":
    case "component":
    case "subcomponent": {
      return undefined;
    }
    // Stryker restore StringLiteral,BlockStatement
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

/** The direct children of `parent` that a path step names `name`. */
function named(parent: Root | Group, name: string): (Segment | Group)[] {
  const result: (Segment | Group)[] = [];
  for (const child of parent.children) {
    if (keyOf(child) === name) {
      result.push(child as Segment | Group);
    }
  }
  return result;
}

/**
 * The nodes `parts` addresses under `root`, in document order.
 *
 * Every step names a direct child of the node before it; the first step
 * names a direct child of `root`. A step's `[n]` counts the children with
 * that name, segments and groups together. A step without `[n]` matches the
 * first such child, or every one when `every` is set; so does a field
 * without a repetition when the path names a component.
 *
 * @yields Each matching node with its ancestors.
 */
// oxlint-disable-next-line complexity/complexity -- path walker: one branch per path level (step, field, repetition, component, subcomponent)
export function* resolve(
  root: Root,
  parts: PathParts,
  every: boolean
): Generator<Match> {
  let scopes: Match[] = [{ ancestors: [], node: root }];

  for (const step of [...(parts.groups ?? []), parts.segment]) {
    const next: Match[] = [];
    for (const scope of scopes) {
      // Stryker disable next-line ConditionalExpression,LogicalOperator,BlockStatement: a segment's children are fields, which no step names
      if (scope.node.type !== "root" && scope.node.type !== "group") {
        continue;
      }
      const ancestors = [...scope.ancestors, scope.node];
      for (const node of pick(
        named(scope.node, step.name),
        step.repetition,
        every
      )) {
        next.push({ ancestors, node });
      }
    }
    scopes = next;
  }

  for (const { node: segment, ancestors } of scopes) {
    if (parts.field === undefined) {
      yield { ancestors, node: segment };
      continue;
    }
    if (segment.type !== "segment") {
      continue;
    }

    const field = segment.children[parts.field - 1];
    if (!field) {
      continue;
    }
    const fieldAncestors = [...ancestors, segment];
    if (parts.repetition === undefined && parts.component === undefined) {
      yield { ancestors: fieldAncestors, node: field };
      continue;
    }

    const repetitionAncestors = [...fieldAncestors, field];
    for (const repetition of pick(
      field.children ?? [],
      parts.repetition,
      every
    )) {
      if (parts.component === undefined) {
        yield { ancestors: repetitionAncestors, node: repetition };
        continue;
      }

      const component = repetition.children?.[parts.component - 1];
      if (!component) {
        continue;
      }
      const componentAncestors = [...repetitionAncestors, repetition];
      if (parts.subcomponent === undefined) {
        yield { ancestors: componentAncestors, node: component };
        continue;
      }

      const subcomponent = component.children?.[parts.subcomponent - 1];
      if (subcomponent) {
        yield {
          ancestors: [...componentAncestors, component],
          node: subcomponent,
        };
      }
    }
  }
}
