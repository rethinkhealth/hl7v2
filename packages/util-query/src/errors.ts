/**
 * The typed failure for `@glion/util-query`. Branch on `code`; each code is
 * one cause.
 *
 * @module
 */

/**
 * Machine-readable codes for what a path got wrong:
 *
 * - `EMPTY_PATH` — the path is empty.
 * - `INVALID_PATH` — the path does not follow the path grammar.
 */
export const QueryErrorCode = {
  EMPTY_PATH: "EMPTY_PATH",
  INVALID_PATH: "INVALID_PATH",
} as const;

export type QueryErrorCode =
  (typeof QueryErrorCode)[keyof typeof QueryErrorCode];

function sentence(code: QueryErrorCode, path: string): string {
  switch (code) {
    case "EMPTY_PATH": {
      return "The path is empty; a path is `[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]` with positions from 1, such as `PID.5.1`.";
    }
    case "INVALID_PATH": {
      return `Path \`${path}\` does not follow the path grammar; a path is \`[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]\` with positions from 1, such as \`PID.5.1\`.`;
    }
  }
}

/** A path that `@glion/util-query` cannot read. */
export class QueryError extends Error {
  override readonly name = "QueryError";
  readonly code: QueryErrorCode;
  readonly path: string;

  constructor(code: QueryErrorCode, path: string) {
    super(sentence(code, path));
    this.code = code;
    this.path = path;
  }
}
