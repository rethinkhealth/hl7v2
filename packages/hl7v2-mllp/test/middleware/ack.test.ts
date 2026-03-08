// oxlint-disable require-await
import { describe, expect, it } from "vitest";

import { ack } from "../../src/middleware/ack.js";
import { MllpException } from "../../src/server/exception.js";
import { Mllp } from "../../src/server/mllp.js";
import type { ConnectionInfo } from "../../src/server/types.js";

const SAMPLE_ADT = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

const SAMPLE_ORU = [
  "MSH|^~\\&|Lab|Fac|App|Fac|20240101||ORU^R01|MSG002|P|2.5.1",
  "PID|1||99999",
  "OBR|1||LAB123|CBC",
].join("\r");

const MOCK_CONNECTION: ConnectionInfo = {
  localPort: 2575,
  remoteAddress: "127.0.0.1",
  remotePort: 12_345,
  secure: false,
};

function toBytes(msg: string): Uint8Array {
  return new TextEncoder().encode(msg);
}

describe("ack middleware", () => {
  describe("original mode (default)", () => {
    it("generates AA when handler completes without error", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        // void return — just process
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response).toBeDefined();
      expect(response?.raw).toContain("MSA|AA|MSG001");
    });

    it("generates AE when handler throws MllpException with AE", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw new MllpException("AE", "Missing patient ID");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response).toBeDefined();
      expect(response?.raw).toContain("MSA|AE|MSG001|Missing patient ID");
    });

    it("generates AR when handler throws MllpException with AR", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw new MllpException("AR", "System unavailable");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AR|MSG001|System unavailable");
    });

    it("generates AR when handler throws a regular Error", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw new Error("Database crashed");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AR|MSG001|Database crashed");
    });

    it("includes ERR segment when MllpException has errorCondition", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        throw new MllpException("AE", "Bad segment", {
          errorCondition: "207",
        });
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("ERR|207");
    });

    it("bypasses auto-ack when handler returns Response directly", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => ({
        raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001|Custom response",
      }));

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("Custom response");
    });

    it("swaps sender/receiver in ACK MSH", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        // void
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      // Original: SendApp|SendFac → RecvApp|RecvFac
      // ACK should swap: RecvApp|RecvFac → SendApp|SendFac
      expect(response?.raw).toContain("RecvApp|RecvFac|SendApp|SendFac");
    });
  });

  describe("enhanced mode", () => {
    it("generates CA when handler completes without error", async () => {
      const app = new Mllp();
      app.use(ack({ mode: "enhanced" }));
      app.on("ADT^A01", async () => {
        // void
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|CA|MSG001");
    });

    it("generates CR when handler throws a regular Error", async () => {
      const app = new Mllp();
      app.use(ack({ mode: "enhanced" }));
      app.on("ADT^A01", async () => {
        throw new Error("Commit failed");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|CR|MSG001|Commit failed");
    });

    it("uses MllpException code directly even in enhanced mode", async () => {
      const app = new Mllp();
      app.use(ack({ mode: "enhanced" }));
      app.on("ADT^A01", async () => {
        // MllpException code is used as-is, regardless of mode
        throw new MllpException("CE", "Commit error");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|CE|MSG001|Commit error");
    });
  });

  describe("middleware interaction", () => {
    it("catches errors thrown by other middleware after next()", async () => {
      const app = new Mllp();
      app.use(ack());
      app.use(async (_ctx, next) => {
        await next();
        throw new MllpException("AE", "Post-processing failed");
      });
      app.on("ADT^A01", async () => {
        // handler succeeds
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AE|MSG001|Post-processing failed");
    });

    it("works with different message types", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ORU^R01", async () => {
        // void
      });

      const response = await app.handle(
        SAMPLE_ORU,
        toBytes(SAMPLE_ORU),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA|MSG002");
    });

    it("generates AA when no handler matches but no error thrown", async () => {
      const app = new Mllp();
      app.use(ack());
      // No handlers registered — middleware chain completes normally

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      // ack middleware still generates AA since no error occurred
      expect(response?.raw).toContain("MSA|AA|MSG001");
    });

    it("handles non-Error throws gracefully", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", async () => {
        // oxlint-disable-next-line no-throw-literal
        throw "string error";
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AR|MSG001");
    });
  });
});
