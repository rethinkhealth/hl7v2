// Generated datatype profile for ED (v2.5.1)

export const id = "ED";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Encapsulated Data";
export const components = [
  {
    sequence: 1,
    name: "Source Application",
    datatypeId: "HD",
    required: false,
  },
  { sequence: 2, name: "Type of Data", datatypeId: "ID", required: false },
  { sequence: 3, name: "Data Subtype", datatypeId: "ID", required: false },
  { sequence: 4, name: "Encoding", datatypeId: "ID", required: false },
  { sequence: 5, name: "Data", datatypeId: "TX", required: false },
] as const;
