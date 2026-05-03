// Generated datatype profile for LA2 (v2.5.1)

export const id = "LA2";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Location with Address Variation 2";
export const components = [
  { datatypeId: "IS", name: "Point of Care", required: false, sequence: 1 },
  { datatypeId: "IS", name: "Room", required: false, sequence: 2 },
  { datatypeId: "IS", name: "Bed", required: false, sequence: 3 },
  { datatypeId: "HD", name: "Facility", required: false, sequence: 4 },
  { datatypeId: "IS", name: "Location Status", required: false, sequence: 5 },
  {
    datatypeId: "IS",
    name: "Patient Location Type",
    required: false,
    sequence: 6,
  },
  { datatypeId: "IS", name: "Building", required: false, sequence: 7 },
  { datatypeId: "IS", name: "Floor", required: false, sequence: 8 },
  { datatypeId: "ST", name: "Street Address", required: false, sequence: 9 },
  {
    datatypeId: "ST",
    name: "Other Designation",
    required: false,
    sequence: 10,
  },
  { datatypeId: "ST", name: "City", required: false, sequence: 11 },
  {
    datatypeId: "ST",
    name: "State or Province",
    required: false,
    sequence: 12,
  },
  {
    datatypeId: "ST",
    name: "Zip or Postal Code",
    required: false,
    sequence: 13,
  },
  { datatypeId: "ID", name: "Country", required: false, sequence: 14 },
  { datatypeId: "ID", name: "Address Type", required: false, sequence: 15 },
  {
    datatypeId: "ST",
    name: "Other Geographic Designation",
    required: false,
    sequence: 16,
  },
] as const;
