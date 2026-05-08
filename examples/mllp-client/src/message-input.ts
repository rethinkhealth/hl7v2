import { readFileSync } from "node:fs";

import { consola } from "consola";

import { loadSample } from "./samples";

export interface MessageInput {
  sample?: string;
  file?: string;
}

/**
 * Resolve the HL7v2 message to send from a sample name, a file path,
 * or stdin (in that order). Normalises line endings to CR per HL7v2.
 */
export async function readMessage(args: MessageInput): Promise<string> {
  if (args.sample) {
    consola.info(`Loaded sample: ${args.sample}`);
    return loadSample(args.sample);
  }

  if (args.file) {
    consola.info(`Loaded file: ${args.file}`);
    const content = readFileSync(args.file, "utf8");
    return normalise(content);
  }

  consola.info("Reading message from stdin...");
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk as Buffer);
  }
  return normalise(Buffer.concat(chunks).toString("utf8"));
}

function normalise(content: string): string {
  return content.replaceAll(/\r\n|\n/g, "\r").replace(/\r$/, "");
}
