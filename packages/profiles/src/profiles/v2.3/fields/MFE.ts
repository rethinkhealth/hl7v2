// Generated segment profile for MFE (v2.3)

export const segmentId = "MFE";
export const fields = [
  {
    datatype: "ID",
    id: "MFE-1",
    item: "664",
    maxLength: 3,
    name: "Record-Level Event Code",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70180",
  },
  {
    datatype: "ST",
    id: "MFE-2",
    item: "665",
    maxLength: 20,
    name: "MFN Control ID",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "TS",
    id: "MFE-3",
    item: "662",
    maxLength: 26,
    name: "Effective Date/Time",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CE",
    id: "MFE-4",
    item: "667",
    maxLength: 60,
    name: "Primary Key Value",
    repeatable: true,
    required: true,
    sequence: 4,
  },
] as const;
