// Generated table profile for 0178 (v2.7)

export const id = "0178";
export const description = "File Level Event Code";
export const type = "hl7";
export const codes = [
  {
    description:
      "Replace current version of this master file with the version contained in this message",
    name: "REP",
  },
  {
    description:
      "Change file records as defined in the record-level event codes for each record that follows",
    name: "UPD",
  },
] as const;
