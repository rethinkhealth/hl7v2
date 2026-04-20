// Generated UTG code system profile for v2-0208

export const id = "v2-0208";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0208";
export const oid = "2.16.840.1.113883.18.113";
export const name = "QueryResponseStatus";
export const title = "queryResponseStatus";
export const codes = [
  { code: "AE", display: "Application error", status: "active" },
  { code: "AR", display: "Application reject", status: "active" },
  { code: "NF", display: "No data found, no errors", status: "active" },
  {
    code: "OK",
    display: "Data found, no errors (this is the default)",
    status: "active",
  },
  { code: "PD", display: "Protected data", status: "N" },
  { code: "TM", display: "Too much data found", status: "N" },
] as const;
