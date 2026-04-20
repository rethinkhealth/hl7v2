import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from "@glion/ast";
import { isEmptyNode } from "@glion/utils";
import type { Position } from "unist";

import type { ParserContext, Token } from "./types";

/**
 * Check if a field has structural content beyond a single empty value.
 * A field with multiple repetitions, multiple components, or multiple
 * subcomponents has structural content even if all values are empty.
 * This is used to prevent dropping trailing fields like |^| or |&|
 * that have meaningful delimiter structure.
 */
function hasStructuralContent(field: Field): boolean {
  if (field.children.length > 1) {
    return true;
  }
  const rep = field.children[0];
  if (rep && rep.children.length > 1) {
    return true;
  }
  const comp = rep?.children[0];
  return comp !== undefined && comp.children.length > 1;
}

// Helper to create an empty subcomponent at a given position
function createSubcomponent(start: Position["start"]): Subcomponent {
  return {
    position: { end: start, start },
    type: "subcomponent",
    value: "",
  };
}

// Helper to create a component (with or without children based on mode)
function createComponent(
  start: Position["start"],
  mode: "legacy" | "empty" | undefined
): Component {
  return {
    children: mode === "empty" ? [] : [createSubcomponent(start)],
    position: { end: start, start },
    type: "component",
  };
}

// Helper to create a field repetition (with or without children based on mode)
function createFieldRepetition(
  start: Position["start"],
  mode: "legacy" | "empty" | undefined
): FieldRepetition {
  return {
    children: mode === "empty" ? [] : [createComponent(start, mode)],
    position: { end: start, start },
    type: "field-repetition",
  };
}

// Helper to create a field (with or without children based on mode)
function createField(
  start: Position["start"],
  mode: "legacy" | "empty" | undefined
): Field {
  return {
    children: mode === "empty" ? [] : [createFieldRepetition(start, mode)],
    position: { end: start, start },
    type: "field",
  };
}

