// Generated UTG code system profile for v2-0156

export const id = "v2-0156";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0156";
export const oid = "2.16.840.1.113883.18.74";
export const name = "WhichDateTimeQualifier";
export const title = "whichDate-timeQualifier";
export const codes = [
  { code: "ANY", display: "Any date/time within a range", status: "active" },
  { code: "CAN", display: "Cancellation date/time", status: "active" },
  {
    code: "COL",
    display:
      "Collection date/time, equivalent to film or sample collection date/time",
    status: "active",
  },
  { code: "ORD", display: "Order date/time", status: "active" },
  {
    code: "RCT",
    display:
      "Specimen receipt date/time, receipt of specimen in filling ancillary (Lab)",
    status: "active",
  },
  {
    code: "REP",
    display:
      "Report date/time, report date/time at filling ancillary (i.e., Lab)",
    status: "active",
  },
  { code: "SCHED", display: "Schedule date/time", status: "active" },
] as const;
