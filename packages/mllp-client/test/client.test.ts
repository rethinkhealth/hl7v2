// oxlint-disable promise/avoid-new
// oxlint-disable no-empty-function
import {
  AckApplicationError,
  AckApplicationReject,
  AckCommitError,
  AckCommitReject,
  Hl7ErrorCode,
  Severity,
} from "@glion/ack";
import { parseHL7v2 } from "@glion/hl7v2";
import { Mllp } from "@glion/mllp";
import { ackMiddleware } from "@glion/mllp-ack";
import { serve } from "@glion/mllp/node";
import type { Server } from "@glion/mllp/node";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { MllpClient } from "../src/client";
import { ClientErrorCode, MllpClientError } from "../src/errors";

const SAMPLE_ADT = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

interface ServerHandle {
  server: Server;
  port: number;
}

async function startServer(app: Mllp): Promise<ServerHandle> {
  const server = serve(app, { port: 0 });
  await server.listening;
  return { port: server.port, server };
}

describe("MllpClient.send", () => {
  let handle: ServerHandle | undefined;

  afterEach(async () => {
    if (handle) {
      await handle.server.close();
      handle = undefined;
    }
  });

  describe("AA (success)", () => {
    beforeEach(async () => {
      const app = new Mllp().parser(parseHL7v2);
      app.use(ackMiddleware());
      app.on("ADT^A01", () => {});
      handle = await startServer(app);
    });

    it("returns the parsed ACK on AA", async () => {
      const client = new MllpClient({ host: "127.0.0.1", port: handle!.port });
      const ack = await client.send(SAMPLE_ADT);

      expect(ack.code).toBe("AA");
      expect(ack.controlId).toBe("MSG001");
      expect(ack.tree).toBeDefined();
    });

    it("accepts a Uint8Array payload", async () => {
      const client = new MllpClient({ host: "127.0.0.1", port: handle!.port });
      const bytes = new TextEncoder().encode(SAMPLE_ADT);

      const ack = await client.send(bytes);

      expect(ack.code).toBe("AA");
    });
  });

  describe("AE (application error)", () => {
    beforeEach(async () => {
      const app = new Mllp().parser(parseHL7v2);
      app.use(ackMiddleware());
      app.on("ADT^A01", () => {
        throw new AckApplicationError("Validation failed", {
          errorCode: Hl7ErrorCode.UnknownKeyIdentifier,
          severity: Severity.Error,
        });
      });
      handle = await startServer(app);
    });

    it("throws AckApplicationError with the receiver's message and codes", async () => {
      const client = new MllpClient({ host: "127.0.0.1", port: handle!.port });

      const promise = client.send(SAMPLE_ADT);

      await expect(promise).rejects.toBeInstanceOf(AckApplicationError);

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(AckApplicationError);
        const ackErr = error as AckApplicationError;
        expect(ackErr.message).toBe("Validation failed");
        expect(ackErr.errorCode).toBe(Hl7ErrorCode.UnknownKeyIdentifier);
        expect(ackErr.severity).toBe(Severity.Error);
      }
    });

    it("returns the parsed ACK without throwing when throwOnNak is false", async () => {
      const client = new MllpClient({
        host: "127.0.0.1",
        port: handle!.port,
        throwOnNak: false,
      });

      const ack = await client.send(SAMPLE_ADT);

      expect(ack.code).toBe("AE");
      expect(ack.textMessage).toBe("Validation failed");
      expect(ack.errorCode).toBe(Hl7ErrorCode.UnknownKeyIdentifier);
    });
  });

  describe("AR (application reject)", () => {
    beforeEach(async () => {
      const app = new Mllp().parser(parseHL7v2);
      app.use(ackMiddleware());
      app.on("ADT^A01", () => {
        throw new AckApplicationReject("Unsupported version", {
          errorCode: Hl7ErrorCode.UnsupportedVersionId,
          severity: Severity.Error,
        });
      });
      handle = await startServer(app);
    });

    it("throws AckApplicationReject", async () => {
      const client = new MllpClient({ host: "127.0.0.1", port: handle!.port });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(AckApplicationReject);
        expect((error as AckApplicationReject).errorCode).toBe(
          Hl7ErrorCode.UnsupportedVersionId
        );
      }
    });
  });

  describe("CE (commit error)", () => {
    beforeEach(async () => {
      const app = new Mllp().parser(parseHL7v2);
      app.use(ackMiddleware());
      app.on("ADT^A01", () => {
        throw new AckCommitError("Storage unavailable", {
          errorCode: Hl7ErrorCode.ApplicationInternalError,
          severity: Severity.Error,
        });
      });
      handle = await startServer(app);
    });

    it("throws AckCommitError", async () => {
      const client = new MllpClient({ host: "127.0.0.1", port: handle!.port });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(AckCommitError);
        expect((error as AckCommitError).message).toBe("Storage unavailable");
      }
    });
  });

  describe("CR (commit reject)", () => {
    beforeEach(async () => {
      const app = new Mllp().parser(parseHL7v2);
      app.use(ackMiddleware());
      app.on("ADT^A01", () => {
        throw new AckCommitReject("Cannot commit", {
          errorCode: Hl7ErrorCode.ApplicationInternalError,
          severity: Severity.Error,
        });
      });
      handle = await startServer(app);
    });

    it("throws AckCommitReject", async () => {
      const client = new MllpClient({ host: "127.0.0.1", port: handle!.port });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(AckCommitReject);
      }
    });
  });

  describe("transport errors", () => {
    it("throws CONNECTION_REFUSED when no server is listening", async () => {
      // Bind and immediately close to obtain a definitely-free port.
      const app = new Mllp().parser(parseHL7v2).on("ADT^A01", () => {});
      app.use(ackMiddleware());
      const tmp = serve(app, { port: 0 });
      await tmp.listening;
      const closedPort = tmp.port;
      await tmp.close();

      const client = new MllpClient({
        host: "127.0.0.1",
        port: closedPort,
        timeout: 2000,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(
          ClientErrorCode.CONNECTION_REFUSED
        );
      }
    });

    it("throws TIMEOUT when the server never responds", async () => {
      const app = new Mllp().parser(parseHL7v2);
      // No middleware, no handler — message is decoded but no response is written.
      app.on("ADT^A01", () => {});
      handle = await startServer(app);

      const client = new MllpClient({
        host: "127.0.0.1",
        port: handle.port,
        timeout: 200,
      });

      try {
        await client.send(SAMPLE_ADT);
        expect.fail("expected throw");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpClientError);
        expect((error as MllpClientError).code).toBe(ClientErrorCode.TIMEOUT);
      }
    });
  });
});
