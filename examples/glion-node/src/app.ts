import { parseHL7v2 } from "@glion/hl7v2";
import { Mllp } from "@glion/mllp";
import { ackMiddleware } from "@glion/mllp-ack";

export default new Mllp()
  .parser(parseHL7v2)
  .use(ackMiddleware())
  .on("ADT^A01", () => {
    // Handler logic here — ackMiddleware sends the AA automatically.
  })
  .on("*", () => {
    // Catch-all — ackMiddleware sends AA for any unhandled message type.
  });
