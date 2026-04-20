// Generated datatype profile for CSU (v2.3.1)

export const id = "CSU";
export const version = "2.3.1";
export const kind = "composite";
export const title = "channel sensitivity/units";
export const components = [
  {
    sequence: 1,
    name: "channel sensitivity",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 2,
    name: "unit of measure identifier",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 3,
    name: "unit of measure description",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 4,
    name: "unit of measure coding system",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 5,
    name: "alternate unit of measure identifier",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 6,
    name: "alternate unit of measure description",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 7,
    name: "alternate unit of measure coding system",
    datatypeId: "IS",
    required: false,
  },
] as const;
