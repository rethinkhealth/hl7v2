// Generated datatype profile for HD (v2.7.1)

export const id = "HD";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Hierarchic Designator";
export const components = [
  { sequence: 1, name: "Namespace ID", datatypeId: "IS", required: false },
  { sequence: 2, name: "Universal ID", datatypeId: "ST", required: false },
  { sequence: 3, name: "Universal ID Type", datatypeId: "ID", required: false },
] as const;
