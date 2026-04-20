// Generated table profile for 0156 (v2.2)

export const id = "0156";
export const description = "DATE/TIME QUALIFIER";
export const type = "hl7";
export const codes = [
  { name: "ANY", description: "Any date / time within a range" },
  { name: "CAN", description: "Cancellation date / time" },
  {
    name: "COL",
    description:
      "Collection date / time (equivalent to film or sample collection date / time)",
  },
  { name: "ORD", description: "Order date / time" },
  {
    name: "RCT",
    description:
      "Specimen receipt date / time (receipt of specimen in filling ancillary (lab))",
  },
  {
    name: "REP",
    description:
      "Report date / time (report date / time at filling ancillary (i.e., lab))",
  },
  { name: "SCHED", description: "Schedule date / time" },
] as const;
