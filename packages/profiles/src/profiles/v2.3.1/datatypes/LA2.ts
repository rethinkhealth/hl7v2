// Generated datatype profile for LA2 (v2.3.1)

export const id = "LA2";
export const version = "2.3.1";
export const kind = "composite";
export const title = "Location with address information (variant 2)";
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
  { datatypeId: "ST", name: "street address", required: false, sequence: 9 },
  {
    datatypeId: "ST",
    name: "other designation",
    required: false,
    sequence: 10,
  },
  { datatypeId: "ST", name: "city", required: false, sequence: 11 },
  {
    datatypeId: "ST",
    name: "state or province",
    required: false,
    sequence: 12,
  },
  {
    datatypeId: "ST",
    name: "zip or postal code",
    required: false,
    sequence: 13,
  },
  { datatypeId: "ID", name: "country", required: false, sequence: 14 },
  { datatypeId: "ID", name: "address type", required: false, sequence: 15 },
  {
    datatypeId: "ST",
    name: "other geographic designation",
    required: false,
    sequence: 16,
  },
] as const;
