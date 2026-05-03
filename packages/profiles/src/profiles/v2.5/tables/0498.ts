// Generated table profile for 0498 (v2.5)

export const id = "0498";
export const description = "Consent Status";
export const type = "hl7";
export const codes = [
  { description: "Active - Consent has been granted", name: "A" },
  { description: "Bypassed (Consent not sought)", name: "B" },
  {
    description: "Limited - Consent has been granted with limitations",
    name: "L",
  },
  { description: "Pending - Consent has not yet been sought", name: "P" },
  { description: "Refused - Consent has been refused", name: "R" },
  {
    description:
      "Rescinded - Consent was initially granted, but was subsequently revoked or ended.",
    name: "X",
  },
] as const;
