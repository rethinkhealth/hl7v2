// Generated datatype profile for EI (v2.8.2)

export const id = "EI";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Entity Identifier";
export const components = [
  { datatypeId: "ST", name: "Entity Identifier", required: false, sequence: 1 },
  { datatypeId: "IS", name: "Namespace ID", required: false, sequence: 2 },
  { datatypeId: "ST", name: "Universal ID", required: false, sequence: 3 },
  { datatypeId: "ID", name: "Universal ID Type", required: false, sequence: 4 },
] as const;
