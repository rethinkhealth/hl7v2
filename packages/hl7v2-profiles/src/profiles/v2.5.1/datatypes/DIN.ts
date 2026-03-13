// Generated datatype profile for DIN (v2.5.1)

export const id = "DIN";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Date and Institution Name";
export const components = [
  { sequence: 1, name: "Date", datatypeId: "TS", required: false },
  { sequence: 2, name: "Institution Name", datatypeId: "CE", required: false },
] as const;
