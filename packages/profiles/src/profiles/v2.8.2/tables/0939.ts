// Generated table profile for 0939 (v2.8.2)

export const id = "0939";
export const description = "Communication Location";
export const type = "hl7";
export const codes = [
  { description: "Diagnosis Code", name: "DG1-3" },
  {
    description: "Next of Kin / Associated Parties Job Code/Class",
    name: "NK1-11",
  },
  { description: "Organization Name - NK1", name: "NK1-13" },
  { description: "Ethnic Group", name: "NK1-28" },
  { description: "Race", name: "NK1-35" },
  { description: "Relevant Clinical Information", name: "OBR-13" },
  { description: "Ordering Provider", name: "OBR-16" },
  { description: "Result Handling", name: "OBR-49" },
  { description: "OBX segment following an OBR segment", name: "OBR-OBX" },
  { description: "Patient Address", name: "PID-11" },
  { description: "Phone Number - Home", name: "PID-13" },
  { description: "Phone Number - Business", name: "PID-14" },
  { description: "Patient Identifier List", name: "PID-3" },
  { description: "Phone Number", name: "PID-40" },
  { description: "Patient Name", name: "PID-5" },
  { description: "Mother's Maiden Name", name: "PID-6" },
  { description: "Date/Time of Birth", name: "PID-7" },
  { description: "Participation Person", name: "PRT-5" },
  { description: "Specimen Type", name: "SPM-4" },
  { description: "Specimen Source Site", name: "SPM-8" },
  { description: "OBX segment following an SPM segment", name: "SPM-OBX" },
] as const;
