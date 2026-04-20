// Generated UTG code system profile for v2-0121

export const id = "v2-0121";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0121";
export const oid = "2.16.840.1.113883.18.49";
export const name = "ResponseFlag";
export const title = "responseFlag";
export const codes = [
  {
    code: "D",
    display: "Same as R, also other associated segments",
    status: "active",
  },
  { code: "E", display: "Report exceptions only", status: "active" },
  {
    code: "F",
    display: "Same as D, plus confirmations explicitly",
    status: "active",
  },
  { code: "N", display: "Only the MSA segment is returned", status: "active" },
  {
    code: "R",
    display: "Same as E, also Replacement and Parent-Child",
    status: "active",
  },
] as const;
