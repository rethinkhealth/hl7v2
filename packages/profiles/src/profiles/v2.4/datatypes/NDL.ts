// Generated datatype profile for NDL (v2.4)

export const id = "NDL";
export const version = "2.4";
export const kind = "composite";
export const title = "observing practitioner";
export const components = [
  { datatypeId: "CNN", name: "name", required: false, sequence: 1 },
  { datatypeId: "TS", name: "start date/time", required: false, sequence: 2 },
  { datatypeId: "TS", name: "end date/time", required: false, sequence: 3 },
  {
    datatypeId: "IS",
    name: "point of care (IS)",
    required: false,
    sequence: 4,
  },
  { datatypeId: "IS", name: "room", required: false, sequence: 5 },
  { datatypeId: "IS", name: "bed", required: false, sequence: 6 },
  { datatypeId: "HD", name: "facility (HD)", required: false, sequence: 7 },
  { datatypeId: "IS", name: "location status", required: false, sequence: 8 },
  {
    datatypeId: "IS",
    name: "person location type",
    required: false,
    sequence: 9,
  },
  { datatypeId: "IS", name: "building", required: false, sequence: 10 },
  { datatypeId: "IS", name: "floor", required: false, sequence: 11 },
] as const;
