// Generated datatype profile for SPS (v2.5.1)

export const id = "SPS";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Specimen Source";
export const components = [
  {
    datatypeId: "CWE",
    name: "Specimen Source Name or Code",
    required: false,
    sequence: 1,
  },
  { datatypeId: "CWE", name: "Additives", required: false, sequence: 2 },
  {
    datatypeId: "TX",
    name: "Specimen Collection Method",
    required: false,
    sequence: 3,
  },
  { datatypeId: "CWE", name: "Body Site", required: false, sequence: 4 },
  { datatypeId: "CWE", name: "Site Modifier", required: false, sequence: 5 },
  {
    datatypeId: "CWE",
    name: "Collection Method Modifier Code",
    required: false,
    sequence: 6,
  },
  { datatypeId: "CWE", name: "Specimen Role", required: false, sequence: 7 },
] as const;
