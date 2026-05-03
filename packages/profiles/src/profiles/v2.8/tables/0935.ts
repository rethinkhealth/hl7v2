// Generated table profile for 0935 (v2.8)

export const id = "0935";
export const description = "Process Interruption Reason";
export const type = "user";
export const codes = [
  { description: "Apheresis Software Crash", name: "ASC" },
  { description: "Manufacturing Software Crash", name: "BSC" },
  {
    description: "Couldn't follow through with donation (scared)",
    name: "CFT",
  },
  { description: "Bathroom", name: "DBB" },
  { description: "Couldn't wait", name: "DCW" },
  { description: "Phlebotomy Issue", name: "DNI" },
  { description: "General Facility Emergency", name: "GFE" },
  {
    description:
      "No reason given, donor decided to stop without giving a reason",
    name: "NRG",
  },
  { description: "Phone Call-Donor", name: "PCD" },
] as const;
