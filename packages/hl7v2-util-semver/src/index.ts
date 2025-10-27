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
  const major = Number(match[1]);
  const minor = match[2] === undefined ? 0 : Number(match[2]);
  const patch = match[3] === undefined ? 0 : Number(match[3]);

  if (!Number.isInteger(major)) {
    throw new Error(`Invalid version: ${input}`);
  }
  if (!Number.isInteger(minor)) {
    throw new Error(`Invalid version: ${input}`);
  }
  if (!Number.isInteger(patch)) {
    throw new Error(`Invalid version: ${input}`);
  }

  return { major, minor, patch };
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
  if (va.major !== vb.major) {
    return va.major < vb.major ? -1 : 1;
  }
  if (va.minor !== vb.minor) {
    return va.minor < vb.minor ? -1 : 1;
  }
  if (va.patch !== vb.patch) {
    return va.patch < vb.patch ? -1 : 1;
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
  const tokens = range.trim().split(WS_RE);
  return tokens.filter((t) => t.length > 0);
};

const parseToken = (token: string): Comparator => {
  const m = RANGE_TOKEN_RE.exec(token);
  if (!m) {
    throw new Error(`Invalid range token: ${token}`);
  }
  const rawOp = m[1];
  const op: Comparator["op"] = (
    rawOp === undefined ? "=" : rawOp
  ) as Comparator["op"];
  const versionStr = m[2];
  if (versionStr === undefined) {
    throw new Error(`Invalid range token: ${token} (missing version)`);
  }
  const v = parse(versionStr);
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
    throw new Error("Empty range");
  }
  const comps = tokens.map(parseToken);
  for (const c of comps) {
    const cmp = compare(version, c.v);
    if (!OP_TEST[c.op](cmp)) {
      return false;
    }
  }
  return true;
};
