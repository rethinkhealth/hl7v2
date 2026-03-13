// Generated segment profile for NPU (v2.6)

export const segmentId = "NPU";
export const fields = [
  {
    sequence: 1,
    id: "NPU-1",
    required: true,
    repeatable: false,
    datatype: "PL",
    maxLength: 80,
    table: "HL70000",
    name: "Bed Location",
    item: "209",
  },
  {
    sequence: 2,
    id: "NPU-2",
    required: false,
    repeatable: false,
    datatype: "IS",
    table: "HL70116",
    name: "Bed Status",
    item: "170",
  },
] as const;
