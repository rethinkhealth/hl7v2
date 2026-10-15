/**
 * The typed failure for `@glion/util-query`. Branch on `code`; each code is
 * one cause.
 *
 * @module
 */

/**
 * Machine-readable codes for what a path or a call got wrong:
 *
 * - `INVALID_PATH` — the path does not follow the path grammar.
 * - `NOT_A_FIELD` — `set()` got a path with no field.
 * - `NO_SEGMENT` — `set()` got a path that names no segment in the message.
 * - `NOT_IN_ANCESTORS` — `format()` got ancestors that do not contain the node.
 */
export const QueryErrorCode = {
  INVALID_PATH: "INVALID_PATH",
  NOT_A_FIELD: "NOT_A_FIELD",
  NOT_IN_ANCESTORS: "NOT_IN_ANCESTORS",
  NO_SEGMENT: "NO_SEGMENT",
} as const;

export type QueryErrorCode =
  (typeof QueryErrorCode)[keyof typeof QueryErrorCode];

/** The values a `QueryError` reports, beside its `code`. */
export interface QueryErrorDetails {
  /** The path the caller passed, when the cause concerns a path. */
  path?: string;
}

function sentence(code: QueryErrorCode, { path }: QueryErrorDetails): string {
  switch (code) {
    case "INVALID_PATH": {
      return `Path \`${path}\` does not follow the path grammar; a path is \`[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]\` with positions from 1, such as \`PID.5.1\`.`;
    }
    case "NOT_A_FIELD": {
      return `Path \`${path}\` names a segment or a group; \`set()\` writes only into a field or a part of one.`;
    }
    case "NO_SEGMENT": {
      return `Path \`${path}\` names no segment in the message; \`set()\` writes only into a segment that exists.`;
    }
    case "NOT_IN_ANCESTORS": {
      return "The node is not among the children of its last ancestor; `format()` needs the ancestors `visit()` or `select()` returns for it.";
    }
  }
}

/** A path, or a call with a path, that `@glion/util-query` cannot serve. */
export class QueryError extends Error {
  override readonly name = "QueryError";
  readonly code: QueryErrorCode;
  readonly path: string | undefined;

  constructor(code: QueryErrorCode, details: QueryErrorDetails = {}) {
    super(sentence(code, details));
    this.code = code;
    this.path = details.path;
  }
}
