import type { Token, Tokenizer, TokenStream } from './types';

export function* iterateTokenizerSync(t: Tokenizer): Iterable<Token> {
  for (let tok = t.next(); tok; tok = t.next()) {
    yield tok;
  }
}

export async function* toAsyncIterable(
  stream: TokenStream
): AsyncIterable<Token> {
  // If already async iterable
  const asyncIt = (stream as AsyncIterable<Token>)[Symbol.asyncIterator];
  if (typeof asyncIt === 'function') {
    for await (const tok of stream as AsyncIterable<Token>) {
      yield tok;
    }
    return;
  }
  // Fallback: sync iterable -> async iterable
  for (const tok of stream as Iterable<Token>) {
    yield tok;
  }
}
