// Generated datatype profile for CQ (v2.3)

export const id = "CQ";
export const version = "2.3";
export const kind = "composite";
export const title = "composite quantity with units";
export const components = [
  { sequence: 1, name: "quantity", datatypeId: "NM", required: false },
  { sequence: 2, name: "units", datatypeId: "CE", required: false },
] as const;
