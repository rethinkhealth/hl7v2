// Generated segment profile for NTE (v2.1)

export const segmentId = "NTE";
export const fields = [
  {
    datatype: "SI",
    id: "NTE-1",
    item: "573",
    maxLength: 4,
    name: "SET ID - NOTES AND COMMENTS",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "NTE-2",
    item: "574",
    maxLength: 8,
    name: "SOURCE OF COMMENT",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70105",
  },
  {
    datatype: "TX",
    id: "NTE-3",
    item: "575",
    maxLength: 120,
    name: "COMMENT",
    repeatable: true,
    required: true,
    sequence: 3,
  },
] as const;
