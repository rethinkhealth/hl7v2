// Generated datatype profile for CF (v2.4)

export const id = "CF";
export const version = "2.4";
export const kind = "composite";
export const title = "coded element with formatted values";
export const components = [
  { datatypeId: "ID", name: "identifier (ID)", required: false, sequence: 1 },
  { datatypeId: "FT", name: "formatted text", required: false, sequence: 2 },
  {
    datatypeId: "IS",
    name: "name of coding system",
    required: false,
    sequence: 3,
  },
  {
    datatypeId: "ID",
    name: "alternate identifier (ID)",
    required: false,
    sequence: 4,
  },
  {
    datatypeId: "FT",
    name: "alternate formatted text",
    required: false,
    sequence: 5,
  },
  {
    datatypeId: "IS",
    name: "name of alternate coding system",
    required: false,
    sequence: 6,
  },
] as const;
