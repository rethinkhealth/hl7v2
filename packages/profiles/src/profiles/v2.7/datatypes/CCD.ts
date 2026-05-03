// Generated datatype profile for CCD (v2.7)

export const id = "CCD";
export const version = "2.7";
export const kind = "composite";
export const title = "Charge Code and Date";
export const components = [
  { datatypeId: "ID", name: "Invocation Event", required: true, sequence: 1 },
  { datatypeId: "DTM", name: "Date/time", required: false, sequence: 2 },
] as const;
