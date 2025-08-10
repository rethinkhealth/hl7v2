// src/parser.ts

import type {
  Component,
  Field,
  FieldRepetition,
  Root,
  Segment,
  Subcomponent,
} from '@rethinkhealth/hl7v2-ast';
import type { Token, TokenStream } from './types';
import { toAsyncIterable } from './utils';

// Shared core: process a single token into mutable parse state
function createParserCore() {
  const root: Root = { type: 'root', children: [] };

  let seg: Segment | null = null;
  let field: Field | null = null;
  let rep: FieldRepetition | null = null;
  let comp: Component | null = null;
  let currentSub: Subcomponent | null = null;
  let segmentHasContent = false;

  const openSegment = () => {
    seg = { type: 'segment', children: [] };
    root.children.push(seg);
    field = null;
    rep = null;
    comp = null;
    currentSub = null;
    segmentHasContent = false;
  };

  const ensureSegment = () => {
    if (!seg) {
      openSegment();
    }
  };

  const openField = () => {
    ensureSegment();
    field = { type: 'field', children: [] };
    // biome-ignore lint/style/noNonNullAssertion: seg is ensured above
    seg!.children.push(field);
    rep = { type: 'field-repetition', children: [] };
    field.children.push(rep);
    comp = { type: 'component', children: [] };
    rep.children.push(comp);
    currentSub = null;
    segmentHasContent = true;
  };

  const openRepetition = () => {
    if (!field) {
      openField();
    }
    rep = { type: 'field-repetition', children: [] };
    // biome-ignore lint/style/noNonNullAssertion: field is ensured above
    field!.children.push(rep);
    comp = { type: 'component', children: [] };
    rep.children.push(comp);
    currentSub = null;
    segmentHasContent = true;
  };

  const openComponent = () => {
    if (!field) {
      openField();
    }
    if (!rep) {
      rep = { type: 'field-repetition', children: [] };
      // biome-ignore lint/style/noNonNullAssertion: field is ensured above
      field!.children.push(rep);
    }
    comp = { type: 'component', children: [] };
    // biome-ignore lint/style/noNonNullAssertion: rep is ensured above
    rep!.children.push(comp);
    currentSub = null;
    segmentHasContent = true;
  };

  const ensureForText = () => {
    if (!field) {
      openField();
    }
    if (!rep) {
      openRepetition();
    }
    if (!comp) {
      openComponent();
    }
    if (!currentSub) {
      currentSub = { type: 'subcomponent', value: '' };
      // biome-ignore lint/style/noNonNullAssertion: comp is ensured above
      comp!.children.push(currentSub);
      segmentHasContent = true;
    }
  };

  const processToken = (tok: Token) => {
    switch (tok.type) {
      case 'SEGMENT_END': {
        dropTrailingEmptyFieldIfPresent();
        // Close current segment (if any) and reset; do not auto-open next segment
        seg = null;
        field = null;
        rep = null;
        comp = null;
        currentSub = null;
        segmentHasContent = false;
        return;
      }
      case 'FIELD_DELIM': {
        // Leading field delimiter implies an empty first field
        if (!field) {
          // Open an empty first field and record an empty subcomponent slot
          openField();
          // biome-ignore lint/style/noNonNullAssertion: comp is initialized in openField
          comp!.children.push({ type: 'subcomponent', value: '' });
          segmentHasContent = true;
        }
        openField();
        return;
      }
      case 'REPETITION_DELIM': {
        if (!field) {
          openField();
        }
        openRepetition();
        return;
      }
      case 'COMPONENT_DELIM': {
        openComponent();
        return;
      }
      case 'SUBCOMP_DELIM': {
        if (!comp) {
          openComponent();
        }
        // Start a new empty subcomponent slot
        currentSub = { type: 'subcomponent', value: '' };
        // biome-ignore lint/style/noNonNullAssertion: comp is ensured above
        comp!.children.push(currentSub);
        segmentHasContent = true;
        return;
      }
      case 'TEXT': {
        const val = tok.value ?? '';
        ensureForText();
        // biome-ignore lint/style/noNonNullAssertion: ensured above
        currentSub!.value += val;
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
    const hasAnySubcomponents = lastField.children.some((r) =>
      r.children.some((c) => c.children.length > 0)
    );
    if (!hasAnySubcomponents) {
      seg.children.pop();
    }
  }

  return { processToken, finalize, root };
}

// Async token-stream parser (supports Iterable or AsyncIterable)
export async function parseHL7v2Tokens(tokens: TokenStream): Promise<Root> {
  const core = createParserCore();
  for await (const tok of toAsyncIterable(tokens)) {
    core.processToken(tok);
  }
  return core.finalize();
}

// Sync convenience wrapper over a sync Iterable token source
export function parseHL7v2FromIterator(tokens: Iterable<Token>): Root {
  const core = createParserCore();
  for (const tok of tokens) {
    core.processToken(tok);
  }
  return core.finalize();
}
