// Generated datatype profile for AD (v2.6)

export const id = "AD";
export const version = "2.6";
export const kind = "composite";
export const title = "Address";
export const components = [
  { sequence: 1, name: "Street Address", datatypeId: "ST", required: false },
  { sequence: 2, name: "Other Designation", datatypeId: "ST", required: false },
  { sequence: 3, name: "City", datatypeId: "ST", required: false },
  { sequence: 4, name: "State or Province", datatypeId: "ST", required: false },
  {
    sequence: 5,
    name: "Zip or Postal Code",
    datatypeId: "ST",
    required: false,
  },
  { sequence: 6, name: "Country", datatypeId: "ID", required: false },
  { sequence: 7, name: "Address Type", datatypeId: "ID", required: false },
  {
    sequence: 8,
    name: "Other Geographic Designation",
    datatypeId: "ST",
    required: false,
  },
] as const;
