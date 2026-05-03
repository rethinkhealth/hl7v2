// Generated table profile for 0123 (v2.7)

export const id = "0123";
export const description = "Result Status";
export const type = "hl7";
export const codes = [
  { description: "Some, but not all, results available", name: "A" },
  { description: "Correction to results", name: "C" },
  {
    description:
      "Final results; results stored and verified.  Can only be changed with a corrected result.",
    name: "F",
  },
  {
    description:
      "No results available; specimen received, procedure incomplete",
    name: "I",
  },
  { description: "Order received; specimen not yet received", name: "O" },
  {
    description:
      "Preliminary: A verified early result is available, final results not yet obtained",
    name: "P",
  },
  { description: "Results stored; not yet verified", name: "R" },
  {
    description: "No results available; procedure scheduled, but not done",
    name: "S",
  },
  { description: "No results available; Order canceled.", name: "X" },
  {
    description: "No order on record for this test.  (Used only on queries)",
    name: "Y",
  },
  {
    description: "No record of this patient. (Used only on queries)",
    name: "Z",
  },
] as const;
