// Generated segment profile for MRG (v2.2)

export const segmentId = "MRG";
export const fields = [
  {
    datatype: "CM",
    id: "MRG-1",
    item: "211",
    maxLength: 20,
    name: "Prior Patient ID - Internal",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "CM",
    id: "MRG-2",
    item: "212",
    maxLength: 16,
    name: "Prior Alternate Patient ID",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CK",
    id: "MRG-3",
    item: "213",
    maxLength: 20,
    name: "Prior Patient Account Number",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "CK",
    id: "MRG-4",
    item: "214",
    maxLength: 16,
    name: "Prior Patient ID - External",
    repeatable: false,
    required: false,
    sequence: 4,
  },
] as const;
