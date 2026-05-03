// Generated datatype profile for EI (v2.4)

export const id = "EI";
export const version = "2.4";
export const kind = "composite";
export const title = "entity identifier";
export const components = [
  { datatypeId: "ST", name: "entity identifier", required: false, sequence: 1 },
  { datatypeId: "IS", name: "namespace ID", required: false, sequence: 2 },
  { datatypeId: "ST", name: "universal ID", required: false, sequence: 3 },
  { datatypeId: "ID", name: "universal ID type", required: false, sequence: 4 },
] as const;
