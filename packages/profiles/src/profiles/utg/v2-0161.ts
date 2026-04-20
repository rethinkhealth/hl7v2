// Generated UTG code system profile for v2-0161

export const id = "v2-0161";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0161";
export const oid = "2.16.840.1.113883.18.79";
export const name = "AllowSubstitution";
export const title = "allowSubstitution";
export const codes = [
  { code: "G", display: "Allow generic substitutions.", status: "active" },
  {
    code: "N",
    display: "Substitutions are NOT authorized.  (This is the default - null.)",
    status: "active",
  },
  { code: "T", display: "Allow therapeutic substitutions", status: "active" },
] as const;
