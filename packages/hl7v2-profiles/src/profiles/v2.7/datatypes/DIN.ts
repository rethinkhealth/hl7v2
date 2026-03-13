// Generated datatype profile for DIN (v2.7)

export const id = "DIN";
export const version = "2.7";
export const kind = "composite";
export const title = "Date and Institution Name";
export const components = [
  { sequence: 1, name: "Date", datatypeId: "DTM", required: true },
  { sequence: 2, name: "Institution Name", datatypeId: "CWE", required: true },
] as const;
