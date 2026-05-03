// Generated datatype profile for AD (v2.5)

export const id = "AD";
export const version = "2.5";
export const kind = "composite";
export const title = "Address";
export const components = [
  { datatypeId: "ST", name: "Street Address", required: false, sequence: 1 },
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
] as const;
