// Generated datatype profile for CF (v2.3)

export const id = "CF";
export const version = "2.3";
export const kind = "composite";
export const title = "coded element with formatted values";
export const components = [
  { sequence: 1, name: "identifier", datatypeId: "ID", required: false },
  { sequence: 2, name: "formatted text", datatypeId: "FT", required: false },
  {
    sequence: 3,
    name: "name of coding system",
    datatypeId: "ST",
    required: false,
  },
  {
    sequence: 4,
    name: "alternate identifier",
    datatypeId: "ID",
    required: false,
  },
  {
    sequence: 5,
    name: "alternate formatted text",
    datatypeId: "FT",
    required: false,
  },
  {
    sequence: 6,
    name: "name of alternate coding system",
    datatypeId: "ST",
    required: false,
  },
] as const;
