// Generated datatype profile for ED (v2.8.1)

export const id = "ED";
export const version = "2.8.1";
export const kind = "composite";
export const title = "Encapsulated Data";
export const components = [
  {
    sequence: 1,
    name: "Source Application",
    datatypeId: "HD",
    required: false,
  },
  { sequence: 2, name: "Type of Data", datatypeId: "ID", required: true },
  { sequence: 3, name: "Data Subtype", datatypeId: "ID", required: false },
  { sequence: 4, name: "Encoding", datatypeId: "ID", required: true },
  { sequence: 5, name: "Data", datatypeId: "TX", required: true },
] as const;
