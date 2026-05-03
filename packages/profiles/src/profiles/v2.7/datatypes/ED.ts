// Generated datatype profile for ED (v2.7)

export const id = "ED";
export const version = "2.7";
export const kind = "composite";
export const title = "Encapsulated Data";
export const components = [
  {
    datatypeId: "HD",
    name: "Source Application",
    required: false,
    sequence: 1,
  },
  { datatypeId: "ID", name: "Type of Data", required: true, sequence: 2 },
  { datatypeId: "ID", name: "Data Subtype", required: false, sequence: 3 },
  { datatypeId: "ID", name: "Encoding", required: true, sequence: 4 },
  { datatypeId: "TX", name: "Data", required: true, sequence: 5 },
] as const;
