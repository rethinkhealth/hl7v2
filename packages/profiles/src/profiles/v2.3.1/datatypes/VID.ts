// Generated datatype profile for VID (v2.3.1)

export const id = "VID";
export const version = "2.3.1";
export const kind = "composite";
export const title = "version identifier";
export const components = [
  { datatypeId: "ID", name: "version ID", required: false, sequence: 1 },
  {
    datatypeId: "CE",
    name: "internationalization code",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "CE",
    name: "international version ID",
    required: false,
    sequence: 3,
  },
] as const;
