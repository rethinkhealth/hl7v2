// Generated table profile for 0935 (v2.8.2)

export const id = "0935";
export const description = "Process Interruption Reason";
export const type = "user";
export const codes = [
  { name: "ASC", description: "Apheresis Software Crash" },
  { name: "BSC", description: "Manufacturing Software Crash" },
  {
    name: "CFT",
    description: "Couldn't follow through with donation (scared)",
  },
  { name: "DBB", description: "Bathroom" },
  { name: "DCW", description: "Couldn't wait" },
  { name: "DNI", description: "Phlebotomy Issue" },
  { name: "GFE", description: "General Facility Emergency" },
  {
    name: "NRG",
    description:
      "No reason given, donor decided to stop without giving a reason",
  },
  { name: "PCD", description: "Phone Call-Donor" },
] as const;
