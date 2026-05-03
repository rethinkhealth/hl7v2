// Generated datatype profile for HD (v2.3)

export const id = "HD";
export const version = "2.3";
export const kind = "composite";
export const title = "hierarchic designator";
export const components = [
  { datatypeId: "IS", name: "namespace ID", required: false, sequence: 1 },
  { datatypeId: "ST", name: "universal ID", required: false, sequence: 2 },
  { datatypeId: "ID", name: "universal ID type", required: false, sequence: 3 },
] as const;
