import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { ackMiddleware } from "@rethinkhealth/hl7v2-mllp-ack";

export default new Mllp()
  .parser(parseHL7v2)
  .use(ackMiddleware())
  .on("ADT^A01", () => {
    // Handler logic here — ackMiddleware sends the AA automatically.
  })
  .on("*", () => {
    // Catch-all — ackMiddleware sends AA for any unhandled message type.
  });
