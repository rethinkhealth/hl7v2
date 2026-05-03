// Generated table profile for 0076 (v2.1)

export const id = "0076";
export const description = "MESSAGE TYPE";
export const type = "hl7";
export const codes = [
  { description: "General Acknowledgment       CNT       II", name: "ACK" },
  { description: "Ancillary RPT (display)      ANR       VII", name: "ARD" },
  { description: "Add/change billing account   BLN       VI", name: "BAR" },
  { description: "Display response             QRY       V", name: "DSR" },
  { description: "Delayed acknowledgment       CNT       II", name: "MCF" },
  { description: "Observ. Result/record resp.  ANR       VII", name: "ORF" },
  { description: "Order                        ORD       IV", name: "ORM" },
  { description: "Order response message       ORD       IV", name: "ORR" },
  { description: "Observ. result/unsolicited   ANR       VII", name: "ORU" },
  { description: "Order status query           ORD       IV", name: "OSQ" },
  { description: "Unsolicited display          QRY       V", name: "UDM" },
] as const;
