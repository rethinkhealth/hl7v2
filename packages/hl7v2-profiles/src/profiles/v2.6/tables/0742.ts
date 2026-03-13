// Generated table profile for 0742 (v2.6)

export const id = "0742";
export const description = "DRG Status Financial Calculation";
export const type = "user";
export const codes = [
  { name: "00", description: "Effective weight calculated" },
  { name: "01", description: "Hospital specific contract" },
  {
    name: "03",
    description: "Eeffective weight for transfer/referral calculated",
  },
  {
    name: "04",
    description:
      "Referral from other hospital based on a cooperation (no DRG reimbursement)",
  },
  { name: "05", description: "Invalid length of stay" },
  { name: "10", description: "No information/entry in cost data for this DRG" },
  { name: "11", description: "No relative weight found for department (type)" },
] as const;
