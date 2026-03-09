import type { Root } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import {
  getTriggerEvent,
  getVersion,
} from "@rethinkhealth/hl7v2-util-message-info";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { Timestamp } from "@rethinkhealth/hl7v2-util-timestamp";

import type { AckError, AckReject } from "./errors";

export interface SendingInfo {
  application: string;
  facility: string;
}

export interface AcknowledgeOptions {
  tree: Root;
  sending: SendingInfo;
  error?: AckError | AckReject;
}

export function acknowledge(options: AcknowledgeOptions): Root {
  const { tree, sending, error } = options;

  const controlId = value(tree, "MSH-10")?.value ?? "";
  const version = getVersion(tree) ?? "2.5.1";
  const triggerEvent = getTriggerEvent(tree) ?? "";
  const sendingApp = value(tree, "MSH-3")?.value ?? "";
  const sendingFac = value(tree, "MSH-4")?.value ?? "";

  const now = Timestamp.now();
  const code = error?.code ?? "AA";

  const messageTypeField = triggerEvent
    ? f(c("ACK"), c(triggerEvent))
    : f("ACK");

  const msaFields = [f(code), f(controlId)];
  if (error?.text) {
    msaFields.push(f(error.text));
  }

  const segments = [
    s(
      "MSH",
      f("|"),
      f("^~\\&"),
      f(sending.application),
      f(sending.facility),
      f(sendingApp),
      f(sendingFac),
      f(now.toString()),
      f(""),
      messageTypeField,
      f(`ACK${controlId}`),
      f("P"),
      f(version)
    ),
    s("MSA", ...msaFields),
  ];

  if (error?.errorCode) {
    const errFields = [
      f(""),
      f(error.location ?? ""),
      f(error.errorCode),
      f(error.severity ?? "E"),
      f(""),
      f(""),
      f(""),
      f(error.userMessage ?? ""),
    ];

    segments.push(s("ERR", ...errFields));
  }

  return m(...segments);
}
