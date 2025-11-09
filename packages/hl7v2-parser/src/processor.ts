// src/parser.ts

import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  SegmentHeader,
  Subcomponent,
} from "@rethinkhealth/hl7v2-ast";
import { isEmptyNode } from "@rethinkhealth/hl7v2-utils";
import type { ParserContext, Position, Token } from "./types";

// Helper to create an empty subcomponent at a given position
function createSubcomponent(start: Position["start"]): Subcomponent {
  return {
    type: "subcomponent",
    value: "",
    position: { start, end: start },
  };
}

// Helper to create a component with an initial empty subcomponent
function createComponent(start: Position["start"]): Component {
  return {
    type: "component",
    children: [createSubcomponent(start)],
    position: { start, end: start },
  };
}

// Helper to create a field repetition with an initial component
function createFieldRepetition(start: Position["start"]): FieldRepetition {
  return {
    type: "field-repetition",
    children: [createComponent(start)],
    position: { start, end: start },
  };
}

// Helper to create a field with an initial repetition
function createField(start: Position["start"]): Field {
  return {
    type: "field",
    children: [createFieldRepetition(start)],
    position: { start, end: start },
  };
}

// Shared core: process a single token into mutable parse state
function createParserCore(ctx: ParserContext) {
  const root: Root = {
    type: "root",
    children: [],
    data: {
      delimiters: ctx.delimiters,
    },
  };

  let seg: Segment | null = null;
  let field: Field | null = null;
  let rep: FieldRepetition | null = null;
  let comp: Component | null = null;
  let currentSub: Subcomponent | null = null;
  let segmentHasContent = false;
  let lastContentEnd: Position["end"] | null = null;
  let expectingSegmentName = true; // Start expecting a segment name
  let justSetSegmentName = false; // Track if we just set the segment name

  const resetState = () => {
    seg = null;
    field = null;
    rep = null;
    comp = null;
    currentSub = null;
    segmentHasContent = false;
    lastContentEnd = null;
    expectingSegmentName = true;
  };

  const openSegment = (name: string, position: Position) => {
    const header: SegmentHeader = {
      type: "segment-header",
      value: name,
      position: { ...position },
    };
    seg = {
      type: "segment",
      children: [header],
      position: { start: position.start, end: position.end },
    };
    root.children.push(seg);
    // Reset field-level state
    field = null;
    rep = null;
    comp = null;
    currentSub = null;
    segmentHasContent = false;
    justSetSegmentName = true;
    expectingSegmentName = false;
  };

  const openField = (start: Position["start"]) => {
    if (!seg) {
      throw new Error(
        "Cannot open field without an active segment. TEXT token with segment name must precede field content."
      );
    }
    field = createField(start);
    seg.children.push(field);
    // biome-ignore lint/style/noNonNullAssertion: createField guarantees at least one child at each level
    rep = field.children[0]!;
    // biome-ignore lint/style/noNonNullAssertion: createFieldRepetition guarantees at least one child
    comp = rep.children[0]!;
    // biome-ignore lint/style/noNonNullAssertion: createComponent guarantees at least one child
    currentSub = comp.children[0]!;
    segmentHasContent = true;
  };

  const openRepetition = (start: Position["start"]) => {
    if (!field) {
      openField(start);
      return; // openField already created everything including subcomponent
    }
    rep = createFieldRepetition(start);
    field.children.push(rep);
    comp = rep.children[0] ?? null;
    currentSub = comp?.children[0] ?? null;
    segmentHasContent = true;
  };

  const openComponent = (start: Position["start"]) => {
    if (!field) {
      openField(start);
      return; // openField already created everything including subcomponent
    }
    if (!rep) {
      rep = createFieldRepetition(start);
      field.children.push(rep);
    }
    comp = createComponent(start);
    rep.children.push(comp);
    currentSub = comp.children[0] ?? null;
    segmentHasContent = true;
  };

  const ensureForText = (start: Position["start"]) => {
    if (!field) {
      openField(start);
      return; // Everything is already set up by openField
    }
    if (!rep) {
      openRepetition(start);
      return; // Everything is already set up by openRepetition
    }
    if (!comp) {
      openComponent(start);
      return; // Everything is already set up by openComponent
    }
    if (!currentSub) {
      currentSub = createSubcomponent(start);
      comp.children.push(currentSub);
      segmentHasContent = true;
    }
  };

  const updatePositionsToEnd = (endPos: Position["end"]) => {
    if (currentSub?.position) {
      currentSub.position.end = endPos;
    }
    if (comp?.position) {
      comp.position.end = endPos;
    }
    if (rep?.position) {
      rep.position.end = endPos;
    }
    if (field?.position) {
      field.position.end = endPos;
    }
    if (seg?.position) {
      seg.position.end = endPos;
    }
  };

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: State machine requires handling all token types
  const processToken = (tok: Token) => {
    switch (tok.type) {
      case "SEGMENT_END": {
        // Use the last content position instead of the segment delimiter position
        const endPos = lastContentEnd || tok.position.start;
        updatePositionsToEnd(endPos);
        dropTrailingEmptyFieldIfPresent();
        resetState();
        return;
      }
      case "FIELD_DELIM": {
        lastContentEnd = tok.position.end;
        // Skip the first field delimiter after setting segment name (it separates segment name from fields)
        if (justSetSegmentName) {
          justSetSegmentName = false;
          return;
        }
        // Leading field delimiter implies an empty first field
        if (!field) {
          // Open an empty first field (already has empty subcomponent from openField)
          openField(tok.position.start);
        }
        openField(tok.position.end);
        return;
      }
      case "REPETITION_DELIM": {
        lastContentEnd = tok.position.end;
        if (!field) {
          openField(tok.position.start);
        }
        openRepetition(tok.position.end);
        return;
      }
      case "COMPONENT_DELIM": {
        lastContentEnd = tok.position.end;
        openComponent(tok.position.end);
        return;
      }
      case "SUBCOMP_DELIM": {
        lastContentEnd = tok.position.end;
        if (!comp) {
          openComponent(tok.position.start);
        }
        currentSub = createSubcomponent(tok.position.end);
        comp?.children.push(currentSub);
        segmentHasContent = true;
        return;
      }
      case "TEXT": {
        const val = tok.value ?? "";

        // If we're expecting a segment name, this TEXT is the segment name
        if (expectingSegmentName) {
          // `tok.position` is always available for TEXT tokens
          openSegment(val, tok.position);
          lastContentEnd = tok.position.end;
          return;
        }

        // Otherwise, it's regular field content
        ensureForText(tok.position.start);
        // biome-ignore lint/style/noNonNullAssertion: ensured above
        currentSub!.value += val;
        updatePositionsToEnd(tok.position.end);
        lastContentEnd = tok.position.end;
        segmentHasContent = true;
        return;
      }
      default: {
        throw new Error(`Unexpected token type: ${tok.type}`);
      }
    }
  };

  // Do not pre-open a segment; lazily open upon first non-SEGMENT_END token.

  const finalize = () => {
    // Handle input that ends without an explicit segment delimiter as above.
    if (lastContentEnd && seg) {
      updatePositionsToEnd(lastContentEnd);
    }
    dropTrailingEmptyFieldIfPresent();
    if (seg && !segmentHasContent) {
      // Drop trailing empty segment if no content was added
      root.children.pop();
    }
    return root;
  };

  function dropTrailingEmptyFieldIfPresent() {
    if (!seg || seg.children.length <= 1) {
      return;
    }
    // Drop only the final trailing empty field (created by the last delimiter),
    // preserving any intentional empty fields immediately before it.
    const lastChild = seg.children.at(-1);
    if (lastChild?.type !== "field") {
      return;
    }
    const lastField = lastChild as Field;
    if (isEmptyNode(lastField)) {
      seg.children.pop();
    }
  }

  return { processToken, finalize, root };
}

// Sync convenience wrapper over a sync Iterable token source
export function parseHL7v2FromIterator(
  tokens: Iterable<Token>,
  ctx: ParserContext
): Root {
  const core = createParserCore(ctx);
  for (const tok of tokens) {
    core.processToken(tok);
  }
  return core.finalize();
}
