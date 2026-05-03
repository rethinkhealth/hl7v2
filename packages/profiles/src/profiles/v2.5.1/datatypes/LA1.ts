// Generated datatype profile for LA1 (v2.5.1)

export const id = "LA1";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Location with Address Variation 1";
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
  { datatypeId: "AD", name: "Address", required: false, sequence: 9 },
] as const;
