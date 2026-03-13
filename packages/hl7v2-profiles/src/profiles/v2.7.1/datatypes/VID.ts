// Generated datatype profile for VID (v2.7.1)

export const id = "VID";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Version Identifier";
export const components = [
  { sequence: 1, name: "Version ID", datatypeId: "ID", required: true },
  {
    sequence: 2,
    name: "Internationalization Code",
    datatypeId: "CWE",
    required: false,
  },
  {
    sequence: 3,
    name: "International Version ID",
    datatypeId: "CWE",
    required: false,
  },
] as const;
