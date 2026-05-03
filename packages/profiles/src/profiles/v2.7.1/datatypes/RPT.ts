// Generated datatype profile for RPT (v2.7.1)

export const id = "RPT";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Repeat Pattern";
export const components = [
  {
    datatypeId: "CWE",
    name: "Repeat Pattern Code",
    required: true,
    sequence: 1,
  },
  {
    datatypeId: "ID",
    name: "Calendar Alignment",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "NM",
    name: "Phase Range Begin Value",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "NM",
    name: "Phase Range End Value",
    required: false,
    sequence: 4,
  },
  { datatypeId: "NM", name: "Period Quantity", required: false, sequence: 5 },
  { datatypeId: "CWE", name: "Period Units", required: false, sequence: 6 },
  {
    datatypeId: "ID",
    name: "Institution Specified Time",
    required: false,
    sequence: 7,
  },
  { datatypeId: "ID", name: "Event", required: false, sequence: 8 },
  {
    datatypeId: "NM",
    name: "Event Offset Quantity",
    required: false,
    sequence: 9,
  },
  {
    datatypeId: "CWE",
    name: "Event Offset Units",
    required: false,
    sequence: 10,
  },
  {
    datatypeId: "GTS",
    name: "General Timing Specification",
    required: false,
    sequence: 11,
  },
] as const;
