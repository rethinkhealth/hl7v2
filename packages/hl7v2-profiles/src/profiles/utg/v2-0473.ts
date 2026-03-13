// Generated UTG code system profile for v2-0473

export const id = "v2-0473";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0473";
export const oid = "2.16.840.1.113883.18.301";
export const name = "FormularyStatus";
export const title = "formularyStatus";
export const codes = [
  {
    code: "G",
    display: "This observation/service is on the formulary, and has guidelines",
    status: "active",
  },
  {
    code: "N",
    display: "This observation/service is not on the formulary",
    status: "active",
  },
  {
    code: "R",
    display: "This observation/service is on the formulary, but is restricted",
    status: "active",
  },
  {
    code: "Y",
    display: "This observation/service is on the formulary",
    status: "active",
  },
] as const;
