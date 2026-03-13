// Generated datatype profile for MOP (v2.8.2)

export const id = "MOP";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Money or Percentage";
export const components = [
  {
    sequence: 1,
    name: "Money or Percentage Indicator",
    datatypeId: "ID",
    required: true,
  },
  {
    sequence: 2,
    name: "Money or Percentage Quantity",
    datatypeId: "NM",
    required: true,
  },
  {
    sequence: 3,
    name: "Monetary  Denomination",
    datatypeId: "ID",
    required: false,
  },
] as const;
