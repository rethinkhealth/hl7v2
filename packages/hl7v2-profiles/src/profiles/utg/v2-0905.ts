// Generated UTG code system profile for v2-0905

export const id = "v2-0905";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0905";
export const oid = "2.16.840.1.113883.18.416";
export const name = "ShipmentStatus";
export const title = "shipmentStatus";
export const codes = [
  { code: "INV", display: "Inventoried", status: "active" },
  { code: "ONH", display: "On Hold", status: "active" },
  { code: "PRC", display: "Processing", status: "active" },
  { code: "REJ", display: "Rejected", status: "active" },
  { code: "TRN", display: "In Transit", status: "active" },
  { code: "TTL", display: "Triaged to Lab", status: "active" },
] as const;
