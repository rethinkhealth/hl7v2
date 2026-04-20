// Generated segment profile for NPU (v2.1)

export const segmentId = "NPU";
export const fields = [
  {
    sequence: 1,
    id: "NPU-1",
    required: true,
    repeatable: false,
    datatype: "ID",
    maxLength: 12,
    table: "HL70079",
    name: "BED LOCATION",
    item: "785",
  },
  {
    sequence: 2,
    id: "NPU-2",
    required: false,
    repeatable: false,
    datatype: "ID",
    maxLength: 1,
    table: "HL70116",
    name: "BED STATUS",
    item: "671",
  },
] as const;
