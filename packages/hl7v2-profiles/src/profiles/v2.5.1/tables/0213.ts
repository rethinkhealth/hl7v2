// Generated table profile for 0213 (v2.5.1)

export const id = "0213";
export const description = "Purge Status Code";
export const type = "user";
export const codes = [
  {
    name: "D",
    description:
      "The visit is marked for deletion and the user cannot enter new data against it.",
  },
  {
    name: "I",
    description:
      "The visit is marked inactive and the user cannot enter new data against it.",
  },
  {
    name: "P",
    description:
      "Marked for purge.  User is no longer able to update the visit.",
  },
] as const;
