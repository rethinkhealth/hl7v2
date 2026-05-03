// Generated segment profile for RGS (v2.6)

export const segmentId = "RGS";
export const fields = [
  {
    datatype: "SI",
    id: "RGS-1",
    item: "1203",
    maxLength: 4,
    name: "Set ID - RGS",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "ID",
    id: "RGS-2",
    item: "763",
    maxLength: 3,
    name: "Segment Action Code",
    repeatable: false,
    required: false,
    sequence: 2,
    table: "HL70206",
  },
  {
    datatype: "CWE",
    id: "RGS-3",
    item: "1204",
    maxLength: 250,
    name: "Resource Group ID",
    repeatable: false,
    required: false,
    sequence: 3,
  },
] as const;
