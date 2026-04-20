// Generated datatype profile for PL (v2.5.1)

export const id = "PL";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Person Location";
export const components = [
  { sequence: 1, name: "Point of Care", datatypeId: "IS", required: false },
  { sequence: 2, name: "Room", datatypeId: "IS", required: false },
  { sequence: 3, name: "Bed", datatypeId: "IS", required: false },
  { sequence: 4, name: "Facility", datatypeId: "HD", required: false },
  { sequence: 5, name: "Location Status", datatypeId: "IS", required: false },
  {
    sequence: 6,
    name: "Person Location Type",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 7, name: "Building", datatypeId: "IS", required: false },
  { sequence: 8, name: "Floor", datatypeId: "IS", required: false },
  {
    sequence: 9,
    name: "Location Description",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 10,
    name: "Comprehensive Location Identifier",
    datatypeId: "EI",
    required: false,
  },
  {
    sequence: 11,
    name: "Assigning Authority for Location",
    datatypeId: "HD",
    required: false,
  },
] as const;
