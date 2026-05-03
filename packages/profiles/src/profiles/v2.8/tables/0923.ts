// Generated table profile for 0923 (v2.8)

export const id = "0923";
export const description = "Process Interruption";
export const type = "user";
export const codes = [
  {
    description:
      "Aborted Run: Process interrupted after the Phlebotomist inserts the needle in the Donor's arm",
    name: "ABR",
  },
  { description: "Process was not interrupted", name: "NIN" },
  {
    description:
      "Walk Out: Process interrupted before the Phlebotomist inserts the needle in the Donor's arm",
    name: "WOT",
  },
] as const;
