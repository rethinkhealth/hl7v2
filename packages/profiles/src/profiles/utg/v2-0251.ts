// Generated UTG code system profile for v2-0251

export const id = "v2-0251";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0251";
export const oid = "2.16.840.1.113883.18.146";
export const name = "ActionTakenInResponseToTheEvent";
export const title = "actionTakenInResponseToTheEvent";
export const codes = [
  {
    code: "DI",
    display: "Product dose or frequency of use increased",
    status: "active",
  },
  {
    code: "DR",
    display: "Product dose or frequency of use reduced",
    status: "active",
  },
  { code: "N", display: "None", status: "active" },
  { code: "OT", display: "Other", status: "active" },
  { code: "WP", display: "Product withdrawn permanently", status: "active" },
  { code: "WT", display: "Product withdrawn temporarily", status: "active" },
] as const;
