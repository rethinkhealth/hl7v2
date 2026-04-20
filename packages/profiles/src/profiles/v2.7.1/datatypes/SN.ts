// Generated datatype profile for SN (v2.7.1)

export const id = "SN";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Structured Numeric";
export const components = [
  { sequence: 1, name: "Comparator", datatypeId: "ST", required: false },
  { sequence: 2, name: "Num1", datatypeId: "NM", required: false },
  { sequence: 3, name: "Separator/Suffix", datatypeId: "ST", required: false },
  { sequence: 4, name: "Num2", datatypeId: "NM", required: false },
] as const;
