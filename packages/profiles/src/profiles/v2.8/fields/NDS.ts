// Generated segment profile for NDS (v2.8)

export const segmentId = "NDS";
export const fields = [
  {
    datatype: "NM",
    id: "NDS-1",
    item: "1398",
    name: "Notification Reference Number",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "DTM",
    id: "NDS-2",
    item: "1399",
    name: "Notification Date/Time",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "CWE",
    id: "NDS-3",
    item: "1400",
    name: "Notification Alert Severity",
    repeatable: false,
    required: true,
    sequence: 3,
    table: "HL70367",
  },
  {
    datatype: "CWE",
    id: "NDS-4",
    item: "1401",
    name: "Notification Code",
    repeatable: false,
    required: true,
    sequence: 4,
  },
] as const;
