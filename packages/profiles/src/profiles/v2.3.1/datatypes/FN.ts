// Generated datatype profile for FN (v2.3.1)

export const id = "FN";
export const version = "2.3.1";
export const kind = "composite";
export const title = "family + last name prefix";
export const components = [
  { datatypeId: "ST", name: "family name", required: false, sequence: 1 },
  { datatypeId: "ST", name: "last name prefix", required: false, sequence: 2 },
] as const;
