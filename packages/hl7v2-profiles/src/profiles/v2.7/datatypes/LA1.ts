// Generated datatype profile for LA1 (v2.7)

export const id = "LA1";
export const version = "2.7";
export const kind = "composite";
export const title = "Location with Address Variation 1";
export const components = [
  { sequence: 1, name: "Point of Care", datatypeId: "IS", required: false },
  { sequence: 2, name: "Room", datatypeId: "IS", required: false },
  { sequence: 3, name: "Bed", datatypeId: "IS", required: false },
  { sequence: 4, name: "Facility", datatypeId: "HD", required: false },
  { sequence: 5, name: "Location Status", datatypeId: "IS", required: false },
  {
    sequence: 6,
    name: "Patient Location Type",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 7, name: "Building", datatypeId: "IS", required: false },
  { sequence: 8, name: "Floor", datatypeId: "IS", required: false },
  { sequence: 9, name: "Address", datatypeId: "AD", required: false },
] as const;
