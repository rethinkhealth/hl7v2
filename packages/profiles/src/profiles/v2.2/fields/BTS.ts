// Generated segment profile for BTS (v2.2)

export const segmentId = "BTS";
export const fields = [
  {
    datatype: "ST",
    id: "BTS-1",
    item: "93",
    maxLength: 10,
    name: "Batch Message Count",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ST",
    id: "BTS-2",
    item: "94",
    maxLength: 80,
    name: "Batch Comment",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CM",
    id: "BTS-3",
    item: "95",
    maxLength: 100,
    name: "Batch Totals",
    repeatable: true,
    required: false,
    sequence: 3,
  },
] as const;
