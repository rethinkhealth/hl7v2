// Generated datatype profile for TQ (v2.3.1)

export const id = "TQ";
export const version = "2.3.1";
export const kind = "composite";
export const title = "timing quantity";
export const components = [
  { datatypeId: "CQ", name: "quantity", required: false, sequence: 1 },
  { datatypeId: "RI", name: "interval", required: false, sequence: 2 },
  { datatypeId: "ST", name: "duration", required: false, sequence: 3 },
  { datatypeId: "TS", name: "start date/time", required: false, sequence: 4 },
  { datatypeId: "TS", name: "end date/time", required: false, sequence: 5 },
  { datatypeId: "ST", name: "priority", required: false, sequence: 6 },
  { datatypeId: "ST", name: "condition", required: false, sequence: 7 },
  { datatypeId: "ST", name: "text", required: false, sequence: 8 },
  { datatypeId: "ST", name: "conjunction", required: false, sequence: 9 },
  {
    datatypeId: "OSD",
    name: "order sequencing",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "CE",
    name: "occurrence duration",
    required: false,
    sequence: 11,
  },
  { datatypeId: "NM", name: "total occurences", required: false, sequence: 12 },
] as const;
