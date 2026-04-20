// Generated datatype profile for OSP (v2.4)

export const id = "OSP";
export const version = "2.4";
export const kind = "composite";
export const title = "occurence span";
export const components = [
  {
    sequence: 1,
    name: "occurrence span code",
    datatypeId: "CE",
    required: false,
  },
  {
    sequence: 2,
    name: "occurrence span start date",
    datatypeId: "DT",
    required: false,
  },
  {
    sequence: 3,
    name: "occurrence span stop date",
    datatypeId: "DT",
    required: false,
  },
] as const;
