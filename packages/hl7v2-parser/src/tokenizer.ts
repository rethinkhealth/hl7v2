// src/tokenizer.ts
import {
  DEFAULT_DELIMITERS,
  type HL7v2Delimiters,
} from '@rethinkhealth/hl7v2-utils';
import type {
  ParseOptions,
  Position,
  Token,
  Tokenizer,
  TokenType,
} from './types';

export class HL7v2Tokenizer implements Tokenizer {
  private input = '';
  private i = 0;
  private line = 1;
  private col = 1;
  private delims!: HL7v2Delimiters;

  // Only-run-once MSH bootstrap at the start of the file
  private didMshBootstrap = false;
  private pendingBootstrap: string[] | null = null; // queue of TEXT chunks to emit: ['MSH','|','^~\\&']

  reset(input: string, opts: ParseOptions) {
    this.input = input;
    this.delims = opts.delimiters || DEFAULT_DELIMITERS;
    this.i = 0;
    this.line = 1;
    this.col = 1;
    this.didMshBootstrap = false;
    this.pendingBootstrap = null;

    // Prepare a one-time bootstrap if file starts with MSH
    if (this.input.startsWith('MSH')) {
      // Precompute MSH, MSH.1 (1 char), MSH.2 (up to 4 chars)
      const msh = this._slice(0, 3);
      const msh1 = this._slice(3, 4); // may be empty if truncated
      const msh2 = this._slice(4, 8); // may be shorter than 4 if truncated
      this.pendingBootstrap = [msh, msh1, msh2];
      // NOTE: we have not advanced indices yet; we will as we emit tokens
    }
  }

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: WIP
  next(): Token | null {
    const s = this.input;
    const n = s.length;
    if (this.i >= n && !this.pendingBootstrap?.length) {
      return null;
    }

    const start = { offset: this.i, line: this.line, column: this.col };

    // ---- One-time MSH bootstrap at file start ----
    if (!this.didMshBootstrap && this.pendingBootstrap) {
      const val = this.pendingBootstrap.shift() ?? '';
      // Advance by the length we actually emit (don’t overshoot EOF)
      const take = Math.min(val.length, n - this.i);
      const out = val.slice(0, take);
      this._fastAdvance(out);

      // If we exhausted the bootstrap queue, mark done
      if (this.pendingBootstrap.length === 0) {
        this.pendingBootstrap = null;
        this.didMshBootstrap = true;
      }
      return this._tok('TEXT', out, start);
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
    const parts = chunk.split('\r');
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
}
