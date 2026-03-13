// Generated datatype profile for CSU (v2.6)

export const id = "CSU";
export const version = "2.6";
export const kind = "composite";
export const title = "Channel Sensitivity and Units";
export const components = [
  {
    sequence: 1,
    name: "Channel Sensitivity",
    datatypeId: "NM",
    required: true,
  },
  {
    sequence: 2,
    name: "Unit of Measure Identifier",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 3,
    name: "Unit of Measure Description",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 4,
    name: "Unit of Measure Coding System",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 5,
    name: "Alternate Unit of Measure Identifier",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 6,
    name: "Alternate Unit of Measure Description",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 7,
    name: "Alternate Unit of Measure Coding System",
    datatypeId: "ID",
    required: false,
  },
] as const;
