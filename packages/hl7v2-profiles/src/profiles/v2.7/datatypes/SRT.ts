// Generated datatype profile for SRT (v2.7)

export const id = "SRT";
export const version = "2.7";
export const kind = "composite";
export const title = "Sort Order";
export const components = [
  { sequence: 1, name: "Sort-by Field", datatypeId: "ST", required: true },
  { sequence: 2, name: "Sequencing", datatypeId: "ID", required: false },
] as const;
