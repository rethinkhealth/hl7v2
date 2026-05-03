// Generated datatype profile for PRL (v2.5.1)

export const id = "PRL";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Parent Result Link";
export const components = [
  {
    datatypeId: "CE",
    name: "Parent Observation Identifier",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ST",
    name: "Parent Observation Sub-identifier",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "TX",
    name: "Parent Observation Value Descriptor",
    required: false,
    sequence: 3,
  },
] as const;
