// Generated datatype profile for ED (v2.4)

export const id = "ED";
export const version = "2.4";
export const kind = "composite";
export const title = "encapsulated data";
export const components = [
  {
    sequence: 1,
    name: "source application",
    datatypeId: "HD",
    required: false,
  },
  { sequence: 2, name: "type of data", datatypeId: "ID", required: false },
  { sequence: 3, name: "data", datatypeId: "ID", required: false },
  { sequence: 4, name: "encoding", datatypeId: "ID", required: false },
  { sequence: 5, name: "data", datatypeId: "ST", required: false },
] as const;
