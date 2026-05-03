// Generated table profile for 0008 (v2.7.1)

export const id = "0008";
export const description = "Acknowledgment Code";
export const type = "hl7";
export const codes = [
  {
    description:
      "Original mode: Application Accept - Enhanced mode: Application acknowledgment: Accept",
    name: "AA",
  },
  {
    description:
      "Original mode: Application Error - Enhanced mode: Application acknowledgment: Error",
    name: "AE",
  },
  {
    description:
      "Original mode: Application Reject - Enhanced mode: Application acknowledgment: Reject",
    name: "AR",
  },
  {
    description: "Enhanced mode: Accept acknowledgment: Commit Accept",
    name: "CA",
  },
  {
    description: "Enhanced mode: Accept acknowledgment: Commit Error",
    name: "CE",
  },
  {
    description: "Enhanced mode: Accept acknowledgment: Commit Reject",
    name: "CR",
  },
] as const;
