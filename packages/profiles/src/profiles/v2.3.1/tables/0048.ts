// Generated table profile for 0048 (v2.3.1)

export const id = "0048";
export const description = "What subject filter";
export const type = "hl7";
export const codes = [
  { description: "Advice/diagnosis", name: "ADV" },
  {
    description:
      "Nursing unit lookup (returns patients in beds, excluding empty beds)",
    name: "ANU",
  },
  { description: "Account number query, return matching visit", name: "APA" },
  {
    description:
      "Medical record number query, returns visits for a medical record number",
    name: "APM",
  },
  { description: "Patient name lookup", name: "APN" },
  { description: "Physician lookup", name: "APP" },
  {
    description:
      "Nursing unit lookup (returns patients in beds, including empty beds)",
    name: "ARN",
  },
  { description: "Cancel.  Used to cancel a query", name: "CAN" },
  { description: "Demographics", name: "DEM" },
  { description: "Financial", name: "FIN" },
  { description: "Goals", name: "GOL" },
  { description: "Most recent inpatient", name: "MRI" },
  { description: "Most recent outpatient", name: "MRO" },
  { description: "Network clock", name: "NCK" },
  { description: "Network status change", name: "NSC" },
  { description: "Network statistic", name: "NST" },
  { description: "Order", name: "ORD" },
  { description: "Other", name: "OTH" },
  { description: "Problems", name: "PRB" },
  { description: "Procedure", name: "PRO" },
  { description: "Pharmacy administration information", name: "RAR" },
  { description: "Pharmacy dispense information", name: "RDR" },
  { description: "Pharmacy encoded order information", name: "RER" },
  { description: "Result", name: "RES" },
  { description: "Pharmacy give information", name: "RGR" },
  { description: "Pharmacy prescription information", name: "ROR" },
  {
    description:
      "All schedule related information, including open slots, booked slots, blocked slots",
    name: "SAL",
  },
  { description: "Booked slots on the identified schedule", name: "SBK" },
  { description: "Blocked slots on the identified schedule", name: "SBL" },
  { description: "Open slots on the identified schedule", name: "SOP" },
  { description: "Time slots available for a single appointment", name: "SSA" },
  {
    description: "Time slots available for a recurring appointment",
    name: "SSR",
  },
  { description: "Status", name: "STA" },
  { description: "Vaccine Information", name: "VXI" },
] as const;
