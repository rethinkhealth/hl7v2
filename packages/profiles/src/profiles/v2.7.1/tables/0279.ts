// Generated table profile for 0279 (v2.7.1)

export const id = "0279";
export const description = "Allow Substitution Codes";
export const type = "user";
export const codes = [
  {
    description:
      "Contact the Placer Contact Person prior to making any substitutions of this resource",
    name: "Confirm",
  },
  { description: "Substitution of this resource is not allowed", name: "No" },
  {
    description:
      "Notify the Placer Contact Person, through normal institutional procedures, that a substitution of this resource has been made",
    name: "Notify",
  },
  { description: "Substitution of this resource is allowed", name: "Yes" },
] as const;
