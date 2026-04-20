// Generated UTG code system profile for v2-0923

export const id = "v2-0923";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0923";
export const oid = "2.16.840.1.113883.18.429";
export const name = "ProcessInterruption";
export const title = "processInterruption";
export const codes = [
  {
    code: "ABR",
    display:
      "Aborted Run: Process interrupted after the Phlebotomist inserts the needle in the Donor&#39;s arm",
    status: "active",
  },
  { code: "NIN", display: "Process was not interrupted", status: "active" },
  {
    code: "WOT",
    display:
      "Walk Out: Process interrupted before the Phlebotomist inserts the needle in the Donor&#39;s arm",
    status: "active",
  },
] as const;
