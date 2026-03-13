// Generated table profile for 0923 (v2.8.1)

export const id = "0923";
export const description = "Process Interruption";
export const type = "user";
export const codes = [
  {
    name: "ABR",
    description:
      "Aborted Run: Process interrupted after the Phlebotomist inserts the needle in the Donor's arm",
  },
  { name: "NIN", description: "Process was not interrupted" },
  {
    name: "WOT",
    description:
      "Walk Out: Process interrupted before the Phlebotomist inserts the needle in the Donor's arm",
  },
] as const;
