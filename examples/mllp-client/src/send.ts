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
    mode: {
      default: "OnApplication",
      description:
        "Resolve on the application-level ACK (default) or the commit-level ACK",
      type: "string",
      valueHint: "OnApplication|OnCommit",
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
    description: "Send an HL7v2 message to an MLLP server and print the ACK",
    name: "mllp-client-send",
  },
  async run({ args }) {
    const message = await readMessage(args);
    const port = Number.parseInt(args.port, 10);

    if (args.mode !== "OnApplication" && args.mode !== "OnCommit") {
      throw new Error(`Invalid --mode "${args.mode}" (OnApplication|OnCommit)`);
    }

    // The example server runs over plain TCP on loopback, so opt out of
    // the TLS-on default. In production, drop `tls: false` (or pass an
    // options object) to use the secure default.
    const client = new MllpClient({
      host: args.host,
      port,
      tls: false,
    });

    consola.info(`Sending ${message.length}B to ${args.host}:${port}`);

    try {
      const ack = await client.send(message, { mode: args.mode });
      consola.success(`${ack.code} · ${ack.controlId}`);
    } catch (error) {
      if (error instanceof AckException) {
        // Receiver returned a NAK. error.code is MSA-1 (AE/AR/CE/CR);
        // error.message is MSA-3; error.errorCode is ERR-3; error.raw
        // holds the wire-format ACK. Branch on the subclass when needed:
        // `if (error instanceof AckApplicationReject) ...`.
        const parts = [error.code, error.message];
        if (error.errorCode) {
          parts.push(`ERR ${error.errorCode}`);
        }
        consola.error(parts.join(" · "));
        process.exitCode = 1;
        return;
      }

      if (error instanceof MllpClientError) {
        // Transport-level failure: connection refused, timeout, malformed
        // frame, etc. error.code identifies which.
        consola.error(`Transport: ${error.code} · ${error.message}`);
        process.exitCode = 1;
        return;
      }

      throw error;
    }
  },
});

runMain(main);
