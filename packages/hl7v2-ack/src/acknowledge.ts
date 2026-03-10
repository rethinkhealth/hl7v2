import type { Field, Root, Segment } from "@rethinkhealth/hl7v2-ast";
import { c, f, m, s } from "@rethinkhealth/hl7v2-builder";
import {
  getTriggerEvent,
  getVersion,
} from "@rethinkhealth/hl7v2-util-message-info";
import { value } from "@rethinkhealth/hl7v2-util-query";
import { Timestamp } from "@rethinkhealth/hl7v2-util-timestamp";

import type { AckException } from "./errors";
import { uid } from "./uid";

export interface SendingInfo {
  application: string;
  facility: string;
}

export interface AcknowledgeOptions {
  id?: string;
  sending?: SendingInfo;
  processingId?: string;
  error?: AckException;
}

interface ExtractedFields {
  controlId: string;
  version: string;
  triggerEvent: string;
  processingId: string;
  originalSendingApp: string;
  originalSendingFac: string;
  originalReceivingApp: string;
  originalReceivingFac: string;
}

function extractFields(tree: Root): ExtractedFields {
  return {
    controlId: value(tree, "MSH-10")?.value ?? "",
    originalReceivingApp: value(tree, "MSH-5")?.value ?? "",
    originalReceivingFac: value(tree, "MSH-6")?.value ?? "",
    originalSendingApp: value(tree, "MSH-3")?.value ?? "",
    originalSendingFac: value(tree, "MSH-4")?.value ?? "",
    processingId: value(tree, "MSH-11")?.value ?? "P",
    triggerEvent: getTriggerEvent(tree) ?? "",
    version: getVersion(tree) ?? "2.5.1",
  };
}

function buildMshSegment(
  fields: ExtractedFields,
  sending: SendingInfo | undefined,
  processingId: string | undefined,
  controlId: string,
  messageTypeField: Field
): Segment {
  const ackSendingApp = sending?.application ?? fields.originalReceivingApp;
  const ackSendingFac = sending?.facility ?? fields.originalReceivingFac;
  const ackProcessingId = processingId ?? fields.processingId;
  const now = Timestamp.now();

  return s(
    "MSH",
    f("|"),
    f("^~\\&"),
    f(ackSendingApp),
    f(ackSendingFac),
    f(fields.originalSendingApp),
    f(fields.originalSendingFac),
    f(now.toString()),
    f(""),
    messageTypeField,
    f(controlId),
    f(ackProcessingId),
    f(fields.version)
  );
}

function buildErrSegment(error: AckException): Segment {
  return s(
    "ERR",
    f(""),
    f(error.location ?? ""),
    f(error.errorCode ?? ""),
    f(error.severity ?? "E"),
    f(""),
    f(""),
    f(""),
    f(error.userMessage ?? "")
  );
}

export function acknowledge(
  origin: Root,
  options: AcknowledgeOptions = {}
): Root {
  const { id, sending, processingId, error } = options;
  const fields = extractFields(origin);

  const ackControlId = id ?? uid();
  const code = error?.code ?? "AA";
  const messageTypeField = fields.triggerEvent
    ? f(c("ACK"), c(fields.triggerEvent))
    : f("ACK");

  const msaFields = [f(code), f(fields.controlId)];
  if (error?.text) {
    msaFields.push(f(error.text));
  }

  const segments: Segment[] = [
    buildMshSegment(
      fields,
      sending,
      processingId,
      ackControlId,
      messageTypeField
    ),
    s("MSA", ...msaFields),
  ];

  if (error?.errorCode) {
    segments.push(buildErrSegment(error));
  }

  return m(...segments);
}
