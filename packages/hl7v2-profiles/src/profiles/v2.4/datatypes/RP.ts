// Generated datatype profile for RP (v2.4)

export const id = "RP";
export const version = "2.4";
export const kind = "composite";
export const title = "reference pointer";
export const components = [
  { sequence: 1, name: "pointer", datatypeId: "ST", required: false },
  { sequence: 2, name: "application ID", datatypeId: "HD", required: false },
  { sequence: 3, name: "type of data", datatypeId: "ID", required: false },
  { sequence: 4, name: "subtype", datatypeId: "ID", required: false },
] as const;
