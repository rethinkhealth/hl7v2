// Generated datatype profile for CSU (v2.4)

export const id = "CSU";
export const version = "2.4";
export const kind = "composite";
export const title = "channel sensitivity/units";
export const components = [
  {
    datatypeId: "NM",
    name: "channel sensitivity",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ST",
    name: "unit of measure identifier",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "ST",
    name: "unit of measure description",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "IS",
    name: "unit of measure coding system",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "ST",
    name: "alternate unit of measure identifier",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "ST",
    name: "alternate unit of measure description",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "IS",
    name: "alternate unit of measure coding system",
    required: false,
    sequence: 7,
  },
] as const;
