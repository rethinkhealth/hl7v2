// Generated datatype profile for PL (v2.7.1)

export const id = "PL";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Person Location";
export const components = [
  { datatypeId: "HD", name: "Point of Care", required: false, sequence: 1 },
  { datatypeId: "HD", name: "Room", required: false, sequence: 2 },
  { datatypeId: "HD", name: "Bed", required: false, sequence: 3 },
  { datatypeId: "HD", name: "Facility", required: false, sequence: 4 },
  { datatypeId: "IS", name: "Location Status", required: false, sequence: 5 },
  {
    datatypeId: "IS",
    name: "Person Location Type",
    required: false,
    sequence: 6,
  },
  { datatypeId: "HD", name: "Building", required: false, sequence: 7 },
  { datatypeId: "HD", name: "Floor", required: false, sequence: 8 },
  {
    datatypeId: "ST",
    name: "Location Description",
    required: false,
    sequence: 9,
  },
  {
    datatypeId: "EI",
    name: "Comprehensive Location Identifier",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "HD",
    name: "Assigning Authority for Location",
    required: false,
    sequence: 11,
  },
] as const;
