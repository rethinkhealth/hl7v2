// Generated UTG code system profile for v2-0248

export const id = "v2-0248";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0248";
export const oid = "2.16.840.1.113883.18.144";
export const name = "ProductSource";
export const title = "productSource";
export const codes = [
  {
    code: "A",
    display: "Actual product involved in incident was evaluated",
    status: "active",
  },
  {
    code: "L",
    display:
      "A product from the same lot as the actual product involved was evaluated",
    status: "active",
  },
  {
    code: "N",
    display: "A product from a controlled/non-related inventory was evaluated",
    status: "active",
  },
  {
    code: "R",
    display: "A product from a reserve sample was evaluated",
    status: "active",
  },
] as const;
