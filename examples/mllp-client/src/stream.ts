import { AckException } from "@glion/ack";
import { MllpClient, MllpClientError } from "@glion/mllp-client";
import { defineCommand, runMain } from "citty";
import { consola } from "consola";

import { readMessage } from "./message-input";
import { listSamples } from "./samples";

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
    description:
      "Send an HL7v2 message and iterate every ACK frame as it arrives",
    name: "mllp-client-stream",
  },
  async run({ args }) {
    const message = await readMessage(args);
    const port = Number.parseInt(args.port, 10);

    const client = new MllpClient({
      host: args.host,
      port,
      tls: false,
    });

    consola.info(`Streaming ${message.length}B to ${args.host}:${port}`);

    // client.stream() yields each accept ACK as it arrives and completes
    // after the resolving frame. With a basic-mode receiver you'll see
    // one AA frame; with an enhanced-mode receiver you'll see CA followed
    // by AA. NAK codes still throw — wrap the loop in try/catch.
    try {
      for await (const ack of client.stream(message)) {
        consola.success(`${ack.code} · ${ack.controlId}`);
      }
    } catch (error) {
      if (error instanceof AckException) {
        consola.error(`${error.code} · ${error.message}`);
        process.exitCode = 1;
        return;
      }
      if (error instanceof MllpClientError) {
        consola.error(`Transport: ${error.code} · ${error.message}`);
        process.exitCode = 1;
        return;
      }
      throw error;
    }
  },
});

runMain(main);
