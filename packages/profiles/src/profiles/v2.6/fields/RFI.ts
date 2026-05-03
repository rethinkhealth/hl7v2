// Generated segment profile for RFI (v2.6)

export const segmentId = "RFI";
export const fields = [
  {
    datatype: "DTM",
    id: "RFI-1",
    item: "1910",
    maxLength: 24,
    name: "Request Date",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "DTM",
    id: "RFI-2",
    item: "1911",
    maxLength: 24,
    name: "Response Due Date",
    repeatable: false,
    required: true,
    sequence: 2,
  },
  {
    datatype: "ID",
    id: "RFI-3",
    item: "1912",
    maxLength: 1,
    name: "Patient Consent",
    repeatable: false,
    required: false,
    sequence: 3,
    table: "HL70136",
  },
  {
    datatype: "DTM",
    id: "RFI-4",
    item: "1913",
    maxLength: 24,
    name: "Date Additional Information was submitted",
    repeatable: false,
    required: false,
    sequence: 4,
  },
] as const;
