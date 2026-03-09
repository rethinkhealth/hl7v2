import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import type { Context } from "@rethinkhealth/hl7v2-mllp";
import { toHl7v2 } from "@rethinkhealth/hl7v2-to-hl7v2";
import { Timestamp } from "@rethinkhealth/hl7v2-util-timestamp";

type AckCode = "AA" | "AE" | "AR";

interface AckOptions {
  ctx: Context;
  code: AckCode;
  text?: string;
}

export function buildAck({ ctx, code, text }: AckOptions): string {
  const now = Timestamp.now();

  const tree = m(
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f("MLLP_SERVER"),
      f("EXAMPLE"),
      f(""),
      f(""),
      f(now.toString()),
      f(""),
      f(c("ACK"), c(ctx.triggerEvent)),
      f(`ACK${ctx.controlId}`),
      f("P"),
      f(ctx.version)
    ),
    s("MSA", f(code), f(ctx.controlId), ...(text ? [f(text)] : []))
  );

  return toHl7v2(tree);
}
