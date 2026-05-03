// Generated table profile for 0299 (v2.3)

export const id = "0299";
export const description = "Encoding";
export const type = "user";
export const codes = [
  {
    description: "no encoding - data are displayable ASCII characters.",
    name: "A",
  },
  {
    description:
      "encoding as defined by MIME (Multipurpose Internet Mail Extensions) standard RFC 1521.  Four consecutive ASCII characters represent three consecutive octets of binary data.",
    name: "Base64",
  },
  {
    description:
      "hexadecimal encoding - consecutive pairs of hexadecimal digits represent consecutive single octets.",
    name: "Hex",
  },
] as const;
