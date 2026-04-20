// Generated segment profile for NDS (v2.8.1)

export const segmentId = "NDS";
export const fields = [
  {
    sequence: 1,
    id: "NDS-1",
    required: true,
    repeatable: false,
    datatype: "NM",
    name: "Notification Reference Number",
    item: "1398",
  },
  {
    sequence: 2,
    id: "NDS-2",
    required: true,
    repeatable: false,
    datatype: "DTM",
    name: "Notification Date/Time",
    item: "1399",
  },
  {
    sequence: 3,
    id: "NDS-3",
    required: true,
    repeatable: false,
    datatype: "CWE",
    table: "HL70367",
    name: "Notification Alert Severity",
    item: "1400",
  },
  {
    sequence: 4,
    id: "NDS-4",
    required: true,
    repeatable: false,
    datatype: "CWE",
    name: "Notification Code",
    item: "1401",
  },
] as const;
