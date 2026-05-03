// Generated datatype profile for VID (v2.7.1)

export const id = "VID";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Version Identifier";
export const components = [
  { datatypeId: "ID", name: "Version ID", required: true, sequence: 1 },
  {
    datatypeId: "CWE",
    name: "Internationalization Code",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "CWE",
    name: "International Version ID",
    required: false,
    sequence: 3,
  },
] as const;
