// Generated segment profile for PCE (v2.8.2)

export const segmentId = "PCE";
export const fields = [
  {
    datatype: "SI",
    id: "PCE-1",
    item: "2228",
    maxLength: 4,
    name: "Set ID - PCE",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CX",
    id: "PCE-2",
    item: "281",
    name: "Cost Center Account Number",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70319",
  },
  {
    datatype: "CWE",
    id: "PCE-3",
    item: "361",
    name: "Transaction Code",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70132",
  },
  {
    datatype: "CP",
    id: "PCE-4",
    item: "366",
    name: "Transaction amount - unit",
    repeatable: false,
    required: false,
    sequence: 4,
  },
] as const;
