// Generated UTG code system profile for v2-0298

export const id = "v2-0298";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0298";
export const oid = "2.16.840.1.113883.18.184";
export const name = "CpRangeType";
export const title = "cpRangeType";
export const codes = [
  {
    code: "F",
    display:
      "Flat-rate. Apply the entire price to this interval, do not pro-rate the price if the full interval has not occurred/been consumed",
    status: "active",
  },
  {
    code: "P",
    display:
      "Pro-rate. Apply this price to this interval, pro-rated by whatever portion of the interval has occurred/been consumed",
    status: "active",
  },
] as const;
