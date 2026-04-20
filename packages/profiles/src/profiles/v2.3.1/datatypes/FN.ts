// Generated datatype profile for FN (v2.3.1)

export const id = "FN";
export const version = "2.3.1";
export const kind = "composite";
export const title = "family + last name prefix";
export const components = [
  { sequence: 1, name: "family name", datatypeId: "ST", required: false },
  { sequence: 2, name: "last name prefix", datatypeId: "ST", required: false },
] as const;
