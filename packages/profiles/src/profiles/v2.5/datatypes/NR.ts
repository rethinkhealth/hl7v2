// Generated datatype profile for NR (v2.5)

export const id = "NR";
export const version = "2.5";
export const kind = "composite";
export const title = "Numeric Range";
export const components = [
  { datatypeId: "NM", name: "Low Value", required: false, sequence: 1 },
  { datatypeId: "NM", name: "High Value", required: false, sequence: 2 },
] as const;
