import { describe, expect, it } from "vitest";

import type { SendArgs } from "../../src/commands/send";
import { resolveTarget } from "../../src/commands/send-target";

function args(overrides: Partial<SendArgs> = {}): SendArgs {
  return { help: false, json: false, ...overrides };
}

describe("resolveTarget", () => {
  it("returns the host and port the invocation names", () => {
    const result = resolveTarget(args({ host: "h.test", port: 1234 }));
    expect(result).toEqual({ host: "h.test", ok: true, port: 1234 });
  });

  it("sends to the MLLP port when the invocation names no port", () => {
    const result = resolveTarget(args({ host: "h.test" }));
    expect(result).toEqual({ host: "h.test", ok: true, port: 2575 });
  });

  it("states that the host is not defined when none is given", () => {
    const result = resolveTarget(args({ port: 1234 }));
    expect(result).toEqual({
      ok: false,
      reason:
        "No target host is defined. Pass `--host` with the system to send to.",
    });
  });

  it("states the same when neither is given", () => {
    expect(resolveTarget(args())).toEqual({
      ok: false,
      reason:
        "No target host is defined. Pass `--host` with the system to send to.",
    });
  });
});
