// Generated UTG code system profile for v2-0359

export const id = "v2-0359";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0359";
export const oid = "2.16.840.1.113883.18.218";
export const name = "DiagnosisPriority";
export const title = "diagnosisPriority";
export const codes = [
  { code: "...", display: "No suggested values defined", status: "deprecated" },
  { code: "0", display: "Not included in diagnosis ranking", status: "active" },
  { code: "1", display: "The primary diagnosis", status: "active" },
  { code: "2", display: "For  secondary diagnosis", status: "active" },
  {
    code: "2 ...",
    display: "For ranked secondary diagnoses",
    status: "active",
  },
  {
    code: "2 and higher",
    display: "for ranked secondary diagnoses",
    status: "active",
  },
  { code: "3", display: "For tertiary diagnosis", status: "active" },
  { code: "4", display: "For quaternary diagnosis", status: "active" },
] as const;
