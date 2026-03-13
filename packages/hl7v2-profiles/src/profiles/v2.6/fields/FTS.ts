// Generated segment profile for FTS (v2.6)

export const segmentId = "FTS";
export const fields = [
  {
    sequence: 1,
    id: "FTS-1",
    required: false,
    repeatable: false,
    datatype: "NM",
    maxLength: 10,
    table: "HL70000",
    name: "File Batch Count",
    item: "79",
  },
  {
    sequence: 2,
    id: "FTS-2",
    required: false,
    repeatable: false,
    datatype: "ST",
    maxLength: 80,
    table: "HL70000",
    name: "File Trailer Comment",
    item: "80",
  },
] as const;
