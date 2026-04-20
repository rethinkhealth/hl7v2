// Generated datatype profile for VID (v2.6)

export const id = "VID";
export const version = "2.6";
export const kind = "composite";
export const title = "Version Identifier";
export const components = [
  { sequence: 1, name: "Version ID", datatypeId: "ID", required: false },
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
