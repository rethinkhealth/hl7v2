// Generated segment profile for PSS (v2.8.1)

export const segmentId = "PSS";
export const fields = [
  {
    datatype: "EI",
    id: "PSS-1",
    item: "1946",
    name: "Provider Product/Service Section Number",
    repeatable: false,
    required: true,
    sequence: 1,
  },
  {
    datatype: "EI",
    id: "PSS-2",
    item: "1947",
    name: "Payer Product/Service Section Number",
    repeatable: false,
    required: false,
    sequence: 2,
  },
  {
    datatype: "SI",
    id: "PSS-3",
    item: "1948",
    maxLength: 4,
    name: "Product/Service Section Sequence Number",
    repeatable: false,
    required: true,
    sequence: 3,
  },
  {
    datatype: "CP",
    id: "PSS-4",
    item: "1949",
    name: "Billed Amount",
    repeatable: false,
    required: true,
    sequence: 4,
  },
  {
    datatype: "ST",
    id: "PSS-5",
    item: "2043",
    name: "Section Description or Heading",
    repeatable: false,
    required: true,
    sequence: 5,
  },
] as const;
