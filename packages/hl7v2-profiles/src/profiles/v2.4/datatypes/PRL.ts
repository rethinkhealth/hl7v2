// Generated datatype profile for PRL (v2.4)

export const id = "PRL";
export const version = "2.4";
export const kind = "composite";
export const title = "parent result link";
export const components = [
  {
    sequence: 1,
    name: "OBX-3 observation identifier of parent result",
    datatypeId: "CE",
    required: false,
  },
  {
    sequence: 2,
    name: "OBX-4 sub-ID of parent result",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 3,
    name: "part of OBX-5 observation result from parent",
    datatypeId: "TX",
    required: false,
  },
] as const;
