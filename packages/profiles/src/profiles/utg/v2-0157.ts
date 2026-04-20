// Generated UTG code system profile for v2-0157

export const id = "v2-0157";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0157";
export const oid = "2.16.840.1.113883.18.75";
export const name = "WhichDateTimeStatusQualifier";
export const title = "whichDate-timeStatusQualifier";
export const codes = [
  { code: "ANY", display: "Any status", status: "active" },
  {
    code: "CFN",
    display: "Current final value, whether final or corrected",
    status: "active",
  },
  {
    code: "COR",
    display: "Corrected only (no final with corrections)",
    status: "active",
  },
  { code: "FIN", display: "Final only (no corrections)", status: "active" },
  { code: "PRE", display: "Preliminary", status: "active" },
  { code: "REP", display: "Report completion date/time", status: "active" },
] as const;
