// Generated datatype profile for CSU (v2.5.1)

export const id = "CSU";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Channel Sensitivity";
export const components = [
  {
    datatypeId: "NM",
    name: "Channel Sensitivity",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ST",
    name: "Unit of Measure Identifier",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "ST",
    name: "Unit of Measure Description",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ID",
    name: "Unit of Measure Coding System",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Identifier",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "ST",
    name: "Alternate Unit of Measure Description",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "ID",
    name: "Alternate Unit of Measure Coding System",
    required: false,
    sequence: 7,
  },
] as const;
