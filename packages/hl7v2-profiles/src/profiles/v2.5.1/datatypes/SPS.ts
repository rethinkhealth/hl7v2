// Generated datatype profile for SPS (v2.5.1)

export const id = "SPS";
export const version = "2.5.1";
export const kind = "composite";
export const title = "Specimen Source";
export const components = [
  {
    sequence: 1,
    name: "Specimen Source Name or Code",
    datatypeId: "CWE",
    required: false,
  },
  { sequence: 2, name: "Additives", datatypeId: "CWE", required: false },
  {
    sequence: 3,
    name: "Specimen Collection Method",
    datatypeId: "TX",
    required: false,
  },
  { sequence: 4, name: "Body Site", datatypeId: "CWE", required: false },
  { sequence: 5, name: "Site Modifier", datatypeId: "CWE", required: false },
  {
    sequence: 6,
    name: "Collection Method Modifier Code",
    datatypeId: "CWE",
    required: false,
  },
  { sequence: 7, name: "Specimen Role", datatypeId: "CWE", required: false },
] as const;
