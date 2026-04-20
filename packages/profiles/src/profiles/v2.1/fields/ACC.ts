// Generated segment profile for ACC (v2.1)

export const segmentId = "ACC";
export const fields = [
  {
    sequence: 1,
    id: "ACC-1",
    required: false,
    repeatable: false,
    datatype: "TS",
    maxLength: 19,
    name: "ACCIDENT DATE/TIME",
    item: "182",
  },
  {
    sequence: 2,
    id: "ACC-2",
    required: false,
    repeatable: false,
    datatype: "ID",
    maxLength: 2,
    table: "HL70050",
    name: "ACCIDENT CODE",
    item: "184",
  },
  {
    sequence: 3,
    id: "ACC-3",
    required: false,
    repeatable: false,
    datatype: "ST",
    maxLength: 25,
    name: "ACCIDENT LOCATION",
    item: "185",
  },
] as const;
