// Generated UTG code system profile for v2-0438

export const id = "v2-0438";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0438";
export const oid = "2.16.840.1.113883.18.279";
export const name = "AllergyClinicalStatus";
export const title = "allergyClinicalStatus";
export const codes = [
  { code: "C", display: "Confirmed or verified", status: "active" },
  { code: "D", display: "Doubt raised", status: "active" },
  { code: "E", display: "Erroneous", status: "active" },
  { code: "I", display: "Confirmed but inactive", status: "active" },
  { code: "P", display: "Pending", status: "active" },
  { code: "S", display: "Suspect", status: "active" },
  { code: "U", display: "Unconfirmed", status: "active" },
] as const;
