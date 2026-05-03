// Generated segment profile for VAR (v2.8.1)

export const segmentId = "VAR";
export const fields = [
  {
    datatype: "EI",
    id: "VAR-1",
    item: "1212",
    name: "Variance Instance ID",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "DTM",
    id: "VAR-2",
    item: "1213",
    name: "Documented Date/Time",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "DTM",
    id: "VAR-3",
    item: "1214",
    name: "Stated Variance Date/Time",
    repeatable: false,
    required: false,
    sequence: 3,
  },
  {
    datatype: "XCN",
    id: "VAR-4",
    item: "1215",
    name: "Variance Originator",
    repeatable: true,
    required: false,
    sequence: 4,
  },
  {
    datatype: "CWE",
    id: "VAR-5",
    item: "1216",
    name: "Variance Classification",
    repeatable: false,
    required: false,
    sequence: 5,
  },
  {
    datatype: "ST",
    id: "VAR-6",
    item: "1217",
    name: "Variance Description",
    repeatable: true,
    required: false,
    sequence: 6,
  },
] as const;
