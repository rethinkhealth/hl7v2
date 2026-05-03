// Generated table profile for 0248 (v2.5.1)

export const id = "0248";
export const description = "Product source";
export const type = "hl7";
export const codes = [
  {
    description: "Actual product involved in incident was evaluated",
    name: "A",
  },
  {
    description:
      "A product from the same lot as the actual product involved was evaluated",
    name: "L",
  },
  {
    description:
      "A product from a controlled/non-related inventory was evaluated",
    name: "N",
  },
  { description: "A product from a reserve sample was evaluated", name: "R" },
] as const;
