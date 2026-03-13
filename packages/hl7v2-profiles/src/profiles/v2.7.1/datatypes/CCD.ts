// Generated datatype profile for CCD (v2.7.1)

export const id = "CCD";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Charge Code and Date";
export const components = [
  { sequence: 1, name: "Invocation Event", datatypeId: "ID", required: true },
  { sequence: 2, name: "Date/time", datatypeId: "DTM", required: false },
] as const;
