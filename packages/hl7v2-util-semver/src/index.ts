export type Hl7Version = {
  major: number;
  minor: number;
  patch: number;
};

// Top-level regex literals
const VERSION_RE = /^\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?\s*$/;
const RANGE_TOKEN_RE = /^(<=|>=|<|>|=)?\s*(\d+(?:\.\d+){0,2})$/;

export const parse = (input: string): Hl7Version => {
  const match = VERSION_RE.exec(input);
  if (!match) {
    throw new Error(`Invalid version: ${input}`);
  }
  // Regex ensures digits-only, Number() on digits always yields valid integers
  return {
    major: Number(match[1]),
    minor: match[2] === undefined ? 0 : Number(match[2]),
    patch: match[3] === undefined ? 0 : Number(match[3]),
  };
};

export const clean = (input: string): string | null => {
  try {
    const v = parse(input);
    return `${v.major}.${v.minor}.${v.patch}`;
  } catch {
    return null;
  }
};

export const valid = (input: string): boolean => clean(input) !== null;

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
    throw new Error(`Invalid range token: ${token}`);
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
  const tokens = splitTokens(range);
  if (tokens.length === 0) {
    return false;
  }

  try {
    const comps = tokens.map(parseToken);
    const v = parse(version);
    for (const c of comps) {
      const cmp = compare(v, c.v);
      if (!OP_TEST[c.op](cmp)) {
        return false;
      }
    }
    return true;
  } catch {
    return false;
  }
};
