// Generated datatype profile for DTN (v2.7)

export const id = "DTN";
export const version = "2.7";
export const kind = "composite";
export const title = "Day Type and Number";
export const components = [
  { datatypeId: "CWE", name: "Day Type", required: true, sequence: 1 },
  { datatypeId: "NM", name: "Number of Days", required: true, sequence: 2 },
] as const;
