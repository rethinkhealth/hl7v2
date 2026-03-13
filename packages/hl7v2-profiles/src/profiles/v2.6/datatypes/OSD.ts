// Generated datatype profile for OSD (v2.6)

export const id = "OSD";
export const version = "2.6";
export const kind = "composite";
export const title = "Order Sequence Definition";
export const components = [
  {
    sequence: 1,
    name: "Sequence/Results Flag",
    datatypeId: "ID",
    required: true,
  },
  {
    sequence: 2,
    name: "Placer Order Number: Entity Identifier",
    datatypeId: "ST",
    required: true,
  },
  {
    sequence: 3,
    name: "Placer Order Number: Namespace ID",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 4,
    name: "Filler Order Number: Entity Identifier",
    datatypeId: "ST",
    required: true,
  },
  {
    sequence: 5,
    name: "Filler Order Number: Namespace ID",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 6,
    name: "Sequence Condition Value",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 7,
    name: "Maximum Number of Repeats",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 8,
    name: "Placer Order Number: Universal ID",
    datatypeId: "ST",
    required: true,
  },
  {
    sequence: 9,
    name: "Placer Order Number: Universal ID Type",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 10,
    name: "Filler Order Number: Universal ID",
    datatypeId: "ST",
    required: true,
  },
  {
    sequence: 11,
    name: "Filler Order Number: Universal ID Type",
    datatypeId: "ID",
    required: false,
  },
] as const;
