// Generated UTG code system profile for v2-0548

export const id = "v2-0548";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0548";
export const oid = "2.16.840.1.113883.18.355";
export const name = "SignatorysRelationshipToSubject";
export const title = "signatorysRelationshipToSubject";
export const codes = [
  { code: "1", display: "Self", status: "active" },
  { code: "2", display: "Parent", status: "active" },
  { code: "3", display: "Next of Kin", status: "active" },
  {
    code: "4",
    display: "Durable Power of Attorney in Healthcare Affairs",
    status: "active",
  },
  { code: "5", display: "Conservator", status: "active" },
  {
    code: "6",
    display:
      "Emergent Practitioner (practitioner judging case as emergency requiring care without a consent)",
    status: "active",
  },
  {
    code: "7",
    display: "Non-Emergent Practitioner (i.e. medical ethics committee)",
    status: "active",
  },
] as const;
