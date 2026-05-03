// Generated datatype profile for XAD (v2.8.2)

export const id = "XAD";
export const version = "2.8.2";
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
    datatypeId: "CWE",
    name: "County/Parish Code",
    required: false,
    sequence: 9,
  },
  { datatypeId: "CWE", name: "Census Tract", required: false, sequence: 10 },
  {
    datatypeId: "ID",
    name: "Address Representation Code",
    required: false,
    sequence: 11,
  },
  { datatypeId: "DTM", name: "Effective Date", required: false, sequence: 13 },
  { datatypeId: "DTM", name: "Expiration Date", required: false, sequence: 14 },
  {
    datatypeId: "CWE",
    name: "Expiration Reason",
    required: false,
    sequence: 15,
  },
  {
    datatypeId: "ID",
    name: "Temporary Indicator",
    required: false,
    sequence: 16,
  },
  {
    datatypeId: "ID",
    name: "Bad Address Indicator",
    required: false,
    sequence: 17,
  },
  { datatypeId: "ID", name: "Address Usage", required: false, sequence: 18 },
  { datatypeId: "ST", name: "Addressee", required: false, sequence: 19 },
  { datatypeId: "ST", name: "Comment", required: false, sequence: 20 },
  { datatypeId: "NM", name: "Preference Order", required: false, sequence: 21 },
  { datatypeId: "CWE", name: "Protection Code", required: false, sequence: 22 },
  {
    datatypeId: "EI",
    name: "Address Identifier",
    required: false,
    sequence: 23,
  },
] as const;
