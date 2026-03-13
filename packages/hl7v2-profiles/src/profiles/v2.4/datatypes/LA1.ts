// Generated datatype profile for LA1 (v2.4)

export const id = "LA1";
export const version = "2.4";
export const kind = "composite";
export const title = "Location with address information (variant 1)";
export const components = [
  {
    sequence: 1,
    name: "point of care (IS)",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 2, name: "room", datatypeId: "IS", required: false },
  { sequence: 3, name: "bed", datatypeId: "IS", required: false },
  { sequence: 4, name: "facility (HD)", datatypeId: "HD", required: false },
  { sequence: 5, name: "location status", datatypeId: "IS", required: false },
  {
    sequence: 6,
    name: "person location type",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 7, name: "building", datatypeId: "IS", required: false },
  { sequence: 8, name: "floor", datatypeId: "IS", required: false },
  { sequence: 9, name: "address", datatypeId: "AD", required: false },
] as const;
