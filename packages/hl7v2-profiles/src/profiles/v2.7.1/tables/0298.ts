// Generated table profile for 0298 (v2.7.1)

export const id = "0298";
export const description = "CP Range Type";
export const type = "hl7";
export const codes = [
  {
    name: "F",
    description:
      "Flat-rate. Apply the entire price to this interval, do not pro-rate the price if the full interval has not occurred/been consumed",
  },
  {
    name: "P",
    description:
      "Pro-rate. Apply this price to this interval, pro-rated by whatever portion of the interval has occurred/been consumed",
  },
] as const;
