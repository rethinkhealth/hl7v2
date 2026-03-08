import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";

export function inboundMessage() {
  return m(
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f("SEND_APP"),
      f("SEND_FAC"),
      f("RECV_APP"),
      f("RECV_FAC"),
      f("20260307120000"),
      f(""),
      f(c("ADT"), c("A01"), c("ADT_A01")),
      f("CTRL001"),
      f("P"),
      f("2.5")
    ),
    s("PID", f("1"), f(""), f("12345"))
  );
}
