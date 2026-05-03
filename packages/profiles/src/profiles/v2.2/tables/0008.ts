// Generated table profile for 0008 (v2.2)

export const id = "0008";
export const description = "ACKNOWLEDGMENT CODE";
export const type = "hl7";
export const codes = [
  {
    description:
      "Application accept (original mode) / Application acknowledgement: accept (enhanced mode)",
    name: "AA",
  },
  {
    description:
      "Application error (original mode) / Application acknowledgement: error (enhanced mode)",
    name: "AE",
  },
  {
    description:
      "Application reject (original mode) / Application acknowledgement: reject (enhanced mode)",
    name: "AR",
  },
  {
    description: "Enhanced mode:  Application acknowledgement:  Commit Accept",
    name: "CA",
  },
  {
    description: "Enhanced mode:  Application acknowledgement:  Commit Error",
    name: "CE",
  },
  {
    description: "Enhanced mode:  Application acknowledgement:  Commit Reject",
    name: "CR",
  },
] as const;
