// Generated datatype profile for CQ (v2.8.1)

export const id = "CQ";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Composite Quantity with Units";
export const components = [
  { datatypeId: "NM", name: "Quantity", required: false, sequence: 1 },
  { datatypeId: "CWE", name: "Units", required: false, sequence: 2 },
] as const;
