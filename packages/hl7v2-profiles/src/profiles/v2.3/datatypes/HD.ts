// Generated datatype profile for HD (v2.3)

export const id = "HD";
export const version = "2.3";
export const kind = "composite";
export const title = "hierarchic designator";
export const components = [
  { sequence: 1, name: "namespace ID", datatypeId: "IS", required: false },
  { sequence: 2, name: "universal ID", datatypeId: "ST", required: false },
  { sequence: 3, name: "universal ID type", datatypeId: "ID", required: false },
] as const;
