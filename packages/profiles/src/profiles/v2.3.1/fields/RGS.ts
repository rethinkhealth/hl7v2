// Generated segment profile for RGS (v2.3.1)

export const segmentId = "RGS";
export const fields = [
  {
    sequence: 1,
    id: "RGS-1",
    required: true,
    repeatable: false,
    datatype: "SI",
    maxLength: 4,
    name: "Set ID - RGS",
    item: "1203",
  },
  {
    sequence: 2,
    id: "RGS-2",
    required: false,
    repeatable: false,
    datatype: "ID",
    maxLength: 3,
    table: "HL70206",
    name: "Segment Action Code",
    item: "763",
  },
  {
    sequence: 3,
    id: "RGS-3",
    required: false,
    repeatable: false,
    datatype: "CE",
    maxLength: 200,
    name: "Resource Group ID",
    item: "1204",
  },
] as const;
