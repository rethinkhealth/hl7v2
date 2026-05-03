// Generated segment profile for NPU (v2.2)

export const segmentId = "NPU";
export const fields = [
  {
    datatype: "CM",
    id: "NPU-1",
    item: "209",
    maxLength: 12,
    name: "Bed Location",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70079",
  },
  {
    datatype: "ID",
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
