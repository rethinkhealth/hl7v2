// oxlint-disable require-await
import { describe, expect, it, vi } from "vitest";

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

const RESPONSE_OK = { raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|MSG001" };
const RESPONSE_REJECT = {
  raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AR|MSG002|Unsupported",
};

function toBytes(msg: string): Uint8Array {
  return new TextEncoder().encode(msg);
}

describe("Mllp", () => {
  it("creates a server instance with no args", () => {
    const app = new Mllp();
    expect(app).toBeInstanceOf(Mllp);
  });

  it("supports fluent chaining", () => {
    const app = new Mllp();
    const result = app
      .use(async (_ctx, next) => next())
      .on("*", async () => RESPONSE_OK)
      .onError(async () => ({ raw: "MSA|AE|error" }));
    expect(result).toBe(app);
  });

  it("routes ADT^A01 to correct handler", async () => {
    const app = new Mllp();
    app.on("ADT^A01", async () => RESPONSE_OK);
    app.on("*", async () => RESPONSE_REJECT);

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("MSA|AA|MSG001");
  });

  it("routes to catch-all when no specific match", async () => {
    const app = new Mllp();
    app.on("ADT^A01", async () => RESPONSE_OK);
    app.on("*", async () => RESPONSE_REJECT);

    const response = await app.handle(
      SAMPLE_ORU,
      toBytes(SAMPLE_ORU),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("MSA|AR|MSG002");
  });

  it("returns undefined when no handler matches", async () => {
    const app = new Mllp();
    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response).toBeUndefined();
  });

  it("executes middleware before handler", async () => {
    const app = new Mllp();
    const middlewareRan = { value: false };

    app.use(async (ctx, next) => {
      middlewareRan.value = true;
      ctx.set("enriched", true);
      await next();
    });
    app.on("ADT^A01", async (ctx) => {
      expect(ctx.get("enriched")).toBe(true);
      return RESPONSE_OK;
    });

    await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
    expect(middlewareRan.value).toBe(true);
  });

  it("executes scoped middleware only for matching messages", async () => {
    const app = new Mllp();
    const adtMiddlewareRan = { value: false };

    app.use("ADT^*", async (_ctx, next) => {
      adtMiddlewareRan.value = true;
      await next();
    });
    app.on("*", async () => RESPONSE_OK);

    await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
    expect(adtMiddlewareRan.value).toBe(true);

    adtMiddlewareRan.value = false;
    await app.handle(SAMPLE_ORU, toBytes(SAMPLE_ORU), MOCK_CONNECTION);
    expect(adtMiddlewareRan.value).toBe(false);
  });

  it("middleware can short-circuit with response", async () => {
    const app = new Mllp();
    const handlerRan = { value: false };

    app.use(async () => ({
      raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AR|MSG001|Blocked by middleware",
    }));
    app.on("*", async () => {
      handlerRan.value = true;
      return RESPONSE_OK;
    });

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("Blocked by middleware");
    expect(handlerRan.value).toBe(false);
  });

  it("calls error handler when handler throws", async () => {
    const app = new Mllp();
    app.on("*", async () => {
      throw new Error("Handler crashed");
    });
    app.onError(async () => ({
      raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AE|MSG001|Custom error handling",
    }));

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("Custom error handling");
  });

  it("returns undefined when handler throws without error handler", async () => {
    const app = new Mllp();
    app.on("*", async () => {
      throw new Error("crash");
    });

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response).toBeUndefined();
  });

  it("accepts unified processor via use()", async () => {
    const app = new Mllp();
    const mockProcessor = {
      async process(value: string) {
        return {
          data: {
            messageType: "ADT",
            triggerEvent: "A01",
            version: "2.5.1",
          },
          messages: [],
          result: { children: [], type: "root" },
          value,
        };
      },
      use: vi.fn().mockReturnThis(),
    };

    app.use(mockProcessor);
    app.on("ADT^A01", async (ctx) => {
      expect(ctx.tree).toBeDefined();
      expect(ctx.file).toBeDefined();
      return RESPONSE_OK;
    });

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response?.raw).toContain("MSA|AA");
  });
});
