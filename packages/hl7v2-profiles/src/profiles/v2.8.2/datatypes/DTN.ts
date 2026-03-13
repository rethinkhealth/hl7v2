// Generated datatype profile for DTN (v2.8.2)

export const id = "DTN";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Day Type and Number";
export const components = [
  { sequence: 1, name: "Day Type", datatypeId: "CWE", required: true },
  { sequence: 2, name: "Number of Days", datatypeId: "NM", required: true },
] as const;
