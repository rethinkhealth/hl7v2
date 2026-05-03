// Generated datatype profile for ED (v2.3)

export const id = "ED";
export const version = "2.3";
export const kind = "composite";
export const title = "encapsulated data";
export const components = [
  {
    datatypeId: "HD",
    name: "source application",
    required: false,
    sequence: 1,
  },
  { datatypeId: "ID", name: "type of data", required: false, sequence: 2 },
  { datatypeId: "ID", name: "data", required: false, sequence: 3 },
  { datatypeId: "ID", name: "encoding", required: false, sequence: 4 },
  { datatypeId: "ST", name: "data", required: false, sequence: 5 },
] as const;
