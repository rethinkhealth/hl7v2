// Generated segment profile for NPU (v2.7)

export const segmentId = "NPU";
export const fields = [
  {
    datatype: "PL",
    id: "NPU-1",
    item: "209",
    name: "Bed Location",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CWE",
    id: "NPU-2",
    item: "170",
    name: "Bed Status",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70116",
  },
] as const;
