// Generated datatype profile for QIP (v2.5)

export const id = "QIP";
export const version = "2.5";
export const kind = "composite";
export const title = "Query Input Parameter List";
export const components = [
  {
    sequence: 1,
    name: "Segment Field Name",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 2, name: "Values", datatypeId: "ST", required: false },
] as const;
