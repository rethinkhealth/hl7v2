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

  it("file is undefined with default parser", async () => {
    const ctx = await makeCtx();
    expect(ctx.file).toBeUndefined();
  });

  it("initializes res as undefined", async () => {
    const ctx = await makeCtx();
    expect(ctx.res).toBeUndefined();
  });

  it("uses custom sync parser", async () => {
    const customTree = { children: [], type: "root" };
    const customParser = vi.fn().mockReturnValue({ tree: customTree });

    const ctx = await createContext({
      bytes: SAMPLE_BYTES,
      connection: {
        localPort: 2575,
        remoteAddress: "192.168.1.100",
        remotePort: 54_321,
        secure: false,
      },
      parser: customParser,
      raw: SAMPLE_MESSAGE,
    });

    expect(customParser).toHaveBeenCalledWith(SAMPLE_MESSAGE);
    expect(ctx.tree).toBe(customTree);
  });

  it("uses custom async parser", async () => {
    const customTree = { children: [], type: "root" };
    const mockFile = { messages: [], result: customTree };
    const asyncParser = vi
      .fn()
      .mockResolvedValue({ file: mockFile, tree: customTree });

    const ctx = await createContext({
      bytes: SAMPLE_BYTES,
      connection: {
        localPort: 2575,
        remoteAddress: "192.168.1.100",
        remotePort: 54_321,
        secure: false,
      },
      parser: asyncParser,
      raw: SAMPLE_MESSAGE,
    });

    expect(asyncParser).toHaveBeenCalledWith(SAMPLE_MESSAGE);
    expect(ctx.tree).toBe(customTree);
    expect(ctx.file).toBe(mockFile);
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
