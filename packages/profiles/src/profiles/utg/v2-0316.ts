// Generated UTG code system profile for v2-0316

export const id = "v2-0316";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0316";
export const oid = "2.16.840.1.113883.18.192";
export const name = "OrganDonorCodes";
export const title = "organDonorCodes";
export const codes = [
  {
    code: "F",
    display:
      "Yes, patient is a documented donor, but documentation is not on file",
    status: "active",
  },
  {
    code: "I",
    display:
      "No, patient is not a documented donor, but information was provided",
    status: "active",
  },
  {
    code: "N",
    display: "No, patient has not agreed to be a donor",
    status: "active",
  },
  {
    code: "P",
    display: "Patient leaves organ donation decision to a specific person",
    status: "active",
  },
  {
    code: "R",
    display: "Patient leaves organ donation decision to relatives",
    status: "active",
  },
  { code: "U", display: "Unknown", status: "active" },
  {
    code: "Y",
    display: "Yes, patient is a documented donor and documentation is on file",
    status: "active",
  },
] as const;
