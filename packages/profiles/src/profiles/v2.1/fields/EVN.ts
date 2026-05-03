// Generated segment profile for EVN (v2.1)

export const segmentId = "EVN";
export const fields = [
  {
    datatype: "ID",
    id: "EVN-1",
    item: "29",
    maxLength: 3,
    name: "EVENT TYPE CODE",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70003",
  },
  {
    datatype: "TS",
    id: "EVN-2",
    item: "30",
    maxLength: 19,
    name: "DATE/TIME OF EVENT",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "TS",
    id: "EVN-3",
    item: "32",
    maxLength: 19,
    name: "DATE/TIME PLANNED EVENT",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "ID",
    id: "EVN-4",
    item: "369",
    maxLength: 3,
    name: "EVENT REASON CODE",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70062",
  },
] as const;
