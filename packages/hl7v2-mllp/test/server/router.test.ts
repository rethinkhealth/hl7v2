// oxlint-disable require-await
import { describe, expect, it } from "vitest";

import { Router } from "../../src/server/router.js";
import type { Middleware } from "../../src/server/types.js";

const RESPONSE_OK = { raw: "MSA|AA|OK" };
const RESPONSE_REJECT = { raw: "MSA|AR|NO" };

describe("Router", () => {
  describe("route matching", () => {
    it("matches exact pattern", () => {
      const router = new Router();
      const handler = async () => RESPONSE_OK;
      router.add("ADT^A01", handler);

      const result = router.match("ADT", "A01");
      expect(result.handler).toBe(handler);
    });

    it("returns undefined for no match", () => {
      const router = new Router();
      router.add("ADT^A01", async () => RESPONSE_OK);

      const result = router.match("ORU", "R01");
      expect(result.handler).toBeUndefined();
    });

    it("matches wildcard catch-all", () => {
      const router = new Router();
      const handler = async () => RESPONSE_OK;
      router.add("*", handler);

      expect(router.match("ADT", "A01").handler).toBe(handler);
      expect(router.match("ORU", "R01").handler).toBe(handler);
    });

    it("matches message type wildcard", () => {
      const router = new Router();
      const handler = async () => RESPONSE_OK;
      router.add("ADT^*", handler);

      expect(router.match("ADT", "A01").handler).toBe(handler);
      expect(router.match("ADT", "A08").handler).toBe(handler);
      expect(router.match("ORU", "R01").handler).toBeUndefined();
    });

    it("uses first-match-wins ordering", () => {
      const router = new Router();
      const specific = async () => RESPONSE_OK;
      const catchAll = async () => RESPONSE_REJECT;
      router.add("ADT^A01", specific);
      router.add("*", catchAll);

      expect(router.match("ADT", "A01").handler).toBe(specific);
      expect(router.match("ORU", "R01").handler).toBe(catchAll);
    });
  });

  describe("middleware", () => {
    it("collects global middleware for all messages", () => {
      const router = new Router();
      const mw: Middleware = async (_ctx, next) => next();
      router.addMiddleware(mw);

      const result = router.match("ADT", "A01");
      expect(result.middlewares).toContain(mw);
    });

    it("collects scoped middleware only when pattern matches", () => {
      const router = new Router();
      const adtMw: Middleware = async (_ctx, next) => next();
      const oruMw: Middleware = async (_ctx, next) => next();
      router.addMiddleware("ADT^*", adtMw);
      router.addMiddleware("ORU^*", oruMw);

      const adtResult = router.match("ADT", "A01");
      expect(adtResult.middlewares).toContain(adtMw);
      expect(adtResult.middlewares).not.toContain(oruMw);

      const oruResult = router.match("ORU", "R01");
      expect(oruResult.middlewares).toContain(oruMw);
      expect(oruResult.middlewares).not.toContain(adtMw);
    });

    it("combines global and scoped middleware", () => {
      const router = new Router();
      const globalMw: Middleware = async (_ctx, next) => next();
      const scopedMw: Middleware = async (_ctx, next) => next();
      router.addMiddleware(globalMw);
      router.addMiddleware("ADT^*", scopedMw);

      const result = router.match("ADT", "A01");
      expect(result.middlewares).toEqual([globalMw, scopedMw]);
    });

    it("preserves middleware registration order", () => {
      const router = new Router();
      const mw1: Middleware = async (_ctx, next) => next();
      const mw2: Middleware = async (_ctx, next) => next();
      const mw3: Middleware = async (_ctx, next) => next();
      router.addMiddleware(mw1);
      router.addMiddleware(mw2);
      router.addMiddleware(mw3);

      const result = router.match("ADT", "A01");
      expect(result.middlewares).toEqual([mw1, mw2, mw3]);
    });
  });
});
