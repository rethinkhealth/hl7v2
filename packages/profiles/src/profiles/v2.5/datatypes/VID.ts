// Generated datatype profile for VID (v2.5)

export const id = "VID";
export const version = "2.5";
export const kind = "composite";
export const title = "Version Identifier";
export const components = [
  { datatypeId: "ID", name: "Version ID", required: false, sequence: 1 },
  {
    datatypeId: "CE",
    name: "Internationalization Code",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "CE",
    name: "International Version ID",
    required: false,
    sequence: 3,
  },
] as const;
