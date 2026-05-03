// Generated table profile for 0008 (v2.3)

export const id = "0008";
export const description = "Acknowledgement Code";
export const type = "hl7";
export const codes = [
  {
    description:
      "Original mode:  Application Accept / Enhanced mode:  Application acknowledgement:  Accept",
    name: "AA",
  },
  {
    description:
      "Original mode:  Application Error / Enhanced mode:  Application acknowledgement:  Error",
    name: "AE",
  },
  {
    description:
      "Original mode:  Application Reject / Enhanced mode:  Application acknowledgement:  Reject",
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
