// Generated segment profile for RMI (v2.4)

export const segmentId = "RMI";
export const fields = [
  {
    datatype: "CE",
    id: "RMI-1",
    item: "1530",
    maxLength: 250,
    name: "Risk Management Incident Code",
    repeatable: false,
    required: false,
    sequence: 1,
    table: "HL70427",
  },
  {
    datatype: "TS",
    id: "RMI-2",
    item: "1531",
    maxLength: 26,
    name: "Date/Time Incident",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "CE",
    id: "RMI-3",
    item: "1533",
    maxLength: 250,
    name: "Incident Type Code",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70428",
  },
] as const;
