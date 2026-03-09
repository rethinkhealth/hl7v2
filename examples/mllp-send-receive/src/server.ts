import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import { serve } from "@rethinkhealth/hl7v2-mllp/node";
import { defineCommand, runMain } from "citty";
import { consola } from "consola";

import { buildAck } from "./ack";

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

    // Logging middleware (runs for every message)
    app.use(async (ctx, next) => {
      const { remoteAddress, remotePort } = ctx.connection;
      consola.info(
        `${ctx.messageType}^${ctx.triggerEvent} from ${remoteAddress}:${remotePort}`
      );
      consola.info(`  Control ID: ${ctx.controlId}`);
      await next();
    });

    // Route: ADT^A01 (Patient Admit)
    app.on("ADT^A01", (ctx) => {
      consola.success("  Patient Admit processed");
      const raw = buildAck({ code: "AA", ctx });
      ctx.res = { raw };
    });

    // Route: ORM^O01 (Order)
    app.on("ORM^O01", (ctx) => {
      consola.success("  Order received");
      const raw = buildAck({ code: "AA", ctx });
      ctx.res = { raw };
    });

    // Route: ORU^R01 (Observation Result)
    app.on("ORU^R01", (ctx) => {
      consola.success("  Observation Result received");
      const raw = buildAck({ code: "AA", ctx });
      ctx.res = { raw };
    });

    // Catch-all route
    app.on("*", (ctx) => {
      consola.warn(
        `  Unhandled message type: ${ctx.messageType}^${ctx.triggerEvent}`
      );
      const raw = buildAck({ code: "AA", ctx });
      ctx.res = { raw };
    });

    // Error handler
    // eslint-disable-next-line prefer-await-to-callbacks
    app.onError((err: Error, ctx) => {
      consola.error(`  Error processing message: ${err.message}`);
      const raw = buildAck({ code: "AE", ctx, text: err.message });
      return { raw };
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
