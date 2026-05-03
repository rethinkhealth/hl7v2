// Generated segment profile for ACC (v2.2)

export const segmentId = "ACC";
export const fields = [
  {
    datatype: "TS",
    id: "ACC-1",
    item: "527",
    maxLength: 26,
    name: "Accident date / time",
    repeatable: false,
    required: false,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "ACC-2",
    item: "528",
    maxLength: 2,
    name: "Accident code",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70050",
  },
  {
    datatype: "ST",
    id: "ACC-3",
    item: "529",
    maxLength: 25,
    name: "Accident location",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
