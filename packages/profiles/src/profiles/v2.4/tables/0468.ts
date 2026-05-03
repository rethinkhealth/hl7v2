// Generated table profile for 0468 (v2.4)

export const id = "0468";
export const description = "Payment adjustment code";
export const type = "user";
export const codes = [
  { description: "No payment adjustment", name: "1" },
  {
    description:
      "Designated current drug or biological payment adjustment applies to APC (status indicator G)",
    name: "2",
  },
  {
    description:
      "Designated new device payment adjustment applies to APC (status indicator H)",
    name: "3",
  },
  {
    description:
      "Designated new drug or new biological payment adjustment applies to APC (status indicator J)",
    name: "4",
  },
  {
    description: "Deductible not applicable (specific list of HCPCS codes)",
    name: "5",
  },
] as const;
