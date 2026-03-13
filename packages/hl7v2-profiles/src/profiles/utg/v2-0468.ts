// Generated UTG code system profile for v2-0468

export const id = "v2-0468";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0468";
export const oid = "2.16.840.1.113883.18.297";
export const name = "PaymentAdjustmentInformation";
export const title = "paymentAdjustmentInformation";
export const codes = [
  { code: "1", display: "No payment adjustment", status: "active" },
  {
    code: "2",
    display:
      "Designated current drug or biological payment adjustment applies to APC (status indicator G)",
    status: "active",
  },
  {
    code: "3",
    display:
      "Designated new device payment adjustment applies to APC (status indicator H)",
    status: "active",
  },
  {
    code: "4",
    display:
      "Designated new drug or new biological payment adjustment applies to APC (status indicator J)",
    status: "active",
  },
  {
    code: "5",
    display: "Deductible not applicable (specific list of HCPCS codes)",
    status: "active",
  },
] as const;
