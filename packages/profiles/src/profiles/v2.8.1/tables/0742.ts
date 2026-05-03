// Generated table profile for 0742 (v2.8.1)

export const id = "0742";
export const description = "DRG Status Financial Calculation";
export const type = "user";
export const codes = [
  { description: "Effective weight calculated", name: "00" },
  { description: "Hospital specific contract", name: "01" },
  {
    description: "Eeffective weight for transfer/referral calculated",
    name: "03",
  },
  {
    description:
      "Referral from other hospital based on a cooperation (no DRG reimbursement)",
    name: "04",
  },
  { description: "Invalid length of stay", name: "05" },
  { description: "No information/entry in cost data for this DRG", name: "10" },
  { description: "No relative weight found for department (type)", name: "11" },
] as const;
