// Generated datatype profile for VID (v2.5.1)

export const id = "VID";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Version Identifier";
export const components = [
  { sequence: 1, name: "Version ID", datatypeId: "ID", required: false },
  {
    sequence: 2,
    name: "Internationalization Code",
    datatypeId: "CE",
    required: false,
  },
  {
    sequence: 3,
    name: "International Version ID",
    datatypeId: "CE",
    required: false,
  },
] as const;
