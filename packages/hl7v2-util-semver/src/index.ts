export type Hl7Version = {
  major: number;
  minor: number;
  patch: number;
};

/**
 * Error thrown when a version string cannot be parsed.
 */
export class VersionParseError extends Error {
  override readonly name = "VersionParseError";
  readonly input: string;
  readonly reason: string;

  constructor(input: string, reason: string) {
    super(`Invalid version format ('${input}') — ${reason}`);

    this.input = input;
    this.reason = reason;

    // Maintains proper stack trace for where error was thrown (V8 only)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, VersionParseError);
    }
  }
}

/**
 * Error thrown when a range token cannot be parsed.
 */
export class RangeParseError extends Error {
  override readonly name = "RangeParseError";
  readonly token: string;
  readonly reason: string;

  constructor(token: string, reason: string) {
    super(`Invalid range token ('${token}') — ${reason}`);

    this.token = token;
    this.reason = reason;

    // Maintains proper stack trace for where error was thrown (V8 only)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RangeParseError);
    }
  }
}

// Top-level regex literals
const VERSION_RE = /^\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?\s*$/;
const RANGE_TOKEN_RE = /^(<=|>=|<|>|=)?\s*(\d+(?:\.\d+){0,2})$/;

// Security constraints
const MAX_VERSION_STRING_LENGTH = 100;
const MAX_SAFE_VERSION_COMPONENT = 2 ** 31 - 1; // Max safe int32 for interop

export const parse = (input: string): Hl7Version => {
  // Length check to prevent ReDoS attacks
  if (input.length > MAX_VERSION_STRING_LENGTH) {
    throw new VersionParseError(
      `${input.slice(0, 50)}...`,
      `version string too long (max ${MAX_VERSION_STRING_LENGTH} characters)`
    );
  }

  const match = VERSION_RE.exec(input);
  if (!match) {
    throw new VersionParseError(
      input,
      "expected format: major.minor.patch (e.g., '2.5.1' or '2.3')"
    );
  }

  // Regex ensures digits-only, Number() on digits always yields valid integers
  const major = Number(match[1]);
  const minor = match[2] === undefined ? 0 : Number(match[2]);
  const patch = match[3] === undefined ? 0 : Number(match[3]);

  // Validate range to prevent integer overflow and ensure interoperability
  if (major > MAX_SAFE_VERSION_COMPONENT) {
    throw new VersionParseError(
      input,
      `major version ${major} exceeds maximum ${MAX_SAFE_VERSION_COMPONENT}`
    );
  }
  if (minor > MAX_SAFE_VERSION_COMPONENT) {
    throw new VersionParseError(
      input,
      `minor version ${minor} exceeds maximum ${MAX_SAFE_VERSION_COMPONENT}`
    );
  }
  if (patch > MAX_SAFE_VERSION_COMPONENT) {
    throw new VersionParseError(
      input,
      `patch version ${patch} exceeds maximum ${MAX_SAFE_VERSION_COMPONENT}`
    );
  }

  return { major, minor, patch };
};

export const clean = (input: string): string => {
  const v = parse(input);
  return `${v.major}.${v.minor}.${v.patch}`;
};

export const valid = (input: string): boolean => {
  try {
    parse(input);
    return true;
  } catch {
    return false;
  }
};

const ensure = (v: string | Hl7Version): Hl7Version => {
  if (typeof v === "string") {
    return parse(v);
  }
  return v;
};

export const compare = (
  a: string | Hl7Version,
  b: string | Hl7Version
): -1 | 0 | 1 => {
  const va = ensure(a);
  const vb = ensure(b);
  // Compare in order: major, minor, patch
  for (const key of ["major", "minor", "patch"] as const) {
    if (va[key] !== vb[key]) {
      return va[key] < vb[key] ? -1 : 1;
    }
  }
  return 0;
};

export const eq = (a: string | Hl7Version, b: string | Hl7Version): boolean =>
  compare(a, b) === 0;
export const lt = (a: string | Hl7Version, b: string | Hl7Version): boolean =>
  compare(a, b) === -1;
export const lte = (a: string | Hl7Version, b: string | Hl7Version): boolean =>
  compare(a, b) !== 1;
export const gt = (a: string | Hl7Version, b: string | Hl7Version): boolean =>
  compare(a, b) === 1;
export const gte = (a: string | Hl7Version, b: string | Hl7Version): boolean =>
  compare(a, b) !== -1;

type Comparator = {
  op: "=" | "<" | "<=" | ">" | ">=";
  v: Hl7Version;
};

const WS_RE = /\s+/;
const splitTokens = (range: string): string[] => {
  const trimmed = range.trim();
  return trimmed.length === 0 ? [] : trimmed.split(WS_RE);
};

const parseToken = (token: string): Comparator => {
  const m = RANGE_TOKEN_RE.exec(token);
  if (!m) {
    throw new RangeParseError(
      token,
      "expected format: [operator]version (e.g., '>=2.5' or '2.3')"
    );
  }
  // m[1] is optional operator, m[2] is required version (guaranteed by regex)
  const op = (m[1] || "=") as Comparator["op"];
  // biome-ignore lint/style/noNonNullAssertion: Non-null assertion safe: regex guarantees m[2] exists
  const v = parse(m[2]!);
  return { op, v };
};

const OP_TEST: Record<Comparator["op"], (cmp: number) => boolean> = {
  "=": (c) => c === 0,
  "<": (c) => c < 0,
  "<=": (c) => c <= 0,
  ">": (c) => c > 0,
  ">=": (c) => c >= 0,
};

export const satisfies = (version: string, range: string): boolean => {
  // Length check for range string to prevent ReDoS attacks
  if (range.length > MAX_VERSION_STRING_LENGTH * 10) {
    throw new RangeParseError(
      range.slice(0, 50) + "...",
      `range string too long (max ${MAX_VERSION_STRING_LENGTH * 10} characters)`
    );
  }

  const tokens = splitTokens(range);
  if (tokens.length === 0) {
    return false;
  }

  const comps = tokens.map(parseToken);
  const v = parse(version);
  for (const c of comps) {
    const cmp = compare(v, c.v);
    if (!OP_TEST[c.op](cmp)) {
      return false;
    }
  }
  return true;
};
