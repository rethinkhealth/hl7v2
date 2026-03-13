// Generated UTG code system profile for v2-0478

export const id = "v2-0478";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0478";
export const oid = "2.16.840.1.113883.18.305";
export const name = "FormularyStatus";
export const title = "formularyStatus";
export const codes = [
  {
    code: "G",
    display:
      "Pharmaceutical substance is in the formulary, but guidelines apply",
    status: "active",
  },
  {
    code: "N",
    display: "Pharmaceutical substance is NOT in the formulary",
    status: "active",
  },
  {
    code: "R",
    display:
      "Pharmaceutical substance is in the formulary, but restrictions apply",
    status: "active",
  },
  {
    code: "Y",
    display: "Pharmaceutical substance is in the formulary",
    status: "active",
  },
] as const;
