// Generated table profile for 0156 (v2.5)

export const id = "0156";
export const description = "Which date/time qualifier";
export const type = "hl7";
export const codes = [
  { name: "ANY", description: "Any date/time within a range" },
  {
    name: "COL",
    description:
      "Collection date/time, equivalent to film or sample collection date/time",
  },
  { name: "ORD", description: "Order date/time" },
  {
    name: "RCT",
    description:
      "Specimen receipt date/time, receipt of specimen in filling ancillary (Lab)",
  },
  {
    name: "REP",
    description:
      "Report date/time, report date/time at filing ancillary (i.e., Lab)",
  },
  { name: "SCHED", description: "Schedule date/time" },
] as const;
