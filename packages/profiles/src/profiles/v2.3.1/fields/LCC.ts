// Generated segment profile for LCC (v2.3.1)

export const segmentId = "LCC";
export const fields = [
  {
    datatype: "PL",
    id: "LCC-1",
    item: "979",
    maxLength: 200,
    name: "Primary Key Value - LCC",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "IS",
    id: "LCC-2",
    item: "964",
    maxLength: 10,
    name: "Location Department",
    repeatable: false,
    required: true,
    sequence: 2,
    table: "HL70264",
  },
  {
    datatype: "CE",
    id: "LCC-3",
    item: "980",
    maxLength: 60,
    name: "Accommodation Type",
    repeatable: true,
    required: false,
    sequence: 3,
    table: "HL70129",
  },
  {
    datatype: "CE",
    id: "LCC-4",
    item: "981",
    maxLength: 60,
    name: "Charge Code",
    repeatable: true,
    required: true,
    sequence: 4,
    table: "HL70132",
  },
] as const;
