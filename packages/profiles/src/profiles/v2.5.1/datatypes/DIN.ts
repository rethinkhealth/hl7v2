// Generated datatype profile for DIN (v2.5.1)

export const id = "DIN";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Date and Institution Name";
export const components = [
  { datatypeId: "TS", name: "Date", required: false, sequence: 1 },
  { datatypeId: "CE", name: "Institution Name", required: false, sequence: 2 },
] as const;
