// oxlint-disable typescript/no-non-null-assertion
// oxlint-disable no-empty-function
// oxlint-disable no-throw-literal
import {
  AckError,
  AckReject,
  UnknownPatientError,
  UnsupportedMessageTypeError,
} from "@rethinkhealth/hl7v2-ack";
import { Mllp } from "@rethinkhealth/hl7v2-mllp";
import type { ConnectionInfo } from "@rethinkhealth/hl7v2-mllp";

import { ack } from "../src/ack";

const SAMPLE_ADT = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
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
  describe("AA (success)", () => {
    it("sends AA when handler completes without error or response", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "AckApp", facility: "AckFac" } }));
      app.on("ADT^A01", () => {
        // no return, no throw — success
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AA|MSG001");
      expect(response!.raw).toContain("|AckApp|AckFac|");
      expect(response!.raw).toContain("|ACK^A01|");
    });

    it("sends AA when handler returns undefined", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {});

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AA|MSG001");
    });

    it("derives sending from original message when sending is omitted", async () => {
      const app = new Mllp();
      app.use(ack());
      app.on("ADT^A01", () => {});

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      // MSH-3/4 should be RecvApp/RecvFac (from original MSH-5/6)
      expect(response!.raw).toContain("|RecvApp|RecvFac|");
      expect(response!.raw).toContain("MSA|AA|MSG001");
    });
  });

  describe("AE (error)", () => {
    it("sends AE when handler throws AckError", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new AckError("Validation failed", {
          errorCode: "207",
          severity: "E",
          text: "Missing patient name",
          userMessage: "Patient name is required",
        });
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AE|MSG001|Missing patient name");
      expect(response!.raw).toContain("ERR|");
      expect(response!.raw).toContain("|207|E|");
    });

    it("sends AE with predefined UnknownPatientError", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new UnknownPatientError("Patient 12345 not found");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AE|MSG001");
      expect(response!.raw).toContain("|204|E|");
    });
  });

  describe("AR (reject)", () => {
    it("sends AR when handler throws AckReject", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new AckReject("Not supported", {
          errorCode: "200",
          severity: "E",
          text: "Unsupported type",
        });
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AR|MSG001|Unsupported type");
      expect(response!.raw).toContain("ERR|");
    });

    it("sends AR with predefined UnsupportedMessageTypeError", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new UnsupportedMessageTypeError("ADT^A01 not handled");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AR|MSG001");
    });
  });

  describe("unknown errors", () => {
    it("wraps unknown Error in InternalError and sends AE", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw new Error("Database connection failed");
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AE|MSG001");
      expect(response!.raw).toContain("|207|E|");
    });

    it("wraps non-Error throws in InternalError", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => {
        throw "string error";
      });

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toContain("MSA|AE|MSG001");
    });
  });

  describe("passthrough", () => {
    it("does not override existing response set by handler", async () => {
      const app = new Mllp();
      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.on("ADT^A01", () => ({
        raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001|Custom",
      }));

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );

      expect(response).toBeDefined();
      expect(response!.raw).toBe(
        "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001|Custom"
      );
    });
  });

  describe("middleware ordering", () => {
    it("works with other middleware in the chain", async () => {
      const app = new Mllp();
      const order: string[] = [];

      app.use(ack({ sending: { application: "S", facility: "F" } }));
      app.use(async (_ctx, next) => {
        order.push("before");
        await next();
        order.push("after");
      });
      app.on("ADT^A01", () => {
        order.push("handler");
      });

      await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);

      expect(order).toEqual(["before", "handler", "after"]);
    });
  });
});
