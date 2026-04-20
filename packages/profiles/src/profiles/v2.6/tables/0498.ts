// Generated table profile for 0498 (v2.6)

export const id = "0498";
export const description = "Consent Status";
export const type = "hl7";
export const codes = [
  { name: "A", description: "Active - Consent has been granted" },
  { name: "B", description: "Bypassed (Consent not sought)" },
  {
    name: "L",
    description: "Limited - Consent has been granted with limitations",
  },
  { name: "P", description: "Pending - Consent has not yet been sought" },
  { name: "R", description: "Refused - Consent has been refused" },
  {
    name: "X",
    description:
      "Rescinded - Consent was initially granted, but was subsequently revoked or ended.",
  },
] as const;
