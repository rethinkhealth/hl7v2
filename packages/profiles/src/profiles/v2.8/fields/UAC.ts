// Generated segment profile for UAC (v2.8)

export const segmentId = "UAC";
export const fields = [
  {
    datatype: "CWE",
    id: "UAC-1",
    item: "2267",
    name: "User Authentication Credential Type Code",
    repeatable: false,
    required: true,
    sequence: 1,
    table: "HL70615",
  },
  {
    datatype: "ED",
    id: "UAC-2",
    item: "2268",
    name: "User Authentication Credential",
    repeatable: false,
    required: true,
    sequence: 2,
  },
] as const;
