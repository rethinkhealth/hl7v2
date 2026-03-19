import {
  AckApplicationError,
  AckApplicationReject,
  AckException,
} from "@rethinkhealth/hl7v2-ack";
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { ackMiddleware } from "@rethinkhealth/hl7v2-mllp-ack";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";
import { defineCommand, runMain } from "citty";
import { consola } from "consola";

const main = defineCommand({
  args: {
    hostname: {
      default: "0.0.0.0",
      description: "Hostname to bind to",
      type: "string",
    },
    port: {
      default: "2575",
      description: "Port to listen on",
      type: "string",
    },
  },
  meta: {
    description: "Start an MLLP server that receives HL7v2 messages",
    name: "mllp-server",
  },
  run({ args }) {
    const port = Number.parseInt(args.port, 10);
    const app = new Mllp();

    // ACK middleware — handles all acknowledgments automatically
    app.use(ackMiddleware());

    // Structured logging middleware — tagged by control ID
    app.use(async (ctx, next) => {
      const log = consola.withTag(ctx.controlId);
      const { remoteAddress, remotePort } = ctx.connection;
      const msg = `${ctx.messageType}^${ctx.triggerEvent}`;

      log.info(`\u2190 ${msg} from ${remoteAddress}:${remotePort}`);

      const start = performance.now();
      try {
        await next();
      } catch (error) {
        const ms = (performance.now() - start).toFixed(0);
        const code = error instanceof AckException ? error.code : "AE";
        const reason = error instanceof Error ? error.message : String(error);
        log.error(`\u2192 ${code} ${reason} (${ms}ms)`);
        throw error;
      }

      const ms = (performance.now() - start).toFixed(0);
      log.success(`\u2192 AA (${ms}ms)`);
    });

    // Routes — handlers do work here; ackMiddleware sends the ACK
    app.on("ADT^A01", (ctx) => {
      consola.withTag(ctx.controlId).info("Patient Admit processed");
    });

    app.on("ORM^O01", (ctx) => {
      consola.withTag(ctx.controlId).info("Order received");
    });

    app.on("ORU^R01", (ctx) => {
      consola.withTag(ctx.controlId).info("Observation Result received");
      throw new AckApplicationError("Patient not available", {
        errorCode: "200",
        severity: "E",
      });
    });

    // Catch-all route — reject unhandled message types
    app.on("*", (ctx) => {
      throw new AckApplicationReject(
        `Unsupported message type: ${ctx.messageType}^${ctx.triggerEvent}`,
        { errorCode: "200", severity: "E" }
      );
    });

    // Infrastructure error handler
    // oxlint-disable-next-line promise/prefer-await-to-callbacks
    app.onError((err: Error, ctx) => {
      consola.withTag(ctx.controlId).error(`Infrastructure: ${err.message}`);
      return { raw: "" };
    });

    // Start server
    const server = serve(app, { hostname: args.hostname, port });
    consola.box(`MLLP Server listening on ${args.hostname}:${server.port}`);

    // Graceful shutdown
    const shutdown = async () => {
      consola.info("Shutting down...");
      await server.close();
      consola.success("Server stopped");
      process.exit(0);
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  },
});

runMain(main);
