// Generated table profile for 0912 (v2.8.1)

export const id = "0912";
export const description = "Participation";
export const type = "hl7";
export const codes = [
  { description: "Admitting Provider", name: "AD" },
  { description: "Assistant/Alternate Interpreter", name: "AI" },
  { description: "Administering Provider", name: "AP" },
  { description: "Assistant Result Interpreter", name: "ARI" },
  { description: "Attending Provider", name: "AT" },
  { description: "AUT Author/Event Initiator", name: "AUT" },
  { description: "Consulting Provider", name: "CP" },
  { description: "Dispensing Provider", name: "DP" },
  {
    description:
      "Entering Provider (probably not the same as transcriptionist)",
    name: "EP",
  },
  { description: "Equipment", name: "EQUIP" },
  { description: "Family Health Care Professional", name: "FHCP" },
  { description: "Medical Director", name: "MDIR" },
  { description: "Ordering Provider", name: "OP" },
  { description: "Packed by", name: "PB" },
  {
    description:
      "Pharmacist   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)",
    name: "PH",
  },
  { description: "Primary Interpreter", name: "PI" },
  { description: "Performing Organization", name: "PO" },
  { description: "Performing Organization Medical Director", name: "POMD" },
  { description: "Primary Care Provider", name: "PP" },
  { description: "Principal Result Interpreter", name: "PRI" },
  { description: "Results Copies To", name: "RCT" },
  { description: "Responsible Observer", name: "RO" },
  { description: "Referring Provider", name: "RP" },
  { description: "Referred to Provider", name: "RT" },
  { description: "Send by", name: "SB" },
  { description: "Specimen Collector", name: "SC" },
  { description: "Technician", name: "TN" },
  { description: "Transcriptionist", name: "TR" },
  { description: "Verifying Provider", name: "VP" },
  {
    description:
      "Verifying Pharmaceutical Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)",
    name: "VPS",
  },
  {
    description:
      "Verifying Treatment Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)",
    name: "VTS",
  },
  { description: "Waypoint", name: "WAY" },
  { description: "Waypoint Recipient", name: "WAYR" },
] as const;
