// Generated UTG code system profile for v2-0749

export const id = "v2-0749";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0749";
export const oid = "2.16.840.1.113883.18.396";
export const name = "DrgGroupingStatus";
export const title = "drgGroupingStatus";
export const codes = [
  { code: "0", display: "Valid code; not used for grouping", status: "active" },
  { code: "1", display: "Valid code; used for grouping", status: "active" },
  {
    code: "2",
    display: "Invalid code; not used for grouping",
    status: "active",
  },
  {
    code: "3",
    display: "Invalid code; code is relevant for grouping",
    status: "active",
  },
] as const;
