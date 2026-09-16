/**
 * The messages `glion send` reads: from files or stdin, one source holding
 * one message or several.
 *
 * @module
 */

import { readFile } from "node:fs/promises";

/** The source name that means stdin. */
export const STDIN_SOURCE = "-";

/** A line break followed by a segment header of `MSH`: where a message starts. */
const MESSAGE_START = /(?<=[\r\n])(?=MSH)/;

/**
 * Splits `text` into messages. A message starts at every line that begins
 * with `MSH`; whitespace-only chunks are dropped, and any text before the
 * first such line is a message of its own.
 */
export function splitMessages(text: string): string[] {
  return text.split(MESSAGE_START).filter((chunk) => chunk.trim().length > 0);
}

export type ReadMessagesResult =
  | { ok: true; messages: string[] }
  | { ok: false; reason: string };

/** Reads `stream` to a UTF-8 string. */
async function readStream(stream: NodeJS.ReadableStream): Promise<string> {
  stream.setEncoding("utf8");
  let data = "";
  for await (const chunk of stream) {
    data += chunk;
  }
  return data;
}

/**
 * Reads every source in order, {@link STDIN_SOURCE} from `stdin` and any
 * other from disk, and splits each with {@link splitMessages}. A source that
 * cannot be read is a `reason`.
 */
export async function readMessages(
  sources: readonly string[],
  stdin: NodeJS.ReadableStream
): Promise<ReadMessagesResult> {
  const messages: string[] = [];
  for (const source of sources) {
    let text: string;
    try {
      text =
        source === STDIN_SOURCE
          ? await readStream(stdin)
          : await readFile(source, "utf8");
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      const name = source === STDIN_SOURCE ? "stdin" : source;
      return { ok: false, reason: `Could not read ${name}: ${detail}` };
    }
    messages.push(...splitMessages(text));
  }
  return { messages, ok: true };
}
