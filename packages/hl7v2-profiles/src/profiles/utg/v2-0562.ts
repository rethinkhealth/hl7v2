// Generated UTG code system profile for v2-0562

export const id = "v2-0562";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0562";
export const oid = "2.16.840.1.113883.18.365";
export const name = "ProcessingConsideration";
export const title = "processingConsideration";
export const codes = [
  {
    code: "DFADJ",
    display: "Deferred Adjudication Processing",
    status: "active",
  },
  { code: "EFORM", display: "Electronic form to follow", status: "active" },
  { code: "FAX", display: "Fax to follow", status: "active" },
  { code: "PAPER", display: "Paper documentation to follow", status: "active" },
  {
    code: "PYRDELAY",
    display: "Delayed by a Previous Payer",
    status: "active",
  },
  {
    code: "RTADJ",
    display: "Real Time Adjudication Processing",
    status: "active",
  },
] as const;
