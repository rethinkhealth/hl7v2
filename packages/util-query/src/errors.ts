/**
 * The typed failure for `@glion/util-query`. Branch on `code`; each code is
 * one cause.
 *
 * @module
 */

/**
 * Machine-readable codes for what a path or a call got wrong:
 *
 * - `EMPTY_PATH` — the path is empty, or not a string.
 * - `PADDED_PATH` — the path starts or ends with whitespace.
 * - `DASH_SEPARATOR` — the path separates its steps with `-`.
 * - `ZERO_POSITION` — the path numbers a position 0.
 * - `INVALID_PATH` — the path does not follow the grammar.
 * - `NOT_A_FIELD` — `set()` got a path with no field.
 * - `NO_SEGMENT` — `set()` got a path that names no segment in the message.
 * - `NOT_IN_ANCESTORS` — `format()` got ancestors that do not contain the node.
 */
export const QueryErrorCode = {
  DASH_SEPARATOR: "DASH_SEPARATOR",
  EMPTY_PATH: "EMPTY_PATH",
  INVALID_PATH: "INVALID_PATH",
  NOT_A_FIELD: "NOT_A_FIELD",
  NOT_IN_ANCESTORS: "NOT_IN_ANCESTORS",
  NO_SEGMENT: "NO_SEGMENT",
  PADDED_PATH: "PADDED_PATH",
  ZERO_POSITION: "ZERO_POSITION",
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
    case "EMPTY_PATH": {
      return "The path is empty; a path names at least a segment or a group, such as `PID`.";
    }
    case "PADDED_PATH": {
      return `Path \`${path}\` starts or ends with whitespace; a path holds no spaces.`;
    }
    case "DASH_SEPARATOR": {
      // Stryker disable next-line OptionalChaining: parse() always passes the path with DASH_SEPARATOR
      return `Path \`${path}\` separates its steps with \`-\`; a path separates segment groups, the segment, and its field with \`.\`, as in \`${path?.replaceAll("-", ".")}\`.`;
    }
    case "ZERO_POSITION": {
      return `Path \`${path}\` numbers a position \`0\`; positions in a path start at 1.`;
    }
    case "INVALID_PATH": {
      return `Path \`${path}\` does not follow the path grammar; a path is \`[GROUP[N].]...NAME[N][.FIELD[REPETITION][.COMPONENT[.SUBCOMPONENT]]]\`, such as \`PID.5.1\`.`;
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
