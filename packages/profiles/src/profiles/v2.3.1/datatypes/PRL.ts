// Generated datatype profile for PRL (v2.3.1)

export const id = "PRL";
export const version = "2.3.1";
export const kind = "composite";
export const title = "parent result link";
export const components = [
  {
    datatypeId: "CE",
    name: "OBX-3 observation identifier of parent result",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "ST",
    name: "OBX-4 sub-ID of parent result",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "TX",
    name: "part of OBX-5 observation result from parent",
    required: false,
    sequence: 3,
  },
] as const;
