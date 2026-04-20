// Generated table profile for 0553 (v2.8.1)

export const id = "0553";
export const description = "Invoice Control Code";
export const type = "user";
export const codes = [
  { name: "AA", description: "Authorization request for inpatient admission" },
  {
    name: "AI",
    description: "Combined Authorization and Adjudication request",
  },
  { name: "CA", description: "Cancel Authorization request" },
  { name: "CG", description: "Cancel Invoice Product/Service Group" },
  { name: "CL", description: "Cancel Invoice Product/Service Line Item" },
  { name: "CN", description: "Cancel Invoice" },
  { name: "CP", description: "Copy of Invoice" },
  { name: "CQ", description: "Coverage Register Query" },
  {
    name: "EA",
    description: "Authorization request for inpatient stay extension",
  },
  { name: "OA", description: "Original Authorization" },
  { name: "OR", description: "Original Invoice" },
  { name: "PA", description: "Pre-Authorization" },
  { name: "PD", description: "Pre-Determination Invoice" },
  { name: "RA", description: "Re-Assessment" },
  { name: "RC", description: "Referral Pre-Authorization" },
  { name: "RU", description: "Referral authorization" },
  { name: "SA", description: "Special Authorization" },
] as const;
