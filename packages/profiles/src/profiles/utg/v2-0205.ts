// Generated UTG code system profile for v2-0205

export const id = "v2-0205";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0205";
export const oid = "2.16.840.1.113883.18.110";
export const name = "PriceType";
export const title = "priceType";
export const codes = [
  {
    code: "AP",
    display: "administrative price or handling fee",
    status: "active",
  },
  { code: "DC", display: "direct unit cost", status: "active" },
  { code: "IC", display: "indirect unit cost", status: "active" },
  {
    code: "PF",
    display: "professional fee for performing provider",
    status: "active",
  },
  {
    code: "TF",
    display: "technology fee for use of equipment",
    status: "active",
  },
  { code: "TP", display: "total price", status: "active" },
  {
    code: "UP",
    display: "unit price, may be based on length of procedure or service",
    status: "active",
  },
] as const;
