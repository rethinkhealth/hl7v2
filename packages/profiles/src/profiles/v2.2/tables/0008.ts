// Generated table profile for 0008 (v2.2)

export const id = "0008";
export const description = "ACKNOWLEDGMENT CODE";
export const type = "hl7";
export const codes = [
  {
    name: "AA",
    description:
      "Application accept (original mode) / Application acknowledgement: accept (enhanced mode)",
  },
  {
    name: "AE",
    description:
      "Application error (original mode) / Application acknowledgement: error (enhanced mode)",
  },
  {
    name: "AR",
    description:
      "Application reject (original mode) / Application acknowledgement: reject (enhanced mode)",
  },
  {
    name: "CA",
    description: "Enhanced mode:  Application acknowledgement:  Commit Accept",
  },
  {
    name: "CE",
    description: "Enhanced mode:  Application acknowledgement:  Commit Error",
  },
  {
    name: "CR",
    description: "Enhanced mode:  Application acknowledgement:  Commit Reject",
  },
] as const;
