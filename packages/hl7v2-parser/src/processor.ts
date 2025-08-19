// src/parser.ts

import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import { isEmptyNode } from '@rethinkhealth/hl7v2-utils';
import type { ParserContext, Position, Token } from './types';

// Shared core: process a single token into mutable parse state
function createParserCore(ctx: ParserContext) {
  const root: Root = {
    type: 'root',
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
  let lastContentEnd: Position['end'] | null = null;

  const openSegment = (start: Position['start']) => {
    seg = { type: 'segment', children: [], position: { start, end: start } };
    root.children.push(seg);
    field = null;
    rep = null;
    comp = null;
    currentSub = null;
    segmentHasContent = false;
  };

  const ensureSegment = (start: Position['start']) => {
    if (!seg) {
      openSegment(start);
    }
  };

  const openField = (start: Position['start']) => {
    ensureSegment(start);
    field = { type: 'field', children: [], position: { start, end: start } };
    // biome-ignore lint/style/noNonNullAssertion: seg is ensured above
    seg!.children.push(field);
    rep = {
      type: 'field-repetition',
      children: [],
      position: { start, end: start },
    };
    field.children.push(rep);
    comp = { type: 'component', children: [], position: { start, end: start } };
    rep.children.push(comp);
    currentSub = null;
    segmentHasContent = true;
  };

  const openRepetition = (start: Position['start']) => {
    if (!field) {
      openField(start);
    }
    rep = {
      type: 'field-repetition',
      children: [],
      position: { start, end: start },
    };
    // biome-ignore lint/style/noNonNullAssertion: field is ensured above
    field!.children.push(rep);
    comp = { type: 'component', children: [], position: { start, end: start } };
    rep.children.push(comp);
    currentSub = null;
    segmentHasContent = true;
  };

  const openComponent = (start: Position['start']) => {
    if (!field) {
      openField(start);
    }
    if (!rep) {
      rep = {
        type: 'field-repetition',
        children: [],
        position: { start, end: start },
      };
      // biome-ignore lint/style/noNonNullAssertion: field is ensured above
      field!.children.push(rep);
    }
    comp = { type: 'component', children: [], position: { start, end: start } };
    // biome-ignore lint/style/noNonNullAssertion: rep is ensured above
    rep!.children.push(comp);
    currentSub = null;
    segmentHasContent = true;
  };

  const ensureForText = (start: Position['start']) => {
    if (!field) {
      openField(start);
    }
    if (!rep) {
      openRepetition(start);
    }
    if (!comp) {
      openComponent(start);
    }
    if (!currentSub) {
      currentSub = {
        type: 'subcomponent',
        value: '',
        position: { start, end: start },
      };
      // biome-ignore lint/style/noNonNullAssertion: comp is ensured above
      comp!.children.push(currentSub);
      segmentHasContent = true;
    }
  };

  const updatePositionsToEnd = (endPos: Position['end']) => {
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
      case 'SEGMENT_END': {
        // Use the last content position instead of the segment delimiter position
        const endPos = lastContentEnd || tok.position.start;
        updatePositionsToEnd(endPos);
        dropTrailingEmptyFieldIfPresent();
        // Close current segment (if any) and reset; do not auto-open next segment
        seg = null;
        field = null;
        rep = null;
        comp = null;
        currentSub = null;
        segmentHasContent = false;
        lastContentEnd = null;
        return;
      }
      case 'FIELD_DELIM': {
        lastContentEnd = tok.position.end;
        // Leading field delimiter implies an empty first field
        if (!field) {
          // Open an empty first field and record an empty subcomponent slot
          openField(tok.position.start);
          // biome-ignore lint/style/noNonNullAssertion: comp is initialized in openField
          comp!.children.push({
            type: 'subcomponent',
            value: '',
            position: { start: tok.position.start, end: tok.position.start },
          });
          segmentHasContent = true;
        }
        openField(tok.position.end);
        return;
      }
      case 'REPETITION_DELIM': {
        lastContentEnd = tok.position.end;
        if (!field) {
          openField(tok.position.start);
        }
        openRepetition(tok.position.end);
        return;
      }
      case 'COMPONENT_DELIM': {
        lastContentEnd = tok.position.end;
        openComponent(tok.position.end);
        return;
      }
      case 'SUBCOMP_DELIM': {
        lastContentEnd = tok.position.end;
        if (!comp) {
          openComponent(tok.position.start);
        }
        // Start a new empty subcomponent slot
        currentSub = {
          type: 'subcomponent',
          value: '',
          position: { start: tok.position.end, end: tok.position.end },
        };
        // biome-ignore lint/style/noNonNullAssertion: comp is ensured above
        comp!.children.push(currentSub);
        segmentHasContent = true;
        return;
      }
      case 'TEXT': {
        const val = tok.value ?? '';
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
    if (!seg || seg.children.length === 0) {
      return;
    }
    // Drop only the final trailing empty field (created by the last delimiter),
    // preserving any intentional empty fields immediately before it.
    const lastField = seg.children.at(-1) as Field;
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
