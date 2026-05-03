// Generated table profile for 0485 (v2.8)

export const id = "0485";
export const description = "Extended Priority Codes";
export const type = "user";
export const codes = [
  { description: "ASAP", name: "A" },
  { description: "Callback", name: "C" },
  { description: "Preop", name: "P" },
  { description: "As needed", name: "PRN" },
  { description: "Routine", name: "R" },
  { description: "Stat", name: "S" },
  { description: "Timing critical", name: "T" },
  {
    description: "Timing critical within <integer> days.",
    name: "TD<integer>",
  },
  {
    description: "Timing critical within <integer> hours.",
    name: "TH<integer>",
  },
  {
    description: "Timing critical within <integer> months.",
    name: "TL<integer>",
  },
  {
    description: "Timing critical within <integer> minutes.",
    name: "TM<integer>",
  },
  {
    description: "Timing critical within <integer> seconds.",
    name: "TS<integer>",
  },
  {
    description: "Timing critical within <integer> weeks.",
    name: "TW<integer>",
  },
] as const;
