// Generated segment profile for IAR (v2.8)

export const segmentId = "IAR";
export const fields = [
  {
    datatype: "CWE",
    id: "IAR-1",
    item: "3296",
    name: "Allergy Reaction Code",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CWE",
    id: "IAR-2",
    item: "3297",
    name: "Allergy Severity Code",
    repeatable: false,
    required: true,
    sequence: 2,
    table: "HL70128",
  },
  {
    datatype: "CWE",
    id: "IAR-3",
    item: "3298",
    name: "Sensitivity to Causative Agent Code",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70436",
  },
  {
    datatype: "ST",
    id: "IAR-4",
    item: "3299",
    name: "Management",
    repeatable: false,
    required: false,
    sequence: 4,
  },
] as const;
