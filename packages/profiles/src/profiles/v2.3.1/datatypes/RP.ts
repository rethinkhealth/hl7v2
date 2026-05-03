// Generated datatype profile for RP (v2.3.1)

export const id = "RP";
export const version = "2.3.1";
export const kind = "composite";
export const title = "reference pointer";
export const components = [
  { datatypeId: "ST", name: "pointer", required: false, sequence: 1 },
  { datatypeId: "HD", name: "application ID", required: false, sequence: 2 },
  { datatypeId: "ID", name: "type of data", required: false, sequence: 3 },
  { datatypeId: "ID", name: "subtype", required: false, sequence: 4 },
] as const;
