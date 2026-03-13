// Generated UTG code system profile for v2-0919

export const id = "v2-0919";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0919";
export const oid = "2.16.840.1.113883.18.425";
export const name = "ExclusiveTest";
export const title = "exclusiveTest";
export const codes = [
  {
    code: "D",
    display:
      "In some cases, this test should be only exclusively with like tests (examples are cyto or pathology)",
    status: "active",
  },
  {
    code: "N",
    display: "This test can be included with any number of other tests",
    status: "active",
  },
  { code: "Y", display: "This test should be exclusive", status: "active" },
] as const;
