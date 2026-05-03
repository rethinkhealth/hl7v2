// Generated segment profile for ODS (v2.5.1)

export const segmentId = "ODS";
export const fields = [
  {
    datatype: "ID",
    id: "ODS-1",
    item: "269",
    maxLength: 1,
    name: "Type",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70159",
  },
  {
    datatype: "CE",
    id: "ODS-2",
    item: "270",
    maxLength: 250,
    name: "Service Period",
    repeatable: true,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CE",
    id: "ODS-3",
    item: "271",
    maxLength: 250,
    name: "Diet, Supplement, or Preference Code",
    repeatable: true,
    required: true,
    sequence: 3,
  },
  {
    datatype: "ST",
    id: "ODS-4",
    item: "272",
    maxLength: 80,
    name: "Text Instruction",
    repeatable: true,
    required: false,
    sequence: 4,
  },
] as const;
