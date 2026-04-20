// Generated datatype profile for XAD (v2.4)

export const id = "XAD";
export const version = "2.4";
export const kind = "composite";
export const title = "extended address";
export const components = [
  {
    sequence: 1,
    name: "street address (SAD)",
    datatypeId: "SAD",
    required: false,
  },
  { sequence: 2, name: "other designation", datatypeId: "ST", required: false },
  { sequence: 3, name: "city", datatypeId: "ST", required: false },
  { sequence: 4, name: "state or province", datatypeId: "ST", required: false },
  {
    sequence: 5,
    name: "zip or postal code",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 6, name: "country", datatypeId: "ID", required: false },
  { sequence: 7, name: "address type", datatypeId: "ID", required: false },
  {
    sequence: 8,
    name: "other geographic designation",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 9,
    name: "county/parish code",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 10, name: "census tract", datatypeId: "IS", required: false },
  {
    sequence: 11,
    name: "address representation code",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 12,
    name: "address validity range",
    datatypeId: "DR",
    required: false,
  },
] as const;
