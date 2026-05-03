// Generated segment profile for NTE (v2.3)

export const segmentId = "NTE";
export const fields = [
  {
    datatype: "SI",
    id: "NTE-1",
    item: "96",
    maxLength: 4,
    name: "Set ID - Notes and Comments",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "NTE-2",
    item: "97",
    maxLength: 8,
    name: "Source of Comment",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70105",
  },
  {
    datatype: "FT",
    id: "NTE-3",
    item: "98",
    maxLength: 65_536,
    name: "Comment",
    repeatable: true,
    required: false,
    sequence: 3,
  },
] as const;
