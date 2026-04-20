// Generated UTG code system profile for v2-0951

export const id = "v2-0951";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0951";
export const oid = "2.16.840.1.113883.18.451";
export const name = "ReasonForStudy";
export const title = "reasonForStudy";
export const codes = [
  { code: "BS", display: "Bank residual specimen", status: "N" },
  { code: "CR", display: "Confirm results value", status: "N" },
  {
    code: "FP",
    display: "Store residual specimen pending follow up",
    status: "N",
  },
  { code: "IN", display: "Interpret results", status: "N" },
  {
    code: "IR",
    display: "Review clinically inconsistent results",
    status: "N",
  },
  { code: "IT", display: "Incorrect test performed", status: "N" },
  { code: "OP", display: "Test ordering problem", status: "N" },
  { code: "PI", display: "Patient identification problem", status: "N" },
  { code: "SI", display: "Suspected interference", status: "N" },
  { code: "SP", display: "Sampling problem", status: "retired" },
  { code: "TP", display: "Specimen transport problem", status: "N" },
  { code: "TT", display: "Turnaround time problem", status: "N" },
  { code: "XR", display: "Incorrect results", status: "N" },
] as const;
