// Generated segment profile for DMI (v2.8.1)

export const segmentId = "DMI";
export const fields = [
  {
    datatype: "CNE",
    id: "DMI-1",
    item: "382",
    name: "Diagnostic Related Group",
    repeatable: false,
    required: false,
    sequence: 1,
    table: "HL70055",
  },
  {
    datatype: "CNE",
    id: "DMI-2",
    item: "381",
    name: "Major Diagnostic Category",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70118",
  },
  {
    datatype: "NR",
    id: "DMI-3",
    item: "2231",
    name: "Lower and Upper Trim Points",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "NM",
    id: "DMI-4",
    item: "2232",
    name: "Average Length of Stay",
    repeatable: false,
    required: false,
    sequence: 4,
  },
  {
    datatype: "NM",
    id: "DMI-5",
    item: "2233",
    name: "Relative Weight",
    repeatable: false,
    required: false,
    sequence: 5,
  },
] as const;
