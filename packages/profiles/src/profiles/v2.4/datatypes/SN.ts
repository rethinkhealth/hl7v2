// Generated datatype profile for SN (v2.4)

export const id = "SN";
export const version = "2.4";
export const kind = "composite";
export const title = "structured numeric";
export const components = [
  { sequence: 1, name: "comparator", datatypeId: "ST", required: false },
  { sequence: 2, name: "num1", datatypeId: "NM", required: false },
  { sequence: 3, name: "separator/suffix", datatypeId: "ST", required: false },
  { sequence: 4, name: "num2", datatypeId: "NM", required: false },
] as const;
