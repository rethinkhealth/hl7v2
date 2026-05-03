// Generated datatype profile for SRT (v2.7.1)

export const id = "SRT";
export const version = "2.7.1";
export const kind = "composite";
export const title = "Sort Order";
export const components = [
  { datatypeId: "ST", name: "Sort-by Field", required: true, sequence: 1 },
  { datatypeId: "ID", name: "Sequencing", required: false, sequence: 2 },
] as const;
