// Generated table profile for 0368 (v2.4)

export const id = "0368";
export const description = "Remote control command";
export const type = "hl7";
export const codes = [
  { description: "Abort", name: "AB" },
  { description: "Clear", name: "CL" },
  { description: "Clear Notification", name: "CN" },
  { description: "Disable Sending Events", name: "DI" },
  { description: "Enable Sending Events", name: "EN" },
  { description: "Emergency -stop", name: "ES" },
  {
    description: "Execute (command specified in field Parameters (ST) 01394)",
    name: "EX",
  },
  { description: "Initialize/Initiate", name: "IN" },
  { description: "Local Control Request", name: "LC" },
  { description: "Lock", name: "LK" },
  { description: "Load", name: "LO" },
  { description: "Pause", name: "PA" },
  { description: "Remote Control Request", name: "RC" },
  { description: "Resume", name: "RE" },
  { description: "Sampling", name: "SA" },
  { description: "Setup", name: "SU" },
  { description: "Transport To", name: "TT" },
  { description: "Unlock", name: "UC" },
  { description: "Unload", name: "UN" },
] as const;
