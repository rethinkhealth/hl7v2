// src/tokenizer.ts
import type { Delimiters } from "@glion/ast";
import { HEADER_SEGMENTS } from "@glion/utils";
import type { Position } from "unist";

import type { ParserContext, Token, Tokenizer, TokenType } from "./types";

const HEADER_NAME_LENGTH = 3;

type HeaderStep = { kind: "TEXT"; value: string } | { kind: "FIELD_DELIM" };

export class HL7v2Tokenizer implements Tokenizer, Iterable<Token> {
  private input = "";
  private i = 0;
  private line = 1;
  private col = 1;
  private delims!: Delimiters;

  // Tokens still to emit for a header segment's name, field 1, and field 2.
  // Stryker disable next-line ArrayDeclaration: reset() sets it before the first next().
  private pendingHeader: HeaderStep[] = [];

  reset(ctx: ParserContext) {
    this.input = ctx.input;
    this.delims = ctx.delimiters;
    this.i = 0;
    this.line = 1;
    this.col = 1;
    this.pendingHeader = this._header();
  }

  // oxlint-disable-next-line complexity/complexity -- tokenizer hot path: one branch per delimiter class, kept flat for speed
  next(): Token | null {
    const s = this.input;
    const n = s.length;
    const start = { column: this.col, line: this.line, offset: this.i };

    // ---- Header segment name, field 1, and field 2 ----
    const step = this.pendingHeader.shift();
    if (step) {
      switch (step.kind) {
        case "TEXT": {
          this._fastAdvance(step.value);
          return this._tok("TEXT", step.value, start);
        }
        case "FIELD_DELIM": {
          return this._tok("FIELD_DELIM", undefined, start);
        }
      }
    }

    // ---- Normal tokenization (delimiters + text) ----
    if (this.i >= n) {
      return null;
    }
    const ch = s.charAt(this.i);

    if (ch === this.delims.segment) {
      this._advance(1, true);
      const token = this._tok("SEGMENT_END", undefined, start);
      this.pendingHeader = this._header();
      return token;
    }
    if (ch === this.delims.field) {
      this._advance(1);
      return this._tok("FIELD_DELIM", undefined, start);
    }
    if (ch === this.delims.repetition) {
      this._advance(1);
      return this._tok("REPETITION_DELIM", undefined, start);
    }
    if (ch === this.delims.component) {
      this._advance(1);
      return this._tok("COMPONENT_DELIM", undefined, start);
    }
    if (ch === this.delims.subcomponent) {
      this._advance(1);
      return this._tok("SUBCOMP_DELIM", undefined, start);
    }

    // TEXT until next delimiter or end
    let j = this.i;
    const cmp = this.delims.component,
      fld = this.delims.field,
      rep = this.delims.repetition,
      seg = this.delims.segment,
      sub = this.delims.subcomponent;

    while (j < s.length) {
      const c = s.charAt(j);
      if (c === seg || c === fld || c === rep || c === cmp || c === sub) {
        break;
      }
      j += 1;
    }

    const val = s.slice(this.i, j);
    this._fastAdvance(val);
    return this._tok("TEXT", val, start);
  }

  // ---- helpers ----
  private _header(): HeaderStep[] {
    const at = this.i;
    const name = this.input.slice(at, at + HEADER_NAME_LENGTH);
    const separator = this.input.charAt(at + HEADER_NAME_LENGTH);
    if (!HEADER_SEGMENTS.has(name) || separator !== this.delims.field) {
      // Stryker disable next-line ArrayDeclaration: a step of unknown kind is skipped, so any non-header queue tokenizes the same.
      return [];
    }
    const start = at + HEADER_NAME_LENGTH + 1;
    // `charAt` past the end of the input is "".
    const stops = new Set([this.delims.field, this.delims.segment, ""]);
    let end = start;
    while (!stops.has(this.input.charAt(end))) {
      end += 1;
    }
    return [
      // Stryker disable next-line ObjectLiteral,StringLiteral: the name step tokenizes the name exactly as the ordinary path does; it only orders it before fields 1 and 2.
      { kind: "TEXT", value: name },
      { kind: "FIELD_DELIM" },
      { kind: "TEXT", value: separator },
      { kind: "FIELD_DELIM" },
      { kind: "TEXT", value: this.input.slice(start, end) },
    ];
  }

  private _advance(n: number, isNewline = false) {
    this.i += n;
    if (isNewline) {
      this.line += 1;
      this.col = 1;
    } else {
      this.col += n;
    }
  }

  private _fastAdvance(chunk: string) {
    const parts = chunk.split(this.delims.segment);
    if (parts.length > 1) {
      this.line += parts.length - 1;
      this.col = (parts.at(-1)?.length ?? 0) + 1;
    } else {
      this.col += chunk.length;
    }
    this.i += chunk.length;
  }

  private _tok(
    type: TokenType,
    value: string | undefined,
    start: Position["start"]
  ): Token {
    const end = { column: this.col, line: this.line, offset: this.i };
    return { position: { end, start }, type, value };
  }

  // Iterable protocol (sync)
  [Symbol.iterator](): Iterator<Token> {
    return {
      next: () => {
        const t = this.next();
        if (!t) {
          return { done: true, value: undefined as unknown as Token };
        }
        return { done: false, value: t };
      },
    };
  }
}
