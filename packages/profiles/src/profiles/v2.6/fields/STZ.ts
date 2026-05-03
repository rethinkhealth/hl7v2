// Generated segment profile for STZ (v2.6)

export const segmentId = "STZ";
export const fields = [
  {
    datatype: "CWE",
    id: "STZ-1",
    item: "2213",
    maxLength: 250,
    name: "Sterilization Type",
    repeatable: false,
    required: false,
    sequence: 1,
    table: "HL70806",
  },
  {
    datatype: "CWE",
    id: "STZ-2",
    item: "2214",
    maxLength: 250,
    name: "Sterilization Cycle",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CWE",
    id: "STZ-3",
    item: "2215",
    maxLength: 250,
    name: "Maintenance Cycle",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70809",
  },
  {
    datatype: "CWE",
    id: "STZ-4",
    item: "2216",
    maxLength: 250,
    name: "Maintenance Type",
    repeatable: false,
    required: false,
    sequence: 4,
    table: "HL70811",
  },
] as const;
