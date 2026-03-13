// Generated datatype profile for EI (v2.3.1)

export const id = "EI";
export const version = "2.3.1";
export const kind = "composite";
export const title = "entity identifier";
export const components = [
  { sequence: 1, name: "entity identifier", datatypeId: "ST", required: false },
  { sequence: 2, name: "namespace ID", datatypeId: "IS", required: false },
  { sequence: 3, name: "universal ID", datatypeId: "ST", required: false },
  { sequence: 4, name: "universal ID type", datatypeId: "ID", required: false },
] as const;
