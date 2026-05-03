// Generated segment profile for ACC (v2.1)

export const segmentId = "ACC";
export const fields = [
  {
    datatype: "TS",
    id: "ACC-1",
    item: "182",
    maxLength: 19,
    name: "ACCIDENT DATE/TIME",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "ACC-2",
    item: "184",
    maxLength: 2,
    name: "ACCIDENT CODE",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70050",
  },
  {
    datatype: "ST",
    id: "ACC-3",
    item: "185",
    maxLength: 25,
    name: "ACCIDENT LOCATION",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
