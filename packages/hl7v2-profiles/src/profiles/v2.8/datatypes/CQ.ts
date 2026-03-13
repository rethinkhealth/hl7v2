// Generated datatype profile for CQ (v2.8)

export const id = "CQ";
export const version = "2.8";
export const kind = "composite";
export const title = "Composite Quantity with Units";
export const components = [
  { sequence: 1, name: "Quantity", datatypeId: "NM", required: false },
  { sequence: 2, name: "Units", datatypeId: "CWE", required: false },
] as const;
