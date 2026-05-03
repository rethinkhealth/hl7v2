// Generated segment profile for NDS (v2.5)

export const segmentId = "NDS";
export const fields = [
  {
    datatype: "NM",
    id: "NDS-1",
    item: "1398",
    maxLength: 20,
    name: "Notification Reference Number",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "TS",
    id: "NDS-2",
    item: "1399",
    maxLength: 26,
    name: "Notification Date/Time",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "CE",
    id: "NDS-3",
    item: "1400",
    maxLength: 250,
    name: "Notification Alert Severity",
    repeatable: false,
    required: true,
    sequence: 3,
    table: "HL70367",
  },
  {
    datatype: "CE",
    id: "NDS-4",
    item: "1401",
    maxLength: 250,
    name: "Notification Code",
    repeatable: false,
    required: true,
    sequence: 4,
  },
] as const;
