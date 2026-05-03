// Generated datatype profile for HD (v2.6)

export const id = "HD";
export const version = "2.6";
export const kind = "composite";
export const title = "Hierarchic Designator";
export const components = [
  { datatypeId: "IS", name: "Namespace ID", required: false, sequence: 1 },
  { datatypeId: "ST", name: "Universal ID", required: false, sequence: 2 },
  { datatypeId: "ID", name: "Universal ID Type", required: false, sequence: 3 },
] as const;
