// Generated table profile for 0156 (v2.3)

export const id = "0156";
export const description = "Which Date/Time Qualifier";
export const type = "hl7";
export const codes = [
  { description: "Any date/time within a range", name: "ANY" },
  { description: "Cancellation date/time", name: "CAN" },
  {
    description:
      "Collection date/time, equivalent to film or sample collection date/time",
    name: "COL",
  },
  { description: "Order date/time", name: "ORD" },
  {
    description:
      "Specimen receipt date/time, receipt of specimen in filling ancillary (Lab)",
    name: "RCT",
  },
  {
    description:
      "Report date/time, report date/time at filiing ancillary (i.e., Lab)",
    name: "REP",
  },
  { description: "Schedule date/time", name: "SCHED" },
] as const;
