import { parseHL7v2 } from "@rethinkhealth/hl7v2";
import { Mllp } from "@rethinkhealth/hl7v2-mllp";

export default new Mllp()
  .parser(parseHL7v2)
  .on("ADT^A01", (ctx) => ({
    raw: buildAck(ctx.controlId, "AA"),
  }))
  .on("*", (ctx) => ({
    raw: buildAck(ctx.controlId, "AR"),
  }));

function buildAck(controlId: string, code: "AA" | "AE" | "AR"): string {
  const ts = new Date().toISOString().replaceAll(/[-:T]/g, "").slice(0, 14);
  return (
    `MSH|^~\\&|GLION|BUN-EXAMPLE|UPSTREAM|UPSTREAM|${ts}||ACK|${controlId}|P|2.5.1\r` +
    `MSA|${code}|${controlId}\r`
  );
}
