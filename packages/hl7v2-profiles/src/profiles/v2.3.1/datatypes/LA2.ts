// Generated datatype profile for LA2 (v2.3.1)

export const id = "LA2";
export const version = "2.3.1";
export const kind = "composite";
export const title = "Location with address information (variant 2)";
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
  { sequence: 9, name: "street address", datatypeId: "ST", required: false },
  {
    sequence: 10,
    name: "other designation",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 11, name: "city", datatypeId: "ST", required: false },
  {
    sequence: 12,
    name: "state or province",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 13,
    name: "zip or postal code",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 14, name: "country", datatypeId: "ID", required: false },
  { sequence: 15, name: "address type", datatypeId: "ID", required: false },
  {
    sequence: 16,
    name: "other geographic designation",
    datatypeId: "ST",
    required: false,
  },
] as const;
