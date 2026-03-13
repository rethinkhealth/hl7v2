// Generated UTG code system profile for v2-0315

export const id = "v2-0315";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0315";
export const oid = "2.16.840.1.113883.18.190";
export const name = "LivingWillCodes";
export const title = "livingWillCodes";
export const codes = [
  {
    code: "F",
    display: "Yes, patient has a living will but it is not on file",
    status: "active",
  },
  {
    code: "I",
    display:
      "No, patient does not have a living will but information was provided",
    status: "active",
  },
  {
    code: "N",
    display:
      "No, patient does not have a living will and no information was provided",
    status: "active",
  },
  { code: "U", display: "Unknown", status: "active" },
  { code: "Y", display: "Yes, patient has a living will", status: "active" },
] as const;
