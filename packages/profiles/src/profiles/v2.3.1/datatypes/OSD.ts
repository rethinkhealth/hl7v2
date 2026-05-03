// Generated datatype profile for OSD (v2.3.1)

export const id = "OSD";
export const version = "2.3.1";
export const kind = "composite";
export const title = "order sequence";
export const components = [
  {
    datatypeId: "ID",
    name: "sequence/results flag",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ST",
    name: "placer order number: entity identifier",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "IS",
    name: "placer order number: namespace ID",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ST",
    name: "filler order number: entity identifier",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "IS",
    name: "filler order number: namespace ID",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "ST",
    name: "sequence condition value",
    required: false,
    sequence: 6,
  },
  {
    datatypeId: "NM",
    name: "maximum number of repeats",
    required: false,
    sequence: 7,
  },
  {
    datatypeId: "ST",
    name: "placer order number: universal ID",
    required: false,
    sequence: 8,
  },
  {
    datatypeId: "ID",
    name: "placer order number; universal ID type",
    required: false,
    sequence: 9,
  },
  {
    datatypeId: "ST",
    name: "filler order number: universal ID",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "ID",
    name: "filler order number: universal ID type",
    required: false,
    sequence: 11,
  },
] as const;
