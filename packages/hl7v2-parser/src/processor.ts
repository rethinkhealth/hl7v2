// src/parser.ts
/** biome-ignore-all lint/complexity/noExcessiveCognitiveComplexity: there are complex logic */
/** biome-ignore-all lint/style/noNonNullAssertion: the processor uses non-null assertions */

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

// Helper to create a component (with or without children based on mode)
function createComponent(
  start: Position["start"],
  mode: "legacy" | "empty"
): Component {
  return {
    type: "component",
    children: mode === "legacy" ? [createSubcomponent(start)] : [],
    position: { start, end: start },
  };
}

// Helper to create a field repetition (with or without children based on mode)
function createFieldRepetition(
  start: Position["start"],
  mode: "legacy" | "empty"
): FieldRepetition {
  return {
    type: "field-repetition",
    children: mode === "legacy" ? [createComponent(start, mode)] : [],
    position: { start, end: start },
  };
}

// Helper to create a field (with or without children based on mode)
function createField(
  start: Position["start"],
  mode: "legacy" | "empty"
): Field {
  return {
    type: "field",
    children: mode === "legacy" ? [createFieldRepetition(start, mode)] : [],
    position: { start, end: start },
  };
}

// Shared core: process a single token into mutable parse state
function createParserCore(ctx: ParserContext) {
  const mode = ctx.experimental?.emptyMode || "legacy";
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
    field = createField(start, mode);
    seg.children.push(field);
    if (mode === "legacy") {
      rep = field.children[0] ?? null;
      comp = rep?.children[0] ?? null;
      currentSub = comp?.children[0] ?? null;
    } else {
      rep = null;
      comp = null;
      currentSub = null;
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
    if (mode === "legacy") {
      comp = rep.children[0] ?? null;
      currentSub = comp?.children[0] ?? null;
    } else {
      comp = null;
      currentSub = null;
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
    if (mode === "legacy") {
      currentSub = comp.children[0] ?? null;
    } else {
      currentSub = null;
    }
    segmentHasContent = true;
  };

  const ensureForText = (start: Position["start"]) => {
    if (!field) {
      openField(start);
      if (mode === "legacy") {
        return; // Everything is already set up by openField in legacy mode
      }
      // In empty-array mode, openField created empty field, need to build structure
    }
    if (!rep) {
      if (mode === "legacy") {
        openRepetition(start);
        return; // Everything is already set up by openRepetition in legacy mode
      }
      // In empty-array mode, need to create repetition
      rep = createFieldRepetition(start, mode);
      field!.children.push(rep);
    }
    if (!comp) {
      if (mode === "legacy") {
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
            start: tok.position.start,
            end: tok.position.start,
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
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 1, offset: 0 },
      };
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
