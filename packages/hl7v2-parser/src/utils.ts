import type { Token, Tokenizer } from './types';

export function* iterateTokenizerSync(t: Tokenizer): Iterable<Token> {
  for (let tok = t.next(); tok; tok = t.next()) {
    yield tok;
  }
}

// Removed async stream support; the parser now operates synchronously only.
