// Generated UTG code system profile for v2-0742

export const id = "v2-0742";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0742";
export const oid = "2.16.840.1.113883.18.395";
export const name = "DrgStatusFinancialCalculation";
export const title = "drgStatusFinancialCalculation";
export const codes = [
  { code: "00", display: "Effective weight calculated", status: "active" },
  { code: "01", display: "Hospital specific contract", status: "active" },
  {
    code: "03",
    display: "Eeffective weight for transfer/referral calculated",
    status: "active",
  },
  {
    code: "04",
    display:
      "Referral from other hospital based on a cooperation (no DRG reimbursement)",
    status: "active",
  },
  { code: "05", display: "Invalid length of stay", status: "active" },
  {
    code: "10",
    display: "No information/entry in cost data for this DRG",
    status: "active",
  },
  {
    code: "11",
    display: "No relative weight found for department (type)",
    status: "active",
  },
] as const;
