// Generated datatype profile for MOP (v2.6)

export const id = "MOP";
export const version = "2.6";
export const kind = "composite";
export const title = "Money or Percentage";
export const components = [
  {
    datatypeId: "ID",
    name: "Money or Percentage Indicator",
    required: true,
    sequence: 1,
  },
  {
    datatypeId: "NM",
    name: "Money or Percentage Quantity",
    required: true,
    sequence: 2,
  },
  {
    datatypeId: "ID",
    name: "Currency Denomination",
    required: false,
    sequence: 3,
  },
] as const;
