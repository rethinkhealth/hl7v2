// Generated datatype profile for PL (v2.3)

export const id = "PL";
export const version = "2.3";
export const kind = "composite";
export const title = "person location";
export const components = [
  {
    datatypeId: "ID",
    name: "point of care (ID)",
    required: false,
    sequence: 1,
  },
  { datatypeId: "IS", name: "room", required: false, sequence: 2 },
  { datatypeId: "IS", name: "bed", required: false, sequence: 3 },
  { datatypeId: "HD", name: "facility (HD)", required: false, sequence: 4 },
  { datatypeId: "IS", name: "location status", required: false, sequence: 5 },
  {
    datatypeId: "IS",
    name: "person location type",
    required: false,
    sequence: 6,
  },
  { datatypeId: "IS", name: "building", required: false, sequence: 7 },
  { datatypeId: "ST", name: "floor", required: false, sequence: 8 },
  { datatypeId: "ST", name: "Location type", required: false, sequence: 9 },
] as const;
