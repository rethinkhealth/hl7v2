// Generated UTG code system profile for v2-0505

export const id = "v2-0505";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0505";
export const oid = "2.16.840.1.113883.18.329";
export const name = "CyclicEntryExitIndicator";
export const title = "cyclicEntryExitIndicator";
export const codes = [
  {
    code: "*",
    display: "The first service request in a cyclic group",
    status: "retired",
  },
  {
    code: "#",
    display: "The last service request in a cyclic group.",
    status: "retired",
  },
  { code: "F", display: "First service", status: "active" },
  { code: "L", display: "Last service", status: "active" },
] as const;
