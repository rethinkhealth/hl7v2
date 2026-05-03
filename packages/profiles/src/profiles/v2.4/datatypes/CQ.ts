// Generated datatype profile for CQ (v2.4)

export const id = "CQ";
export const version = "2.4";
export const kind = "composite";
export const title = "composite quantity with units";
export const components = [
  { datatypeId: "NM", name: "quantity", required: false, sequence: 1 },
  { datatypeId: "CE", name: "units", required: false, sequence: 2 },
] as const;
