// Generated datatype profile for RP (v2.8.2)

export const id = "RP";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Reference Pointer";
export const components = [
  { sequence: 1, name: "Pointer", datatypeId: "ST", required: false },
  { sequence: 2, name: "Application ID", datatypeId: "HD", required: false },
  { sequence: 3, name: "Type of Data", datatypeId: "ID", required: false },
  { sequence: 4, name: "Subtype", datatypeId: "ID", required: false },
] as const;
