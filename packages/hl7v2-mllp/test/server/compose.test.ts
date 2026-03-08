// oxlint-disable require-await
import { describe, expect, it } from "vitest";

import { compose } from "../../src/server/compose.js";
import { createContext } from "../../src/server/context.js";
import type { Middleware, Response } from "../../src/server/types.js";

const SAMPLE_MESSAGE = "MSH|^~\\&|S|F|R|RF|20240101||ADT^A01|CTL1|P|2.5.1";

function makeCtx() {
  return createContext({
    bytes: new TextEncoder().encode(SAMPLE_MESSAGE),
    connection: {
      localPort: 2575,
      remoteAddress: "127.0.0.1",
      remotePort: 12_345,
      secure: false,
    },
    raw: SAMPLE_MESSAGE,
  });
}

describe("compose", () => {
  it("executes middleware in order", async () => {
    const order: number[] = [];
    const mw1: Middleware = async (_ctx, next) => {
      order.push(1);
      await next();
      order.push(4);
    };
    const mw2: Middleware = async (_ctx, next) => {
      order.push(2);
      await next();
      order.push(3);
    };

    const ref: { value: Response | undefined } = { value: undefined };
    await compose([mw1, mw2], ref)(makeCtx());
    expect(order).toEqual([1, 2, 3, 4]);
  });

  it("captures response from middleware", async () => {
    const mw: Middleware = async () => ({
      raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|CTL1",
    });

    const ref: { value: Response | undefined } = { value: undefined };
    await compose([mw], ref)(makeCtx());
    expect(ref.value).toBeDefined();
    expect(ref.value?.raw).toContain("MSA|AA");
  });

  it("short-circuits when middleware returns without calling next", async () => {
    const order: number[] = [];
    const mw1: Middleware = async () => {
      order.push(1);
      return { raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AR|CTL1|Blocked" };
    };
    const mw2: Middleware = async (_ctx, next) => {
      order.push(2);
      await next();
    };

    const ref: { value: Response | undefined } = { value: undefined };
    await compose([mw1, mw2], ref)(makeCtx());
    expect(order).toEqual([1]);
    expect(ref.value?.raw).toContain("MSA|AR");
  });

  it("propagates errors thrown by middleware", async () => {
    const mw: Middleware = async () => {
      throw new Error("boom");
    };

    const ref: { value: Response | undefined } = { value: undefined };
    await expect(compose([mw], ref)(makeCtx())).rejects.toThrow("boom");
  });

  it("throws if next() is called multiple times", async () => {
    const mw: Middleware = async (_ctx, next) => {
      await next();
      await next();
    };

    const ref: { value: Response | undefined } = { value: undefined };
    await expect(compose([mw], ref)(makeCtx())).rejects.toThrow(
      "next() called multiple times"
    );
  });

  it("works with empty middleware array", async () => {
    const ref: { value: Response | undefined } = { value: undefined };
    await compose([], ref)(makeCtx());
    expect(ref.value).toBeUndefined();
  });

  it("supports async middleware", async () => {
    const mw: Middleware = async (ctx, next) => {
      ctx.set("before", true);
      await next();
      ctx.set("after", true);
    };
    const handler: Middleware = async (ctx) => {
      expect(ctx.get("before")).toBe(true);
      return { raw: `MSH|^~\\&||||||||||2.5.1\rMSA|AA|${ctx.controlId}` };
    };

    const ref: { value: Response | undefined } = { value: undefined };
    const ctx = makeCtx();
    await compose([mw, handler], ref)(ctx);
    expect(ctx.get("after")).toBe(true);
    expect(ref.value?.raw).toContain("MSA|AA");
  });

  it("captures first response only (inner middleware wins)", async () => {
    const outer: Middleware = async (_ctx, next) => {
      await next();
      // Outer tries to set response AFTER inner already did
      return { raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AR|CTL1|Outer" };
    };
    const inner: Middleware = async () => ({
      raw: "MSH|^~\\&||||||||||2.5.1\rMSA|AA|CTL1|Inner",
    });

    const ref: { value: Response | undefined } = { value: undefined };
    await compose([outer, inner], ref)(makeCtx());
    // Inner's response should win because it was captured first
    expect(ref.value?.raw).toContain("Inner");
    expect(ref.value?.raw).not.toContain("Outer");
  });
});
