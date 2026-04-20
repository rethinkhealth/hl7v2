// Generated UTG code system profile for v2-0469

export const id = "v2-0469";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0469";
export const oid = "2.16.840.1.113883.18.298";
export const name = "PackagingStatus";
export const title = "packagingStatus";
export const codes = [
  { code: "0", display: "Not packaged", status: "active" },
  {
    code: "1",
    display:
      "Packaged service (status indicator N, or no HCPCS code and certain revenue codes)",
    status: "active",
  },
  {
    code: "2",
    display:
      "Packaged as part of partial hospitalization per diem or daily mental health service per diem",
    status: "active",
  },
] as const;
