// Generated table profile for 0457 (v2.8)

export const id = "0457";
export const description = "Overall Claim Disposition Code";
export const type = "user";
export const codes = [
  { description: "No edits present on claim", name: "0" },
  {
    description: "Only edits present are for line item denial or rejection",
    name: "1",
  },
  {
    description: "Multiple-day claim with one or more days denied or rejected",
    name: "2",
  },
  {
    description:
      "Claim denied, rejected, suspended or returned to provider with only post payment edits",
    name: "3",
  },
  {
    description:
      "Claim denied, rejected, suspended or returned to provider with only pre payment edits",
    name: "4",
  },
] as const;
