// Generated datatype profile for CQ (v2.5)

export const id = "CQ";
export const version = "2.5";
export const kind = "composite";
export const title = "Composite Quantity with Units";
export const components = [
  { datatypeId: "NM", name: "Quantity", required: false, sequence: 1 },
  { datatypeId: "CE", name: "Units", required: false, sequence: 2 },
] as const;
