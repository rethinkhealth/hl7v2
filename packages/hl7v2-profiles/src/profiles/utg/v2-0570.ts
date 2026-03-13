// Generated UTG code system profile for v2-0570

export const id = "v2-0570";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0570";
export const oid = "2.16.840.1.113883.18.370";
export const name = "PaymentMethod";
export const title = "paymentMethod";
export const codes = [
  { code: "CASH", display: "Cash", status: "active" },
  { code: "CCCA", display: "Credit Card", status: "active" },
  { code: "CCHK", display: "Cashier&#39;s Check", status: "active" },
  { code: "CDAC", display: "Credit/Debit Account", status: "active" },
  { code: "CHCK", display: "Check", status: "active" },
  { code: "DDPO", display: "Direct Deposit", status: "active" },
  { code: "DEBC", display: "Debit Card", status: "active" },
  {
    code: "SWFT",
    display:
      "Society for Worldwide Interbank Financial Telecommunications (S.W.I.F.T.)",
    status: "active",
  },
  { code: "TRAC", display: "Traveler&#39;s Check", status: "active" },
  {
    code: "VISN",
    display: "VISA Special Electronic Funds Transfer Network",
    status: "active",
  },
] as const;
