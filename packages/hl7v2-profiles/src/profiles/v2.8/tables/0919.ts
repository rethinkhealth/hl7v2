// Generated table profile for 0919 (v2.8)

export const id = "0919";
export const description = "Exclusive Test";
export const type = "hl7";
export const codes = [
  {
    name: "D",
    description:
      "In some cases, this test should be only exclusively with like tests (examples are cyto or pathology)",
  },
  {
    name: "N",
    description: "This test can be included with any number of other tests",
  },
  { name: "Y", description: "This test should be exclusive" },
] as const;
