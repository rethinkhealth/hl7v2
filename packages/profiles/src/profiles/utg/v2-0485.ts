// Generated UTG code system profile for v2-0485

export const id = "v2-0485";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0485";
export const oid = "2.16.840.1.113883.18.310";
export const name = "ExtendedPriorityCodes";
export const title = "extendedPriorityCodes";
export const codes = [
  { code: "A", display: "ASAP", status: "active" },
  { code: "C", display: "Callback", status: "active" },
  { code: "P", display: "Preop", status: "active" },
  { code: "PRN", display: "As needed", status: "active" },
  { code: "R", display: "Routine", status: "active" },
  { code: "S", display: "Stat", status: "active" },
  { code: "T", display: "Timing critical", status: "active" },
  {
    code: "TD&lt;integer&gt;",
    display: "Timing critical within &lt;integer&gt; days.",
    status: "deprecated",
  },
  {
    code: "TH&lt;integer&gt;",
    display: "Timing critical within &lt;integer&gt; hours.",
    status: "deprecated",
  },
  {
    code: "TL&lt;integer&gt;",
    display: "Timing critical within &lt;integer&gt; months.",
    status: "deprecated",
  },
  {
    code: "TM&lt;integer&gt;",
    display: "Timing critical within &lt;integer&gt; minutes.",
    status: "deprecated",
  },
  {
    code: "TS&lt;integer&gt;",
    display: "Timing critical within &lt;integer&gt; seconds.",
    status: "deprecated",
  },
  {
    code: "TW&lt;integer&gt;",
    display: "Timing critical within &lt;integer&gt; weeks.",
    status: "deprecated",
  },
] as const;
