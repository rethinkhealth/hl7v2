// Generated datatype profile for RP (v2.8.2)

export const id = "RP";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Reference Pointer";
export const components = [
  { datatypeId: "ST", name: "Pointer", required: false, sequence: 1 },
  { datatypeId: "HD", name: "Application ID", required: false, sequence: 2 },
  { datatypeId: "ID", name: "Type of Data", required: false, sequence: 3 },
  { datatypeId: "ID", name: "Subtype", required: false, sequence: 4 },
] as const;
