// Generated datatype profile for RPT (v2.5)

export const id = "RPT";
export const version = "2.5";
export const kind = "composite";
export const title = "Repeat Pattern";
export const components = [
  {
    sequence: 1,
    name: "Repeat Pattern Code",
    datatypeId: "CWE",
    required: false,
  },
  {
    sequence: 2,
    name: "Calendar Alignment",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 3,
    name: "Phase Range Begin Value",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 4,
    name: "Phase Range End Value",
    datatypeId: "NM",
    required: false,
  },
  { sequence: 5, name: "Period Quantity", datatypeId: "NM", required: false },
  { sequence: 6, name: "Period Units", datatypeId: "IS", required: false },
  {
    sequence: 7,
    name: "Institution Specified Time",
    datatypeId: "ID",
    required: false,
  },
  { sequence: 8, name: "Event", datatypeId: "ID", required: false },
  {
    sequence: 9,
    name: "Event Offset Quantity",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 10,
    name: "Event Offset Units",
    datatypeId: "IS",
    required: false,
  },
  {
    sequence: 11,
    name: "General Timing Specification",
    datatypeId: "GTS",
    required: false,
  },
] as const;
