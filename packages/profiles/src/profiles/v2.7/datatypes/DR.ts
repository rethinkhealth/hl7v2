// Generated datatype profile for DR (v2.7)

export const id = "DR";
export const version = "2.7";
export const kind = "composite";
export const title = "Date/Time Range";
export const components = [
  {
    datatypeId: "DTM",
    name: "Range Start Date/Time",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "DTM",
    name: "Range End Date/Time",
    required: false,
    sequence: 2,
  },
] as const;
