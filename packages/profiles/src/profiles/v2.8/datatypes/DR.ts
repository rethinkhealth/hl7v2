// Generated datatype profile for DR (v2.8)

export const id = "DR";
export const version = "2.8";
export const kind = "composite";
export const title = "Date/Time Range";
export const components = [
  {
    sequence: 1,
    name: "Range Start Date/Time",
    datatypeId: "DTM",
    required: false,
  },
  {
    sequence: 2,
    name: "Range End Date/Time",
    datatypeId: "DTM",
    required: false,
  },
] as const;
