// Generated segment profile for ODS (v2.8)

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
    datatype: "CWE",
    id: "ODS-2",
    item: "270",
    name: "Service Period",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CWE",
    id: "ODS-3",
    item: "271",
    name: "Diet, Supplement, or Preference Code",
    repeatable: false,
    required: true,
    sequence: 3,
  },
  {
    datatype: "ST",
    id: "ODS-4",
    item: "272",
    name: "Text Instruction",
    repeatable: false,
    required: false,
    sequence: 4,
  },
] as const;
