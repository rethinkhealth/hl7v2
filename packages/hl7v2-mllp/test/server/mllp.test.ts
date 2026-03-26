// oxlint-disable require-await
import { parseHL7v2 } from "@rethinkhealth/hl7v2-parser";

import { MllpError } from "../../src/errors.js";
import { Mllp } from "../../src/server/mllp.js";
import type { ConnectionInfo, Parser } from "../../src/server/types.js";

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

const SAMPLE_ADT_V23 = [
  "MSH|^~\\&|OldApp|OldFac|RecvApp|RecvFac|20240101120000||ADT^A01|MSG005|P|2.3",
  "PID|1||67890",
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

const defaultParser: Parser = (input: string) => ({
  tree: parseHL7v2(input),
});

function createApp(): Mllp {
  return new Mllp().parser(defaultParser);
}

describe("Mllp", () => {
  it("creates a server instance with no args", () => {
    const app = new Mllp();
    expect(app).toBeInstanceOf(Mllp);
  });

  it("supports fluent chaining including parser()", () => {
    const app = new Mllp();
    const result = app
      .parser(defaultParser)
      .use(async (_ctx, next) => next())
      .on("*", async () => RESPONSE_OK)
      .onError(async () => ({ raw: "MSA|AE|error" }));
    expect(result).toBe(app);
  });

  describe("parser() lifecycle stage", () => {
    it("throws MllpError when handle() called without parser", async () => {
      const app = new Mllp();
      app.on("*", async () => RESPONSE_OK);

      await expect(
        app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION)
      ).rejects.toThrow(MllpError);

      await expect(
        app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION)
      ).rejects.toThrow("No parser registered");
    });

    it("missing-parser error has ERR_NO_PARSER code", async () => {
      const app = new Mllp();
      try {
        await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
        expect.unreachable("should have thrown");
      } catch (error) {
        expect(error).toBeInstanceOf(MllpError);
        expect((error as MllpError).code).toBe("ERR_NO_PARSER");
      }
    });

    it("missing-parser error is NOT routed to onError", async () => {
      const app = new Mllp();
      const errorHandlerCalled = { value: false };
      app.onError(() => {
        errorHandlerCalled.value = true;
        return { raw: "error" };
      });

      await expect(
        app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION)
      ).rejects.toThrow(MllpError);
      expect(errorHandlerCalled.value).toBe(false);
    });

    it("accepts a custom parser via parser()", async () => {
      const customTree = {
        children: [
          {
            children: [],
            type: "segment",
            value:
              "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
          },
        ],
        type: "root",
      };
      const mockFile = { messages: [], result: customTree };
      const customParser = vi
        .fn()
        .mockReturnValue({ file: mockFile, tree: customTree });

      const app = new Mllp().parser(customParser);
      let handlerTree: unknown = null;
      let handlerFile: unknown = null;

      app.on("*", async (ctx) => {
        handlerTree = ctx.tree;
        handlerFile = ctx.file;
        return RESPONSE_OK;
      });

      await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
      expect(customParser).toHaveBeenCalledWith(SAMPLE_ADT);
      expect(handlerTree).toBe(customTree);
      expect(handlerFile).toBe(mockFile);
    });

    it("last-write-wins when parser() called multiple times", async () => {
      const parser1 = vi.fn().mockReturnValue({ tree: parseHL7v2(SAMPLE_ADT) });
      const parser2 = vi.fn().mockReturnValue({ tree: parseHL7v2(SAMPLE_ADT) });

      const app = new Mllp().parser(parser1).parser(parser2);
      app.on("*", async () => RESPONSE_OK);

      await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
      expect(parser1).not.toHaveBeenCalled();
      expect(parser2).toHaveBeenCalled();
    });

    it("accepts a unified processor via parser()", async () => {
      const mockTree = { children: [], type: "root" };
      const mockResult = [{ fields: [], segment: "MSH" }];
      const mockProcessor = {
        parse: vi.fn().mockReturnValue(mockTree),
        process: vi.fn().mockResolvedValue({ result: mockResult }),
        run: vi.fn().mockResolvedValue(mockTree),
      };

      const app = new Mllp().parser(mockProcessor);
      let handlerResult: unknown = null;

      app.on("*", async (ctx) => {
        handlerResult = ctx.result;
        return RESPONSE_OK;
      });

      await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
      expect(mockProcessor.process).toHaveBeenCalledWith(SAMPLE_ADT);
      expect(handlerResult).toBe(mockResult);
    });

    it("surfaces result from raw parser function", async () => {
      const compiledJson = [{ fields: [], segment: "MSH" }];
      const parserWithResult: Parser = (input) => ({
        result: compiledJson,
        tree: parseHL7v2(input),
      });

      const app = new Mllp().parser(parserWithResult);
      let handlerResult: unknown = null;

      app.on("*", async (ctx) => {
        handlerResult = ctx.result;
        return RESPONSE_OK;
      });

      await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
      expect(handlerResult).toBe(compiledJson);
    });
  });

  it("routes ADT^A01 to correct handler", async () => {
    const app = createApp();
    app.on("ADT^A01", async () => RESPONSE_OK);
    app.on("*", async () => RESPONSE_REJECT);

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response).toEqual(RESPONSE_OK);
  });

  it("routes to catch-all when no specific match", async () => {
    const app = createApp();
    app.on("ADT^A01", async () => RESPONSE_OK);
    app.on("*", async () => RESPONSE_REJECT);

    const response = await app.handle(
      SAMPLE_ORU,
      toBytes(SAMPLE_ORU),
      MOCK_CONNECTION
    );
    expect(response).toEqual(RESPONSE_REJECT);
  });

  it("returns undefined when no handler matches - no router", async () => {
    const app = createApp();
    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response).toBeUndefined();
  });

  it("returns undefined when no handler matches - with a non-matching route", async () => {
    const app = createApp();

    app.on("ORU^O12", async () => RESPONSE_OK);

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response).toBeUndefined();
  });

  it("executes middleware before handler", async () => {
    const app = createApp();
    let middlewareRan = false;
    let handlerSawEnriched = false;

    app.use(async (ctx, next) => {
      middlewareRan = true;
      ctx.set("enriched", true);
      await next();
    });
    app.on("ADT^A01", async (ctx) => {
      // ensure that this is called
      handlerSawEnriched = ctx.get("enriched") === true;
      return RESPONSE_OK;
    });

    await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
    expect(middlewareRan).toBe(true);
    expect(handlerSawEnriched).toBe(true);
  });

  it("executes scoped middleware only for matching messages", async () => {
    const app = createApp();
    const adtMiddlewareRan = { value: false };

    app.use("ADT^*", async (_ctx, next) => {
      adtMiddlewareRan.value = true;
      await next();
    });
    app.on("*", async () => RESPONSE_OK);

    await app.handle(SAMPLE_ORU, toBytes(SAMPLE_ORU), MOCK_CONNECTION);
    expect(adtMiddlewareRan.value).toBe(false);

    await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
    expect(adtMiddlewareRan.value).toBe(true);

    adtMiddlewareRan.value = false;
    await app.handle(SAMPLE_ORU, toBytes(SAMPLE_ORU), MOCK_CONNECTION);
    expect(adtMiddlewareRan.value).toBe(false);
  });

  it("middleware can short-circuit with response", async () => {
    const app = createApp();
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
    const app = createApp();
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
    const app = createApp();
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

  it("returns undefined when error handler itself throws", async () => {
    const app = createApp();
    app.on("*", async () => {
      throw new Error("handler failed");
    });
    app.onError(() => {
      throw new Error("error handler also failed");
    });

    const response = await app.handle(
      SAMPLE_ADT,
      toBytes(SAMPLE_ADT),
      MOCK_CONNECTION
    );
    expect(response).toBeUndefined();
  });

  it("always has tree parsed from raw message", async () => {
    const app = createApp();
    let treeType = "";
    let childrenCount = 0;

    app.on("ADT^A01", async (ctx) => {
      treeType = ctx.tree.type;
      childrenCount = ctx.tree.children.length;
      return RESPONSE_OK;
    });

    await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
    expect(treeType).toBe("root");
    expect(childrenCount).toBeGreaterThan(0);
  });

  describe("filter function routing", () => {
    it("routes with filter on messageType", async () => {
      const app = createApp();
      app.on(
        (ctx) => ctx.messageType === "ADT",
        async () => RESPONSE_OK
      );

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA");
    });

    it("filter rejects non-matching messages", async () => {
      const app = createApp();
      app.on(
        (ctx) => ctx.messageType === "ADT",
        async () => RESPONSE_OK
      );

      const response = await app.handle(
        SAMPLE_ORU,
        toBytes(SAMPLE_ORU),
        MOCK_CONNECTION
      );
      expect(response).toBeUndefined();
    });

    it("filter can inspect triggerEvent", async () => {
      const app = createApp();
      app.on(
        (ctx) => ctx.messageType === "ADT" && ctx.triggerEvent === "A01",
        async () => RESPONSE_OK
      );

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA");
    });

    it("filter can inspect version", async () => {
      const app = createApp();
      app.on(
        (ctx) => ctx.version === "2.3",
        async () => RESPONSE_OK
      );

      const v23Response = await app.handle(
        SAMPLE_ADT_V23,
        toBytes(SAMPLE_ADT_V23),
        MOCK_CONNECTION
      );
      expect(v23Response?.raw).toContain("MSA|AA");

      const v251Response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(v251Response).toBeUndefined();
    });

    it("filter can inspect controlId", async () => {
      const app = createApp();
      app.on(
        (ctx) => ctx.controlId === "MSG001",
        async () => RESPONSE_OK
      );

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA");

      const noMatch = await app.handle(
        SAMPLE_ORU,
        toBytes(SAMPLE_ORU),
        MOCK_CONNECTION
      );
      expect(noMatch).toBeUndefined();
    });

    it("filter can inspect connection metadata", async () => {
      const app = createApp();
      app.on(
        (ctx) => ctx.connection.remoteAddress === "127.0.0.1",
        async () => RESPONSE_OK
      );

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA");
    });

    it("string pattern wins over filter when registered first", async () => {
      const app = createApp();
      app.on("ADT^A01", async () => RESPONSE_OK);
      app.on(
        (ctx) => ctx.messageType === "ADT",
        async () => RESPONSE_REJECT
      );

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA");
    });

    it("filter wins over string pattern when registered first", async () => {
      const app = createApp();
      app.on(
        (ctx) => ctx.messageType === "ADT",
        async () => RESPONSE_OK
      );
      app.on("ADT^A01", async () => RESPONSE_REJECT);

      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA");
    });

    it("scoped middleware with filter function", async () => {
      const app = createApp();
      const middlewareRan = { value: false };

      app.use(
        (ctx) => ctx.version === "2.3",
        async (_ctx, next) => {
          middlewareRan.value = true;
          await next();
        }
      );
      app.on("*", async () => RESPONSE_OK);

      await app.handle(
        SAMPLE_ADT_V23,
        toBytes(SAMPLE_ADT_V23),
        MOCK_CONNECTION
      );
      expect(middlewareRan.value).toBe(true);

      middlewareRan.value = false;
      await app.handle(SAMPLE_ADT, toBytes(SAMPLE_ADT), MOCK_CONNECTION);
      expect(middlewareRan.value).toBe(false);
    });

    it("filter with tree inspection", async () => {
      const app = createApp();
      app.on(
        (ctx) => ctx.tree.children.length > 2,
        async () => RESPONSE_OK
      );

      // SAMPLE_ADT has 3 segments (MSH, EVN, PID)
      const response = await app.handle(
        SAMPLE_ADT,
        toBytes(SAMPLE_ADT),
        MOCK_CONNECTION
      );
      expect(response?.raw).toContain("MSA|AA");

      // SAMPLE_ADT_V23 has 2 segments (MSH, PID) — should not match
      const noMatch = await app.handle(
        SAMPLE_ADT_V23,
        toBytes(SAMPLE_ADT_V23),
        MOCK_CONNECTION
      );
      expect(noMatch).toBeUndefined();
    });
  });
});
