// Generated UTG code system profile for v2-0213

export const id = "v2-0213";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0213";
export const oid = "2.16.840.1.113883.18.117";
export const name = "PurgeStatus";
export const title = "purgeStatus";
export const codes = [
  {
    code: "D",
    display:
      "The visit is marked for deletion and the user cannot enter new data against it.",
    status: "active",
  },
  {
    code: "I",
    display:
      "The visit is marked inactive and the user cannot enter new data against it.",
    status: "active",
  },
  {
    code: "P",
    display: "Marked for purge.  User is no longer able to update the visit.",
    status: "active",
  },
] as const;
