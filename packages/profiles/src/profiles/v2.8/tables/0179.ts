// Generated table profile for 0179 (v2.8)

export const id = "0179";
export const description = "Response Level";
export const type = "hl7";
export const codes = [
  {
    description:
      "Always.  All MFA segments (whether denoting errors or not) must be returned via the application-level acknowledgment message",
    name: "AL",
  },
  {
    description:
      "Error/Reject conditions only.  Only MFA segments denoting errors must be returned via the application-level acknowledgment for this message",
    name: "ER",
  },
  { description: "Never.  No application-level response needed", name: "NE" },
  {
    description:
      "Success.  Only MFA segments denoting success must be returned via the application-level acknowledgment for this message",
    name: "SU",
  },
] as const;
