// Generated datatype profile for XAD (v2.4)

export const id = "XAD";
export const version = "2.4";
export const kind = "composite";
export const title = "extended address";
export const components = [
  {
    datatypeId: "SAD",
    name: "street address (SAD)",
    required: false,
    sequence: 1,
  },
  { datatypeId: "ST", name: "other designation", required: false, sequence: 2 },
  { datatypeId: "ST", name: "city", required: false, sequence: 3 },
  { datatypeId: "ST", name: "state or province", required: false, sequence: 4 },
  {
    datatypeId: "ST",
    name: "zip or postal code",
    required: false,
    sequence: 5,
  },
  { datatypeId: "ID", name: "country", required: false, sequence: 6 },
  { datatypeId: "ID", name: "address type", required: false, sequence: 7 },
  {
    datatypeId: "ST",
    name: "other geographic designation",
    required: false,
    sequence: 8,
  },
  {
    datatypeId: "IS",
    name: "county/parish code",
    required: false,
    sequence: 9,
  },
  { datatypeId: "IS", name: "census tract", required: false, sequence: 10 },
  {
    datatypeId: "ID",
    name: "address representation code",
    required: false,
    sequence: 11,
  },
  {
    datatypeId: "DR",
    name: "address validity range",
    required: false,
    sequence: 12,
  },
] as const;
