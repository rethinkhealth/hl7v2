// Generated UTG code system profile for v2-0007

export const id = "v2-0007";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0007";
export const oid = "2.16.840.1.113883.18.9";
export const name = "AdmissionType";
export const title = "admissionType";
export const codes = [
  { code: "A", display: "Accident", status: "active" },
  { code: "C", display: "Elective", status: "active" },
  { code: "E", display: "Emergency", status: "active" },
  { code: "L", display: "Labor and Delivery", status: "active" },
  {
    code: "N",
    display: "Newborn (Birth in healthcare facility)",
    status: "active",
  },
  { code: "R", display: "Routine", status: "active" },
  { code: "U", display: "Urgent", status: "active" },
] as const;
