// Generated datatype profile for OSP (v2.3.1)

export const id = "OSP";
export const version = "2.3.1";
export const kind = "composite";
export const title = "occurence span";
export const components = [
  {
    datatypeId: "CE",
    name: "occurrence span code",
    required: false,
    sequence: 1,
  },
  {
    datatypeId: "DT",
    name: "occurrence span start date",
    required: false,
    sequence: 2,
  },
  {
    datatypeId: "DT",
    name: "occurrence span stop date",
    required: false,
    sequence: 3,
  },
] as const;
