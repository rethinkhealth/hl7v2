import { describe, expect, it } from "vitest";

import type { SendArgs } from "../../src/commands/send";
import {
  deriveLocalTarget,
  resolveTarget,
} from "../../src/commands/send-target";

function args(overrides: Partial<SendArgs> = {}): SendArgs {
  return { help: false, json: false, local: false, ...overrides };
}

describe("deriveLocalTarget", () => {
  it("uses the config host and port when no flags override", () => {
    const result = deriveLocalTarget({ hostname: "10.0.0.5", port: 2575 }, {});
    expect(result).toEqual({ host: "10.0.0.5", ok: true, port: 2575 });
  });

  it("lets --host and --port override the config", () => {
    const result = deriveLocalTarget(
      { hostname: "10.0.0.5", port: 2575 },
      { host: "example.test", port: 9000 }
    );
    expect(result).toEqual({ host: "example.test", ok: true, port: 9000 });
  });

  it("maps a 0.0.0.0 bind address to IPv4 loopback", () => {
    const result = deriveLocalTarget({ hostname: "0.0.0.0", port: 2575 }, {});
    expect(result).toEqual({ host: "127.0.0.1", ok: true, port: 2575 });
  });

  it("maps an empty bind address to IPv4 loopback", () => {
    const result = deriveLocalTarget({ hostname: "", port: 2575 }, {});
    expect(result).toEqual({ host: "127.0.0.1", ok: true, port: 2575 });
  });

  it("maps a :: bind address to IPv6 loopback", () => {
    const result = deriveLocalTarget({ hostname: "::", port: 2575 }, {});
    expect(result).toEqual({ host: "::1", ok: true, port: 2575 });
  });

  it("rejects a TLS-enabled config (no TLS client yet)", () => {
    const result = deriveLocalTarget(
      { hostname: "127.0.0.1", port: 2575, tls: { cert: "x", key: "y" } },
      {}
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("TLS");
    }
  });

  it("rejects an ephemeral server port when nothing overrides it", () => {
    const result = deriveLocalTarget({ hostname: "127.0.0.1", port: 0 }, {});
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toBe(
        "The project's server port is `0`, so the operating system assigns it when the server starts. Pass `--port` with the port it is listening on."
      );
    }
  });

  it("accepts an explicit --port over a config port of 0", () => {
    const result = deriveLocalTarget(
      { hostname: "127.0.0.1", port: 0 },
      { port: 2575 }
    );
    expect(result).toEqual({ host: "127.0.0.1", ok: true, port: 2575 });
  });
});

describe("resolveTarget", () => {
  /** What a project without a config file runs on. */
  const DEFAULTS = { hostname: "127.0.0.1", port: 2575 };

  it("returns the explicit host and port without --local", () => {
    const result = resolveTarget(
      args({ host: "h.test", port: 1234 }),
      DEFAULTS
    );
    expect(result).toEqual({ host: "h.test", ok: true, port: 1234 });
  });

  it("defaults the port to the MLLP standard when only --host is given", () => {
    const result = resolveTarget(args({ host: "h.test" }), DEFAULTS);
    expect(result).toEqual({ host: "h.test", ok: true, port: 2575 });
  });

  it("errors when --host is missing, whether or not --port is given", () => {
    for (const given of [args({ port: 1234 }), args()]) {
      const result = resolveTarget(given, DEFAULTS);
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.reason).toBe(
          "No target host is defined. Pass `--host`, or `--local` to send to this project's server."
        );
      }
    }
  });

  it("targets the defaults under --local when the project has no config file", () => {
    const result = resolveTarget(args({ local: true }), DEFAULTS);
    expect(result).toEqual({ host: "127.0.0.1", ok: true, port: 2575 });
  });

  it("derives the target from the config under --local", () => {
    const result = resolveTarget(args({ local: true, port: 9000 }), {
      hostname: "0.0.0.0",
      port: 2575,
    });
    expect(result).toEqual({ host: "127.0.0.1", ok: true, port: 9000 });
  });
});
