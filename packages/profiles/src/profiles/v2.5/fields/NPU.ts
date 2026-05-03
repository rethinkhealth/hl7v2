// Generated segment profile for NPU (v2.5)

export const segmentId = "NPU";
export const fields = [
  {
    datatype: "PL",
    id: "NPU-1",
    item: "209",
    maxLength: 80,
    name: "Bed Location",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "IS",
    id: "NPU-2",
    item: "170",
    maxLength: 1,
    name: "Bed Status",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70116",
  },
] as const;
