// Generated datatype profile for DTN (v2.6)

export const id = "DTN";
export const version = "2.6";
export const kind = "composite";
export const title = "Day Type and Number";
export const components = [
  { datatypeId: "IS", name: "Day Type", required: true, sequence: 1 },
  { datatypeId: "NM", name: "Number of Days", required: true, sequence: 2 },
] as const;
