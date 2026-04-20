// Generated table profile for 0299 (v2.7)

export const id = "0299";
export const description = "Encoding";
export const type = "hl7";
export const codes = [
  {
    name: "A",
    description: "No encoding - data are displayable ASCII characters.",
  },
  {
    name: "Base64",
    description:
      "Encoding as defined by MIME (Multipurpose Internet Mail Extensions) standard RFC 1521. Four consecutive ASCII characters represent three consecutive octets of binary data. Base64 utilizes a 65-character subset of US-ASCII, consisting of both the upper and",
  },
  {
    name: "Hex",
    description:
      "Hexadecimal encoding - consecutive pairs of hexadecimal digits represent consecutive single octets.",
  },
] as const;
