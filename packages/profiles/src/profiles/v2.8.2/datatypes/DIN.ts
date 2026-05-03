// Generated datatype profile for DIN (v2.8.2)

export const id = "DIN";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Date and Institution Name";
export const components = [
  { datatypeId: "DTM", name: "Date", required: true, sequence: 1 },
  { datatypeId: "CWE", name: "Institution Name", required: true, sequence: 2 },
] as const;
