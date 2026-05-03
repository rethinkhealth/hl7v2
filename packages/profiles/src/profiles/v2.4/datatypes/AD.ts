// Generated datatype profile for AD (v2.4)

export const id = "AD";
export const version = "2.4";
export const kind = "composite";
export const title = "address";
export const components = [
  {
    datatypeId: "ST",
    name: "street address (ST)",
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
] as const;
