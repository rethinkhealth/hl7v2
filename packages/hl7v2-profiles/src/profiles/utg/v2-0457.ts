// Generated UTG code system profile for v2-0457

export const id = "v2-0457";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0457";
export const oid = "2.16.840.1.113883.18.292";
export const name = "OverallClaimDisposition";
export const title = "overallClaimDisposition";
export const codes = [
  { code: "0", display: "No edits present on claim", status: "active" },
  {
    code: "1",
    display: "Only edits present are for line item denial or rejection",
    status: "active",
  },
  {
    code: "2",
    display: "Multiple-day claim with one or more days denied or rejected",
    status: "active",
  },
  {
    code: "3",
    display:
      "Claim denied, rejected, suspended or returned to provider with only post payment edits",
    status: "active",
  },
  {
    code: "4",
    display:
      "Claim denied, rejected, suspended or returned to provider with only pre payment edits",
    status: "active",
  },
] as const;
