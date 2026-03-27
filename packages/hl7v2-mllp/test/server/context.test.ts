import { parseHL7v2 } from "@rethinkhealth/hl7v2";

import { createContext } from "../../src/server/context.js";

const SAMPLE_MESSAGE = [
  "MSH|^~\\&|SendApp|SendFac|RecvApp|RecvFac|20240101120000||ADT^A01^ADT_A01|MSG001|P|2.5.1",
  "EVN|A01|20240101120000",
  "PID|1||12345^^^MRN||Doe^John",
].join("\r");

const SAMPLE_BYTES = new TextEncoder().encode(SAMPLE_MESSAGE);

function makeCtx(raw = SAMPLE_MESSAGE, bytes = SAMPLE_BYTES) {
  return createContext({
    bytes,
    connection: {
      localPort: 2575,
      remoteAddress: "192.168.1.100",
      remotePort: 54_321,
      secure: false,
    },
    processor: parseHL7v2,
    raw,
  });
}

describe("createContext", () => {
  it("exposes req.raw and req.bytes", async () => {
    const ctx = await makeCtx();
    expect(ctx.req.raw).toBe(SAMPLE_MESSAGE);
    expect(ctx.req.bytes).toBe(SAMPLE_BYTES);
  });

  it("exposes connection metadata", async () => {
    const ctx = await makeCtx();
    expect(ctx.connection.remoteAddress).toBe("192.168.1.100");
    expect(ctx.connection.remotePort).toBe(54_321);
    expect(ctx.connection.localPort).toBe(2575);
    expect(ctx.connection.secure).toBe(false);
  });

  it("extracts messageType from MSH-9.1", async () => {
    const ctx = await makeCtx();
    expect(ctx.messageType).toBe("ADT");
  });

  it("extracts triggerEvent from MSH-9.2", async () => {
    const ctx = await makeCtx();
    expect(ctx.triggerEvent).toBe("A01");
  });

  it("extracts messageStructure from MSH-9.3", async () => {
    const ctx = await makeCtx();
    expect(ctx.messageStructure).toBe("ADT_A01");
  });

  it("extracts version from MSH-12", async () => {
    const ctx = await makeCtx();
    expect(ctx.version).toBe("2.5.1");
  });

  it("extracts controlId from MSH-10", async () => {
    const ctx = await makeCtx();
    expect(ctx.controlId).toBe("MSG001");
  });

  it("parses tree from raw message", async () => {
    const ctx = await makeCtx();
    expect(ctx.tree).toBeDefined();
    expect(ctx.tree.type).toBe("root");
    expect(ctx.tree.children.length).toBeGreaterThan(0);
  });

  it("populates file as VFile", async () => {
    const ctx = await makeCtx();
    expect(ctx.file).toBeDefined();
  });

  it("populates result from compiler", async () => {
    // parseHL7v2 includes hl7v2Jsonify, so result should be defined
    const ctx = await makeCtx();
    expect(ctx.result).toBeDefined();
  });

  it("initializes res as undefined", async () => {
    const ctx = await makeCtx();
    expect(ctx.res).toBeUndefined();
  });

  describe("variable API", () => {
    it("set and get variables", async () => {
      const ctx = await makeCtx();
      ctx.set("foo", "bar");
      expect(ctx.get("foo")).toBe("bar");
    });

    it("returns undefined for unset variables", async () => {
      const ctx = await makeCtx();
      expect(ctx.get("nonexistent")).toBeUndefined();
    });

    it("exposes frozen var snapshot", async () => {
      const ctx = await makeCtx();
      ctx.set("key1", "val1");
      ctx.set("key2", 42);
      const snapshot = ctx.var;
      expect(snapshot.key1).toBe("val1");
      expect(snapshot.key2).toBe(42);
      expect(Object.isFrozen(snapshot)).toBe(true);
    });
  });
});
