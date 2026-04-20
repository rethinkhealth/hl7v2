// Generated table profile for 0076 (v2.1)

export const id = "0076";
export const description = "MESSAGE TYPE";
export const type = "hl7";
export const codes = [
  { name: "ACK", description: "General Acknowledgment       CNT       II" },
  { name: "ARD", description: "Ancillary RPT (display)      ANR       VII" },
  { name: "BAR", description: "Add/change billing account   BLN       VI" },
  { name: "DSR", description: "Display response             QRY       V" },
  { name: "MCF", description: "Delayed acknowledgment       CNT       II" },
  { name: "ORF", description: "Observ. Result/record resp.  ANR       VII" },
  { name: "ORM", description: "Order                        ORD       IV" },
  { name: "ORR", description: "Order response message       ORD       IV" },
  { name: "ORU", description: "Observ. result/unsolicited   ANR       VII" },
  { name: "OSQ", description: "Order status query           ORD       IV" },
  { name: "UDM", description: "Unsolicited display          QRY       V" },
] as const;
