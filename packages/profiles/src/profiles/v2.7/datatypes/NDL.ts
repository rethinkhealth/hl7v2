// Generated datatype profile for NDL (v2.7)

export const id = "NDL";
export const version = "2.7";
export const kind = "composite";
export const title = "Name with Date and Location";
export const components = [
  { datatypeId: "CNN", name: "Name", required: false, sequence: 1 },
  { datatypeId: "DTM", name: "Start Date/time", required: false, sequence: 2 },
  { datatypeId: "DTM", name: "End Date/time", required: false, sequence: 3 },
  { datatypeId: "IS", name: "Point of Care", required: false, sequence: 4 },
  { datatypeId: "IS", name: "Room", required: false, sequence: 5 },
  { datatypeId: "IS", name: "Bed", required: false, sequence: 6 },
  { datatypeId: "HD", name: "Facility", required: false, sequence: 7 },
  { datatypeId: "IS", name: "Location Status", required: false, sequence: 8 },
  {
    datatypeId: "IS",
    name: "Patient Location Type",
    required: false,
    sequence: 9,
  },
  { datatypeId: "IS", name: "Building", required: false, sequence: 10 },
  { datatypeId: "IS", name: "Floor", required: false, sequence: 11 },
] as const;
