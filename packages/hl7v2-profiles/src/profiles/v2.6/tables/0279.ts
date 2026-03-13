// Generated table profile for 0279 (v2.6)

export const id = "0279";
export const description = "Allow Substitution Codes";
export const type = "user";
export const codes = [
  {
    name: "Confirm",
    description:
      "Contact the Placer Contact Person prior to making any substitutions of this resource",
  },
  { name: "No", description: "Substitution of this resource is not allowed" },
  {
    name: "Notify",
    description:
      "Notify the Placer Contact Person, through normal institutional procedures, that a substitution of this resource has been made",
  },
  { name: "Yes", description: "Substitution of this resource is allowed" },
] as const;
