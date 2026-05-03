// Generated table profile for 0460 (v2.8)

export const id = "0460";
export const description = "Denial or Rejection Code";
export const type = "user";
export const codes = [
  { description: "Line item not denied or rejected", name: "0" },
  { description: "Line item denied or rejected", name: "1" },
  {
    description:
      "Line item is on a multiple-day claim. The line item is not denied or rejected, but occurs on a day that has been denied or rejected.",
    name: "2",
  },
] as const;
