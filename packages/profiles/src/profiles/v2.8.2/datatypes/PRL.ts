// Generated datatype profile for PRL (v2.8.2)

export const id = "PRL";
export const version = "2.8.2";
export const kind = "composite";
export const title = "Parent Result Link";
export const components = [
  {
    sequence: 1,
    name: "Parent Observation Identifier",
    datatypeId: "CWE",
    required: true,
  },
  {
    sequence: 2,
    name: "Parent Observation Sub-identifier",
    datatypeId: "OG",
    required: false,
  },
  {
    sequence: 3,
    name: "Parent Observation Value Descriptor",
    datatypeId: "TX",
    required: false,
  },
] as const;
