// Generated table profile for 0174 (v2.2)

export const id = "0174";
export const description = "NATURE OF TEST/OBSERVATION";
export const type = "user";
export const codes = [
  {
    description: "Atomic test/observation (test code or treatment code)",
    name: "A",
  },
  {
    description:
      "Single observation calculated via a rule or formula from other independent observations (e.g., Alveolar--arterial ratio, cardiac output)",
    name: "C",
  },
  {
    description:
      "Functional procedure that may consist of one or more interrelated measures (e.g., glucose tolerance test, creatine clearance), usually done at different times and/or on different specimens",
    name: "F",
  },
  {
    description:
      "Profile or battery consisting of many independent atomic observations (e.g., SMA12, electrolytes), usually done at one instrument on one specimen",
    name: "P",
  },
  {
    description:
      "Superset--a set of batteries or procedures ordered under a single code unit but processed as separate batteries (e.g., routines = CBC, UA, electrolytes)",
    name: "S",
  },
] as const;
