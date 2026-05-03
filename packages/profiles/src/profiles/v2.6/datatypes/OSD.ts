// Generated datatype profile for OSD (v2.6)

export const id = "OSD";
export const version = "2.6";
export const kind = "composite";
export const title = "Order Sequence Definition";
export const components = [
  {
    datatypeId: "ID",
    name: "Sequence/Results Flag",
    required: true,
    sequence: 1,
  },
  {
    datatypeId: "ST",
    name: "Placer Order Number: Entity Identifier",
    required: true,
    sequence: 2,
  },
  {
    datatypeId: "IS",
    name: "Placer Order Number: Namespace ID",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "Filler Order Number: Entity Identifier",
    required: true,
    sequence: 4,
  },
  {
    datatypeId: "IS",
    name: "Filler Order Number: Namespace ID",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "ST",
    name: "Sequence Condition Value",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "NM",
    name: "Maximum Number of Repeats",
    required: false,
    sequence: 7,
  },
  {
    datatypeId: "ST",
    name: "Placer Order Number: Universal ID",
    required: true,
    sequence: 8,
  },
  {
    datatypeId: "ID",
    name: "Placer Order Number: Universal ID Type",
    required: false,
    sequence: 9,
  },
  {
    datatypeId: "ST",
    name: "Filler Order Number: Universal ID",
    required: true,
    sequence: 10,
  },
  {
    datatypeId: "ID",
    name: "Filler Order Number: Universal ID Type",
    required: false,
    sequence: 11,
  },
] as const;
