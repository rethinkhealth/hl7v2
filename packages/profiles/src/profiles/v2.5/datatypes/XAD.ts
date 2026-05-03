// Generated datatype profile for XAD (v2.5)

export const id = "XAD";
export const version = "2.5";
export const kind = "composite";
export const title = "Extended Address";
export const components = [
  { datatypeId: "SAD", name: "Street Address", required: false, sequence: 1 },
  { datatypeId: "ST", name: "Other Designation", required: false, sequence: 2 },
  { datatypeId: "ST", name: "City", required: false, sequence: 3 },
  { datatypeId: "ST", name: "State or Province", required: false, sequence: 4 },
  {
    datatypeId: "ST",
    name: "Zip or Postal Code",
    required: false,
    sequence: 5,
  },
  { datatypeId: "ID", name: "Country", required: false, sequence: 6 },
  { datatypeId: "ID", name: "Address Type", required: false, sequence: 7 },
  {
    datatypeId: "ST",
    name: "Other Geographic Designation",
    required: false,
    sequence: 8,
  },
  {
    datatypeId: "IS",
    name: "County/Parish Code",
    required: false,
    sequence: 9,
  },
  { datatypeId: "IS", name: "Census Tract", required: false, sequence: 10 },
  {
    datatypeId: "ID",
    name: "Address Representation Code",
    required: false,
    sequence: 11,
  },
  {
    datatypeId: "DR",
    name: "Address Validity Range",
    required: false,
    sequence: 12,
  },
  { datatypeId: "TS", name: "Effective Date", required: false, sequence: 13 },
  { datatypeId: "TS", name: "Expiration Date", required: false, sequence: 14 },
] as const;
