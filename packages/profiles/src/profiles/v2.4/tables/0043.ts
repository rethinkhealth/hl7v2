// Generated table profile for 0043 (v2.4)

export const id = "0043";
export const description = "Condition code";
export const type = "user";
export const codes = [
  { description: "Military service related", name: "01" },
  { description: "Condition is employment related", name: "02" },
  {
    description: "Patient covered by insurance not reflected here",
    name: "03",
  },
  { description: "HMO enrollee", name: "04" },
  { description: "Lien has been filed", name: "05" },
  {
    description:
      "ESRD patient in first 18 months of entitlement covered by employer group health insurance",
    name: "06",
  },
  {
    description: "Treatment of non-terminal condition for hospice patient",
    name: "07",
  },
  {
    description:
      "Beneficiary would not provide information concerning other insurance coverage",
    name: "08",
  },
  { description: "Neither patient nor spouse is employed", name: "09" },
  {
    description: "Patient and/or spouse is employed but no EGHP exists",
    name: "10",
  },
  { description: "Disabled beneficiary but no LGHP", name: "11" },
  { description: "Payer codes.", name: "12" },
  { description: "Payer codes.", name: "12 ... 16" },
  { description: "Payer codes.", name: "13" },
  { description: "Payer codes.", name: "14" },
  { description: "Payer codes.", name: "15" },
  { description: "Payer codes.", name: "16" },
  { description: "Maiden name retained", name: "18" },
  { description: "Child retains mother's name", name: "19" },
  { description: "Beneficiary requested billing", name: "20" },
  { description: "Billing for Denial Notice", name: "21" },
  {
    description:
      "VA eligible patient chooses to receive services in a Medicare certified facility",
    name: "26",
  },
  {
    description:
      "Patient referred to a sole community hospital for a diagnostic laboratory test",
    name: "27",
  },
  {
    description: "Patient and/or spouse's EGHP is secondary to Medicare",
    name: "28",
  },
  {
    description:
      "Disabled beneficiary and/or family member's LGHP is secondary to Medicare",
    name: "29",
  },
  { description: "Patient is student (full time-day)", name: "31" },
  {
    description: "Patient is student (cooperative/work study program)",
    name: "32",
  },
  { description: "Patient is student (full time-night)", name: "33" },
  { description: "Patient is student (Part time)", name: "34" },
  { description: "General care patient in a special unit", name: "36" },
  { description: "Ward accommodation as patient request", name: "37" },
  { description: "Semi-private room not available", name: "38" },
  { description: "Private room medically necessary", name: "39" },
  { description: "Same day transfer", name: "40" },
  { description: "Partial hospitalization", name: "41" },
  { description: "Non-availability statement on file", name: "46" },
  {
    description:
      "Psychiatric residential treatment centers for children and adolescents",
    name: "48",
  },
  { description: "SNF bed not available", name: "55" },
  { description: "Medical appropriateness", name: "56" },
  { description: "SNF readmission", name: "57" },
  { description: "Day outlier", name: "60" },
  { description: "Cost outlier", name: "61" },
  { description: "Payer code", name: "62" },
  { description: "Provider does not wish cost outlier payment", name: "66" },
  {
    description: "Beneficiary elects not to use life time reserve (LTR) days",
    name: "67",
  },
  {
    description: "Beneficiary elects to use life time reserve (LTR) days",
    name: "68",
  },
  { description: "Self-administered EPO", name: "70" },
  { description: "Full care in unit", name: "71" },
  { description: "Self-care in unit", name: "72" },
  { description: "Self-care training", name: "73" },
  { description: "Home", name: "74" },
  { description: "Home - 100% reimbursement", name: "75" },
  { description: "Back-up in facility dialysis", name: "76" },
  {
    description:
      "Provider accepts or is obligated/required due to a contractual arrangement or law to accept payment by a primary payer as payment in full",
    name: "77",
  },
  { description: "New coverage not implemented by HMO", name: "78" },
  { description: "Corf services provided off-site", name: "79" },
  { description: "Pregnant", name: "80" },
] as const;
