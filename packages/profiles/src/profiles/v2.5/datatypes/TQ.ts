// Generated datatype profile for TQ (v2.5)

export const id = "TQ";
export const version = "2.5";
export const kind = "composite";
export const title = "Timing Quantity";
export const components = [
  { datatypeId: "CQ", name: "Quantity", required: false, sequence: 1 },
  { datatypeId: "RI", name: "Interval", required: false, sequence: 2 },
  { datatypeId: "ST", name: "Duration", required: false, sequence: 3 },
  { datatypeId: "TS", name: "Start Date/Time", required: false, sequence: 4 },
  { datatypeId: "TS", name: "End Date/Time", required: false, sequence: 5 },
  { datatypeId: "ST", name: "Priority", required: false, sequence: 6 },
  { datatypeId: "ST", name: "Condition", required: false, sequence: 7 },
  { datatypeId: "TX", name: "Text", required: false, sequence: 8 },
  { datatypeId: "ID", name: "Conjunction", required: false, sequence: 9 },
  {
    datatypeId: "OSD",
    name: "Order Sequencing",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "CE",
    name: "Occurrence Duration",
    required: false,
    sequence: 11,
  },
  {
    datatypeId: "NM",
    name: "Total Occurrences",
    required: false,
    sequence: 12,
  },
] as const;
