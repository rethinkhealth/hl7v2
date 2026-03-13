// Generated datatype profile for NDL (v2.7)

export const id = "NDL";
export const version = "2.7";
export const kind = "composite";
export const title = "Name with Date and Location";
export const components = [
  { sequence: 1, name: "Name", datatypeId: "CNN", required: false },
  { sequence: 2, name: "Start Date/time", datatypeId: "DTM", required: false },
  { sequence: 3, name: "End Date/time", datatypeId: "DTM", required: false },
  { sequence: 4, name: "Point of Care", datatypeId: "IS", required: false },
  { sequence: 5, name: "Room", datatypeId: "IS", required: false },
  { sequence: 6, name: "Bed", datatypeId: "IS", required: false },
  { sequence: 7, name: "Facility", datatypeId: "HD", required: false },
  { sequence: 8, name: "Location Status", datatypeId: "IS", required: false },
  {
    sequence: 9,
    name: "Patient Location Type",
    datatypeId: "IS",
    required: false,
  },
  { sequence: 10, name: "Building", datatypeId: "IS", required: false },
  { sequence: 11, name: "Floor", datatypeId: "IS", required: false },
] as const;
