// Generated table profile for 0553 (v2.8.1)

export const id = "0553";
export const description = "Invoice Control Code";
export const type = "user";
export const codes = [
  { description: "Authorization request for inpatient admission", name: "AA" },
  {
    description: "Combined Authorization and Adjudication request",
    name: "AI",
  },
  { description: "Cancel Authorization request", name: "CA" },
  { description: "Cancel Invoice Product/Service Group", name: "CG" },
  { description: "Cancel Invoice Product/Service Line Item", name: "CL" },
  { description: "Cancel Invoice", name: "CN" },
  { description: "Copy of Invoice", name: "CP" },
  { description: "Coverage Register Query", name: "CQ" },
  {
    description: "Authorization request for inpatient stay extension",
    name: "EA",
  },
  { description: "Original Authorization", name: "OA" },
  { description: "Original Invoice", name: "OR" },
  { description: "Pre-Authorization", name: "PA" },
  { description: "Pre-Determination Invoice", name: "PD" },
  { description: "Re-Assessment", name: "RA" },
  { description: "Referral Pre-Authorization", name: "RC" },
  { description: "Referral authorization", name: "RU" },
  { description: "Special Authorization", name: "SA" },
] as const;
