// Generated table profile for 0008 (v2.8.1)

export const id = "0008";
export const description = "Acknowledgment Code";
export const type = "hl7";
export const codes = [
  {
    name: "AA",
    description:
      "Original mode: Application Accept - Enhanced mode: Application acknowledgment: Accept",
  },
  {
    name: "AE",
    description:
      "Original mode: Application Error - Enhanced mode: Application acknowledgment: Error",
  },
  {
    name: "AR",
    description:
      "Original mode: Application Reject - Enhanced mode: Application acknowledgment: Reject",
  },
  {
    name: "CA",
    description: "Enhanced mode: Accept acknowledgment: Commit Accept",
  },
  {
    name: "CE",
    description: "Enhanced mode: Accept acknowledgment: Commit Error",
  },
  {
    name: "CR",
    description: "Enhanced mode: Accept acknowledgment: Commit Reject",
  },
] as const;
