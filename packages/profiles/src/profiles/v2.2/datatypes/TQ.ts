// Generated datatype profile for TQ (v2.2)

export const id = "TQ";
export const version = "2.2";
export const kind = "composite";
export const title = "timing quantity";
export const components = [
  { datatypeId: "CQ", name: "Quantity", required: false, sequence: 1 },
  { datatypeId: "CM", name: "interval", required: false, sequence: 2 },
  { datatypeId: "ST", name: "duration", required: false, sequence: 3 },
  { datatypeId: "TS", name: "start date/time", required: false, sequence: 4 },
  { datatypeId: "TS", name: "end date/time", required: false, sequence: 5 },
  { datatypeId: "ID", name: "priority", required: false, sequence: 6 },
  { datatypeId: "ST", name: "condition", required: false, sequence: 7 },
  { datatypeId: "TX", name: "text (TX)", required: false, sequence: 8 },
  { datatypeId: "ID", name: "conjunction", required: false, sequence: 9 },
  { datatypeId: "ST", name: "order sequencing", required: false, sequence: 10 },
] as const;
