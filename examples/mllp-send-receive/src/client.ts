import { once } from "node:events";
import { readFileSync } from "node:fs";
import { createConnection } from "node:net";
import { Readable } from "node:stream";

import { createDecoderStream, encode } from "@rethinkhealth/hl7v2-mllp";
import { defineCommand, runMain } from "citty";
import { consola } from "consola";

import { listSamples, loadSample } from "./samples";

async function sendMessage(
  host: string,
  port: number,
  message: string
): Promise<void> {
  const socket = createConnection({ host, port });

  // Wait for the connection to be established
  await once(socket, "connect");

  // Send the MLLP-framed message
  const frame = encode(message);
  socket.write(frame);

  // Set up decoder to read the response
  const webReadable = Readable.toWeb(socket) as ReadableStream<Uint8Array>;
  const decoder = createDecoderStream();
  const reader = webReadable.pipeThrough(decoder).getReader();

  // Set a timeout
  socket.setTimeout(10_000, () => {
    consola.error("Connection timed out");
    socket.destroy();
  });

  // Read the first response (the ACK)
  try {
    const { done, value } = await reader.read();
    if (done || !value) {
      consola.warn("No response received");
    } else {
      consola.success(`Response received (${value.byteLength} bytes):`);
      const segments = value.text.split("\r");
      for (const segment of segments) {
        if (segment) {
          consola.log(`  ${segment}`);
        }
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("abort")) {
      // Stream was aborted due to socket close — not a real error
    } else {
      throw error;
    }
  } finally {
    socket.destroy();
  }
}

const main = defineCommand({
  args: {
    file: {
      description: "Path to an HL7v2 message file",
      required: false,
      type: "string",
    },
    host: {
      default: "127.0.0.1",
      description: "Server hostname",
      type: "string",
    },
    port: {
      default: "2575",
      description: "Server port",
      type: "string",
    },
    sample: {
      description: `Send a bundled sample message (${listSamples().join(", ")})`,
      required: false,
      type: "string",
    },
  },
  meta: {
    description: "Send an HL7v2 message to an MLLP server",
    name: "mllp-client",
  },
  async run({ args }) {
    const port = Number.parseInt(args.port, 10);

    // Resolve the message to send
    let message: string;

    if (args.sample) {
      message = loadSample(args.sample);
      consola.info(`Loaded sample: ${args.sample}`);
    } else if (args.file) {
      const content = readFileSync(args.file, "utf8");
      message = content.replaceAll(/\r\n|\n/g, "\r").replace(/\r$/, "");
      consola.info(`Loaded file: ${args.file}`);
    } else {
      // Read from stdin
      consola.info("Reading message from stdin...");
      const chunks: Buffer[] = [];
      for await (const chunk of process.stdin) {
        chunks.push(chunk as Buffer);
      }
      const content = Buffer.concat(chunks).toString("utf8");
      message = content.replaceAll(/\r\n|\n/g, "\r").replace(/\r$/, "");
    }

    consola.info(`Connecting to ${args.host}:${port}...`);
    consola.info(`Sending message (${message.length} bytes)`);

    await sendMessage(args.host, port, message);
  },
});

runMain(main);
