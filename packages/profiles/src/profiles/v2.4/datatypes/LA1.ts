// Generated datatype profile for LA1 (v2.4)

export const id = "LA1";
export const version = "2.4";
export const kind = "composite";
export const title = "Location with address information (variant 1)";
export const components = [
  {
    datatypeId: "IS",
    name: "point of care (IS)",
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
  { datatypeId: "IS", name: "floor", required: false, sequence: 8 },
  { datatypeId: "AD", name: "address", required: false, sequence: 9 },
] as const;
