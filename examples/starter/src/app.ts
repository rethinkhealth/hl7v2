import { UnsupportedMessageTypeReject } from "@glion/ack";
import { parseHL7v2 } from "@glion/hl7v2";
import { Mllp } from "@glion/mllp";
import { ackMiddleware } from "@glion/mllp-ack";

const app = new Mllp();

app.parser(parseHL7v2);

// Turn handler return values into AA ACKs and throws into the matching NAK.
app.use(ackMiddleware());

// One route: accept ADT^A01 (patient admit).
app.on("ADT^A01", () => {
  // Returning normally produces an AA (Application Accept) ACK.
});

// Catch-all — reject anything else with an AR NAK.
app.on("*", (ctx) => {
  throw new UnsupportedMessageTypeReject(
    `Unsupported message type: ${ctx.messageType}^${ctx.triggerEvent}`
  );
});

export default app;
