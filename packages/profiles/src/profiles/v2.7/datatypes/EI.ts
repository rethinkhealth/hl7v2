// Generated datatype profile for EI (v2.7)

export const id = "EI";
export const version = "2.7";
export const kind = "composite";
export const title = "Entity Identifier";
export const components = [
  { sequence: 1, name: "Entity Identifier", datatypeId: "ST", required: false },
  { sequence: 2, name: "Namespace ID", datatypeId: "IS", required: false },
  { sequence: 3, name: "Universal ID", datatypeId: "ST", required: false },
  { sequence: 4, name: "Universal ID Type", datatypeId: "ID", required: false },
] as const;
