// Generated segment profile for BTS (v2.3.1)

export const segmentId = "BTS";
export const fields = [
  {
    sequence: 1,
    id: "BTS-1",
    required: false,
    repeatable: false,
    datatype: "ST",
    maxLength: 10,
    name: "Batch Message Count",
    item: "93",
  },
  {
    sequence: 2,
    id: "BTS-2",
    required: false,
    repeatable: false,
    datatype: "ST",
    maxLength: 80,
    name: "Batch Comment",
    item: "90",
  },
  {
    sequence: 3,
    id: "BTS-3",
    required: false,
    repeatable: true,
    datatype: "NM",
    maxLength: 100,
    name: "Batch Totals",
    item: "95",
  },
] as const;
