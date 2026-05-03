// Generated table profile for 0906 (v2.7.1)

export const id = "0906";
export const description = "ActPriority";
export const type = "user";
export const codes = [
  {
    description: "ASAP - As soon as possible, next highest priority after stat",
    name: "A",
  },
  {
    description:
      "Callback results - filler should contact the placer as soon as results are available, even for preliminary results",
    name: "CR",
  },
  {
    description:
      "Callback for scheduling - Filler should contact the placer (or target) to schedule the service.",
    name: "CS",
  },
  {
    description:
      "Callback placer for scheduling - filler should contact the placer to schedule the service",
    name: "CSP",
  },
  {
    description:
      "Contact recipient for scheduling - Filler should contact the service recipient (target) to schedule the service",
    name: "CSR",
  },
  {
    description:
      "Elective - Beneficial to the patient but not essential for survival.",
    name: "EL",
  },
  {
    description:
      "Emergency - An unforeseen combination of circumstances or the resulting state that calls for immediate action",
    name: "EM",
  },
  {
    description:
      "Preop - Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order",
    name: "P",
  },
  {
    description:
      'As needed - An "as needed"" order should be accompanied by a description of what constitutes a need.  This description is represented by an observation service predicate as a precondition."',
    name: "PRN",
  },
  {
    description: "Routine - Routine service, do at usual work hours",
    name: "R",
  },
  {
    description:
      "Rush reporting - A report should be prepared and sent as quickly as possible",
    name: "RR",
  },
  { description: "Stat - With highest priority (e.g. emergency).", name: "S" },
  {
    description:
      "Timing critical - It is critical to come as close as possible to the requested time (e.g. for a through antimicrobial level).",
    name: "T",
  },
  {
    description:
      "Use as directed - Drug is to be used as directed by the prescriber.",
    name: "UD",
  },
  { description: "Urgent - Calls for prompt action", name: "UR" },
] as const;
