// Generated table profile for 0919 (v2.8.1)

export const id = "0919";
export const description = "Exclusive Test";
export const type = "hl7";
export const codes = [
  {
    description:
      "In some cases, this test should be only exclusively with like tests (examples are cyto or pathology)",
    name: "D",
  },
  {
    description: "This test can be included with any number of other tests",
    name: "N",
  },
  { description: "This test should be exclusive", name: "Y" },
] as const;
