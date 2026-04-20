// Generated datatype profile for PRL (v2.5)

export const id = "PRL";
export const version = "2.5";
export const kind = "composite";
export const title = "Parent Result Link";
export const components = [
  {
    sequence: 1,
    name: "Parent Observation Identifier",
    datatypeId: "CE",
    required: false,
  },
  {
    sequence: 2,
    name: "Parent Observation Sub-identifier",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 3,
    name: "Parent Observation Value Descriptor",
    datatypeId: "TX",
    required: false,
  },
] as const;