// Shared core: process a single token into mutable parse state
function createParserCore(ctx: ParserContext) {
  const mode = ctx.emptyMode;
  const root: Root = {
    children: [],
    type: "root",
  };

  let seg: Segment | null = null;
  let field: Field | null = null;
  let rep: FieldRepetition | null = null;
  let comp: Component | null = null;
  let currentSub: Subcomponent | null = null;
  let segmentHasContent = false;
  let lastContentEnd: Position["end"] | null = null;
  let documentEnd: Position["end"] | null = null; // Track document-level end position
  let expectingSegmentName = true; // Start expecting a segment name
  let justSetSegmentName = false; // Track if we just set the segment name
  let rootStartSet = false; // Track if we've set the root start position

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
    seg = {
      children: [],
      name,
      position: { end: position.end, start: position.start },
      type: "segment",
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

  /**
   * Ensure there is an active segment. If delimiter tokens arrive before
   * any segment name, lazily open a segment with an empty name.
   */
  const ensureSegment = (start: Position["start"]) => {
    if (!seg) {
      openSegment("", {
        start,
        end: start,
      });
      // Reset justSetSegmentName so the first FIELD_DELIM isn't skipped
      // (there's no real segment name to separate from fields)
      justSetSegmentName = false;
    }
  };

  const openField = (start: Position["start"]) => {
    ensureSegment(start);
    field = createField(start, mode);
    seg!.children.push(field);
    if (mode === "empty") {
      rep = null;
      comp = null;
      currentSub = null;
    } else {
      rep = field.children[0] ?? null;
      comp = rep?.children[0] ?? null;
      currentSub = comp?.children[0] ?? null;
    }
    segmentHasContent = true;
  };

  const openRepetition = (start: Position["start"]) => {
    if (!field) {
      openField(start);
      // In empty-array mode, openField creates empty field
      // We need to add an empty first repetition before the delimiter
      if (mode === "empty") {
        const emptyRep = createFieldRepetition(start, mode);
        field!.children.push(emptyRep);
      }
      // Fall through to create the repetition after the delimiter
    }
    // In empty-array mode, if field has no children yet, add empty first rep
    if (mode === "empty" && field!.children.length === 0) {
      const emptyRep = createFieldRepetition(start, mode);
      field!.children.push(emptyRep);
    }
    rep = createFieldRepetition(start, mode);
    field!.children.push(rep);
    if (mode === "empty") {
      comp = null;
      currentSub = null;
    } else {
      comp = rep.children[0] ?? null;
      currentSub = comp?.children[0] ?? null;
    }
    segmentHasContent = true;
  };

  // Ensure there's a component to add subcomponents to (for SUBCOMP_DELIM)
  // Does NOT add empty sibling components
  const ensureComponent = (start: Position["start"]) => {
    if (!field) {
      openField(start);
    }
    if (!rep) {
      rep = createFieldRepetition(start, mode);
      field!.children.push(rep);
    }
    if (!comp) {
      comp = createComponent(start, mode);
      rep.children.push(comp);
    }
    segmentHasContent = true;
  };

  // Handle COMPONENT_DELIM - adds empty component before delimiter if needed
  const openComponent = (start: Position["start"]) => {
    if (!field) {
      openField(start);
      // In empty-array mode, openField creates empty field
      // We need to create rep and add empty first component
      if (mode === "empty") {
        rep = createFieldRepetition(start, mode);
        field!.children.push(rep);
        const emptyComp = createComponent(start, mode);
        rep.children.push(emptyComp);
      }
      // Fall through to create the component after the delimiter
    }
    if (!rep) {
      rep = createFieldRepetition(start, mode);
      field!.children.push(rep);
      // In empty-array mode, need to add empty first component before the delimiter
      if (mode === "empty") {
        const emptyComp = createComponent(start, mode);
        rep.children.push(emptyComp);
      }
    } else if (mode === "empty" && rep.children.length === 0) {
      // If rep exists but has no children, add empty first component
      const emptyComp = createComponent(start, mode);
      rep.children.push(emptyComp);
    }
    comp = createComponent(start, mode);
    rep.children.push(comp);
    currentSub = mode === "empty" ? null : (comp.children[0] ?? null);
    segmentHasContent = true;
  };

  const ensureForText = (start: Position["start"]) => {
    if (!field) {
      openField(start);
      if (mode !== "empty") {
        return; // Everything is already set up by openField in legacy mode
      }
      // In empty-array mode, openField created empty field, need to build structure
    }
    if (!rep) {
      if (mode !== "empty") {
        openRepetition(start);
        return; // Everything is already set up by openRepetition in legacy mode
      }
      // In empty-array mode, need to create repetition
      rep = createFieldRepetition(start, mode);
      field!.children.push(rep);
    }
    if (!comp) {
      if (mode !== "empty") {
        openComponent(start);
        return; // Everything is already set up by openComponent in legacy mode
      }
      // In empty-array mode, need to create component
      comp = createComponent(start, mode);
      rep!.children.push(comp);
    }
    if (!currentSub) {
      currentSub = createSubcomponent(start);
      comp!.children.push(currentSub);
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
        documentEnd = tok.position.end;
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
        documentEnd = tok.position.end;
        if (!field) {
          openField(tok.position.start);
        }
        openRepetition(tok.position.end);
        return;
      }
      case "COMPONENT_DELIM": {
        lastContentEnd = tok.position.end;
        documentEnd = tok.position.end;
        openComponent(tok.position.end);
        return;
      }
      case "SUBCOMP_DELIM": {
        lastContentEnd = tok.position.end;
        documentEnd = tok.position.end;
        // Ensure there's a component to add subcomponents to
        ensureComponent(tok.position.start);
        // In empty-array mode, if comp has no children yet, add empty first subcomponent
        if (mode === "empty" && comp!.children.length === 0) {
          const emptySub = createSubcomponent(tok.position.start);
          comp!.children.push(emptySub);
        }
        currentSub = createSubcomponent(tok.position.end);
        comp?.children.push(currentSub);
        segmentHasContent = true;
        return;
      }
      case "TEXT": {
        const val = tok.value ?? "";

        // Set root start position on first token
        if (!rootStartSet) {
          root.position = {
            end: tok.position.start,
            start: tok.position.start,
          };
          rootStartSet = true;
        }

        // If we're expecting a segment name, this TEXT is the segment name
        if (expectingSegmentName) {
          // `tok.position` is always available for TEXT tokens
          openSegment(val, tok.position);
          lastContentEnd = tok.position.end;
          documentEnd = tok.position.end;
          return;
        }

        // Otherwise, it's regular field content
        ensureForText(tok.position.start);
        if (currentSub) {
          currentSub.value += val;
        }
        updatePositionsToEnd(tok.position.end);
        lastContentEnd = tok.position.end;
        documentEnd = tok.position.end;
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

    // Set root end position once at finalization using document-level end
    if (root.position && documentEnd) {
      root.position.end = documentEnd;
    } else if (!root.position) {
      // Empty document - set default position
      root.position = {
        end: { column: 1, line: 1, offset: 0 },
        start: { column: 1, line: 1, offset: 0 },
      };
    }

    return root;
  };

  /**
   * Drop only the phantom trailing empty field created by a terminal field
   * delimiter (e.g. the last `|` in `PID|foo|`). Without this, every segment
   * ending with `|` would gain an extra empty field on each parse cycle.
   */
  function dropTrailingEmptyFieldIfPresent() {
    if (!seg || seg.children.length === 0) {
      return;
    }
    const lastChild = seg.children.at(-1);
    if (lastChild?.type !== "field") {
      return;
    }
    const lastField = lastChild as Field;
    // Both conditions are needed: a field like `|^|` is isEmpty (no leaf data)
    // but has structural content (component separators) and must be preserved.
    if (isEmptyNode(lastField) && !hasStructuralContent(lastField)) {
      seg.children.pop();
    }
  }

  return { finalize, processToken, root };
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
