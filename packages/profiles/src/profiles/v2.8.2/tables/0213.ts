// Generated table profile for 0213 (v2.8.2)

export const id = "0213";
export const description = "Purge Status Code";
export const type = "user";
export const codes = [
  {
    description:
      "The visit is marked for deletion and the user cannot enter new data against it.",
    name: "D",
  },
  {
    description:
      "The visit is marked inactive and the user cannot enter new data against it.",
    name: "I",
  },
  {
    description:
      "Marked for purge.  User is no longer able to update the visit.",
    name: "P",
  },
] as const;
