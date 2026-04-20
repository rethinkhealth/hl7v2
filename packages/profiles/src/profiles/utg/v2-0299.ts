// Generated UTG code system profile for v2-0299

export const id = "v2-0299";
export const url = "http://terminology.hl7.org/CodeSystem/v2-0299";
export const oid = "2.16.840.1.113883.18.185";
export const name = "Encoding";
export const title = "encoding";
export const codes = [
  {
    code: "A",
    display: "No encoding - data are displayable ASCII characters.",
    status: "active",
  },
  {
    code: "Base64",
    display:
      "Encoding as defined by MIME (Multipurpose Internet Mail Extensions) standard RFC 1521. Four consecutive ASCII characters represent three consecutive octets of binary data. Base64 utilizes a 65-character subset of US-ASCII, consisting of both the upper and",
    status: "active",
  },
  {
    code: "Hex",
    display:
      "Hexadecimal encoding - consecutive pairs of hexadecimal digits represent consecutive single octets.",
    status: "active",
  },
] as const;
