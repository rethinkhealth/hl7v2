// Generated datatype profile for MOP (v2.5.1)

export const id = "MOP";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Money or Percentage";
export const components = [
  {
    sequence: 1,
    name: "Money or Percentage Indicator",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 2,
    name: "Money or Percentage Quantity",
    datatypeId: "NM",
    required: false,
  },
  {
    sequence: 3,
    name: "Currency Denomination",
    datatypeId: "ID",
    required: false,
  },
] as const;
