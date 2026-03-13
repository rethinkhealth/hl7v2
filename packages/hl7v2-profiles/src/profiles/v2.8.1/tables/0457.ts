// Generated table profile for 0457 (v2.8.1)

export const id = "0457";
export const description = "Overall Claim Disposition Code";
export const type = "user";
export const codes = [
  { name: "0", description: "No edits present on claim" },
  {
    name: "1",
    description: "Only edits present are for line item denial or rejection",
  },
  {
    name: "2",
    description: "Multiple-day claim with one or more days denied or rejected",
  },
  {
    name: "3",
    description:
      "Claim denied, rejected, suspended or returned to provider with only post payment edits",
  },
  {
    name: "4",
    description:
      "Claim denied, rejected, suspended or returned to provider with only pre payment edits",
  },
] as const;
