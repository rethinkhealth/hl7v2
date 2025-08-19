// src/tokenizer.ts
import type { HL7v2Delimiters } from '@rethinkhealth/hl7v2-utils';
import type {
  ParserContext,
  Position,
  Token,
  Tokenizer,
  TokenType,
} from './types';

const MSH_SEGMENT_START = 0;
const MSH_SEGMENT_END = 3;
const MSH_FIELD_SEPERATOR_START = 3;
const MSH_FIELD_SEPERATOR_END = 4;
const MSH_FIELD_DELIMITER_START = 4;
const MSH_FIELD_DELIMITER_END = 8;

export class HL7v2Tokenizer implements Tokenizer, Iterable<Token> {
  private input = '';
  private i = 0;
  private line = 1;
  private col = 1;
  private delims!: HL7v2Delimiters;

  // Only-run-once MSH bootstrap at the start of the file
  private didMshBootstrap = false;
  private pendingBootstrap: null | Array<
    | { kind: 'TEXT'; value: string; advance: number }
    | { kind: 'FIELD_DELIM'; advance: number }
  > = null; // queue to emit TEXT('MSH'), FIELD_DELIM, TEXT('^~\\&')

  reset(ctx: ParserContext) {
    this.input = ctx.input;
    this.delims = ctx.delimiters;
    this.i = 0;
    this.line = 1;
    this.col = 1;
    this.didMshBootstrap = false;
    this.pendingBootstrap = null;

    // Prepare a one-time bootstrap if file starts with MSH
    if (this.input.startsWith('MSH')) {
      // Precompute MSH and MSH.2; MSH.1 is the field delimiter char at index 3
      const msh = this._slice(MSH_SEGMENT_START, MSH_SEGMENT_END);
      const msh1 = this._slice(
        MSH_FIELD_SEPERATOR_START,
        MSH_FIELD_SEPERATOR_END
      ); // the field delimiter char at index 3
      const msh2 = this._slice(
        MSH_FIELD_DELIMITER_START,
        MSH_FIELD_DELIMITER_END
      ); // may be shorter than 4 if truncated
      this.pendingBootstrap = [
        { kind: 'TEXT', value: msh, advance: msh.length },
        { kind: 'FIELD_DELIM', advance: 0 },
        { kind: 'TEXT', value: msh1, advance: msh1.length },
        { kind: 'FIELD_DELIM', advance: 0 },
        { kind: 'TEXT', value: msh2, advance: msh2.length },
      ];
      // NOTE: we have not advanced indices yet; we will as we emit tokens
    }
  }

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: The cognitive complexity of this method is justified because it must handle the HL7v2 MSH segment bootstrap logic and multiple tokenization cases in a single method for performance and maintainability.
  next(): Token | null {
    const s = this.input;
    const n = s.length;
    if (this.i >= n && !this.pendingBootstrap?.length) {
      return null;
    }

    const start = { offset: this.i, line: this.line, column: this.col };

    // ---- One-time MSH bootstrap at file start ----
    if (!this.didMshBootstrap && this.pendingBootstrap) {
      const step = this.pendingBootstrap.shift();
      if (step) {
        if (step.kind === 'TEXT') {
          const take = Math.min(step.advance, n - this.i);
          const out = step.value.slice(0, take);
          this._fastAdvance(out);
          if (this.pendingBootstrap.length === 0) {
            this.pendingBootstrap = null;
            this.didMshBootstrap = true;
          }
          return this._tok('TEXT', out, start);
        }
        // FIELD_DELIM: advance exactly one char (the delimiter) and emit a FIELD_DELIM token
        this._advance(Math.min(step.advance, n - this.i));
        if (this.pendingBootstrap.length === 0) {
          this.pendingBootstrap = null;
          this.didMshBootstrap = true;
        }
        return this._tok('FIELD_DELIM', undefined, start);
      }
    }

    // ---- Normal tokenization (delimiters + text) ----
    if (this.i >= n) {
      return null;
    }
    const ch = s.charAt(this.i);

    if (ch === this.delims.segment) {
      this._advance(1, true);
      return this._tok('SEGMENT_END', undefined, start);
    }
    if (ch === this.delims.field) {
      this._advance(1);
      return this._tok('FIELD_DELIM', undefined, start);
    }
    if (ch === this.delims.repetition) {
      this._advance(1);
      return this._tok('REPETITION_DELIM', undefined, start);
    }
    if (ch === this.delims.component) {
      this._advance(1);
      return this._tok('COMPONENT_DELIM', undefined, start);
    }
    if (ch === this.delims.subcomponent) {
      this._advance(1);
      return this._tok('SUBCOMP_DELIM', undefined, start);
    }

    // TEXT until next delimiter or end
    let j = this.i;
    const seg = this.delims.segment,
      fld = this.delims.field,
      rep = this.delims.repetition,
      cmp = this.delims.component,
      sub = this.delims.subcomponent;

    while (j < s.length) {
      const c = s.charAt(j);
      if (c === seg || c === fld || c === rep || c === cmp || c === sub) {
        break;
      }
      j++;
    }

    const val = s.slice(this.i, j);
    this._fastAdvance(val);
    return this._tok('TEXT', val, start);
  }

  // ---- helpers ----
  private _slice(start: number, end: number): string {
    return this.input.slice(start, Math.min(end, this.input.length));
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
    start: Position['start']
  ): Token {
    const end = { offset: this.i, line: this.line, column: this.col };
    return { type, value, position: { start, end } };
  }

  // Iterable protocol (sync)
  [Symbol.iterator](): Iterator<Token> {
    return {
      next: () => {
        const t = this.next();
        if (t == null) {
          return { done: true, value: undefined as unknown as Token };
        }
        return { done: false, value: t };
      },
    };
  }
}
