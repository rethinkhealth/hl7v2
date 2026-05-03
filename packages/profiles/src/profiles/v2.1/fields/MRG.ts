// Generated segment profile for MRG (v2.1)

export const segmentId = "MRG";
export const fields = [
  {
    datatype: "CK",
    id: "MRG-1",
    item: "576",
    maxLength: 16,
    name: "PRIOR PATIENT ID - INTERNAL",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70061",
  },
  {
    datatype: "CK",
    id: "MRG-2",
    item: "577",
    maxLength: 16,
    name: "PRIOR ALTERNATE PATIENT ID",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70061",
  },
  {
    datatype: "CK",
    id: "MRG-3",
    item: "578",
    maxLength: 20,
    name: "PRIOR PATIENT ACCOUNT NUMBER",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70061",
  },
] as const;
