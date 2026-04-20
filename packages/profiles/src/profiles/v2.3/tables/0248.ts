// Generated table profile for 0248 (v2.3)

export const id = "0248";
export const description = "Product Source";
export const type = "hl7";
export const codes = [
  {
    name: "A",
    description: "Actual product involved in incident was evaluated",
  },
  {
    name: "L",
    description:
      "A product from the same lot as the actual product involved was evaluated",
  },
  {
    name: "N",
    description:
      "A product from a controlled/non-related inventory was evaluated",
  },
  { name: "R", description: "A product from a reserve sample was evaluated" },
] as const;
