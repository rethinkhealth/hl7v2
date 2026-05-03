// Generated datatype profile for SN (v2.8.1)

export const id = "SN";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Structured Numeric";
export const components = [
  { datatypeId: "ST", name: "Comparator", required: false, sequence: 1 },
  { datatypeId: "NM", name: "Num1", required: false, sequence: 2 },
  { datatypeId: "ST", name: "Separator/Suffix", required: false, sequence: 3 },
  { datatypeId: "NM", name: "Num2", required: false, sequence: 4 },
] as const;
